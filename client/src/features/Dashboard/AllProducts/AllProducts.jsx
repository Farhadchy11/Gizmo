import useAxiosSecure from "../../Hooks/useAxiosSecure.jsx";
import { FaDeleteLeft } from "react-icons/fa6";
import { useGetProducts } from "../../Hooks/useGetProducts.jsx";

const AllProducts = () => {
  const axiosSecure = useAxiosSecure();

  const { data: products, isLoading, isError, error } = useGetProducts();

  const deleteProduct = (id) => {
    const productId = id;
    axiosSecure
      .delete(`https://gizmo-taupe.vercel.app/products/${productId}`)
      .then((res) => {
        if (res.data.deletedCount > 0) {
        }
      });
  };

  if (isLoading) return <div>Loading all products...</div>;
  if (isError) return <div>Error: {error.message}</div>;

  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold mb-6 text-center ">All Products</h2>

      <div className="overflow-x-auto">
        <table className="min-w-full rounded-lg shadow">
          <thead>
            <tr className="">
              <th className="py-3 px-4 text-left">#</th>
              <th className="py-3 px-4 text-left">Product Name</th>
              <th className="py-3 px-4 text-left">Price</th>
              <th className="py-3 px-4 text-left">Category</th>
              <th className="py-3 px-4 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={product._id} className="border-t ">
                <td className="py-3 px-4">{index + 1}</td>
                <td className="py-3 px-4 font-medium">{product.title}</td>
                <td className="py-3 px-4">${product.price}</td>
                <td className="py-3 px-4">{product.category}</td>
                <td className="py-3 px-4">
                  <button
                    onClick={() => deleteProduct(product._id)}
                    className="bg-red-500 hover:bg-green-600 text-white px-4 py-1 rounded text-sm flex items-center gap-2"
                  >
                    <FaDeleteLeft />
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllProducts;
