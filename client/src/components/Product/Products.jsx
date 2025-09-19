import { useEffect, useState } from "react";
import { items } from "../Data/Data.jsx";
import ProductItems from "./ProductItems.jsx";


const Products = () => {
  const [products, setProducts] = useState([...items]);
  const [categories, setCategories] = useState(["all"]);
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [priceLimit, setPriceLimit] = useState(300);

  useEffect(() => {
    const uniqueCategories = [
      "All",
      ...new Set(products.map((pd) => pd.category)),
    ];
    setCategories(uniqueCategories);
  }, []);

  const filteredProducts = products.filter(
    (product) =>
      (selectedCategory === "All" || product.category === selectedCategory) &&
      product.price <= priceLimit &&
      product.title.toLowerCase().includes(search.toLowerCase()) // Search functionality
  );

  return (
    <div className=" flex flex-col px-2 sm:px-0 gap-4 sm:gap-0 sm:flex-row items center w-screen py-8 sm:py-12  ">
      <div className=" flex flex-row sm:flex-col items-center mx-auto border border-gray-300  px-2 sm:py-5 ">
        {/* Search Input */}
        <input
          type="text"
          placeholder="Search products..."
          class="w-full  border rounded mb-4"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <div className=" p-4 rounded-lg mb-4 ">
          <h2 className="font-bold mb-2">Categories</h2>
          <ul>
            {categories.map((cat) => (
              <li key={cat} onClick={() => setSelectedCategory(cat)}>
                {cat}
              </li>
            ))}
          </ul>
        </div>

        {/* Price Filter */}
        <div>
          <h2 className="font-bold ">Price</h2>
          <input
            type="range"
            min="0"
            max="2000"
            value={priceLimit}
            onChange={(e) => setPriceLimit(Number(e.target.value))}
            class="w-full"
          />
          <p className="text-sm md:text-base">Up to ৳{priceLimit}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 mx-auto  justify-between gap-y-4 ">
        {filteredProducts.map((pd) => (
          <ProductItems pd={pd} />
        ))}
      </div>
    </div>
  );
};

export default Products;
