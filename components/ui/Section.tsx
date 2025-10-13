interface SectionProps {
  id: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  bgColor?: "sky" | "yellow" | "white" | "gray";
}

const bgColorClasses = {
  sky: "bg-sky-50",
  yellow: "bg-yellow-50",
  white: "bg-white",
  gray: "bg-gray-50",
};

export default function Section({
  id,
  title,
  subtitle,
  children,
  className = "",
  bgColor = "white",
}: SectionProps) {
  return (
    <section
      id={id}
      className={`section-padding ${bgColorClasses[bgColor]} ${className}`}
    >
      <div className="section-container">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
            {title}
          </h2>
          {subtitle && (
            <p className="text-lg text-gray-600 mt-2">{subtitle}</p>
          )}
        </div>
        {children}
      </div>
    </section>
  );
}

