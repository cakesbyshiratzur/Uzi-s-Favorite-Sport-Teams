import Section from "../ui/Section";
import ExternalLink from "../ui/ExternalLink";

const basketballHighlights = [
  {
    name: "B.C. Maccabi Tel Aviv",
    links: [
      {
        label: "Google Search",
        url: "https://www.google.com/search?q=B.C.+Maccabi+Tel+Aviv+last+week+match+highlights",
      },
    ],
  },
  {
    name: "Portland Trail Blazers",
    links: [
      {
        label: "Google Search",
        url: "https://www.google.com/search?q=Portland+Trail+Blazers+last+week+match+highlights",
      },
    ],
  },
  {
    name: "Brooklyn Nets",
    links: [
      {
        label: "Google Search",
        url: "https://www.google.com/search?q=Brooklyn+Nets+last+week+match+highlights",
      },
    ],
  },
  {
    name: "Dallas Mavericks",
    links: [
      {
        label: "Google Search",
        url: "https://www.google.com/search?q=dallas+mavericks+last+week+match+highlights",
      },
    ],
  },
];

export default function BasketballHighlights() {
  return (
    <Section
      id="basketball-highlights"
      title="Basketball Teams Highlights"
      subtitle="Watch recent game highlights from your favorite basketball teams"
      bgColor="yellow"
      className="scroll-mt-20"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {basketballHighlights.map((team) => (
          <div
            key={team.name}
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-all duration-300 border border-gray-200"
          >
            <h3 className="text-lg font-bold text-gray-900 mb-4">
              {team.name}
            </h3>
            <div className="space-y-3">
              {team.links.map((link, index) => (
                <ExternalLink
                  key={index}
                  href={link.url}
                  className="flex items-center gap-2 px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors text-sm font-medium"
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

