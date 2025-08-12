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
          I’m a results-driven <span className="text-gold">Full-Stack Software Engineer</span> 
          with expertise in <span className="text-gold">MERN stack</span>, 
          <span className="text-gold"> AWS Cloud</span>, and 
          <span className="text-gold">machine learning</span>.  
          I specialize in architecting and delivering scalable, high-performance applications 
          that combine elegant, user-focused design with robust backend systems.
        </p>
        <p className="mt-4 text-gray-300 leading-relaxed text-lg">
          My work philosophy is grounded in <span className="text-gold">clean architecture</span>, 
          modern best practices, and maintainable code — ensuring solutions that are not only 
          functional today, but future-ready. Backed by certifications from AWS, IBM, Meta, and Google, 
          I bring both deep technical expertise and a strategic business perspective to every project.
        </p>
      </div>
    </section>
  );
}
