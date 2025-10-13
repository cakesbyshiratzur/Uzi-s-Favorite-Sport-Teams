import ExternalLink from "./ExternalLink";
import Image from "next/image";

interface HighlightLink {
  label: string;
  url: string;
}

interface TeamCardProps {
  name: string;
  link: string;
  standingsLink?: string;
  highlightsLink?: string | HighlightLink[];
  image?: string;
  type?: "schedule" | "highlight";
  description?: string;
}

export default function TeamCard({
  name,
  link,
  standingsLink,
  highlightsLink,
  image,
  type = "schedule",
  description,
}: TeamCardProps) {
  const typeLabel = type === "schedule" ? "View Schedule" : "Watch Highlights";
  const icon =
    type === "schedule" ? (
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
          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
      </svg>
    ) : (
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
          d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    );

  const standingsIcon = (
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
        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
      />
    </svg>
  );

  const highlightsIcon = (
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
        d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200 hover:border-sky-400">
      <div className="p-6">
        {image && (
          <div className="flex justify-center mb-4">
            <div className="relative w-16 h-16">
              <Image
                src={image}
                alt={`${name} logo`}
                fill
                className="object-contain"
                sizes="64px"
              />
            </div>
          </div>
        )}
        <h3 className="text-xl font-bold text-gray-900 mb-2">
          {name}
        </h3>
        {description && (
          <p className="text-sm text-gray-600 mb-3">{description}</p>
        )}
        <div className="flex flex-col gap-2">
          <ExternalLink
            href={link}
            className="flex items-center justify-center gap-2 text-sky-600 hover:text-sky-700 font-medium py-2 px-4 bg-sky-50 hover:bg-sky-100 rounded-md transition-colors"
          >
            {icon}
            <span className="text-sm">{typeLabel}</span>
          </ExternalLink>
          {standingsLink && (
            <ExternalLink
              href={standingsLink}
              className="flex items-center justify-center gap-2 text-green-600 hover:text-green-700 font-medium py-2 px-4 bg-green-50 hover:bg-green-100 rounded-md transition-colors"
            >
              {standingsIcon}
              <span className="text-sm">View Standings</span>
            </ExternalLink>
          )}
          {highlightsLink && (
            <>
              {typeof highlightsLink === "string" ? (
                <ExternalLink
                  href={highlightsLink}
                  className="flex items-center justify-center gap-2 text-purple-600 hover:text-purple-700 font-medium py-2 px-4 bg-purple-50 hover:bg-purple-100 rounded-md transition-colors"
                >
                  {highlightsIcon}
                  <span className="text-sm">Teams Highlights</span>
                </ExternalLink>
              ) : (
                highlightsLink.map((highlight, index) => (
                  <ExternalLink
                    key={index}
                    href={highlight.url}
                    className="flex items-center justify-center gap-2 text-purple-600 hover:text-purple-700 font-medium py-2 px-4 bg-purple-50 hover:bg-purple-100 rounded-md transition-colors"
                  >
                    {highlightsIcon}
                    <span className="text-sm">{highlight.label}</span>
                  </ExternalLink>
                ))
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

