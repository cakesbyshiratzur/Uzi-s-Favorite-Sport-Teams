import Section from "../ui/Section";
import TeamCard from "../ui/TeamCard";

const basketballSchedules = [
  {
    name: "B.C. Maccabi Tel Aviv",
    link: "https://www.thesportsdb.com/team/136065-maccabi-tel-aviv-bc",
  },
  {
    name: "Portland Trail Blazers",
    link: "https://www.thesportsdb.com/team/134888-portland-trail-blazers",
  },
  {
    name: "Brooklyn Nets",
    link: "https://www.thesportsdb.com/team/134861-brooklyn-nets",
  },
  {
    name: "Dallas Mavericks",
    link: "https://www.thesportsdb.com/team/134875-dallas-mavericks",
  },
];

export default function BasketballSchedule() {
  return (
    <Section
      id="basketball-schedule"
      title="Upcoming Basketball Schedule"
      subtitle="Track upcoming games for your favorite basketball teams"
      bgColor="yellow"
      className="scroll-mt-20"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {basketballSchedules.map((team) => (
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

