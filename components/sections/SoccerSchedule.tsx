import Section from "../ui/Section";
import TeamCard from "../ui/TeamCard";

const soccerSchedules = [
  {
    name: "F.C. Maccabi Tel Aviv",
    link: "https://www.thesportsdb.com/team/134315-maccabi-tel-aviv",
  },
  {
    name: "FC Barcelona",
    link: "https://www.thesportsdb.com/team/133739-barcelona",
  },
  {
    name: "Premier League England",
    link: "https://www.thesportsdb.com/league/4328-english-premier-league",
  },
  {
    name: "Spanish La Liga",
    link: "https://www.thesportsdb.com/league/4335-spanish-la-liga",
  },
];

export default function SoccerSchedule() {
  return (
    <Section
      id="soccer-schedule"
      title="Upcoming Soccer Schedule"
      subtitle="Track upcoming games for your favorite soccer teams and leagues"
      bgColor="white"
      className="scroll-mt-20"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {soccerSchedules.map((team) => (
          <TeamCard
            key={team.name}
            name={team.name}
            link={team.link}
            type="schedule"
          />
        ))}
      </div>
    </Section>
  );
}

