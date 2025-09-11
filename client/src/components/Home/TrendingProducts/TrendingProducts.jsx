import { useState } from "react";
import { TrendingProducts } from "../../Data/TrendingProductsData.jsx";
import ProductItems from "../../Product/ProductItems.jsx";
const Mobiles = () => {
const [products, setProducts] = useState([...TrendingProducts]);

  return (
    <>
      <div class=" bg-black text-white  sm:px-5 pt-20">
        <h1 class=" text-lg sm:text-2xl text-center mb-10">TRENDING PRODUCTS </h1>
        <div className="flex flex-col mx-auto sm:gap-4 sm:flex-row sm:gap-y-0  gap-y-5">
          {products.map((pd) => (
            <ProductItems pd={pd} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Mobiles;
