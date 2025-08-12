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
          I’m a results-driven software engineer specializing in designing and delivering scalable, high-performance applications that drive business growth. With a strong focus on clean architecture and best practices, I bridge the gap between complex technical challenges and elegant user experiences. Passionate about continuous learning and innovation, I thrive in fast-paced environments where quality and efficiency are paramount.
        </p>
      </div>
    </section>
  );
}
