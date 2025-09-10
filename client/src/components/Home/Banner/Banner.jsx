//import { AiOutlineShoppingCart, AiOutlineArrowRight } from "react-icons/ai";
//import { Link } from "react-router-dom";
//import background from "../img/hero1.jpg";
import background from "../img/main-banner-1.webp";
//import offerOne from "../img/sub-banner-1.webp";

const Banner = () => {
  return (
    <div className=" grid h-[100]  sm:h-screen sm:py-0 md: lg: xl: overflow-hidden">
      <div
        className=" flex  items-center  bg-cover bg-center py-15 bg-no-repeat "
        style={{ backgroundImage: `url(${background})` }}
      >
        <div class=" text-black pl-4 sm:pl-7 leading-tight">
          <h1 className="text-lg font-semibold bg-clip-text sm:text-6xl lg:text-7xl  mb-3">
            Explore,
            <span className="block  bg-clip-text ">Shop,</span>
            <span className="block bg-clip-text sm:pb-2 ">Repeat again</span>
          </h1>
          <div class="pb-2">
            <button class="bg-black  text-white text-xs p-2 sm:text-base rounded-full sm:p-2">
              Shop Now
            </button>
          </div>
        </div>
      </div>

      {/* Background Image */}
      {/* <div
        // className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        class=" inset-0 h-screen bg-cover bg-no-repeat bg-center flex items-center  "
        // className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${background})` }}
      >
        {/* <div
        className="absolute inset-0  bg-cover  bg-no-repeat flex items-center pl-6"
        // className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${background})` }}
      > */}
      {/* <h1 className="text-4xl pl-6 md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
          Explore,
          <span className="block pl-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Shop,
          </span>
          <span className="block pl-6 text-blue-300">Repeat again</span>
          <span className="block pl-6 text-blue-300">Repeat again</span>
          <span className="block pl-6 text-blue-300">Repeat again</span>
          <span className="block pl-6 text-blue-300">Repeat again</span>
          <span className="block pl-6 text-blue-300">Repeat again</span>
        </h1>
      </div>  */}
    </div>
  );
};

export default Banner;
