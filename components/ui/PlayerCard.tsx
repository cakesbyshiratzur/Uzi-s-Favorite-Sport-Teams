import ExternalLink from "./ExternalLink";
import Image from "next/image";

interface PlayerCardProps {
  name: string;
  team: string;
  position?: string;
  number?: string;
  country?: string;
  profileLink: string;
  image?: string;
  stats?: {
    label: string;
    value: string;
  }[];
}

export default function PlayerCard({
  name,
  team,
  position,
  number,
  country,
  profileLink,
  image,
  stats,
}: PlayerCardProps) {
  const profileIcon = (
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
        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
      />
    </svg>
  );

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200 hover:border-sky-400">
      <div className="p-6">
        {image && (
          <div className="flex justify-center mb-4">
            <div className="relative w-24 h-24 rounded-full overflow-hidden bg-gray-100">
              <Image
                src={image}
                alt={`${name} photo`}
                fill
                className="object-cover"
                sizes="96px"
              />
            </div>
          </div>
        )}
        <div className="text-center mb-3">
          <h3 className="text-xl font-bold text-gray-900 mb-1">
            {name}
          </h3>
          {number && position && (
            <p className="text-sm font-medium text-gray-600 mb-1">
              #{number} • {position}
            </p>
          )}
          <p className="text-sm text-gray-600 mb-1">{team}</p>
          {country && (
            <p className="text-xs text-gray-500 mb-2">🇮🇱 {country}</p>
          )}
        </div>

        {stats && stats.length > 0 && (
          <div className="grid grid-cols-3 gap-2 mb-4 p-3 bg-gray-50 rounded-md">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-lg font-bold text-sky-600">
                  {stat.value}
                </div>
                <div className="text-xs text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        )}

        <ExternalLink
          href={profileLink}
          className="flex items-center justify-center gap-2 text-sky-600 hover:text-sky-700 font-medium py-2 px-4 bg-sky-50 hover:bg-sky-100 rounded-md transition-colors w-full"
        >
          {profileIcon}
          <span className="text-sm">View NBA Profile</span>
        </ExternalLink>
      </div>
    </div>
  );
}

