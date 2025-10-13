import Section from "../ui/Section";
import TeamCard from "../ui/TeamCard";

const footballSchedules = [
  {
    name: "Dallas Cowboys",
    link: "https://www.thesportsdb.com/team/134934-dallas-cowboys",
    description: "NFL Schedule",
  },
];

export default function FootballSchedule() {
  return (
    <Section
      id="football-schedule"
      title="Upcoming Football Schedule"
      subtitle="Track upcoming games for your favorite NFL team"
      bgColor="sky"
      className="scroll-mt-20"
    >
      <div className="max-w-md mx-auto">
        {footballSchedules.map((team) => (
          <TeamCard
            key={team.name}
            name={team.name}
            link={team.link}
            type="schedule"
            description={team.description}
          />
        ))}
      </div>
    </Section>
  );
}

