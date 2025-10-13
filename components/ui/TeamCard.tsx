import ExternalLink from "./ExternalLink";

interface TeamCardProps {
  name: string;
  link: string;
  type?: "schedule" | "highlight";
  description?: string;
}

export default function TeamCard({
  name,
  link,
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

  return (
    <ExternalLink
      href={link}
      className="block group bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200 hover:border-sky-400"
    >
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-sky-600 transition-colors">
          {name}
        </h3>
        {description && (
          <p className="text-sm text-gray-600 mb-3">{description}</p>
        )}
        <div className="flex items-center gap-2 text-sky-600 font-medium">
          {icon}
          <span className="text-sm">{typeLabel}</span>
        </div>
      </div>
    </ExternalLink>
  );
}

