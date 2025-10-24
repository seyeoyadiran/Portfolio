import React from "react";

export default function Navbar() {
  const sections = ["home", "about", "projects", "skills & certs", "contact"];

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed w-full bg-primary bg-opacity-80 backdrop-blur-lg z-50">
      <div className="max-w-7xl mx-auto flex items-center px-6 py-4 text-white relative">
        {/* Left: Logo */}
        <div className="flex-shrink-0">
          <h1
            className="text-2xl font-bold text-gold cursor-pointer"
            onClick={() => scrollToSection("home")}
          >
            MyPortfolio
          </h1>
        </div>

        {/* Center: Nav Links */}
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
      </div>
    </nav>
  );
}

