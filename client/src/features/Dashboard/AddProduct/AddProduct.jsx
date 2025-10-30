import useAxiosSecure from "../../../hooks/useAxiosSecure.jsx";

const AddProducts = () => {
  const axiosSecure = useAxiosSecure();
  const handleAddSubmit = async (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const price = e.target.price.value;
    const category = e.target.category.value;
    const des = e.target.details.value;
    const imgSrc = e.target.imgSrc.value;

    const product = {
      title,
      price: parseFloat(price),
      category,
      des,
      imgSrc,
    };

    const productRes = await axiosSecure.post("/addproduct", product);
  };

  return (
    <div className="w-full mx-auto p-6  shadow-xl rounded-xl mt-10">
      <h2 className="text-3xl font-bold text-center text-indigo-600 mb-6">
        Add New Product
      </h2>

      <form
        onSubmit={handleAddSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-5"
      >
        {/* Name */}
        <div>
          <label className="text-gray-700 font-medium">Product Title</label>
          <input
            name="title"
            type="text"
            required
            placeholder="Product Name"
            className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400 dark:bg-gray-800"
          />
        </div>

        {/* Price */}
        <div>
          <label className="text-gray-700 font-medium">Price</label>
          <input
            name="price"
            type="number"
            required
            placeholder="price"
            className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400 dark:bg-gray-800"
          />
        </div>

        {/* Category */}
        <div>
          <label className="text-gray-700 font-medium">Category</label>
          <input
            name="category"
            type="text"
            required
            placeholder="Category"
            className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400 dark:bg-gray-800"
          />
        </div>
        <div>
          <label className="text-gray-700 font-medium">Image Source</label>
          <input
            name="imgSrc"
            type="text"
            required
            placeholder="Image Source URL..."
            className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400 dark:bg-gray-800"
          />
        </div>

        {/* Details */}
        <div className="md:col-span-2">
          <label className="text-gray-700 font-medium">Product Details</label>
          <textarea
            name="details"
            rows="3"
            required
            placeholder="Write something about the product..."
            className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400 dark:bg-gray-800"
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="md:col-span-2 text-center mt-4">
          <button
            type="submit"
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-2 rounded-md font-semibold transition duration-300 dark:bg-gray-800"
          >
            Add Product
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProducts;
