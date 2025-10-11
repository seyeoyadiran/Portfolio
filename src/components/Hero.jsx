import React from "react";
import { motion } from "framer-motion";
import myPic from "../assets/OluwaseyeO.jpg"; 
import MeWithSuit from "../assets/MeWithSuit.png"; 

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-[70vh] flex flex-col justify-center items-center text-center text-yellow-500
                 bg-blackLux/40 backdrop-blur-md border border-yellow-400/20 px-6 py-12
                 shadow-lg shadow-yellow-900/30 max-w-5xl mx-auto rounded-lg"
    >
    

      {/* REPLACED: Image in place of the text tagline */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="mb-8" // Add some space below the image
      >
        <img
          src={MeWithSuit} // <--- R E P L A C E  W I T H  Y O U R  I M A G E  P A T H
          alt="Oluwaseye Oyadiran Profile"
          className="w-48 h-48 sm:w-64 sm:h-64 object-cover rounded-full shadow-xl shadow-yellow-900/50 border-4 border-gold/50"
        />
      </motion.div>

        {/* Name */}
        <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl md:text-6xl font-bold tracking-tight mb-8"
      >
        Hi, I’m <span className="text-gold">Oluwaseye Oyadiran</span>
      </motion.h1>
      
      {/* CTA Buttons */}
      <div className="mt-8 flex flex-col sm:flex-row gap-4">
        <motion.a
          href="#projects"
          whileHover={{ scale: 1.05 }}
          className="px-6 py-3 bg-gold/90 text-primary rounded-full font-semibold
                     shadow-md shadow-gold/40 hover:shadow-gold transition"
        >
          View My Work
        </motion.a>
        <motion.a
          href="#contact"
          whileHover={{ scale: 1.05 }}
          className="px-6 py-3 border border-gold text-gold rounded-full font-semibold
                     hover:bg-gold hover:text-primary transition"
        >
          Contact Me
        </motion.a>
      </div>
    </section>
  );
}