import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-[60vh] flex flex-col justify-center items-center text-center text-yellow-500
                 bg-blackLux/40 backdrop-blur-lg border border-yellow-400/25 px-16 py-16
                 shadow-lg shadow-yellow-900/30 max-w-6xl mx-auto rounded-2xl"
    >
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl font-semibold tracking-wide leading-tight"
      >
        Hi, I’m <span className="text-gold">Oluwaseye Oyadiran</span>
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="mt-6 text-lg text-gray-300 max-w-3xl leading-relaxed tracking-wide"
      >
        A passionate software engineer crafting elegant, high-performance solutions with precision and purpose.
      </motion.p>
      <motion.a
        href="#projects"
        whileHover={{ scale: 1.05 }}
        className="mt-10 px-8 py-3 bg-gold/95 text-primary rounded-full font-semibold
                   shadow-lg shadow-gold/60 hover:shadow-gold transition tracking-wide"
      >
        View My Work
      </motion.a>
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
