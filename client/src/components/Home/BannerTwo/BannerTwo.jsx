import { Link } from "react-router-dom";
import offerOne from "../img/sub-banner-1.webp";
import offerTwo from "../img/sub-banner-2.webp";

const Banner = () => {
  return (
    <div class="grid h-[21.25rem] bg-black sm:grid-cols-2 gap-5 px-3">
      <div
        className=" flex  items-center py-4 sm:py-0  bg-cover bg-center bg-no-repeat  sm:object-contain "
        style={{ backgroundImage: `url(${offerOne})` }}
      >
        <div class="text-xl pl-5 md:text-2xl lg:text-3xl font-bold text-gray-800 leading-tight">
          <h5 class="text-sm font-normal ">BEST COLLECTION </h5>
          <span class="pt-3 inline-block transform hover:scale-105 transition-transform duration-300">
            Best VR Ultra
          </span>
          <br />
          <span class="inline-block transform hover:scale-105 transition-transform duration-300">
            Headset With
          </span>
          <br />
          <span class="pb-3 inline-block transform hover:scale-105 transition-transform duration-300">
            HD Lenses
          </span>
          <br />
          <Link to={"/Products"} class="">
            <button class="text-sm font-normal  border-b border-black-400">
              SHOP NOW{" "}
            </button>
          </Link>
        </div>
      </div>
      <div
        className="flex  items-center py-4 sm:py-0  bg-cover bg-center bg-no-repeat sm:object-contain  s"
        style={{ backgroundImage: `url(${offerTwo})` }}
      >
        <div class="text-xl pl-5 md:text-2xl lg:text-3xl font-bold text-gray-800 leading-tight">
          <h5 class="text-sm font-normal ">TODAY'S BEST DEAL </h5>
          <span class="pt-3 inline-block transform hover:scale-105 transition-transform duration-300">
            The iPhone X
          </span>
          <br />
          <span class="inline-block transform hover:scale-105 transition-transform duration-300">
            A Revolution
          </span>
          <br />
          <span class="pb-3 inline-block transform hover:scale-105 transition-transform duration-300">
            Smartphon
          </span>
          <br />
          <Link to={"/Products"} class="">
            <button class="text-sm font-normal  border-b border-black-400">
              SHOP NOW{" "}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
