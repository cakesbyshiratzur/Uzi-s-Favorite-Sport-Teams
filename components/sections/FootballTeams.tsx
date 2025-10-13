import Section from "../ui/Section";
import TeamCard from "../ui/TeamCard";

const footballTeams = [
  { 
    name: "Dallas Cowboys", 
    conference: "NFC East",
    link: "https://www.thesportsdb.com/team/134934-dallas-cowboys",
    standingsLink: "https://www.google.com/search?q=Dallas+Cowboys+NFL+standings",
    highlightsLink: "https://www.google.com/search?q=Dallas+Cowboys+last+week+match+highlights",
    image: "/Dallas Cowboys.jpeg",
  },
];

export default function FootballTeams() {
  return (
    <Section
      id="football-teams"
      title="Favorite Football Teams"
      subtitle="Track schedules, standings, and highlights for your favorite NFL teams"
      bgColor="white"
      className="scroll-mt-20"
    >
      <div className="max-w-md mx-auto">
        {footballTeams.map((team) => (
          <TeamCard
            key={team.name}
            name={team.name}
            description={team.conference}
            link={team.link}
            standingsLink={team.standingsLink}
            highlightsLink={team.highlightsLink}
            image={team.image}
            type="schedule"
          />
        ))}
      </div>
    </Section>
  );
}

