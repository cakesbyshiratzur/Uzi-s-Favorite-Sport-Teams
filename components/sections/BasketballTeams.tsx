import Section from "../ui/Section";
import TeamCard from "../ui/TeamCard";

const basketballTeams = [
  {
    name: "B.C. Maccabi Tel Aviv",
    league: "EuroLeague",
    link: "https://www.thesportsdb.com/team/136065-maccabi-tel-aviv-bc",
    standingsLink: "https://www.google.com/search?q=Maccabi+Tel+Aviv+EuroLeague+standings",
    highlightsLink: [
      {
        label: "EuroLeague Highlights",
        url: "https://www.youtube.com/results?search_query=Maccabi+Tel+Aviv+Basketball+highlights",
      },
      {
        label: "Israeli League Highlights",
        url: "https://basket.co.il/basket-tv.asp?vType=1",
      },
    ],
    image: "/B.C. Maccabi Tel Aviv.jpg",
  },
  {
    name: "Portland Trail Blazers",
    league: "NBA Western Conference",
    link: "https://www.thesportsdb.com/team/134888-portland-trail-blazers",
    standingsLink: "https://www.google.com/search?q=Portland+Trail+Blazers+NBA+standings",
    highlightsLink: "https://www.youtube.com/results?search_query=Portland+Trail+Blazers+highlights",
    image: "/Portland Trail Blazers.png",
  },
  {
    name: "Brooklyn Nets",
    league: "NBA Eastern Conference",
    link: "https://www.thesportsdb.com/team/134861-brooklyn-nets",
    standingsLink: "https://www.google.com/search?q=Brooklyn+Nets+NBA+standings",
    highlightsLink: "https://www.youtube.com/results?search_query=Brooklyn+Nets+highlights",
    image: "/Brooklyn Nets.jpg",
  },
  {
    name: "Dallas Mavericks",
    league: "NBA Western Conference",
    link: "https://www.thesportsdb.com/team/134875-dallas-mavericks",
    standingsLink: "https://www.google.com/search?q=Dallas+Mavericks+NBA+standings",
    highlightsLink: "https://www.youtube.com/results?search_query=Dallas+Mavericks+highlights",
    image: "/Dallas Mavericks.jpg",
  },
];

export default function BasketballTeams() {
  return (
    <Section
      id="basketball-teams"
      title="Favorite Basketball Teams"
      subtitle="Track schedules, standings, and highlights for your favorite basketball teams"
      bgColor="yellow"
      className="scroll-mt-20"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {basketballTeams.map((team) => (
          <TeamCard
            key={team.name}
            name={team.name}
            description={team.league}
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

