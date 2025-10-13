import Section from "../ui/Section";
import ExternalLink from "../ui/ExternalLink";

const basketballTeams = [
  { name: "B.C. Maccabi Tel Aviv", league: "EuroLeague" },
  { name: "Portland Trail Blazers", league: "NBA Western Conference" },
  { name: "Brooklyn Nets", league: "NBA Eastern Conference" },
  { name: "Dallas Mavericks", league: "NBA Western Conference" },
];

export default function BasketballTeams() {
  return (
    <Section
      id="basketball-teams"
      title="Favorite Basketball Teams"
      bgColor="yellow"
      className="scroll-mt-20"
    >
      <div className="flex justify-center mb-8">
        <ExternalLink
          href="https://www.google.com/search?q=nba+latest+news"
          className="inline-flex items-center gap-2 px-6 py-3 bg-orange-600 text-white rounded-lg font-semibold hover:bg-orange-700 transition-all shadow-md hover:shadow-lg"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
            />
          </svg>
          Refresh Online
        </ExternalLink>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {basketballTeams.map((team) => (
          <div
            key={team.name}
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-orange-400"
          >
            <div className="flex items-center justify-center mb-4">
              <svg
                className="w-16 h-16 text-orange-600"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.5 3.25c1.81.36 3.42 1.36 4.57 2.77l-1.32 1.32c-.25-.17-.53-.26-.83-.26-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5c.3 0 .58-.09.83-.26l1.32 1.32c-1.15 1.41-2.76 2.41-4.57 2.77V5.25zM5.92 7.08c1.15-1.41 2.76-2.41 4.57-2.77v9.6c-1.81-.36-3.42-1.36-4.57-2.77l1.32-1.32c.25.17.53.26.83.26.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5c-.3 0-.58.09-.83.26l-1.32-1.32zm.33 10.59c-1.41-1.15-2.41-2.76-2.77-4.57h9.6c-.36 1.81-1.36 3.42-2.77 4.57l-1.32-1.32c.17-.25.26-.53.26-.83 0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5c0 .3.09.58.26.83l-1.32 1.32zm12.5 0l-1.32-1.32c.17-.25.26-.53.26-.83 0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5c0 .3.09.58.26.83l-1.32 1.32c-1.41-1.15-2.41-2.76-2.77-4.57h9.6c-.36 1.81-1.36 3.42-2.77 4.57z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-gray-900 text-center mb-2">
              {team.name}
            </h3>
            <p className="text-sm text-gray-600 text-center">{team.league}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

