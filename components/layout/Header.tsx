import Image from "next/image";
import Navigation from "./Navigation";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="section-container">
        <div className="flex items-center justify-between py-4">
          {/* Logo Section */}
          <div className="flex items-center gap-3">
            <Image
              src="/logo.jpg"
              alt="Uzi's Favorite Sport Teams Logo"
              width={50}
              height={50}
              className="rounded-full"
              priority
            />
            <div className="flex flex-col">
              <h1 className="text-xl sm:text-2xl font-bold text-gray-900">
                Uzi&apos;s Favorite Sport Teams
              </h1>
              <p className="text-xs sm:text-sm text-gray-600 hidden sm:block">
                Soccer • Football • Basketball
              </p>
            </div>
          </div>

          {/* Navigation */}
          <Navigation />
        </div>
      </div>
    </header>
  );
}

