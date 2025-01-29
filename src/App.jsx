import "./App.css";
import Carousel from "./components/Carousel";

function App() {
  const slides = [
    "https://i.ibb.co/ncrXc2V/1.png",
    "https://i.ibb.co/B3s7v4h/2.png",
    "https://i.ibb.co/XXR8kzF/3.png",
    "https://i.ibb.co/yg7BSdM/4.png",
  ];
  return (
    <div className="App">
      <div className="max-w-lg">
        <Carousel slides={slides} autoSlide={false} autoSlideInterval={2000} />
      </div>
    </div>
  );
}

export default App;

// import "./App.css";
// import Carousel from "./components/Carousel";

// function App() {
//   const slides = [
//     "https://i.ibb.co/ncrXc2V/1.png",
//     "https://i.ibb.co/B3s7v4h/2.png",
//     "https://i.ibb.co/XXR8kzF/3.png",
//     "https://i.ibb.co/yg7BSdM/4.png",
//   ];
//   return (
//     <div className="App">
//       <div className="w-screen h-screen flex justify-center items-center">
//         {/* Add padding/margin with a container */}
//         <div className="w-full h-full px-8">
//           <Carousel slides={slides} autoSlide={true} autoSlideInterval={3000} />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;
