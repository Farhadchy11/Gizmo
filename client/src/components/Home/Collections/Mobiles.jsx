import { useEffect, useState } from "react";
import { MobilesData } from "./MobilesData.jsx";
import ProductItems from "../../Product/ProductItems.jsx";

const Mobiles = () => {

  const [products, setProducts] = useState([...MobilesData]);
  const [categories, setCategories] = useState(["all"]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    const uniqueCategories = [
      "All",
      ...new Set(products.map((pd) => pd.brand)),
    ];
    setCategories(uniqueCategories);
  }, []);

  const filteredProducts = products.filter(
    (product) =>
      selectedCategory === "All" || product.brand === selectedCategory
  );

  return (
    <>
      <div className=" flex flex-row ">
        <div className="">
          <h2 className="font-bold mb-2">Categories</h2>
          <ul>
            {categories.map((cat) => (
              <li key={cat} onClick={() => setSelectedCategory(cat)}>
                {cat}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex sm: flex-row flex-wrap ">
          {filteredProducts.map((pd) => (
            <ProductItems pd={pd} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Mobiles;
