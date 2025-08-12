import React from "react";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
      className="pt-40 pb-16 px-6 text-white"
    >
      <div className="max-w-2xl mx-auto text-center bg-blackLux/60 backdrop-blur-md rounded-xl p-8 shadow-lg shadow-yellow-900/40 border border-yellow-700/40">
        <motion.h2
          initial={{ y: -30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-2xl md:text-3xl font-bold border-b-4 border-yellow-500 inline-block pb-2 mb-6 tracking-wide"
        >
          Contact Me
        </motion.h2>
        <p className="mt-4 text-base md:text-lg text-gray-300 max-w-lg mx-auto leading-relaxed">
          Have an idea? Let’s bring it to life with elegance and precision — 
          I’m ready to turn your vision into impactful, scalable software.
        </p>
        <motion.a
          href="mailto:seyeoyadiran@gmail.com"
          whileHover={{ scale: 1.05 }}
          className="mt-8 inline-block bg-yellow-500 text-black px-6 py-3 rounded-full font-semibold shadow-lg shadow-yellow-500/60 hover:shadow-yellow-500 transition"
        >
          Send Email
        </motion.a>
      </div>
    </section>
  );
}
