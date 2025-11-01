import { useEffect, useState } from "react";
import { useGetProducts } from "../../Hooks/useGetProducts.jsx";
import ProductItems from "../../features/products/components/productItems.jsx";

const Products = () => {
  const { data: products, isLoading, isError, error } = useGetProducts();
  const [categories, setCategories] = useState(["All"]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [priceLimit, setPriceLimit] = useState(4000);

  useEffect(() => {
    const timerId = setTimeout(() => {
      const uniqueCategories = [
        "All",
        ...new Set(products.map((pd) => pd.category)),
      ];
      setCategories(uniqueCategories);
    }, 0);

    return () => clearTimeout(timerId);
  }, [products]);

  if (isLoading) return <div>Loading products...</div>;
  if (isError) return <div>Error: {error.message}</div>;

  const filteredProducts = products.filter(
    (product) =>
      (selectedCategory === "All" || product.category === selectedCategory) &&
      product.price <= priceLimit
  );

  return (
    <div className=" flex flex-col px-2 sm:px-0 gap-4 sm:gap-0 sm:flex-row items center w-screen py-8 sm:py-12  ">
      <div className=" flex flex-row sm:flex-col items-center mx-auto border border-gray-300  px-2 sm:py-5 ">
        {" "}
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
      <div className="grid grid-cols-1 sm:grid-cols-3 mx-auto justify-between gap-y-4 ">
        {filteredProducts.map((product) => (
          <ProductItems pd={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
