type ESPNTeamConfig = {
  type: "espn";
  sportPath: string;
  teamIdentifier: string;
  displayName: string;
  abbreviation?: string;
};

type SportsDBTeamConfig = {
  type: "thesportsdb";
  teamId: string;
  displayName: string;
  leagueId?: string; // Optional league ID for league-based fetching
};

type TeamScheduleConfig = {
  teamName: string;
  sport: string;
  competition: string;
  scheduleUrl: string;
  source: ESPNTeamConfig | SportsDBTeamConfig;
};

export type CalendarEvent = {
  teamName: string;
  sport: string;
  competition: string;
  matchup: string;
  location?: string;
  network?: string;
  startTime: Date;
  scheduleUrl: string;
};

const teamConfigs: TeamScheduleConfig[] = [
  {
    teamName: "Dallas Mavericks",
    sport: "Basketball",
    competition: "NBA",
    scheduleUrl:
      "https://www.espn.com/nba/team/schedule/_/name/dal/dallas-mavericks",
    source: {
      type: "espn",
      sportPath: "basketball/nba",
      teamIdentifier: "dal",
      displayName: "Dallas Mavericks",
      abbreviation: "DAL",
    },
  },
  {
    teamName: "Brooklyn Nets",
    sport: "Basketball",
    competition: "NBA",
    scheduleUrl: "https://www.espn.com/nba/team/schedule/_/name/bkn",
    source: {
      type: "espn",
      sportPath: "basketball/nba",
      teamIdentifier: "bkn",
      displayName: "Brooklyn Nets",
      abbreviation: "BKN",
    },
  },
  {
    teamName: "Portland Trail Blazers",
    sport: "Basketball",
    competition: "NBA",
    scheduleUrl:
      "https://www.espn.com/nba/team/schedule/_/name/por/portland-trail-blazers",
    source: {
      type: "espn",
      sportPath: "basketball/nba",
      teamIdentifier: "por",
      displayName: "Portland Trail Blazers",
      abbreviation: "POR",
    },
  },
  {
    teamName: "Dallas Cowboys",
    sport: "Football",
    competition: "NFL",
    scheduleUrl:
      "https://www.espn.com/nfl/team/schedule/_/name/dal/dallas-cowboys",
    source: {
      type: "espn",
      sportPath: "football/nfl",
      teamIdentifier: "dal",
      displayName: "Dallas Cowboys",
      abbreviation: "DAL",
    },
  },
  {
    teamName: "Texas Longhorns",
    sport: "Football",
    competition: "NCAA",
    scheduleUrl:
      "https://www.espn.com/college-football/team/schedule/_/id/251",
    source: {
      type: "espn",
      sportPath: "football/college-football",
      teamIdentifier: "251",
      displayName: "Texas Longhorns",
      abbreviation: "TEX",
    },
  },
  {
    teamName: "FC Barcelona",
    sport: "Soccer",
    competition: "La Liga",
    scheduleUrl:
      "https://www.espn.com/soccer/team/fixtures/_/id/83/barcelona",
    source: {
      type: "espn",
      sportPath: "soccer/esp.1",
      teamIdentifier: "83",
      displayName: "Barcelona",
      abbreviation: "BAR",
    },
  },
  {
    teamName: "FC Infer Miami",
    sport: "Soccer",
    competition: "MLS",
    scheduleUrl:
      "https://www.thesportsdb.com/team/137699-Inter-Miami",
    source: {
      type: "thesportsdb",
      teamId: "137699",
      displayName: "Inter Miami",
    },
  },
  {
    teamName: "B.C. Maccabi Tel Aviv",
    sport: "Basketball",
    competition: "EuroLeague",
    scheduleUrl:
      "https://www.365scores.com/en-us/basketball/team/maccabi-tel-aviv-631/matches#fixtures",
    source: {
      type: "thesportsdb",
      teamId: "136065",
      displayName: "Maccabi Tel Aviv BC",
      leagueId: "4546", // EuroLeague Basketball league ID
    },
  },
];

const ESPN_API_BASE = "https://site.api.espn.com/apis/site/v2/sports";
const THESPORTSDB_API_BASE =
  "https://www.thesportsdb.com/api/v1/json/3/eventsnext.php";
const THESPORTSDB_LEAGUE_API_BASE =
  "https://www.thesportsdb.com/api/v1/json/3/eventsseason.php";

function extractEspnBroadcasts(competition: any): string | undefined {
  const broadcasts: any[] = competition?.broadcasts ?? [];
  if (!broadcasts.length) return undefined;

  const uniqueNames = new Set<string>();
  broadcasts.forEach((broadcast) => {
    const name =
      broadcast.medium?.shortName ||
      broadcast.shortName ||
      broadcast.names?.[0] ||
      broadcast.market ||
      broadcast.channel;
    if (name) uniqueNames.add(name);
  });

  if (!uniqueNames.size) return undefined;
  return Array.from(uniqueNames).join(" / ");
}

function extractEspnLocation(competition: any): string | undefined {
  const venueName = competition?.venue?.fullName;
  const city = competition?.venue?.address?.city;
  const state = competition?.venue?.address?.state;

  if (venueName && city && state) {
    return `${venueName}, ${city}, ${state}`;
  }

  if (venueName && city) {
    return `${venueName}, ${city}`;
  }

  return venueName ?? competition?.venue?.address?.country;
}

function buildMatchup(
  teamDisplayName: string,
  competitors: any[]
): string | undefined {
  if (!competitors?.length) return undefined;

  const thisTeam = competitors.find(
    (competitor) => competitor.team?.displayName === teamDisplayName
  );

  const opponent = competitors.find(
    (competitor) => competitor !== thisTeam
  );

  const opponentName =
    opponent?.team?.displayName || opponent?.team?.shortDisplayName;

  if (!thisTeam && opponentName) {
    return opponent?.homeAway === "home"
      ? `${opponentName} at ${teamDisplayName}`
      : `${teamDisplayName} at ${opponentName}`;
  }

  if (!thisTeam) {
    return competitors.map((c) => c.team?.displayName).join(" vs ");
  }

  if (!opponentName) {
    return competitors.map((c) => c.team?.displayName).join(" vs ");
  }

  return thisTeam.homeAway === "home"
    ? `${teamDisplayName} vs. ${opponentName}`
    : `${teamDisplayName} at ${opponentName}`;
}

async function fetchFromEspn(
  config: TeamScheduleConfig & { source: ESPNTeamConfig }
): Promise<CalendarEvent[]> {
  const url = `${ESPN_API_BASE}/${config.source.sportPath}/teams/${config.source.teamIdentifier}/schedule`;

  try {
    const res = await fetch(url, {
      headers: { "User-Agent": "Mozilla/5.0" },
      cache: "no-store",
    });

    if (!res.ok) {
      console.error(
        `Failed to fetch ESPN schedule for ${config.teamName}: ${res.status} - ${url}`
      );
      return [];
    }

    const data = await res.json();
    const events: any[] = data.events ?? [];
    const now = new Date();

    return events
      .map((event) => {
        const competition = event.competitions?.[0];
        if (!competition) return null;

        const startTime = event.date ? new Date(event.date) : undefined;
        if (!startTime || Number.isNaN(startTime.getTime())) return null;

        // Only include upcoming events
        if (startTime.getTime() < now.getTime()) return null;

        const matchup = buildMatchup(
          config.source.displayName,
          competition.competitors
        );

        return {
          teamName: config.teamName,
          sport: config.sport,
          competition: config.competition,
          matchup:
            matchup ??
            `${config.teamName} vs. ${competition.competitors
              ?.map((c: any) => c.team?.displayName)
              .join(" & ")}`,
          location: extractEspnLocation(competition),
          network: extractEspnBroadcasts(competition),
          startTime,
          scheduleUrl: config.scheduleUrl,
        } satisfies CalendarEvent;
      })
      .filter(Boolean) as CalendarEvent[];
  } catch (error) {
    console.error(
      `Error fetching ESPN schedule for ${config.teamName}:`,
      error
    );
    return [];
  }
}

async function fetchFromSportsDB(
  config: TeamScheduleConfig & { source: SportsDBTeamConfig }
): Promise<CalendarEvent[]> {
  // Use league-based endpoint if leagueId is provided (for EuroLeague basketball)
  // Otherwise use team-based endpoint
  let url: string;
  if (config.source.leagueId) {
    const currentYear = new Date().getFullYear();
    url = `${THESPORTSDB_LEAGUE_API_BASE}?id=${config.source.leagueId}&s=${currentYear}`;
  } else {
    url = `${THESPORTSDB_API_BASE}?id=${config.source.teamId}`;
  }

  try {
    const res = await fetch(url, {
      headers: { "User-Agent": "Mozilla/5.0" },
      cache: "no-store",
    });

    if (!res.ok) {
      console.error(
        `Failed to fetch TheSportsDB schedule for ${config.teamName}: ${res.status} - ${url}`
      );
      return [];
    }

    const data = await res.json();
    const events: any[] = data.events ?? data?.results ?? [];
    const now = new Date();
    const teamDisplayName = config.source.displayName;

    return events
      .map((event) => {
        // Filter by sport type to ensure we only get the correct sport
        const eventSport = event.strSport?.toLowerCase();
        const configSport = config.sport.toLowerCase();
        if (eventSport && eventSport !== configSport) {
          return null;
        }

        // If using league-based endpoint, filter for events involving this team
        if (config.source.leagueId) {
          const homeTeam = event.strHomeTeam || "";
          const awayTeam = event.strAwayTeam || "";
          const isHomeMatch = homeTeam.toLowerCase().includes(teamDisplayName.toLowerCase());
          const isAwayMatch = awayTeam.toLowerCase().includes(teamDisplayName.toLowerCase());
          
          if (!isHomeMatch && !isAwayMatch) {
            return null;
          }
        }

        const date = event.dateEvent || event.strTimestamp || event.dateEventLocal;
        const time = event.strTime || event.strTimeLocal;
        
        let startTime: Date | undefined;
        if (date) {
          // Handle different date formats from TheSportsDB
          // dateEvent is typically "YYYY-MM-DD"
          // strTime is typically "HH:mm:ss" or "HH:mm"
          if (time) {
            // Remove seconds if present (HH:mm:ss -> HH:mm)
            const timeWithoutSeconds = time.split(':').slice(0, 2).join(':');
            startTime = new Date(`${date}T${timeWithoutSeconds}`);
          } else {
            startTime = new Date(date);
          }
        }
        
        if (!startTime || Number.isNaN(startTime.getTime())) return null;

        // Only include upcoming events
        if (startTime.getTime() < now.getTime()) return null;

        // Build matchup from event data
        let matchup = event.strEvent;
        if (!matchup) {
          const homeTeam = event.strHomeTeam || "";
          const awayTeam = event.strAwayTeam || "";
          if (homeTeam && awayTeam) {
            matchup = `${homeTeam} vs. ${awayTeam}`;
          } else {
            matchup = `${config.source.displayName} vs. ${awayTeam || homeTeam || "TBD"}`;
          }
        }

        return {
          teamName: config.teamName,
          sport: config.sport,
          competition: event.strLeague || config.competition,
          matchup,
          location: event.strVenue ?? event.strStadium ?? event.strLocation,
          network: event.strTVStation || event.strChannel,
          startTime,
          scheduleUrl: config.scheduleUrl,
        } satisfies CalendarEvent;
      })
      .filter(Boolean) as CalendarEvent[];
  } catch (error) {
    console.error(
      `Error fetching TheSportsDB schedule for ${config.teamName}:`,
      error
    );
    return [];
  }
}

export async function getAllUpcomingEvents(): Promise<CalendarEvent[]> {
  const events = await Promise.all(
    teamConfigs.map((config) => {
      if (config.source.type === "espn") {
        return fetchFromEspn(
          config as TeamScheduleConfig & { source: ESPNTeamConfig }
        );
      }

      return fetchFromSportsDB(
        config as TeamScheduleConfig & { source: SportsDBTeamConfig }
      );
    })
  );

  return events.flat();
}

export function getEventsForWeek(
  events: CalendarEvent[],
  startOfWeek: Date,
  endOfWeek: Date
): CalendarEvent[] {
  return events.filter((event) => {
    const time = event.startTime.getTime();
    return time >= startOfWeek.getTime() && time <= endOfWeek.getTime();
  });
}


