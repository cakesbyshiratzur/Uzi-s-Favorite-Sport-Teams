import Hero from "@/components/sections/Hero";
import SoccerTeams from "@/components/sections/SoccerTeams";
import FootballTeams from "@/components/sections/FootballTeams";
import BasketballTeams from "@/components/sections/BasketballTeams";
import Players from "@/components/sections/Players";
import ConnectWithMe from "@/components/sections/ConnectWithMe";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* Favorite Teams Sections */}
      <div id="favorite-teams" className="scroll-mt-20">
        <SoccerTeams />
        <FootballTeams />
        <BasketballTeams />
      </div>

      {/* Favorite Players Section */}
      <Players />

      {/* Connect With Me Section */}
      <ConnectWithMe />
    </>
  );
}

