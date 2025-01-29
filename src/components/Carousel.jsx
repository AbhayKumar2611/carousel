import React, { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "react-feather";

const Carousel = ({ slides, autoSlide, autoSlideInterval }) => {
  const [curr, setCurr] = useState(0);

  const prev = () => {
    setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
  };
  const next = () => {
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));
  };

  useEffect(() => {
    if (!autoSlide) return;

    const slideInterval = setInterval(next, autoSlideInterval);

    return () => clearInterval(slideInterval);
  }, []);

  return (
    <div className="overflow-hidden relative">
      <div
        className="flex transition--transform ease-out duration-500"
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {slides.map((s, i) => {
          return (
            <div key={i} className="min-w-full">
              <img
                src={s}
                className="w-full h-auto" // Ensures the image takes up full width and maintains its aspect ratio
              />
            </div>
          );
        })}
      </div>
      <div className="absolute inset-0 flex justify-between p-4">
        <button onClick={prev}>
          <ChevronLeft
            size={50}
            className="p-1 rounded-full shadow bg-white/50 text-teal-600 hover:bg-white"
          />
        </button>
        <button onClick={next}>
          <ChevronRight
            size={50}
            className="p-1 rounded-full shadow bg-white/50 text-teal-600 hover:bg-white"
          />
        </button>
      </div>
      <div className="absolute">
        <div className="flex justify-center items-center gap-2">
          {slides.map((_, i) => {
            return (
              <div
                className={`transition-all w-3 h-3 bg-white rounded-full ${
                  curr === i ? "p-2" : "bg-opacity-50"
                }`}
              ></div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Carousel;

// import React, { useEffect, useState } from "react";
// import { ChevronLeft, ChevronRight } from "react-feather";

// const Carousel = ({ slides, autoSlide, autoSlideInterval }) => {
//   const [curr, setCurr] = useState(0);

//   const prev = () => {
//     setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
//   };
//   const next = () => {
//     setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));
//   };

//   useEffect(() => {
//     if (!autoSlide) return;

//     const slideInterval = setInterval(next, autoSlideInterval);

//     return () => clearInterval(slideInterval);
//   }, []);

//   return (
//     <div className="overflow-hidden relative w-full h-full">
//       {/* Carousel Wrapper */}
//       <div
//         className="flex transition-transform ease-out duration-500"
//         style={{ transform: `translateX(-${curr * 100}%)` }}
//       >
//         {slides.map((s, i) => (
//           <div key={i} className="w-full h-full flex-shrink-0">
//             <img
//               src={s}
//               className="w-full h-full object-cover rounded-lg" // Add rounded corners for aesthetic padding effect
//               alt={`Slide ${i}`}
//             />
//           </div>
//         ))}
//       </div>

//       {/* Navigation Buttons */}
//       <div className="absolute inset-0 flex justify-between items-center px-4">
//         <button onClick={prev}>
//           <ChevronLeft
//             size={40}
//             className="p-1 rounded-full shadow bg-white/50 text-teal-600 hover:bg-white"
//           />
//         </button>
//         <button onClick={next}>
//           <ChevronRight
//             size={40}
//             className="p-1 rounded-full shadow bg-white/50 text-teal-600 hover:bg-white"
//           />
//         </button>
//       </div>

//       {/* Indicators */}
//       <div className="absolute bottom-4 w-full flex justify-center items-center gap-2">
//         {slides.map((_, i) => (
//           <div
//             key={i}
//             className={`transition-all w-3 h-3 bg-white rounded-full ${
//               curr === i ? "p-2" : "bg-opacity-50"
//             }`}
//           ></div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Carousel;
