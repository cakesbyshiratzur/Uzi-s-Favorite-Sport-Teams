import Section from "../ui/Section";
import ExternalLink from "../ui/ExternalLink";

const soccerHighlights = [
  {
    name: "F.C. Maccabi Tel Aviv",
    links: [
      {
        label: "YouTube Highlights",
        url: "https://www.youtube.com/@Ipflofficial/search?query=%D7%9E%D7%9B%D7%91%D7%99%20%20%D7%AA%D7%9C%20%D7%90%D7%91%D7%99%D7%91",
        icon: "youtube",
      },
      {
        label: "Google Search",
        url: "https://www.google.com/search?q=F.C.+Maccabi+Tel+Aviv+last+week+match+highlights",
        icon: "google",
      },
    ],
  },
  {
    name: "FC Barcelona",
    links: [
      {
        label: "Google Search",
        url: "https://www.google.com/search?q=fc+barcelona+last+week+match+highlights",
        icon: "google",
      },
    ],
  },
  {
    name: "Premier League England",
    links: [
      {
        label: "Google Search",
        url: "https://www.google.com/search?q=Premier+League+England+last+week+match+highlights",
        icon: "google",
      },
    ],
  },
  {
    name: "Spanish La Liga",
    links: [
      {
        label: "Google Search",
        url: "https://www.google.com/search?q=Spanish+La+Liga+last+week+match+highlights",
        icon: "google",
      },
    ],
  },
];

export default function SoccerHighlights() {
  return (
    <Section
      id="soccer-highlights"
      title="Soccer Teams Highlights"
      subtitle="Watch recent match highlights from your favorite teams"
      bgColor="sky"
      className="scroll-mt-20"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {soccerHighlights.map((team) => (
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
                  className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors text-sm font-medium"
                >
                  {link.icon === "youtube" ? (
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                  ) : (
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
                  )}
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

