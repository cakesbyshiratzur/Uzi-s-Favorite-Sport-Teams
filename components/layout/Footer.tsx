export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="section-container py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <h3 className="font-bold text-lg mb-1">
              Uzi&apos;s Favorite Sport Teams
            </h3>
            <p className="text-gray-400 text-sm">
              Your hub for soccer, football, and basketball
            </p>
          </div>

          <div className="text-center md:text-right">
            <p className="text-gray-400 text-sm">
              &copy; {currentYear} All rights reserved
            </p>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-gray-800 text-center text-gray-500 text-xs">
          <p>
            External links provided for schedules and highlights. All team
            logos and trademarks are property of their respective owners.
          </p>
        </div>
      </div>
    </footer>
  );
}

