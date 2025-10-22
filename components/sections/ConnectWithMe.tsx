import Section from "../ui/Section";

export default function ConnectWithMe() {
  return (
    <Section
      id="connect"
      title="Connect With Me"
      subtitle="Get in touch for sports discussions, collaborations, or just to chat about your favorite teams"
      bgColor="yellow"
      className="scroll-mt-20"
    >
      <div className="max-w-2xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {/* Email Contact */}
          <div className="text-center">
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="mb-4">
                <svg
                  className="w-12 h-12 text-sky-600 mx-auto"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Email</h3>
              <a
                href="mailto:uzi.tzur@gmail.com"
                className="text-sky-600 hover:text-sky-700 font-medium transition-colors duration-200 break-all"
              >
                uzi.tzur@gmail.com
              </a>
            </div>
          </div>

          {/* Phone Contact */}
          <div className="text-center">
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="mb-4">
                <svg
                  className="w-12 h-12 text-sky-600 mx-auto"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Phone</h3>
              <a
                href="tel:+12143540604"
                className="text-sky-600 hover:text-sky-700 font-medium transition-colors duration-200"
              >
                +1 (214) 354-0604
              </a>
            </div>
          </div>
        </div>

        {/* Additional Message */}
        <div className="mt-8 text-center">
          <p className="text-gray-600 text-lg">
            Whether you want to discuss the latest game, share your favorite team moments, 
            or collaborate on sports-related projects, I&apos;d love to hear from you!
          </p>
        </div>
      </div>
    </Section>
  );
}
