import React from "react";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 px-6 bg-gray-900/60 backdrop-blur-md text-white"
    >
      <div className="max-w-4xl mx-auto text-center bg-blackLux/60 rounded-2xl p-10 shadow-xl shadow-yellow-900/40 border border-yellow-700/40">
        <motion.h2
          initial={{ y: -30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold border-b-4 border-yellow-500 inline-block pb-2 mb-6 tracking-wide"
        >
          Contact Me
        </motion.h2>
        <p className="mt-6 text-lg text-gray-300 max-w-xl mx-auto leading-relaxed">
          Have an idea? Let’s bring it to life with elegance and precision — 
          I’m ready to turn your vision into impactful, scalable software.
        </p>
        <motion.a
          href="mailto:youremail@example.com"
          whileHover={{ scale: 1.05 }}
          className="mt-8 inline-block bg-gold text-primary px-8 py-3 rounded-full font-semibold shadow-lg shadow-gold/60 hover:shadow-gold transition"
        >
          Send Email
        </motion.a>
      </div>
    </section>
  );
}
