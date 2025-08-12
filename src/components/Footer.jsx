import React from "react";

export default function Footer() {
  return (
    <footer
      className="bg-blackLux/60 backdrop-blur-md text-gray-300 py-6 px-6 text-center
                 border-t border-yellow-700/30 shadow-inner shadow-yellow-900/20"
    >
      <p className="text-sm tracking-wide mb-3">
        &copy; {new Date().getFullYear()} Oluwaseye Oyadiran. All rights reserved.
      </p>
      <div className="flex justify-center space-x-6">
        <a
          href="https://www.linkedin.com/in/oluwaseyeoyadiran/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gold transition"
          aria-label="LinkedIn"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/seyeoyadiran"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gold transition"
          aria-label="GitHub"
        >
          GitHub
        </a>
        <a
          href="mailto:seyeoyadiran@gmail.com"
          className="hover:text-gold transition"
          aria-label="Email"
        >
          Email
        </a>
      </div>
    </footer>
  );
}
