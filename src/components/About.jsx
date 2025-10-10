import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="py-20 px-6 text-white bg-transparent relative z-50"
    >
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold border-b-4 border-yellow-500 inline-block pb-2"
        >
          About Me
        </motion.h2>

        <p className="mt-6 text-gray-300 leading-relaxed text-lg">
          My professional identity is rooted in the <span className="text-gold">strategic application of computer science and software engineering principles</span> to solve complex challenges. I excel at <span className="text-gold">translating intricate business needs into robust, efficient software solutions</span>, overseeing the full development lifecycle from design and clean code implementation to rigorous testing and continuous improvement.
        </p>

        <p className="mt-4 text-gray-300 leading-relaxed text-lg">
          My experience across <span className="text-gold">diverse sectors</span> has honed my ability to <span className="text-gold">bridge technical and operational gaps</span>, whether through optimizing processes, ensuring quality standards, or effectively communicating intricate concepts to varied stakeholders and mentees.
        </p>

        <p className="mt-4 text-gray-300 leading-relaxed text-lg">
          I am driven by a commitment to <span className="text-gold">precision, performance, and fostering clarity in technical collaboration</span>. My approach ensures that every solution not only meets current requirements but is built with the foresight to adapt and scale for future challenges.
        </p>
      </div>
    </section>
  );
}