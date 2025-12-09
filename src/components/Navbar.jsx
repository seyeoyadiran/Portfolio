import React, { useState } from "react";

export default function Navbar() {
  const sections = ["home", "about", "projects", "skills & certs", "contact"];
  const [open, setOpen] = useState(false);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <nav className="fixed w-full bg-primary bg-opacity-80 backdrop-blur-lg z-[999]">
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

        {/* Center: Desktop Nav Links */}
        <ul className="hidden md:flex flex-1 justify-center gap-8 z-[999]">
          {sections.map((section) => (
            <li key={section}>
              <a
                href={`#${section}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(section);
                }}
                className="text-white hover:text-yellow-400 transition cursor-pointer capitalize"
              >
                {section}
              </a>
            </li>
          ))}
        </ul>

        {/* Right: Mobile Menu Button */}
        <button
          className="md:hidden ml-auto focus:outline-none"
          onClick={() => setOpen(!open)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-7 h-7"
          >
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-primary bg-opacity-90 backdrop-blur-lg">
          <ul className="flex flex-col items-center gap-6 py-6 text-white">
            {sections.map((section) => (
              <li key={section}>
                <a
                  href={`#${section}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(section);
                  }}
                  className="text-lg hover:text-yellow-400 transition cursor-pointer capitalize"
                >
                  {section}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}


// import React from "react";

// export default function Navbar() {
//   const sections = ["home", "about", "projects", "skills & certs", "contact"];

//   const scrollToSection = (id) => {
//     const el = document.getElementById(id);
//     if (el) el.scrollIntoView({ behavior: "smooth" });
//   };

//   return (
//     <nav className="fixed w-full bg-primary bg-opacity-80 backdrop-blur-lg z-50">
//       <div className="max-w-7xl mx-auto flex items-center px-6 py-4 text-white relative">
//         {/* Left: Logo */}
//         <div className="flex-shrink-0">
//           <h1
//             className="text-2xl font-bold text-gold cursor-pointer"
//             onClick={() => scrollToSection("home")}
//           >
//             MyPortfolio
//           </h1>
//         </div>

//         {/* Center: Nav Links */}
        // <ul className="absolute left-1/2 transform -translate-x-1/2 flex gap-8">
        //   {sections.map((section) => (
        //     <li key={section}>
        //       <a
        //         href={`#${section}`}
        //         onClick={(e) => {
        //           e.preventDefault();
        //           scrollToSection(section);
        //         }}
        //         className="hover:text-yellow-400 transition cursor-pointer capitalize"
        //       >
        //         {section}
        //       </a>
        //     </li>
        //   ))}
        // </ul>
//       </div>
//     </nav>
//   );
// }

