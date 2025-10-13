import Section from "../ui/Section";
import ExternalLink from "../ui/ExternalLink";

const footballHighlights = [
  {
    name: "Dallas Cowboys",
    links: [
      {
        label: "Google Search",
        url: "https://www.google.com/search?q=Dallas+Cowboys+last+week+match+highlights",
        icon: "google",
      },
    ],
  },
];

export default function FootballHighlights() {
  return (
    <Section
      id="football-highlights"
      title="Football Teams Highlights"
      subtitle="Watch recent game highlights from your favorite NFL team"
      bgColor="white"
      className="scroll-mt-20"
    >
      <div className="max-w-md mx-auto">
        {footballHighlights.map((team) => (
          <div
            key={team.name}
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-all duration-300 border border-gray-200"
          >
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              {team.name}
            </h3>
            <div className="space-y-3">
              {team.links.map((link, index) => (
                <ExternalLink
                  key={index}
                  href={link.url}
                  className="flex items-center gap-2 px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium justify-center"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                  {link.label}
                </ExternalLink>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

