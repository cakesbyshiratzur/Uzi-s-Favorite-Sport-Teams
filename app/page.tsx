import Hero from "@/components/sections/Hero";
import SoccerTeams from "@/components/sections/SoccerTeams";
import FootballTeams from "@/components/sections/FootballTeams";
import BasketballTeams from "@/components/sections/BasketballTeams";
import SoccerSchedule from "@/components/sections/SoccerSchedule";
import FootballSchedule from "@/components/sections/FootballSchedule";
import BasketballSchedule from "@/components/sections/BasketballSchedule";
import SoccerHighlights from "@/components/sections/SoccerHighlights";
import FootballHighlights from "@/components/sections/FootballHighlights";
import BasketballHighlights from "@/components/sections/BasketballHighlights";

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

      {/* Schedules Sections */}
      <div id="schedules" className="scroll-mt-20">
        <SoccerSchedule />
        <FootballSchedule />
        <BasketballSchedule />
      </div>

      {/* Highlights Sections */}
      <div id="highlights" className="scroll-mt-20">
        <SoccerHighlights />
        <FootballHighlights />
        <BasketballHighlights />
      </div>
    </>
  );
}

