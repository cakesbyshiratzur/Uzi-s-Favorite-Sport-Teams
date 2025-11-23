// Team logo mapping utility
export const teamLogoMap: Record<string, string> = {
  // Basketball teams
  "Dallas Mavericks": "/Dallas Mavericks.jpg",
  "Brooklyn Nets": "/Brooklyn Nets.jpg",
  "Portland Trail Blazers": "/Portland Trail Blazers.png",
  "B.C. Maccabi Tel Aviv": "/B.C. Maccabi Tel Aviv.jpg",
  
  // Football teams
  "Dallas Cowboys": "/Dallas Cowboys.png",
  "Texas Longhorns": "/texas-longhorns.jpg",
  
  // Soccer teams
  "FC Barcelona": "/FC Barcelona.jpeg",
  "FC Infer Miami": "/FC Infer Miami.jpg",
  "F.C. Maccabi Tel Aviv": "/F.C. Maccabi Tel Aviv.jpeg",
  "Inter Miami": "/Inter-Miami-C.F..jpg",
  "Maccabi Tel Aviv": "/F.C. Maccabi Tel Aviv.jpeg",
  
  // Leagues
  "Premier League England": "/Premier League England.jpeg",
  "Premier League": "/Premier League England.jpeg",
  "Spanish La Liga": "/Spanish La Liga.jpg",
  "La Liga": "/Spanish La Liga.jpg",
  "UEFA Champions League": "/UEFA Champions League.jpg",
};

export function getTeamLogo(teamName: string): string | undefined {
  // Try exact match first
  if (teamLogoMap[teamName]) {
    return teamLogoMap[teamName];
  }
  
  // Try partial match for team names that might be in the matchup string
  for (const [key, value] of Object.entries(teamLogoMap)) {
    if (teamName.includes(key) || key.includes(teamName)) {
      return value;
    }
  }
  
  return undefined;
}

export function getSportColor(sport: string): string {
  const sportLower = sport.toLowerCase();
  if (sportLower.includes("soccer") || sportLower.includes("football")) {
    // Check if it's American football
    if (sportLower.includes("nfl") || sportLower.includes("ncaa") || sportLower === "football") {
      return "green"; // Football = green
    }
    return "blue"; // Soccer = blue
  }
  if (sportLower.includes("basketball")) {
    return "yellow"; // Basketball = yellow
  }
  return "gray"; // Default
}

