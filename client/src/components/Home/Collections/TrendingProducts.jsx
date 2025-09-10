import { useState } from "react";
//import { Mobiles } from "../Data/MobilesData.jsx";
import { TrendingProducts } from "./TrendingProductsData.jsx";
import ProductItems from "../../Product/ProductItems.jsx";
const Mobiles = () => {
  const [products, setProducts] = useState([...TrendingProducts]);
  console.log(products);

  return (
    <>
      <div class=" bg-black text-white pt-12 sm:pt-0 sm:py-0">
        <h1 class=" text-2xl text-center pb-8 ">TRENDING PRODUCTS </h1>
        <div className="flex flex-col mx-auto justify-between sm:flex-row">
          {products.map((pd) => (
            <ProductItems pd={pd} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Mobiles;
