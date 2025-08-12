//Version 4

import { useEffect, useState } from "react";

export default function StarsBackground() {
  const [shootingStars, setShootingStars] = useState([]);

  useEffect(() => {
    const stars = [];
    const count = 8; // More shooting stars

    for (let i = 0; i < count; i++) {
      stars.push({
        id: i,
        top: Math.random() * 90 + 5, // 5% to 95%
        left: Math.random() * 90 + 5, // 5% to 95%
        length: Math.random() * 60 + 30, // 30 to 90 px
        duration: Math.random() * 6 + 8, // 8 to 14 sec
        delay: Math.random() * 10, // 0 to 10 sec
        opacity: Math.random() * 0.5 + 0.5, // 0.5 to 1
      });
    }
    setShootingStars(stars);
  }, []);

  return (
    <>
      <div
        className="fixed inset-0 overflow-hidden z-0 pointer-events-none"
        style={{
            background:
              "linear-gradient(to bottom, #000000 0%, #05050a 30%, #0b1e3d 60%, #15325c 85%, #1a2a5a 100%)",
          }}
          
      >
        {/* Stars layers */}
        <div className="stars-layer1 absolute inset-0"></div>
        <div className="stars-layer2 absolute inset-0"></div>
        <div className="stars-layer3 absolute inset-0"></div>

        {/* Tiny random stars */}
        {[...Array(150)].map((_, i) => {
          const style = {
            position: "absolute",
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            width: `${Math.random() * 1.7 + 0.5}px`,
            height: `${Math.random() * 1.7 + 0.5}px`,
            borderRadius: "50%",
            backgroundColor: "white",
            opacity: Math.random() * 0.8 + 0.2,
            filter: "drop-shadow(0 0 2px white)",
            animation: `twinkle ${5 + Math.random() * 5}s ease-in-out infinite alternate`,
            animationDelay: `${Math.random() * 5}s`,
          };
          return <div key={"tiny-star-" + i} style={style} />;
        })}

        {/* Shooting stars */}
        {shootingStars.map(({ id, top, left, length, duration, delay, opacity }) => (
          <div
            key={id}
            className="shooting-star"
            style={{
              position: "absolute",
              top: `${top}%`,
              left: `${left}%`,
              width: "2px",
              height: "2px",
              borderRadius: "9999px",
              background: "linear-gradient(45deg, white, transparent)",
              filter: "drop-shadow(0 0 6px white)",
              transformOrigin: "top left",
              animationName: "shooting",
              animationTimingFunction: "linear",
              animationIterationCount: "infinite",
              animationDuration: `${duration}s`,
              animationDelay: `${delay}s`,
              opacity: opacity,
              "--shooting-length": `${length}px`,
            }}
          />
        ))}
      </div>

      <style jsx>{`
        .stars-layer1 {
          box-shadow:
            20px 40px 1.2px white,
            70px 90px 1.4px white,
            130px 180px 1.3px white,
            190px 60px 1.1px white,
            260px 200px 1.4px white,
            310px 90px 1.3px white,
            370px 150px 1.2px white,
            420px 130px 1.1px white,
            470px 70px 1.4px white,
            530px 190px 1.3px white,
            590px 80px 1.2px white,
            640px 160px 1.4px white,
            690px 100px 1.3px white,
            740px 140px 1.1px white,
            790px 190px 1.2px white;
          width: 2px;
          height: 2px;
          border-radius: 50%;
          animation: twinkle 6s infinite alternate;
          opacity: 0.7;
          pointer-events: none;
          position: absolute;
          top: 0;
          left: 0;
          z-index: 0;
        }
        .stars-layer2 {
          box-shadow:
            30px 60px 1.1px white,
            80px 110px 1.3px white,
            140px 190px 1.2px white,
            200px 70px 1.4px white,
            270px 210px 1.3px white,
            320px 120px 1.1px white,
            380px 170px 1.4px white,
            430px 140px 1.2px white,
            480px 90px 1.3px white,
            540px 200px 1.1px white,
            600px 100px 1.4px white,
            650px 170px 1.3px white,
            700px 130px 1.2px white,
            750px 150px 1.1px white,
            800px 200px 1.3px white;
          width: 2px;
          height: 2px;
          border-radius: 50%;
          animation: twinkle 7s infinite alternate;
          opacity: 0.6;
          pointer-events: none;
          position: absolute;
          top: 0;
          left: 0;
          z-index: 0;
        }
        .stars-layer3 {
          box-shadow:
            15px 50px 1.3px white,
            65px 90px 1.1px white,
            120px 180px 1.4px white,
            180px 60px 1.2px white,
            240px 210px 1.3px white,
            300px 80px 1.1px white,
            360px 140px 1.2px white,
            410px 110px 1.3px white,
            460px 80px 1.1px white,
            520px 190px 1.4px white,
            570px 90px 1.3px white,
            620px 160px 1.2px white,
            670px 120px 1.1px white,
            720px 150px 1.3px white,
            770px 180px 1.4px white;
          width: 2px;
          height: 2px;
          border-radius: 50%;
          animation: twinkle 5s infinite alternate;
          opacity: 0.5;
          pointer-events: none;
          position: absolute;
          top: 0;
          left: 0;
          z-index: 0;
        }

        @keyframes twinkle {
          0%, 100% {
            opacity: 0.5;
          }
          50% {
            opacity: 1;
          }
        }

        @keyframes shooting {
          0% {
            height: 2px;
            transform: translate(0, 0) rotate(45deg);
            opacity: 1;
          }
          20% {
            height: var(--shooting-length, 40px);
            opacity: 1;
          }
          100% {
            height: var(--shooting-length, 40px);
            transform: translate(-500px, 200px) rotate(45deg);
            opacity: 0;
          }
        }
      `}</style>
    </>
  );
}


//Version 3
// import { useEffect, useState } from "react";

// export default function StarsBackground() {
//   const [shootingStars, setShootingStars] = useState([]);

//   // Generate random shooting stars with random props
//   useEffect(() => {
//     const stars = [];
//     const count = 6; // number of shooting stars

//     for (let i = 0; i < count; i++) {
//       stars.push({
//         id: i,
//         top: Math.random() * 80 + 10, // 10% to 90% vertical position
//         left: Math.random() * 90 + 5, // 5% to 95% horizontal position
//         length: Math.random() * 60 + 30, // 30px to 90px length
//         duration: Math.random() * 5 + 6, // 6s to 11s duration
//         delay: Math.random() * 10, // 0s to 10s delay
//         opacity: Math.random() * 0.5 + 0.5, // 0.5 to 1 opacity
//       });
//     }
//     setShootingStars(stars);
//   }, []);

//   // Generate dense stars in box-shadow form — this is fixed for performance
//   // Additional tiny stars randomized below

//   return (
//     <>
//       <div
//         className="fixed inset-0 overflow-hidden z-0 pointer-events-none"
//         style={{
//           background:
//             "linear-gradient(to top, #000000 0%, #0b1e3d 70%, #1a2a5a 100%)",
//         }}
//       >
//         {/* Dense stars layers */}
//         <div className="stars-layer1 absolute inset-0"></div>
//         <div className="stars-layer2 absolute inset-0"></div>
//         <div className="stars-layer3 absolute inset-0"></div>

//         {/* Random tiny stars for sparkle */}
//         {[...Array(100)].map((_, i) => {
//           const style = {
//             position: "absolute",
//             top: `${Math.random() * 100}%`,
//             left: `${Math.random() * 100}%`,
//             width: `${Math.random() * 1.5 + 0.5}px`,
//             height: `${Math.random() * 1.5 + 0.5}px`,
//             borderRadius: "50%",
//             backgroundColor: "white",
//             opacity: Math.random() * 0.8 + 0.2,
//             filter: "drop-shadow(0 0 2px white)",
//             animation: `twinkle ${5 + Math.random() * 5}s ease-in-out infinite alternate`,
//             animationDelay: `${Math.random() * 5}s`,
//           };
//           return <div key={"tiny-star-" + i} style={style} />;
//         })}

//         {/* Shooting stars */}
//         {shootingStars.map(({ id, top, left, length, duration, delay, opacity }) => (
//           <div
//             key={id}
//             className="shooting-star"
//             style={{
//               top: `${top}%`,
//               left: `${left}%`,
//               width: "2px",
//               height: "2px",
//               borderRadius: "9999px",
//               background:
//                 "linear-gradient(45deg, white, transparent)",
//               filter: "drop-shadow(0 0 6px white)",
//               transformOrigin: "top left",
//               animationName: "shooting",
//               animationTimingFunction: "linear",
//               animationIterationCount: "infinite",
//               animationDuration: `${duration}s`,
//               animationDelay: `${delay}s`,
//               opacity: opacity,
//               // Pass length as CSS variable for animation
//               "--shooting-length": `${length}px`,
//             }}
//           />
//         ))}
//       </div>

//       <style jsx>{`
//         .stars-layer1 {
//           box-shadow:
//             20px 40px 1.2px white,
//             70px 90px 1.4px white,
//             130px 180px 1.3px white,
//             190px 60px 1.1px white,
//             260px 200px 1.4px white,
//             310px 90px 1.3px white,
//             370px 150px 1.2px white,
//             420px 130px 1.1px white,
//             470px 70px 1.4px white,
//             530px 190px 1.3px white,
//             590px 80px 1.2px white,
//             640px 160px 1.4px white,
//             690px 100px 1.3px white,
//             740px 140px 1.1px white,
//             790px 190px 1.2px white;
//           width: 2px;
//           height: 2px;
//           border-radius: 50%;
//           animation: twinkle 6s infinite alternate;
//           opacity: 0.7;
//           pointer-events: none;
//           position: absolute;
//           top: 0;
//           left: 0;
//           z-index: 0;
//         }
//         .stars-layer2 {
//           box-shadow:
//             30px 60px 1.1px white,
//             80px 110px 1.3px white,
//             140px 190px 1.2px white,
//             200px 70px 1.4px white,
//             270px 210px 1.3px white,
//             320px 120px 1.1px white,
//             380px 170px 1.4px white,
//             430px 140px 1.2px white,
//             480px 90px 1.3px white,
//             540px 200px 1.1px white,
//             600px 100px 1.4px white,
//             650px 170px 1.3px white,
//             700px 130px 1.2px white,
//             750px 150px 1.1px white,
//             800px 200px 1.3px white;
//           width: 2px;
//           height: 2px;
//           border-radius: 50%;
//           animation: twinkle 7s infinite alternate;
//           opacity: 0.6;
//           pointer-events: none;
//           position: absolute;
//           top: 0;
//           left: 0;
//           z-index: 0;
//         }
//         .stars-layer3 {
//           box-shadow:
//             15px 50px 1.3px white,
//             65px 90px 1.1px white,
//             120px 180px 1.4px white,
//             180px 60px 1.2px white,
//             240px 210px 1.3px white,
//             300px 80px 1.1px white,
//             360px 140px 1.2px white,
//             410px 110px 1.3px white,
//             460px 80px 1.1px white,
//             520px 190px 1.4px white,
//             570px 90px 1.3px white,
//             620px 160px 1.2px white,
//             670px 120px 1.1px white,
//             720px 150px 1.3px white,
//             770px 180px 1.4px white;
//           width: 2px;
//           height: 2px;
//           border-radius: 50%;
//           animation: twinkle 5s infinite alternate;
//           opacity: 0.5;
//           pointer-events: none;
//           position: absolute;
//           top: 0;
//           left: 0;
//           z-index: 0;
//         }

//         @keyframes twinkle {
//           0%, 100% {
//             opacity: 0.5;
//           }
//           50% {
//             opacity: 1;
//           }
//         }

//         @keyframes shooting {
//           0% {
//             height: 2px;
//             transform: translate(0, 0) rotate(45deg);
//             opacity: 1;
//           }
//           20% {
//             height: var(--shooting-length, 40px);
//             opacity: 1;
//           }
//           100% {
//             height: var(--shooting-length, 40px);
//             transform: translate(-500px, 200px) rotate(45deg);
//             opacity: 0;
//           }
//         }
//       `}</style>
//     </>
//   );
// }

//Version 2

// export default function StarsBackground() {
//     return (
//       <>
//         <div
//           className="fixed inset-0 overflow-hidden z-0"
//           style={{
//             background:
//               "linear-gradient(to top, #050507 40%, #1a2544 100%)", // darker bottom 40%, lighter top 60%
//           }}
//         >
//           {/* Many more stars using layered box-shadow */}
//           <div className="stars absolute top-0 left-0 w-full h-full"></div>
//           <div className="stars layer2 absolute top-0 left-0 w-full h-full"></div>
//           <div className="stars layer3 absolute top-0 left-0 w-full h-full"></div>
  
//           {/* Shooting stars */}
//           <div
//             className="shooting-star absolute opacity-75"
//             style={{ top: "20%", left: "90%" }}
//           />
//           <div
//             className="shooting-star absolute opacity-50"
//             style={{ top: "45%", left: "85%" }}
//           />
//           <div
//             className="shooting-star absolute opacity-60"
//             style={{ top: "65%", left: "80%" }}
//           />
//         </div>
  
//         <style jsx>{`
//           .stars {
//             width: 2px;
//             height: 2px;
//             border-radius: 50%;
//             box-shadow:
//               10px 20px 1px white,
//               40px 80px 1.5px white,
//               80px 30px 1.2px white,
//               130px 100px 1px white,
//               200px 60px 1.4px white,
//               300px 120px 1.1px white,
//               400px 90px 1.3px white,
//               450px 160px 1.2px white,
//               500px 100px 1.4px white,
//               550px 80px 1.5px white,
//               600px 130px 1.1px white,
//               650px 90px 1.3px white,
//               700px 200px 1.4px white,
//               750px 50px 1.2px white,
//               800px 140px 1.3px white;
//             animation: twinkle 5s infinite alternate;
//             z-index: 0;
//             pointer-events: none;
//             position: absolute;
//             top: 0;
//             left: 0;
//           }
//           .stars.layer2 {
//             box-shadow:
//               15px 60px 1.4px white,
//               50px 140px 1.3px white,
//               90px 70px 1.1px white,
//               140px 200px 1.5px white,
//               210px 160px 1.4px white,
//               320px 80px 1.2px white,
//               430px 120px 1.1px white,
//               470px 190px 1.3px white,
//               510px 90px 1.4px white,
//               580px 160px 1.3px white,
//               620px 130px 1.2px white,
//               660px 210px 1.5px white,
//               720px 110px 1.3px white;
//             animation-duration: 6.5s;
//             opacity: 0.7;
//           }
//           .stars.layer3 {
//             box-shadow:
//               20px 10px 1.1px white,
//               60px 40px 1.2px white,
//               100px 130px 1.3px white,
//               160px 100px 1.4px white,
//               220px 30px 1.1px white,
//               330px 150px 1.2px white,
//               450px 50px 1.3px white,
//               490px 180px 1.4px white,
//               530px 100px 1.1px white,
//               600px 60px 1.2px white,
//               640px 150px 1.3px white,
//               680px 80px 1.4px white,
//               740px 40px 1.1px white;
//             animation-duration: 4.5s;
//             opacity: 0.6;
//           }
  
//           @keyframes twinkle {
//             0%,
//             100% {
//               opacity: 0.7;
//             }
//             50% {
//               opacity: 1;
//             }
//           }
  
//           .shooting-star {
//             width: 2px;
//             height: 2px;
//             border-radius: 9999px;
//             background: linear-gradient(45deg, white, transparent);
//             filter: drop-shadow(0 0 6px white);
//             transform-origin: top left;
//             animation-timing-function: linear;
//             animation-iteration-count: infinite;
//             animation-name: shooting;
//             animation-duration: 8s; /* slowed down (half previous 4s) */
//           }
  
//           /* shooting star animation: start very small (2px height), grow to 40px, then move diagonally and fade */
//           @keyframes shooting {
//             0% {
//               height: 2px;
//               transform: translate(0, 0) rotate(45deg);
//               opacity: 1;
//             }
//             20% {
//               height: 40px;
//               opacity: 1;
//             }
//             100% {
//               height: 40px;
//               transform: translate(-500px, 200px) rotate(45deg);
//               opacity: 0;
//             }
//           }
//         `}</style>
//       </>
//     );
//   }

//Version 1
  
// export default function StarsBackground() {
//     return (
//       <>
//         {/* Static stars */}
//         <div className="fixed inset-0 bg-gradient-to-b from-blackLux to-blue-900 overflow-hidden z-0">
//           <div className="stars absolute top-0 left-0 w-full h-full"></div>
//           {/* Shooting stars */}
//           <div className="shooting-star absolute w-64 h-1 bg-white rounded-full opacity-75
//                           animate-shooting-star1"></div>
//           <div className="shooting-star absolute w-48 h-1 bg-white rounded-full opacity-50
//                           animate-shooting-star2"></div>
//         </div>
  
//         <style jsx>{`
//           .stars {
//             box-shadow:
//               10px 20px 1px white,
//               40px 80px 1.5px white,
//               80px 30px 1.2px white,
//               130px 100px 1px white,
//               200px 60px 1.4px white,
//               300px 120px 1.1px white,
//               400px 90px 1.3px white;
//             width: 2px;
//             height: 2px;
//             border-radius: 50%;
//             animation: twinkle 5s infinite alternate;
//           }
  
//           .shooting-star {
//             top: 20%;
//             left: 50%;
//             transform: rotate(45deg);
//             filter: drop-shadow(0 0 6px white);
//           }
  
//           .animate-shooting-star1 {
//             animation: shooting-star 4s linear infinite;
//             animation-delay: 0s;
//           }
  
//           .animate-shooting-star2 {
//             top: 40%;
//             left: 20%;
//             animation: shooting-star 6s linear infinite;
//             animation-delay: 2s;
//           }
  
//           @keyframes twinkle {
//             0%, 100% { opacity: 0.7; }
//             50% { opacity: 1; }
//           }
  
//           @keyframes shooting-star {
//             0% {
//               transform: translateX(0) translateY(0) rotate(45deg);
//               opacity: 1;
//             }
//             100% {
//               transform: translateX(-500px) translateY(200px) rotate(45deg);
//               opacity: 0;
//             }
//           }
//         `}</style>
//       </>
//     )
//   }
  