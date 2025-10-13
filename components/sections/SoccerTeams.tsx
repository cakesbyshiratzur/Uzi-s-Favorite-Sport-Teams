import Section from "../ui/Section";
import ExternalLink from "../ui/ExternalLink";

const soccerTeams = [
  { name: "F.C. Maccabi Tel Aviv", country: "Israel" },
  { name: "FC Barcelona", country: "Spain" },
  { name: "Premier League England", country: "England" },
  { name: "Spanish La Liga", country: "Spain" },
];

export default function SoccerTeams() {
  return (
    <Section
      id="soccer-teams"
      title="Favorite Soccer Teams"
      bgColor="sky"
      className="scroll-mt-20"
    >
      <div className="flex justify-center mb-8">
        <ExternalLink
          href="https://www.google.com/search?q=soccer+latest+news"
          className="inline-flex items-center gap-2 px-6 py-3 bg-sky-600 text-white rounded-lg font-semibold hover:bg-sky-700 transition-all shadow-md hover:shadow-lg"
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
        {soccerTeams.map((team) => (
          <div
            key={team.name}
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-sky-400"
          >
            <div className="flex items-center justify-center mb-4">
              <svg
                className="w-16 h-16 text-sky-600"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 3.3l1.35-.95c1.82.56 3.37 1.76 4.38 3.37l-.39 1.34-1.35.46L15 6.7V5.3zm-3.35-.95L11 5.3v1.4L9.01 9.52l-1.35-.46-.39-1.34c1.01-1.61 2.56-2.81 4.38-3.37zM7.5 17.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm1.5-5L7.5 11 9 9.5 11.5 12 9 14.5zm6.5 5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm-1-5L12 9.5 14.5 7l1.5 1.5L14.5 11 12.5 12.5z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 text-center mb-2">
              {team.name}
            </h3>
            <p className="text-sm text-gray-600 text-center">{team.country}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

