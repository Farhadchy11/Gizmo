//import Mobiles from "../Collections/Mobiles.jsx";
import { Link } from "react-router-dom";
import mobileImg from "../img/category-1_x100.webp";
import laptopImg from "../img/category-4_x100.avif";
import watchImg from "../img/category-6_x100.avif";
import airpodsImg from "../img/category-5_x100.webp";

const Categories = () => {
  return (
    <>
      <div class=" bg-black text-white py-12 ">
        <h1 class=" text-2xl text-center pb-8">TRENDING CATEGORIES</h1>
      
        <div class="flex flex-col px-10  sm:flex-row items-center px-50 justify-between ">
          <div class=" flex flex-col  ">
            <div class="flex  bg-[#232323]  items-center h-40 w-40 rounded-full ">
              <img
                src={mobileImg}
                class=" max-h-40 mx-auto  object-scale-down"
              />
            </div>

            <Link to={"/Mobiles"} class="">
              <h1 class="text-lg text-center mt-3 ">Mobiles</h1>
            </Link>
          </div>
          <div class=" flex flex-col  ">
            <div class="flex  bg-[#232323]   items-center h-40 w-40 rounded-full ">
              <img
                src={laptopImg}
                class=" max-h-40 mx-auto  object-scale-down"
              />
            </div>

            <Link to={"/Mobiles"} class="">
              <h1 class="text-lg text-center mt-3 ">Laptops</h1>
            </Link>
          </div>
          <div class=" flex flex-col  ">
            <div class="flex  bg-[#232323]  items-center h-40 w-40 rounded-full ">
              <img
                src={watchImg}
                class=" max-h-40 mx-auto  object-scale-down"
              />
            </div>

            <Link to={"/Mobiles"} class="">
              <h1 class="text-lg text-center mt-3 ">Watch</h1>
            </Link>
          </div>
          <div class=" flex flex-col  ">
            <div class="flex  bg-[#232323]  items-center h-40 w-40 rounded-full ">
              <img
                src={airpodsImg}
                class=" max-h-40 mx-auto  object-scale-down"
              />
            </div>

            <Link to={"/Mobiles"} class="">
              <h1 class="text-lg text-center mt-3 ">Airpods</h1>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Categories;
