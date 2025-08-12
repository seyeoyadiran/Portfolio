import React from "react";

export default function Experience() {
  return (
    <section
      id="experience"
      className="
        py-20 px-6 text-white
        bg-blackLux/40 backdrop-blur-md border border-yellow-400/20
        shadow-lg shadow-yellow-900/30
        max-w-5xl mx-auto rounded-lg
      "
    >
      <h2 className="text-3xl font-bold border-b-4 border-gold inline-block pb-2 mb-8">
        Experience
      </h2>

      <div className="mb-8">
        <h3 className="text-xl font-semibold text-gold">Business Analyst — Bluewolf (IBM)</h3>
        <p className="text-sm text-gray-300">Jul 2021 – Dec 2021</p>
        <ul className="mt-2 list-disc list-inside text-gray-300">
          <li>Designed and documented requirements for enterprise Salesforce integration, streamlining workflows for 200+ users.</li>
          <li>Applied Agile methodologies, increasing delivery speed by 30%.</li>
        </ul>
      </div>

      <div>
        <h3 className="text-xl font-semibold text-gold">Software Engineer — Honda Manufacturing of Indiana</h3>
        <p className="text-sm text-gray-300">Jun 2019 – Aug 2019</p>
        <ul className="mt-2 list-disc list-inside text-gray-300">
          <li>Built Python automation scripts to analyze production data, cutting defect analysis time by 50%.</li>
          <li>Collaborated with manufacturing teams to digitize manual processes.</li>
        </ul>
      </div>
    </section>
  );
}
