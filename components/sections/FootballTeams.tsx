import Section from "../ui/Section";
import ExternalLink from "../ui/ExternalLink";

const footballTeams = [
  { name: "Dallas Cowboys", conference: "NFC East" },
];

export default function FootballTeams() {
  return (
    <Section
      id="football-teams"
      title="Favorite Football Teams"
      bgColor="white"
      className="scroll-mt-20"
    >
      <div className="flex justify-center mb-8">
        <ExternalLink
          href="https://www.google.com/search?q=nfl+latest+news"
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

      <div className="max-w-md mx-auto">
        {footballTeams.map((team) => (
          <div
            key={team.name}
            className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg shadow-lg p-8 hover:shadow-2xl transition-all duration-300 border-2 border-yellow-400"
          >
            <div className="flex items-center justify-center mb-4">
              <svg
                className="w-20 h-20 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M4 4v7h3l-2 4h2l2-4h2l-2 4h2l2-4h2l-2 4h2l2-4h3V4H4zm17 0v7h-3l2 4h-2l-2-4h-2l2 4h-2l-2-4h-2l2 4h-2l-2-4H3V4h18zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
              </svg>
            </div>
            <h3 className="text-3xl font-bold text-white text-center mb-2">
              {team.name}
            </h3>
            <p className="text-lg text-yellow-200 text-center font-semibold">
              {team.conference}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}

