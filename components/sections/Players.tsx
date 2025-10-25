import Section from "../ui/Section";
import PlayerCard from "../ui/PlayerCard";

const players = [
  {
    name: "Deni Avdija",
    team: "Portland Trail Blazers",
    position: "Forward",
    number: "8",
    country: "Israel",
    profileLink: "https://www.nba.com/player/1630166/deni-avdija",
    highlightsLink: "https://www.nba.com/player/1630166/deni-avdija/videos",
    stats: [
      { label: "PPG", value: "16.9" },
      { label: "RPG", value: "7.3" },
      { label: "APG", value: "3.9" },
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

export default function Players() {
  return (
    <Section
      id="players"
      title="Favorite Players"
      subtitle="Follow stats, highlights, and updates for your favorite NBA players"
      bgColor="sky"
      className="scroll-mt-20"
    >
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

