import { NextResponse } from 'next/server';

interface PlayerStats {
  name: string;
  ppg: string;
  rpg: string;
  apg: string;
}

interface PlayerConfig {
  name: string;
  playerId: string;
  fallbackStats: {
    ppg: string;
    rpg: string;
    apg: string;
  };
}

// Player configurations with fallback stats
const playersConfig: PlayerConfig[] = [
  {
    name: 'Deni Avdija',
    playerId: 'avdijde01',
    fallbackStats: {
      ppg: '25.3',
      rpg: '7.0',
      apg: '4.9',
    },
  },
  {
    name: 'Ben Saraf',
    playerId: 'sarafbe01',
    fallbackStats: {
      ppg: '12.0',
      rpg: '3.0',
      apg: '4.0',
    },
  },
  {
    name: 'Danny Wolf',
    playerId: 'wolfda01',
    fallbackStats: {
      ppg: '14.2',
      rpg: '8.7',
      apg: '1.5',
    },
  },
];

// Helper function to extract stats from Basketball Reference HTML
// Looks for the summary section which has current season stats
function extractStatsFromHTML(html: string, playerName: string): PlayerStats | null {
  try {
    // Method 1: Try to find the summary section (stats_pullout) with current season stats
    // Basketball Reference displays current season stats in a summary box
    const summaryMatch = html.match(/<div[^>]*class="stats_pullout"[^>]*>([\s\S]{0,5000})<\/div>/i);
    
    if (summaryMatch) {
      const summary = summaryMatch[1];
      
      // Look for the current season row (2025-26) in the summary
      // Stats are often in a format like: <p>25.3</p> near labels like "PTS"
      const ptsRegex = /(?:PTS|Points)[\s\S]{0,200}?(\d+\.?\d*)/i;
      const trbRegex = /(?:TRB|Rebounds?)[\s\S]{0,200}?(\d+\.?\d*)/i;
      const astRegex = /(?:AST|Assists?)[\s\S]{0,200}?(\d+\.?\d*)/i;
      
      const ptsMatch = summary.match(ptsRegex);
      const trbMatch = summary.match(trbRegex);
      const astMatch = summary.match(astRegex);
      
      if (ptsMatch && trbMatch && astMatch) {
        return {
          name: playerName,
          ppg: ptsMatch[1].trim(),
          rpg: trbMatch[1].trim(),
          apg: astMatch[1].trim(),
        };
      }
    }
    
    // Method 2: Try to find per_game table and get current season row (2025-26)
    const perGameTableMatch = html.match(/<table[^>]*id="per_game"[^>]*>([\s\S]{0,10000})<\/table>/i);
    if (perGameTableMatch) {
      const tableContent = perGameTableMatch[1];
      
      // Look for the 2025-26 season row
      const seasonRowMatch = tableContent.match(/<tr[^>]*>[\s\S]*?2025-26[\s\S]*?<\/tr>/i);
      if (seasonRowMatch) {
        const row = seasonRowMatch[0];
        const ptsMatch = row.match(/data-stat="pts"[^>]*>([\d.]+)</i);
        const trbMatch = row.match(/data-stat="trb"[^>]*>([\d.]+)</i);
        const astMatch = row.match(/data-stat="ast"[^>]*>([\d.]+)</i);
        
        if (ptsMatch && trbMatch && astMatch) {
          return {
            name: playerName,
            ppg: ptsMatch[1].trim(),
            rpg: trbMatch[1].trim(),
            apg: astMatch[1].trim(),
          };
        }
      }
      
      // Fallback: Get the first data row (most recent season)
      const rows = tableContent.match(/<tr[^>]*>[\s\S]*?<\/tr>/gi);
      if (rows && rows.length > 1) {
        // Find first row with data-stat attributes (skip header)
        for (const row of rows) {
          if (row.includes('data-stat="pts"') && row.includes('data-stat="trb"') && row.includes('data-stat="ast"')) {
            const ptsMatch = row.match(/data-stat="pts"[^>]*>([\d.]+)</i);
            const trbMatch = row.match(/data-stat="trb"[^>]*>([\d.]+)</i);
            const astMatch = row.match(/data-stat="ast"[^>]*>([\d.]+)</i);
            
            if (ptsMatch && trbMatch && astMatch) {
              return {
                name: playerName,
                ppg: ptsMatch[1].trim(),
                rpg: trbMatch[1].trim(),
                apg: astMatch[1].trim(),
              };
            }
          }
        }
      }
    }
    
    return null;
  } catch (error) {
    console.error(`Error extracting stats for ${playerName}:`, error);
    return null;
  }
}

async function fetchPlayerStats(player: PlayerConfig): Promise<PlayerStats> {
  const url = `https://www.basketball-reference.com/players/${player.playerId[0]}/${player.playerId}.html`;
  
  try {
    const response = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
      },
      next: { revalidate: 300 }, // Cache for 5 minutes
    });

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    const html = await response.text();
    const stats = extractStatsFromHTML(html, player.name);
    
    if (stats) {
      return stats;
    }
    
    // Return fallback if parsing fails
    return {
      name: player.name,
      ...player.fallbackStats,
    };
  } catch (error) {
    console.error(`Error fetching stats for ${player.name}:`, error);
    // Return fallback stats on error
    return {
      name: player.name,
      ...player.fallbackStats,
    };
  }
}

// GET endpoint to fetch all players' stats
export async function GET() {
  try {
    // Fetch all players' stats in parallel
    const statsPromises = playersConfig.map(player => fetchPlayerStats(player));
    const stats = await Promise.all(statsPromises);
    
    return NextResponse.json({ players: stats });
  } catch (error) {
    console.error('Error in stats API:', error);
    
    // Return fallback stats on error
    const fallbackStats = playersConfig.map(player => ({
      name: player.name,
      ...player.fallbackStats,
    }));
    
    return NextResponse.json({ players: fallbackStats });
  }
}
