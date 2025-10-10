import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";
import BlogScreenShot from "../assets/BlogScreenShot.png";
import PomoTimer from "../assets/PomoTimer.png";
import FitSoc from "../assets/FitSocial.png";
import AiCoach from "../assets/AI_Interviewer.jpg";
import SoftMaxReg from "../assets/SoftMaxRegression.png";
import GameDev from "../assets/GameDev.MP4";
import DSoccer from "../assets/DSoccer.png";
import FigmaDesign from "../assets/FigmaDesign.png";
import Github from "../assets/Github.png";

const machineLearningProjects = [
  {
    id: 2,
    title: "Softmax Regression",
    img: SoftMaxReg,
    description:
      "Implementation of softmax regression from scratch using NumPy to classify handwritten digits from the MNIST dataset.",
    url: "https://colab.research.google.com/drive/15J1HV2gb4Zk5hib16md7PntMZRhq8F1S?usp=sharing"
  },
  {
    id: 1,
    title: "AI Interview Coach",
    img: AiCoach,
    description:
      "AI interview coach that provides real-time feedback on your answers, helping you improve your interview skills. More updates to come!",
    url: "https://ai-mock-interviews-teal.vercel.app/"
  },
  {
    id: 3,
    title: "LLM Project",
    img: project2,
    description: "Coming Soon",
  },
];

const webAppProjects = [
  {
    id: 3,
    title: "My Blog",
    img: BlogScreenShot,
    description:
      "Personal blog to take you along on my journey to greatness.",
    url: "https://seye-sblog.onrender.com/",
  },
  {
    id: 4,
    title: "Fit Social",
    img: FitSoc,
    description:
      "Fitness Social Media App coming soon. Ask to see a demo!",
  },
  {
    id: 5,
    title: " Pomodoro Timer",
    img: PomoTimer,
    description:
      "Simple Productivity Tool to help with focus and time management.",
    url: "https://seyespomodorotimer.netlify.app/",
  },
];

const githubRepos = [
  {
    id: 5,
    title: "Video Edge Detection Project",
    img: Github,
    description: "Using Python to process video frames and apply edge detection algorithms.",
    url: "https://github.com/seyeoyadiran/VideoEdgeDetection",
  },
  {
    id: 6,
    title: "Task Manager W/Spring Boot",
    img: Github,
    description: " Java project using Spring Boot backend with RESTful APIs for managing tasks.",
    url: "https://github.com/seyeoyadiran/TaskManager_withSpringBoot",
  },
];

const otherProjects = [
  {
    id: 8,
    title: "Durty Soccer",
    img: DSoccer,
    video: GameDev,
    description: "A fun, competitive 3D soccer game built with Unreal Engine. Click to watch preview.",
  },
  {
    id: 9, 
    title: "Restaurant Booking Figma Design",
    img: FigmaDesign,
    description: "Figma design prototype for a restaurant booking app. Click to view design.",
    url: "https://www.figma.com/proto/sLGU2jAkJwGxoeqnBLychw/EOC-----Project--Little-Lemon-book-a-table--Community-?node-id=1-36&t=9gqPSBNZqojbbprO-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A36"
  }
];

export default function Projects() {
  const [activeTab, setActiveTab] = useState("ml");
  const [videoSrc, setVideoSrc] = useState(null);

  // ESC key to close modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setVideoSrc(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const getProjects = () => {
    switch (activeTab) {
      case "web":
        return webAppProjects;
      case "ml":
        return machineLearningProjects;
      case "github":
        return githubRepos;
      case "other":
        return otherProjects;
      default:
        return [];
    }
  };

  return (
    <section
      id="projects"
      className="py-20 px-6 text-white bg-blackLux/40 backdrop-blur-md border border-yellow-400/20 shadow-lg shadow-yellow-900/30 max-w-6xl mx-auto rounded-lg"
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
          
          { id: "web", label: "Web / App" },
          { id: "ml", label: "AI/Machine Learning" },
          { id: "github", label: "GitHub Repos" },
          { id: "other", label: "Other Projects" },
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
            whileHover={{ scale: 1.04 }}
            className={`relative group bg-blackLux/60 rounded-2xl overflow-hidden shadow-xl shadow-yellow-900/40 border border-yellow-700/40 cursor-pointer transition ${
              p.video && "hover:ring-2 hover:ring-yellow-400 hover:shadow-yellow-500"
            }`}
            onClick={() => {
              if (p.video) setVideoSrc(p.video);
              else if (p.url) window.open(p.url, "_blank");
            }}
          >
            <img src={p.img} alt={p.title} className="w-full h-52 object-cover rounded-t-2xl" />

            {/* Play Overlay for video items */}
            {p.video && (
              <div className="absolute inset-0 bg-black/60 hidden group-hover:flex items-center justify-center transition">
                <span className="text-yellow-400 text-lg font-bold bg-black/30 px-3 py-1 rounded-full border border-yellow-400">
                  ▶ Play Preview
                </span>
              </div>
            )}

            <div className="p-6">
              <h3 className="text-2xl font-semibold text-yellow-400">{p.title}</h3>
              <p className="mt-3 text-gray-300 leading-relaxed tracking-wide">{p.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* 🎬 Video Modal */}
      <AnimatePresence>
        {videoSrc && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm flex justify-center items-center z-50"
            onClick={() => setVideoSrc(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative bg-blackLux border border-yellow-500/40 shadow-2xl rounded-xl overflow-hidden"
              style={{ maxWidth: "600px", width: "90%", height: "calc(100vh - 160px)" }} // matches projects window
              onClick={(e) => e.stopPropagation()}
            >
              <video
                src={videoSrc}
                controls
                autoPlay
                className="w-full h-full object-cover rounded-lg"
              />
              <button
                onClick={() => setVideoSrc(null)}
                className="absolute top-2 right-3 text-white text-xl font-bold"
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}




// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import project1 from "../assets/project1.png";
// import project2 from "../assets/project2.png";
// import project3 from "../assets/project3.png";
// import BlogScreenShot from "../assets/BlogScreenShot.png";
// import PomoTimer from "../assets/PomoTimer.png";
// import FitSoc from "../assets/FitSocial.png";
// import AiCoach from "../assets/AI_Interviewer.jpg";
// import SoftMaxReg from "../assets/SoftMaxRegression.png";
// import GameDev from "../assets/GameDev.mp4";
// // Sample data per category
// const machineLearningProjects = [

//   {
//     id: 2,
//     title: "Softmax Regression",
//     img: SoftMaxReg,
//     description:
//       "Implementation of softmax regression from scratch using NumPy to classify handwritten digits from the MNIST dataset.",
//     url: "https://colab.research.google.com/drive/15J1HV2gb4Zk5hib16md7PntMZRhq8F1S?usp=sharing"
//   },
//   {
//     id: 1,
//     title: "AI Interview Coach",
//     img: AiCoach,
//     description:
//       "AI interview coach that provides real-time feedback on your answers, helping you improve your interview skills. More updates to come!",
//     url: "https://ai-mock-interviews-teal.vercel.app/"
//   },
//   {
//     id: 3,
//     title: "LLM Project",
//     img: project2,
//     description:
//       "Coming Soon",
//   },
// ];

// const webAppProjects = [
//   {
//     id: 3,
//     title: "My Blog",
//     img: BlogScreenShot,
//     description:
//       "Personal blog to take you along on my journey to greatness.",
//       url: "https://seye-sblog.onrender.com/",
//   },
//   {
//     id: 4,
//     title: "Fit Social",
//     img: FitSoc,
//     description:
//       "Fitness Social Media App coming soon. Ask to see a demo!",
//   },
//   {
//     id: 5,
//     title: " Pomodoro Timer",
//     img: PomoTimer,
//     description:
//       "Simple Productivity Tool to help with focus and time management.",
//     url: "https://seyespomodorotimer.netlify.app/",
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
//   },
// ];

// const otherProjects = [
//   {
//     id: 8,
//     title: "Durty Soccer",
//     img: project1,
//     description: "A fun, competitive 3D soccer game with weapons built with Unreal Engine. Coming Soon.",
//     url: {ga}
//   }
// ]
// export default function Projects() {
//   const [activeTab, setActiveTab] = useState("ml");

//   const getProjects = () => {
//     switch (activeTab) {
//       case "ml":
//         return machineLearningProjects;
//       case "web":
//         return webAppProjects;
//       case "github":
//         return githubRepos;
//       case "other":
//         return otherProjects;
//       default:
//         return [];
//     }
//   };

//   return (
//     <section
//       id="projects"
//       className="
//         py-20 px-6 text-white
//         bg-blackLux/40 backdrop-blur-md border border-yellow-400/20
//         shadow-lg shadow-yellow-900/30
//         max-w-6xl mx-auto rounded-lg
//       "
//     >
//       <motion.h2
//         initial={{ opacity: 0, y: -30 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//         className="text-3xl font-bold border-b-4 border-yellow-500 inline-block pb-2 mb-12 tracking-wide"
//       >
//         Projects
//       </motion.h2>

//       {/* Tabs */}
//       <div className="flex justify-center space-x-6 mb-12">
//         {[
//           { id: "ml", label: "AI/Machine Learning" },
//           { id: "web", label: "Web / App" },
//           { id: "github", label: "GitHub Repos" },
//           {id: "other" , label: "Other Projects"}
//         ].map(({ id, label }) => (
//           <button
//             key={id}
//             onClick={() => setActiveTab(id)}
//             className={`px-5 py-2 rounded-full font-semibold transition ${
//               activeTab === id
//                 ? "bg-yellow-500 text-black shadow-lg"
//                 : "bg-gray-800 hover:bg-gray-700 text-yellow-400"
//             }`}
//           >
//             {label}
//           </button>
//         ))}
//       </div>

//       {/* Projects grid */}
//       <div className="mt-8 grid md:grid-cols-3 gap-10">
//         {getProjects().map((p) => (
//           <motion.div
//             key={p.id}
//             whileHover={{ scale: 1.05 }}
//             className="
//               bg-blackLux/60 rounded-2xl overflow-hidden
//               shadow-xl shadow-yellow-900/40
//               border border-yellow-700/40
//               cursor-pointer transition
//             "
//             title={p.url ? "Click to open repo" : ""}
//             onClick={() => p.url && window.open(p.url, "_blank")}
//             role={p.url ? "link" : undefined}
//             tabIndex={p.url ? 0 : undefined}
//           >
//             <img
//               src={p.img}
//               alt={p.title}
//               className="w-full h-52 object-cover rounded-t-2xl"
//             />
//             <div className="p-6">
//               <h3 className="text-2xl font-semibold text-yellow-400">{p.title}</h3>
//               <p className="mt-3 text-gray-300 leading-relaxed tracking-wide">
//                 {p.description}
//               </p>
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// }

