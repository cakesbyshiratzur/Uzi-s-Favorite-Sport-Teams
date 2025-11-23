// Alarm management utility

export interface GameAlarm {
  gameId: string;
  matchup: string;
  startTime: string; // ISO string
  alarmTime: string; // ISO string (15 minutes before)
  sport: string;
  network?: string;
}

const STORAGE_KEY = "game_alarms";

export function getAllAlarms(): GameAlarm[] {
  if (typeof window === "undefined") return [];
  
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return [];
    return JSON.parse(stored);
  } catch {
    return [];
  }
}

export function addAlarm(game: {
  gameId: string;
  matchup: string;
  startTime: Date;
  sport: string;
  network?: string;
}): void {
  if (typeof window === "undefined") return;
  
  const alarms = getAllAlarms();
  
  // Check if alarm already exists
  if (alarms.some((a) => a.gameId === game.gameId)) {
    return;
  }
  
  // Calculate alarm time (15 minutes before game)
  const alarmTime = new Date(game.startTime);
  alarmTime.setMinutes(alarmTime.getMinutes() - 15);
  
  const newAlarm: GameAlarm = {
    gameId: game.gameId,
    matchup: game.matchup,
    startTime: game.startTime.toISOString(),
    alarmTime: alarmTime.toISOString(),
    sport: game.sport,
    network: game.network,
  };
  
  alarms.push(newAlarm);
  
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(alarms));
    
    // Set up browser notification if permission granted
    if ("Notification" in window && Notification.permission === "granted") {
      scheduleNotification(newAlarm);
    }
  } catch (error) {
    console.error("Failed to save alarm:", error);
  }
}

export function removeAlarm(gameId: string): void {
  if (typeof window === "undefined") return;
  
  const alarms = getAllAlarms().filter((a) => a.gameId !== gameId);
  
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(alarms));
  } catch (error) {
    console.error("Failed to remove alarm:", error);
  }
}

export function hasAlarm(gameId: string): boolean {
  const alarms = getAllAlarms();
  return alarms.some((a) => a.gameId === gameId);
}

function scheduleNotification(alarm: GameAlarm): void {
  const alarmTime = new Date(alarm.alarmTime).getTime();
  const now = Date.now();
  const delay = alarmTime - now;
  
  if (delay > 0 && delay < 24 * 60 * 60 * 1000) {
    // Only schedule if within 24 hours
    setTimeout(() => {
      if ("Notification" in window) {
        new Notification(`Game Starting Soon!`, {
          body: `${alarm.matchup} starts in 15 minutes${alarm.network ? ` on ${alarm.network}` : ""}`,
          icon: "/logo.jpg",
        });
      }
    }, delay);
  }
}

export async function requestNotificationPermission(): Promise<boolean> {
  if (typeof window === "undefined" || !("Notification" in window)) {
    return false;
  }
  
  if (Notification.permission === "granted") {
    return true;
  }
  
  if (Notification.permission === "denied") {
    return false;
  }
  
  const permission = await Notification.requestPermission();
  return permission === "granted";
}

// Check and trigger alarms that are due
export function checkAlarms(): void {
  if (typeof window === "undefined") return;
  
  const alarms = getAllAlarms();
  const now = Date.now();
  
  alarms.forEach((alarm) => {
    const alarmTime = new Date(alarm.alarmTime).getTime();
    const startTime = new Date(alarm.startTime).getTime();
    
    // Remove expired alarms (after game start)
    if (startTime < now) {
      removeAlarm(alarm.gameId);
      return;
    }
    
    // Trigger alarm if it's time (within 1 minute window)
    if (Math.abs(alarmTime - now) < 60 * 1000) {
      if ("Notification" in window && Notification.permission === "granted") {
        new Notification(`Game Starting Soon!`, {
          body: `${alarm.matchup} starts in 15 minutes${alarm.network ? ` on ${alarm.network}` : ""}`,
          icon: "/logo.jpg",
        });
      }
    }
  });
}

