import Section from "../ui/Section";
import TeamCard from "../ui/TeamCard";

const soccerTeams = [
  {
    name: "F.C. Maccabi Tel Aviv",
    country: "Israel",
    logo: "/F.C. Maccabi Tel Aviv.jpeg",
    link: "https://www.espn.com/soccer/team/fixtures/_/id/524/maccabi-tel-aviv",
    standingsLink: "https://www.google.com/search?q=Maccabi+Tel+Aviv+standings",
    highlightsLink: [
      {
        label: "EuroLeague Highlights",
        url: "https://www.youtube.com/results?search_query=Maccabi+Tel+Aviv+highlights",
      },
      {
        label: "Israeli League Highlights",
        url: "https://www.bing.com/videos/riverview/relatedvideo?q=%d7%9e%d7%9b%d7%91%d7%99+%d7%aa%d7%9c+%d7%90%d7%91%d7%99%d7%91+%d7%9b%d7%93%d7%95%d7%a8%d7%92%d7%9c+%d7%aa%d7%a7%d7%a6%d7%99%d7%a8&qs=n&sp=-1&ghc=1&lq=0&pq=%d7%9e%d7%9b%d7%91%d7%99+%d7%aa%d7%9c+%d7%90%d7%91%d7%99%d7%91+%d7%9b%d7%93%d7%95%d7%a8%d7%92%d7%9c+%d7%aa%d7%a7%d7%a6%d7%99%d7%a8&sc=7-25&sk=&cvid=D7C5CDA0550A445AAF910AFA91130A72&ajaxnorecss=1&sid=1D1B0FC7FF2F69901D5B1954FE3868A7&jsoncbid=0&ajaxsydconv=1&ru=%2fsearch%3fq%3d%25D7%259E%25D7%259B%25D7%2591%25D7%2599%2520%25D7%25AA%25D7%259C%2520%25D7%2590%25D7%2591%25D7%2599%25D7%2591%2520%25D7%259B%25D7%2593%25D7%2595%25D7%25A8%25D7%2592%25D7%259C%2520%25D7%25AA%25D7%25A7%25D7%25A6%25D7%2599%25D7%25A8%26qs%3dn%26form%3dQBRE%26sp%3d-1%26ghc%3d1%26lq%3d0%26pq%3d%25D7%259E%25D7%259B%25D7%2591%25D7%2599%2520%25D7%25AA%25D7%259C%2520%25D7%2590%25D7%2591%25D7%2599%25D7%2591%2520%25D7%259B%25D7%2593%25D7%2595%25D7%25A8%25D7%2592%25D7%259C%2520%25D7%25AA%25D7%25A7%25D7%25A6%25D7%2599%25D7%25A8%26sc%3d7-25%26sk%3d%26cvid%3dD7C5CDA0550A445AAF910AFA91130A72%26ajaxnorecss%3d1%26sid%3d1D1B0FC7FF2F69901D5B1954FE3868A7%26format%3dsnrjson%26jsoncbid%3d0%26ajaxsydconv%3d1&mmscn=vwrc&mid=F26310773311EEE5DD8CF26310773311EEE5DD8C&FORM=WRVORC&ntb=1&msockid=971cffb0b3c111f0bbeba2bec217aae8",
      },
    ],
  },
  {
    name: "FC Barcelona",
    country: "Spain",
    logo: "/FC Barcelona.jpeg",
    link: "https://www.espn.com/soccer/team/fixtures/_/id/83/barcelona",
    standingsLink: "https://www.google.com/search?q=FC+Barcelona+La+Liga+standings",
    highlightsLink: "https://www.youtube.com/results?search_query=FC+Barcelona+highlights",
  },
  {
    name: "Premier League England",
    country: "England",
    logo: "/Premier League England.jpeg",
    link: "https://www.espn.com/soccer/schedule/_/league/eng.1",
    standingsLink: "https://www.google.com/search?q=Premier+League+standings",
    highlightsLink: "https://www.youtube.com/results?search_query=Premier+League+highlights",
  },
  {
    name: "Spanish La Liga",
    country: "Spain",
    logo: "/Spanish La Liga.jpg",
    link: "https://www.espn.com/soccer/schedule/_/league/esp.1",
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

