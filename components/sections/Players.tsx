"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Section from "../ui/Section";
import PlayerCard from "../ui/PlayerCard";

interface PlayerStats {
  name: string;
  ppg: string;
  rpg: string;
  apg: string;
}

interface Player {
  name: string;
  team: string;
  position: string;
  number: string;
  country: string;
  profileLink: string;
  highlightsLink: string;
  stats: {
    label: string;
    value: string;
  }[];
}

const initialPlayers: Player[] = [
  {
    name: "Deni Avdija",
    team: "Portland Trail Blazers",
    position: "Forward",
    number: "8",
    country: "Israel",
    profileLink: "https://www.nba.com/player/1630166/deni-avdija",
    highlightsLink: "https://www.nba.com/player/1630166/deni-avdija/videos",
    stats: [
      { label: "PPG", value: "25.3" },
      { label: "RPG", value: "7.0" },
      { label: "APG", value: "4.9" },
    ],
  },
  {
    name: "Ben Saraf",
    team: "Brooklyn Nets",
    position: "Guard",
    number: "77",
    country: "Israel",
    profileLink: "https://www.nba.com/player/1642879/ben-saraf",
    highlightsLink: "https://www.nba.com/player/1642879/ben-saraf/videos",
    stats: [
      { label: "PPG", value: "12.0" },
      { label: "RPG", value: "3.0" },
      { label: "APG", value: "4.0" },
    ],
  },
  {
    name: "Danny Wolf",
    team: "Brooklyn Nets",
    position: "Forward",
    number: "2",
    country: "USA",
    profileLink: "https://www.nba.com/player/1642874/danny-wolf",
    highlightsLink: "https://www.nba.com/player/1642874/danny-wolf/videos",
    stats: [
      { label: "PPG", value: "14.2" },
      { label: "RPG", value: "8.7" },
      { label: "APG", value: "1.5" },
    ],
  },
];

const REFRESH_INTERVALS = [
  { label: "1 minute", value: 60000 },
  { label: "5 minutes", value: 300000 },
  { label: "10 minutes", value: 600000 },
  { label: "30 minutes", value: 1800000 },
  { label: "1 hour", value: 3600000 },
];

export default function Players() {
  const [players, setPlayers] = useState<Player[]>(initialPlayers);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [autoRefresh, setAutoRefresh] = useState(false);
  const [refreshInterval, setRefreshInterval] = useState(300000); // 5 minutes default
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const fetchPlayerStats = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/players/stats");
      
      if (!response.ok) {
        throw new Error("Failed to fetch player stats");
      }

      const data = await response.json();
      
      if (data.players && Array.isArray(data.players)) {
        // Update players with new stats
        const updatedPlayers = initialPlayers.map((player) => {
          const statsData = data.players.find(
            (p: PlayerStats) => p.name === player.name
          );
          
          if (statsData) {
            return {
              ...player,
              stats: [
                { label: "PPG", value: statsData.ppg },
                { label: "RPG", value: statsData.rpg },
                { label: "APG", value: statsData.apg },
              ],
            };
          }
          
          return player;
        });
        
        setPlayers(updatedPlayers);
        setLastUpdated(new Date());
      }
    } catch (err) {
      console.error("Error fetching player stats:", err);
      setError(err instanceof Error ? err.message : "Failed to fetch stats");
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Set up auto-refresh interval
  useEffect(() => {
    if (autoRefresh) {
      // Fetch immediately when auto-refresh is enabled
      fetchPlayerStats();
      
      // Set up interval
      intervalRef.current = setInterval(() => {
        fetchPlayerStats();
      }, refreshInterval);

      return () => {
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
        }
      };
    } else {
      // Clear interval when auto-refresh is disabled
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    }
  }, [autoRefresh, refreshInterval, fetchPlayerStats]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  const handleManualRefresh = () => {
    fetchPlayerStats();
  };

  const formatLastUpdated = (date: Date | null) => {
    if (!date) return "Never";
    const now = new Date();
    const diff = now.getTime() - date.getTime();
    const minutes = Math.floor(diff / 60000);
    
    if (minutes < 1) return "Just now";
    if (minutes === 1) return "1 minute ago";
    if (minutes < 60) return `${minutes} minutes ago`;
    
    const hours = Math.floor(minutes / 60);
    if (hours === 1) return "1 hour ago";
    return `${hours} hours ago`;
  };

  return (
    <Section
      id="players"
      title="Favorite Players"
      subtitle="Follow stats, highlights, and updates for your favorite NBA players"
      bgColor="sky"
      className="scroll-mt-20"
    >
      {/* Auto-refresh controls */}
      <div className="mb-6 p-4 bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="flex items-center gap-4">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={autoRefresh}
                onChange={(e) => setAutoRefresh(e.target.checked)}
                className="w-5 h-5 text-sky-600 border-gray-300 rounded focus:ring-sky-500 focus:ring-2"
              />
              <span className="text-sm font-medium text-gray-700">
                Auto-refresh stats
              </span>
            </label>
            
            {autoRefresh && (
              <select
                value={refreshInterval}
                onChange={(e) => setRefreshInterval(Number(e.target.value))}
                className="px-3 py-1.5 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
              >
                {REFRESH_INTERVALS.map((interval) => (
                  <option key={interval.value} value={interval.value}>
                    {interval.label}
                  </option>
                ))}
              </select>
            )}
          </div>
          
          <div className="flex items-center gap-4">
            <button
              onClick={handleManualRefresh}
              disabled={isLoading}
              className="px-4 py-2 text-sm font-medium text-white bg-sky-600 hover:bg-sky-700 disabled:bg-gray-400 disabled:cursor-not-allowed rounded-md transition-colors flex items-center gap-2"
            >
              {isLoading ? (
                <>
                  <svg
                    className="animate-spin h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Refreshing...
                </>
              ) : (
                <>
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                    />
                  </svg>
                  Refresh Now
                </>
              )}
            </button>
            
            {lastUpdated && (
              <span className="text-xs text-gray-500">
                Last updated: {formatLastUpdated(lastUpdated)}
              </span>
            )}
          </div>
        </div>
        
        {error && (
          <div className="mt-3 p-2 bg-red-50 border border-red-200 rounded text-sm text-red-700">
            {error}
          </div>
        )}
      </div>

      {/* Players grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {players.map((player) => (
          <PlayerCard
            key={player.name}
            name={player.name}
            team={player.team}
            position={player.position}
            number={player.number}
            country={player.country}
            profileLink={player.profileLink}
            highlightsLink={player.highlightsLink}
            stats={player.stats}
          />
        ))}
      </div>
    </Section>
  );
}
