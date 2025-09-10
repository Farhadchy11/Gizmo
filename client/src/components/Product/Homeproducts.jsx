import { items } from "../Data/Data.jsx";
import ProductItems from "./ProductItems.jsx";
import { useState } from "react";

const Homeproducts = () => {
  const [products, setProducts] = useState([...items]);

  return (
    <div className="">
      <div class="grid grid-cols-3 gap-4 ">
        {products.map((pd) => (
          <ProductItems pd={pd} />
        ))}
      </div>
    </div>
  );
};

export default Homeproducts;
