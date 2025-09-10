//import mobileImg from "../img/category-1_x100.webp";
import parnersLogo1 from "../img/partner-logo-1.avif";
import parnersLogo2 from "../img/partner-logo-2.webp";
import parnersLogo3 from "../img/partner-logo-3.avif";
import parnersLogo4 from "../img/partner-logo-4.webp";

const Partners = () => {
  return (
    <>
      <div class="bg-black  text-white px-20 flex flex-col sm:flex-row sm:justify-between ">
        <div class=" flex mx-auto sm:mx-0 items-center  h-50 w-50 ">
          <img src={parnersLogo1} class=" sm:mx-auto object-scale-down" />
        </div>
        <div class=" flex mx-auto sm:mx-0 items-center  h-50 w-50 ">
          <img src={parnersLogo2} class=" sm:mx-auto object-scale-down" />
        </div>
        <div class=" flex mx-auto sm:mx-0 items-center  h-50 w-50 ">
          <img src={parnersLogo3} class=" sm:mx-auto object-scale-down" />
        </div>
        <div class=" flex mx-auto sm:mx-0 items-center  h-50 w-50 ">
          <img src={parnersLogo4} class=" sm:mx-auto object-scale-down" />
        </div>
      </div>
    </>
  );
};

export default Partners;
