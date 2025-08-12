import React, { useState } from "react";
import { motion } from "framer-motion";
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";

// Sample data per category
const machineLearningProjects = [
  {
    id: 1,
    title: "Luxury ML Project One",
    img: project1,
    description:
      "An innovative ML solution blending seamless UI with robust backend architecture.",
  },
  {
    id: 2,
    title: "Premium ML Project Two",
    img: project2,
    description:
      "Scalable machine learning platform built with maintainability and best practices.",
  },
  {
    id: 3,
    title: "Premium ML Project Two",
    img: project2,
    description:
      "Scalable machine learning platform built with maintainability and best practices.",
  },
];

const webAppProjects = [
  {
    id: 3,
    title: "Elite Web Project One",
    img: project3,
    description:
      "Sophisticated, user-centric web app engineered for responsiveness and business impact.",
  },
  {
    id: 4,
    title: "Premium Web App Two",
    img: project1,
    description:
      "Full-stack web application using cutting-edge technology and scalable architecture.",
  },
  {
    id: 5,
    title: "Premium Web App Two",
    img: project1,
    description:
      "Full-stack web application using cutting-edge technology and scalable architecture.",
  },
];

const githubRepos = [
  {
    id: 5,
    title: "Open Source UI Library",
    img: project2,
    description: "Reusable React UI components.",
    url: "https://github.com/yourusername/ui-library",
  },
  {
    id: 6,
    title: "Data Science Utils",
    img: project3,
    description: "Python utilities for data processing.",
    url: "https://github.com/yourusername/data-science-utils",
  },
  {
    id: 7,
    title: "Data Science Utils",
    img: project3,
    description: "Python utilities for data processing.",
    url: "https://github.com/yourusername/data-science-utils",
  },
];

export default function Projects() {
  const [activeTab, setActiveTab] = useState("ml");

  const getProjects = () => {
    switch (activeTab) {
      case "ml":
        return machineLearningProjects;
      case "web":
        return webAppProjects;
      case "github":
        return githubRepos;
      default:
        return [];
    }
  };

  return (
    <section
      id="projects"
      className="
        py-20 px-6 text-white
        bg-blackLux/40 backdrop-blur-md border border-yellow-400/20
        shadow-lg shadow-yellow-900/30
        max-w-6xl mx-auto rounded-lg
      "
    >
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold border-b-4 border-yellow-500 inline-block pb-2 mb-12 tracking-wide"
      >
        Projects
      </motion.h2>

      {/* Tabs */}
      <div className="flex justify-center space-x-6 mb-12">
        {[
          { id: "ml", label: "Machine Learning" },
          { id: "web", label: "Web / App" },
          { id: "github", label: "GitHub Repos" },
        ].map(({ id, label }) => (
          <button
            key={id}
            onClick={() => setActiveTab(id)}
            className={`px-5 py-2 rounded-full font-semibold transition ${
              activeTab === id
                ? "bg-yellow-500 text-black shadow-lg"
                : "bg-gray-800 hover:bg-gray-700 text-yellow-400"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Projects grid */}
      <div className="mt-8 grid md:grid-cols-3 gap-10">
        {getProjects().map((p) => (
          <motion.div
            key={p.id}
            whileHover={{ scale: 1.05 }}
            className="
              bg-blackLux/60 rounded-2xl overflow-hidden
              shadow-xl shadow-yellow-900/40
              border border-yellow-700/40
              cursor-pointer transition
            "
            title={p.url ? "Click to open repo" : ""}
            onClick={() => p.url && window.open(p.url, "_blank")}
            role={p.url ? "link" : undefined}
            tabIndex={p.url ? 0 : undefined}
          >
            <img
              src={p.img}
              alt={p.title}
              className="w-full h-52 object-cover rounded-t-2xl"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-yellow-400">{p.title}</h3>
              <p className="mt-3 text-gray-300 leading-relaxed tracking-wide">
                {p.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}


// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import project1 from "../assets/project1.png";
// import project2 from "../assets/project2.png";
// import project3 from "../assets/project3.png";

// // Sample data per category
// const machineLearningProjects = [
//   {
//     id: 1,
//     title: "Luxury ML Project One",
//     img: project1,
//     description:
//       "An innovative ML solution blending seamless UI with robust backend architecture.",
//   },
//   {
//     id: 2,
//     title: "Premium ML Project Two",
//     img: project2,
//     description:
//       "Scalable machine learning platform built with maintainability and best practices.",
//   },
//   {
//     id: 3,
//     title: "Premium ML Project Two",
//     img: project2,
//     description:
//       "Scalable machine learning platform built with maintainability and best practices.",
//   }
// ];

// const webAppProjects = [
//   {
//     id: 3,
//     title: "Elite Web Project One",
//     img: project3,
//     description:
//       "Sophisticated, user-centric web app engineered for responsiveness and business impact.",
//   },
//   {
//     id: 4,
//     title: "Premium Web App Two",
//     img: project1,
//     description:
//       "Full-stack web application using cutting-edge technology and scalable architecture.",
//   },
//   {
//     id: 5,
//     title: "Premium Web App Two",
//     img: project1,
//     description:
//       "Full-stack web application using cutting-edge technology and scalable architecture.",
//   },
// ];

// const githubRepos = [
//   {
//     id: 5,
//     title: "Open Source UI Library",
//     img: project2,
//     description: "Reusable React UI components.",
//     url: "https://github.com/yourusername/ui-library",
//   },
//   {
//     id: 6,
//     title: "Data Science Utils",
//     img: project3,
//     description: "Python utilities for data processing.",
//     url: "https://github.com/yourusername/data-science-utils",
//   },
//   {
//     id: 7,
//     title: "Data Science Utils",
//     img: project3,
//     description: "Python utilities for data processing.",
//     url: "https://github.com/yourusername/data-science-utils",
//   }
// ];

// export default function Projects() {
//   const [activeTab, setActiveTab] = useState("ml");

//   // Select projects based on active tab
//   const getProjects = () => {
//     switch (activeTab) {
//       case "ml":
//         return machineLearningProjects;
//       case "web":
//         return webAppProjects;
//       case "github":
//         return githubRepos;
//       default:
//         return [];
//     }
//   };

//   return (
//     <section
//       id="projects"
//       className="py-20 px-6 text-white bg-gray-900/60 backdrop-blur-md"
//     >
//       <div className="max-w-6xl mx-auto">
//         <motion.h2
//           initial={{ opacity: 0, y: -30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="text-3xl font-bold border-b-4 border-yellow-500 inline-block pb-2 mb-12 tracking-wide"
//         >
//           Projects
//         </motion.h2>

//         {/* Tabs */}
//         <div className="flex justify-center space-x-6 mb-12">
//           {[
//             { id: "ml", label: "Machine Learning" },
//             { id: "web", label: "Web / App" },
//             { id: "github", label: "GitHub Repos" },
//           ].map(({ id, label }) => (
//             <button
//               key={id}
//               onClick={() => setActiveTab(id)}
//               className={`px-5 py-2 rounded-full font-semibold transition ${
//                 activeTab === id
//                   ? "bg-yellow-500 text-black shadow-lg"
//                   : "bg-gray-800 hover:bg-gray-700 text-yellow-400"
//               }`}
//             >
//               {label}
//             </button>
//           ))}
//         </div>

//         {/* Projects grid */}
//         <div className="mt-8 grid md:grid-cols-3 gap-10">
//           {getProjects().map((p) => (
//             <motion.div
//               key={p.id}
//               whileHover={{ scale: 1.05 }}
//               className="bg-blackLux/60 rounded-2xl overflow-hidden shadow-xl shadow-yellow-900/40 border border-yellow-700/40 cursor-pointer transition"
//               title={p.url ? "Click to open repo" : ""}
//               onClick={() => p.url && window.open(p.url, "_blank")}
//               role={p.url ? "link" : undefined}
//               tabIndex={p.url ? 0 : undefined}
//             >
//               <img
//                 src={p.img}
//                 alt={p.title}
//                 className="w-full h-52 object-cover rounded-t-2xl"
//               />
//               <div className="p-6">
//                 <h3 className="text-2xl font-semibold text-yellow-400">{p.title}</h3>
//                 <p className="mt-3 text-gray-300 leading-relaxed tracking-wide">
//                   {p.description}
//                 </p>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
