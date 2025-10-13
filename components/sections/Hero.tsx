import Image from "next/image";
import Button from "../ui/Button";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative bg-gradient-to-br from-sky-100 via-sky-50 to-yellow-50 section-padding"
    >
      <div className="section-container">
        <div className="flex flex-col items-center text-center">
          {/* Logo */}
          <div className="mb-6">
            <Image
              src="/logo.jpg"
              alt="Uzi's Favorite Sport Teams"
              width={150}
              height={150}
              className="rounded-full shadow-lg"
              priority
            />
          </div>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            Uzi&apos;s Favorite Sport Teams
          </h1>

          {/* Subtitle */}
          <p className="text-xl sm:text-2xl text-gray-700 mb-6 max-w-2xl">
            Your Hub for Soccer, Football, and Basketball Excellence
          </p>

          <p className="text-lg text-gray-600 mb-8 max-w-3xl">
            Explore my favorite teams, check upcoming schedules, and watch the
            latest highlights all in one place.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button href="#favorite-teams" variant="primary">
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
                  d="M19 9l-7 7-7-7"
                />
              </svg>
              Explore Teams
            </Button>
            <Button href="#schedules" variant="secondary">
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
              View Schedules
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 bg-sky-500 rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-yellow-400 rounded-full"></div>
        <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-sky-400 rounded-full"></div>
      </div>
    </section>
  );
}

