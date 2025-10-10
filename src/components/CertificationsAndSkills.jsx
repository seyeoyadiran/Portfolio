import React from "react";
import { motion } from "framer-motion";

const certifications = [
  "AWS Certified Solutions Architect – Associate",
  "AWS Certified Cloud Practitioner",
  "Data Analytics for Machine Learning Certificate",
  "Meta Front-End Developer Professional Certificate",
  "IBM AI Engineering Professional Certificate",
  "Introducing Generative AI with AWS",
  "Python for Data Science, AI & Development",
  "Google Cybersecurity Professional Certificate",
  "Google Project Management Professional Certificate",

];

const skills = [
  // Core Software Engineering
  "JavaScript / TypeScript",
  "React / Redux / Next.js",
  "Node.js / Express",
  "Java / Spring Boot",
  "Python / Django / Flask",
  "SQL / NoSQL Databases",
  
  // AI & Machine Learning
  "Machine Learning (Scikit-learn, TensorFlow, PyTorch)",
  "Data Analysis & Visualization",
  "Natural Language Processing (NLP)",
  
  // Cloud & DevOps
  "AWS (EC2, S3, Lambda, CloudFormation)",
  "Docker / Kubernetes",
  "CI/CD Pipelines (GitHub Actions, Jenkins)",
  
  // Architecture & Other
  "Solutions Architecture",
  "API Design & Integration",
  "Agile / Scrum Methodologies",
];

const cardVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1 },
  }),
};

export default function SkillsCerts() {
  return (
    <section 
      id="skills & certs"
      className="relative z-10 pt-40 pb-16 px-6 text-white"
    >
      <motion.h2
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold text-center mb-16 border-b-4 border-yellow-500 inline-block pb-2"
      >
        Skills & Certifications
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
        {/* Skills */}
        <motion.div
          className="bg-black/50 backdrop-blur-md rounded-xl p-8 shadow-lg shadow-yellow-900/40 border border-yellow-700/40"
          initial="hidden"
          whileInView="visible"
          variants={cardVariant}
          custom={0}
        >
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-red-400" />
              <div className="w-3 h-3 rounded-full bg-yellow-400" />
              <div className="w-3 h-3 rounded-full bg-green-400" />
            </div>
            <h3 className="text-2xl font-bold border-b-2 border-yellow-500 inline-block pb-1">
              Skills
            </h3>
          </div>
          <ul className="grid grid-cols-2 gap-3 text-yellow-400 text-md font-medium">
            {skills.map((skill, i) => (
              <li key={i}>{skill}</li>
            ))}
          </ul>
        </motion.div>

        {/* Certifications */}
        <motion.div
          className="bg-black/50 backdrop-blur-md rounded-xl p-8 shadow-lg shadow-yellow-900/40 border border-yellow-700/40"
          initial="hidden"
          whileInView="visible"
          variants={cardVariant}
          custom={1}
        >
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-red-400" />
              <div className="w-3 h-3 rounded-full bg-yellow-400" />
              <div className="w-3 h-3 rounded-full bg-green-400" />
            </div>
            <h3 className="text-2xl font-bold border-b-2 border-yellow-500 inline-block pb-1">
              Certifications
            </h3>
          </div>
          <ul className="list-disc list-inside text-gray-300 space-y-2 text-md">
            {certifications.map((cert, i) => (
              <li key={i}>{cert}</li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}


// import React from "react";
// import { motion } from "framer-motion";

// const certifications = [
//   "Certified AWS Solutions Architect – Associate",
//   "Certified ScrumMaster (CSM)",
//   "Google Data Analytics Professional Certificate",
//   "Oracle Java SE 11 Developer Certification",
// ];

// const skills = [
//   "JavaScript / TypeScript",
//   "React / Redux",
//   "Node.js / Express",
//   "Python / Django",
//   "Java / Spring Boot",
//   "AWS (EC2, S3, Lambda)",
//   "SQL / NoSQL Databases",
//   "Docker / Kubernetes",
// ];

// const cardVariant = {
//   hidden: { opacity: 0, y: 20 },
//   visible: (i) => ({
//     opacity: 1,
//     y: 0,
//     transition: { delay: i * 0.1 },
//   }),
// };

// export default function SkillsCerts() {
//   return (
//     <section 
//     id="skills/certs"
//     className="relative z-10 pt-40 pb-16 px-6 text-white">
//       <motion.h2
//         initial={{ y: -30, opacity: 0 }}
//         whileInView={{ y: 0, opacity: 1 }}
//         transition={{ duration: 0.6 }}
//         className="text-3xl md:text-4xl font-bold text-center mb-16 border-b-4 border-yellow-500 inline-block pb-2"
//       >
//         Skills & Certifications
//       </motion.h2>

//       <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
//         {/* Skills */}
//         <motion.div
//           className="bg-black/50 backdrop-blur-md rounded-xl p-8 shadow-lg shadow-yellow-900/40 border border-yellow-700/40"
//           initial="hidden"
//           whileInView="visible"
//           variants={cardVariant}
//           custom={0}
//         >
//           <div className="mb-6">
//             <div className="flex items-center gap-2 mb-4">
//               <div className="w-3 h-3 rounded-full bg-red-400" />
//               <div className="w-3 h-3 rounded-full bg-yellow-400" />
//               <div className="w-3 h-3 rounded-full bg-green-400" />
//             </div>
//             <h3 className="text-2xl font-bold border-b-2 border-yellow-500 inline-block pb-1">
//               Skills
//             </h3>
//           </div>
//           <ul className="grid grid-cols-2 gap-3 text-yellow-400 text-md font-medium">
//             {skills.map((skill, i) => (
//               <li key={i}>{skill}</li>
//             ))}
//           </ul>
//         </motion.div>

//         {/* Certifications */}
//         <motion.div
//           className="bg-black/50 backdrop-blur-md rounded-xl p-8 shadow-lg shadow-yellow-900/40 border border-yellow-700/40"
//           initial="hidden"
//           whileInView="visible"
//           variants={cardVariant}
//           custom={1}
//         >
//           <div className="mb-6">
//             <div className="flex items-center gap-2 mb-4">
//               <div className="w-3 h-3 rounded-full bg-red-400" />
//               <div className="w-3 h-3 rounded-full bg-yellow-400" />
//               <div className="w-3 h-3 rounded-full bg-green-400" />
//             </div>
//             <h3 className="text-2xl font-bold border-b-2 border-yellow-500 inline-block pb-1">
//               Certifications
//             </h3>
//           </div>
//           <ul className="list-disc list-inside text-gray-300 space-y-2 text-md">
//             {certifications.map((cert, i) => (
//               <li key={i}>{cert}</li>
//             ))}
//           </ul>
//         </motion.div>
//       </div>

    
//     </section>
//   );
// }
