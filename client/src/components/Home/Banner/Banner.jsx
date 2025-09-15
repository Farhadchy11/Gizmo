import background from "../img/main-banner-1.webp";

const Banner = () => {
  return (
    <div className=" grid h-[50] lg:h-screen overflow-hidden">
      <div
        className=" flex  items-center  bg-cover bg-center   py-15 bg-no-repeat "
        style={{ backgroundImage: `url(${background})` }}
      >
        <div class=" text-black pl-3 sm:pl-7 md:pl-4 leading-tight">
          <h1 className="text-lg font-semibold bg-clip-text sm:text-6xl   mb-3">
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
    </div>
  );
};

export default Banner;
