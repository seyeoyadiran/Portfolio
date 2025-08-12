import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-[70vh] flex flex-col justify-center items-center text-center text-yellow-500
                 bg-blackLux/40 backdrop-blur-md border border-yellow-400/20 px-6 py-12
                 shadow-lg shadow-yellow-900/30 max-w-5xl mx-auto rounded-lg"
    >
      {/* Name */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl md:text-6xl font-bold tracking-tight"
      >
        Hi, I’m <span className="text-gold">Oluwaseye Oyadiran</span>
      </motion.h1>

      {/* Tagline */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 1 }}
        className="mt-4 text-lg md:text-xl text-gray-300 max-w-2xl leading-relaxed"
      >
        Full-Stack Software Engineer specializing in <span className="text-gold">MERN</span> development, 
        <span className="text-gold"> AWS Cloud</span> solutions, and 
        building scalable, high-performance applications that drive real business impact.
      </motion.p>

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


// import React from "react";
// import { motion } from "framer-motion";

// export default function Hero() {
//   return (
//     <section
//       id="home"
//       className="min-h-[60vh] flex flex-col justify-center items-center text-center text-yellow-500
//                  bg-blackLux/40 backdrop-blur-md border border-yellow-400/20 px-6 py-10
//                  shadow-md shadow-yellow-900/20 max-w-4xl mx-auto rounded-lg"
//     >
//       <motion.h1
//         initial={{ opacity: 0, y: 40 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1 }}
//         className="text-4xl font-semibold tracking-tight"
//       >
//         Hi, I’m <span className="text-gold">Oluwaseye Oyadiran</span>
//       </motion.h1>
//       <motion.p
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 0.5, duration: 1 }}
//         className="mt-4 text-base text-gray-300 max-w-lg leading-relaxed"
//       >
//         A passionate software engineer crafting elegant, high-performance solutions.
//       </motion.p>
//       <motion.a
//         href="#projects"
//         whileHover={{ scale: 1.05 }}
//         className="mt-8 px-5 py-2.5 bg-gold/90 text-primary rounded-full font-medium
//                    shadow-md shadow-gold/40 hover:shadow-gold transition"
//       >
//         View My Work
//       </motion.a>
//     </section>
//   );
// }
