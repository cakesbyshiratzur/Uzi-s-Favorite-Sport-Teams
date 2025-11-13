import Section from "../ui/Section";
import TeamCard from "../ui/TeamCard";

const soccerTeams = [
  {
    name: "F.C. Maccabi Tel Aviv",
    country: "Israel",
    logo: "/F.C. Maccabi Tel Aviv.jpeg",
    link: "https://www.foxsports.com/soccer/maccabi-tel-aviv-team-schedule",
    standingsLink: "https://www.google.com/search?q=Maccabi+Tel+Aviv+standings",
    highlightsLink: [
      {
        label: "EuroLeague Highlights",
        url: "https://www.youtube.com/results?search_query=Maccabi+Tel+Aviv+highlights",
      },
      {
        label: "Israeli League Highlights",
        url: "https://www.google.com/search?q=%D7%9E%D7%9B%D7%91%D7%99+%D7%AA%D7%9C+%D7%90%D7%91%D7%99%D7%91+%D7%9B%D7%93%D7%95%D7%A8%D7%92%D7%9C+%D7%AA%D7%A7%D7%A6%D7%99%D7%A8%D7%99%D7%9D+%D7%9C%D7%99%D7%92%D7%AA+%D7%94%D7%A2%D7%9C+&sca_esv=4f246cde2838cb38&sxsrf=AE3TifNhWL9rqXh12PAaq3qG8LUC8BET_A%3A1762748588456&source=hp&ei=rGgRac6nGbbewN4P3c_Y0A0&iflsig=AOw8s4IAAAAAaRF2vIVE6C4MvMZ8XTZS7HL_cksngsV7&ved=0ahUKEwjOrcOb3uaQAxU2L9AFHd0nFtoQ4dUDCBo&uact=5&oq=%D7%9E%D7%9B%D7%91%D7%99+%D7%AA%D7%9C+%D7%90%D7%91%D7%99%D7%91+%D7%9B%D7%93%D7%95%D7%A8%D7%92%D7%9C+%D7%AA%D7%A7%D7%A6%D7%99%D7%A8%D7%99%D7%9D+%D7%9C%D7%99%D7%92%D7%AA+%D7%94%D7%A2%D7%9C+&gs_lp=Egdnd3Mtd2l6IkPXnteb15HXmSDXqtecINeQ15HXmdeRINeb15PXldeo15LXnCDXqten16bXmdeo15nXnSDXnNeZ15LXqiDXlNei15wgMgUQIRirAkiNggJQtRxYlfoBcAF4AJABAJgBrwSgAaIrqgEMMy4yOC4zLjIuMC4xuAEDyAEA-AEBmAImoALpL6gCCsICBxAjGCcY6gLCAg0QLhjRAxjHARgnGOoCwgIKECMY8AUYJxjqAsICDBAjGIAEGBMYJxiKBcICChAjGIAEGCcYigXCAgsQABiABBixAxiDAcICDhAuGIAEGLEDGIMBGNQCwgIEEC4YA8ICDhAuGIAEGLEDGIMBGIoFwgILEC4YgAQYsQMYgwHCAgQQABgDwgIFEAAYgATCAggQLhiABBjLAcICCBAAGIAEGMsBwgIGEAAYFhgewgIIEAAYFhgKGB7CAggQABiABBiiBMICBRAAGO8FwgIFECEYoAGYAzXxBfEl8oHjrHlwkgcKMS4zMS4zLjIuMaAH0uwCsgcKMC4zMS4zLjIuMbgHtC_CBwwwLjUuNC4yNi4yLjHIB78D&sclient=gws-wiz",
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
    name: "FC Infer Miami",
    country: "MLS",
    logo: "/FC Infer Miami.jpg",
    link: "https://www.espn.com/soccer/team/fixtures/_/id/20232/usa.inter_miami",
    standingsLink: "https://www.google.com/search?q=inter+miami+cf+standings",
    highlightsLink: "https://www.youtube.com/results?search_query=inter+miami+soccer+highlights ",
  },
  {
    name: "UEFA Champions League",
    country: "Europe",
    logo: "/UEFA Champions League.jpg",
    link: "https://www.espn.com/soccer/schedule/_/league/uefa.champions",
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

