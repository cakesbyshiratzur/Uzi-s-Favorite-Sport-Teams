import Section from "../ui/Section";
import TeamCard from "../ui/TeamCard";

const soccerTeams = [
  {
    name: "F.C. Maccabi Tel Aviv",
    country: "Israel",
    logo: "/F.C. Maccabi Tel Aviv.jpeg",
    link: "https://www.thesportsdb.com/team/134315-maccabi-tel-aviv",
    standingsLink: "https://www.google.com/search?q=Maccabi+Tel+Aviv+standings",
    highlightsLink: [
      {
        label: "EuroLeague Highlights",
        url: "https://www.youtube.com/results?search_query=Maccabi+Tel+Aviv+highlights",
      },
      {
        label: "Israeli League Highlights",
        url: "https://www.youtube.com/@Ipflofficial/search?query=%D7%9E%D7%9B%D7%91%D7%99%20%20%D7%AA%D7%9C%20%D7%90%D7%91%D7%99%D7%91",
      },
    ],
  },
  {
    name: "FC Barcelona",
    country: "Spain",
    logo: "/FC Barcelona.jpeg",
    link: "https://www.thesportsdb.com/team/133739-barcelona",
    standingsLink: "https://www.google.com/search?q=FC+Barcelona+La+Liga+standings",
    highlightsLink: "https://www.youtube.com/results?search_query=FC+Barcelona+highlights",
  },
  {
    name: "Premier League England",
    country: "England",
    logo: "/Premier League England.jpeg",
    link: "https://www.thesportsdb.com/league/4328-english-premier-league",
    standingsLink: "https://www.google.com/search?q=Premier+League+standings",
    highlightsLink: "https://www.youtube.com/results?search_query=Premier+League+highlights",
  },
  {
    name: "Spanish La Liga",
    country: "Spain",
    logo: "/Spanish La Liga.jpg",
    link: "https://www.thesportsdb.com/league/4335-spanish-la-liga",
    standingsLink: "https://www.google.com/search?q=La+Liga+standings",
    highlightsLink: "https://www.youtube.com/results?search_query=La+Liga+highlights",
  },
  {
    name: "UEFA Champions League",
    country: "Europe",
    logo: "/UEFA Champions League.jpg",
    link: "https://www.espn.com/soccer/scoreboard?league=uefa.champions",
    standingsLink: "https://www.google.com/search?q=upcoming%20man%20champions%20league%20schedule%20&source=sh/x/gs/m2/5#sie=lg;/g/11lcj4vhs3;2;/m/0c1q0;st;fp;1;;;",
    highlightsLink: "https://www.youtube.com/results?search_query=chamption+leage+highlights+videos&sp=EgQIBBAB",
  },
];

export default function SoccerTeams() {
  return (
    <Section
      id="soccer-teams"
      title="Favorite Soccer Teams"
      subtitle="Track schedules, standings, and highlights for your favorite soccer teams and leagues"
      bgColor="sky"
      className="scroll-mt-20"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {soccerTeams.map((team) => (
          <TeamCard
            key={team.name}
            name={team.name}
            link={team.link}
            standingsLink={team.standingsLink}
            highlightsLink={team.highlightsLink}
            image={team.logo}
            description={team.country}
            type="schedule"
          />
        ))}
      </div>
    </Section>
  );
}

