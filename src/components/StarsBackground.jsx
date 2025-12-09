import { useEffect, useState } from "react";

export default function StarsBackground() {
  const [shootingStars, setShootingStars] = useState([]);

  useEffect(() => {
    const stars = [];
    const count = 4; // Shooting stars

    for (let i = 0; i < count; i++) {
      stars.push({
        id: i,
        top: Math.random() * 90 + 5, // 5% to 95%
        left: Math.random() * 90 + 5,
        length: Math.random() * 60 + 30,
        duration: Math.random() * 6 + 8,
        delay: Math.random() * 10,
        opacity: Math.random() * 0.5 + 0.5,
        baseAngle: 60,
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
        {shootingStars.map(
          ({ id, top, left, length, duration, delay, opacity, baseAngle }) => {
            const angle = baseAngle + Math.random() * 60 - 30; // Randomize slightly
            return (
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
                  "--shooting-angle": `${angle}deg`,
                }}
              />
            );
          }
        )}
      </div>

      <style jsx>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }

        @keyframes shooting {
          0% {
            height: 2px;
            transform: translate(0, 0) rotate(var(--shooting-angle, 45deg));
            opacity: 1;
          }
          20% {
            height: var(--shooting-length, 40px);
            opacity: 1;
          }
          100% {
            height: var(--shooting-length, 40px);
            transform: translate(-500px, 200px) rotate(var(--shooting-angle, 45deg));
            opacity: 0;
          }
        }
      `}</style>
    </>
  );
}

// //src/components/StarsBackground.jsx
// import { useEffect, useState } from "react";

// export default function StarsBackground() {
//   const [shootingStars, setShootingStars] = useState([]);

//   useEffect(() => {
//     const stars = [];
//     const count = 4; // Reduced number of shooting stars to half

//     for (let i = 0; i < count; i++) {
//       stars.push({
//         id: i,
//         top: Math.random() * 90 + 5, // 5% to 95%
//         left: Math.random() * 90 + 5, // 5% to 95%
//         length: Math.random() * 60 + 30, // 30 to 90 px
//         duration: Math.random() * 6 + 8, // 8 to 14 sec
//         delay: Math.random() * 10, // 0 to 10 sec
//         opacity: Math.random() * 0.5 + 0.5, // 0.5 to 1
//         baseAngle: 60, // Base angle of 45 degrees
//       });
//     }
//     setShootingStars(stars);
//   }, []);

//   return (
//     <>
//       <div
//         className="fixed inset-0 overflow-hidden z-0 pointer-events-none"
//         style={{
//           background:
//             "linear-gradient(to bottom, #000000 0%, #05050a 30%, #0b1e3d 60%, #15325c 85%, #1a2a5a 100%)",
//         }}
//       >
//         {/* Stars layers */}
//         <div className="stars-layer1 absolute inset-0"></div>
//         <div className="stars-layer2 absolute inset-0"></div>
//         <div className="stars-layer3 absolute inset-0"></div>

//         {/* Tiny random stars */}
//         {[...Array(150)].map((_, i) => {
//           const style = {
//             position: "absolute",
//             top: `${Math.random() * 100}%`,
//             left: `${Math.random() * 100}%`,
//             width: `${Math.random() * 1.7 + 0.5}px`,
//             height: `${Math.random() * 1.7 + 0.5}px`,
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
//         {shootingStars.map(({ id, top, left, length, duration, delay, opacity, baseAngle }) => {
//           const angle = baseAngle + Math.random() * 180 - 30; // Randomize angle between -30 to +30 degrees from base angle (45)
//           return (
//             <div
//               key={id}
//               className="shooting-star"
//               style={{
//                 position: "absolute",
//                 top: `${top}%`,
//                 left: `${left}%`,
//                 width: "2px",
//                 height: "2px",
//                 borderRadius: "9999px",
//                 background: "linear-gradient(45deg, white, transparent)",
//                 filter: "drop-shadow(0 0 6px white)",
//                 transformOrigin: "top left",
//                 animationName: "shooting",
//                 animationTimingFunction: "linear",
//                 animationIterationCount: "infinite",
//                 animationDuration: `${duration}s`,
//                 animationDelay: `${delay}s`,
//                 opacity: opacity,
//                 "--shooting-length": `${length}px`,
//                 "--shooting-angle": `${angle}deg`, // Apply the random angle
//               }}
//             />
//           );
//         })}
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
//             transform: translate(0, 0) rotate(var(--shooting-angle, 45deg));
//             opacity: 1;
//           }
//           20% {
//             height: var(--shooting-length, 40px);
//             opacity: 1;
//           }
//           100% {
//             height: var(--shooting-length, 40px);
//             transform: translate(-500px, 200px) rotate(var(--shooting-angle, 45deg));
//             opacity: 0;
//           }
//         }
//       `}</style>
//     </>
//   );
// }


