import React from "react";

export default function Navbar() {
  const sections = ["home", "about", "projects", "contact"];

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed w-full bg-primary bg-opacity-80 backdrop-blur-lg z-50">
      <div className="max-w-7xl mx-auto flex items-center px-6 py-4 text-white relative">
        {/* Left: MyPortfolio aligned left with no extra width */}
        <div className="flex-shrink-0">
          <h1
            className="text-2xl font-bold text-yellow-500 cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            MyPortfolio
          </h1>
        </div>

        {/* Center: nav links absolutely centered */}
        <ul className="absolute left-1/2 transform -translate-x-1/2 flex gap-8">
          {sections.map((section) => (
            <li key={section}>
              <a
                href={`#${section}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(section);
                }}
                className="hover:text-yellow-400 transition cursor-pointer capitalize"
              >
                {section}
              </a>
            </li>
          ))}
        </ul>

        {/* Right: empty div for spacing */}
        <div className="flex-shrink-0 w-24" />
      </div>
    </nav>
  );
}
