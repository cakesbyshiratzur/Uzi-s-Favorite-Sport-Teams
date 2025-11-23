import Section from "../ui/Section";
import TeamCard from "../ui/TeamCard";

const footballTeams = [
  { 
    name: "Dallas Cowboys", 
    conference: "NFC East",
    link: "https://www.espn.com/nfl/team/schedule/_/name/dal/dallas-cowboys",
    standingsLink: "https://www.google.com/search?q=Dallas+Cowboys+NFL+standings",
    highlightsLink: "https://www.google.com/search?q=Dallas+Cowboys+last+week+match+highlights",
    image: "/Dallas Cowboys.png",
  },
  { 
    name: "Texas Longhorns", 
    conference: "SEC Conference",
    link: "https://www.espn.com/college-football/team/schedule/_/id/251",
    standingsLink: "https://www.espn.com/college-football/standings/_/group/8/view/fbs",
    highlightsLink: "https://www.google.com/search?q=ut+austin+football&sca_esv=30cc307e8b6ba113&rlz=1CDGOYI_enUS1127US1127&hl=en-US&sxsrf=AE3TifOnd7qKfBXl-vdW-mKuZNpBtl5wHQ%3A1761427861337&ei=lUH9aOmpFJC1qtsPvcHJ-Q8&oq=&gs_lp=EhNtb2JpbGUtZ3dzLXdpei1zZXJwIgAqAggAMg0QIxiABBgnGIoFGOoCMg0QIxiABBgnGIoFGOoCMg0QIxiABBgnGIoFGOoCMg0QIxiABBgnGIoFGOoCMg0QIxiABBgnGIoFGOoCMg0QIxiABBgnGIoFGOoCMgcQIxgnGOoCMg0QIxiABBgnGIoFGOoCMg0QIxiABBgnGIoFGOoCMg0QIxiABBgnGIoFGOoCMg0QIxiABBgnGIoFGOoCMg0QIxiABBgnGIoFGOoCMg0QIxiABBgnGIoFGOoCMg0QIxiABBgnGIoFGOoCMg0QIxiABBgnGIoFGOoCMhAQIxjwBRiABBgnGIoFGOoCMg0QIxiABBgnGIoFGOoCMg0QIxiABBgnGIoFGOoCMg0QIxiABBgnGIoFGOoCMg0QIxiABBgnGIoFGOoCMgcQIxgnGOoCMg0QIxiABBgnGIoFGOoCMg0QIxiABBgnGIoFGOoCMg0QIxiABBgnGIoFGOoCMg0QIxiABBgnGIoFGOoCMgcQIxgnGOoCMgcQIxgnGOoCMgcQIxgnGOoCMg0QIxiABBgnGIoFGOoCMg0QIxiABBgnGIoFGOoCMhAQABgDGLQCGOoCGI8B2AEBMhAQABgDGLQCGOoCGI8B2AEBMhAQABgDGLQCGOoCGI8B2AEBMhAQABgDGLQCGOoCGI8B2AEBMhAQLhgDGLQCGOoCGI8B2AEBMhAQABgDGLQCGOoCGI8B2AEBMhAQABgDGLQCGOoCGI8B2AEBMhAQABgDGLQCGOoCGI8B2AEBMhAQABgDGLQCGOoCGI8B2AEBMhAQABgDGLQCGOoCGI8B2AEBMhAQABgDGLQCGOoCGI8B2AEBMhAQABgDGLQCGOoCGI8B2AEBMhAQLhgDGLQCGOoCGI8B2AEBMhAQABgDGLQCGOoCGI8B2AEBMhAQABgDGLQCGOoCGI8B2AEBSII5UABYAHAEeAGQAQCYAQCgAQCqAQC4AQHIAQD4AQGYAgSgAi-oAi3CAgoQABiwAxjWBBhHwgINEAAYgAQYsAMYQxiKBcICHBAuGIAEGLADGEMYxwEYyAMYigUYjgUYrwHYAQHCAhMQLhiABBiwAxhDGMgDGIoF2AEBmAMO8QW5CtXFPNBQ8YgGAZAGELoGBAgBGAiSBwE0oAcAsgcAuAcAwgcFMi0yLjLIByk&sclient=mobile-gws-wiz-serp#sie=t;/m/0118b5s5;6;/m/012hfxch;mt;fp;1;;;",
    image: "/texas-longhorns.jpg",
  },
  { 
    name: "NFL", 
    conference: "National Football League",
    link: "https://www.espn.com/nfl/schedule",
    standingsLink: "https://www.nfl.com/standings/",
    highlightsLink: "https://www.google.com/search?q=nfl+games+highlights+today&rlz=1C1RXQR_enUS1126US1126&oq=nfl+games+hi&gs_lcrp=EgZjaHJvbWUqDAgBEAAYFBiHAhiABDIRCAAQABgUGEYY_QEYhwIYgAQyDAgBEAAYFBiHAhiABDIGCAIQRRg5MgcIAxAAGIAEMgcIBBAAGIAEMgwIBRAAGAoYsQMYgAQyDwgGEAAYChiDARixAxiABDIPCAcQABgKGIMBGLEDGIAEMgkICBAAGAoYgAQyCQgJEAAYChiABNIBCTExNDY0ajBqN6gCCLACAfEFis0BU8C7bI0&sourceid=chrome&ie=UTF-8#sie=lg;/g/11lyp42zk1;6;/m/059yj;mt;fp;1;;;",
    image: "/NFL.png",
  },
];

export default function FootballTeams() {
  return (
    <Section
      id="football-teams"
      title="Favorite Football Teams"
      subtitle="Track schedules, standings, and highlights for your favorite NFL and college football teams"
      bgColor="white"
      className="scroll-mt-20"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
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

