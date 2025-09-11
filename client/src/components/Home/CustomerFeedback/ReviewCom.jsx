const Productsitem = ({ review }) => {
  return (
    <div className="group">
      <div className="relative py-5  sm:py-7 px-2 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:-translate-y-2 overflow-hidden border border-gray-100 ">
        <div className="relative overflow-hidden text-center">
          <div className="absolute  inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <p>{review.description}</p>
        </div>

        <div class="flex pt-4 ">
          <img
            src={review.image}
            class=" max-h-15 rounded-full object-scale-down"
          />
          <div class=" flex-col pl-2">
            <h1 class="text-lg font-semibold"> {review.name} </h1>
            <h1 class="text-blue-500 bg-clip-text">Customer Of Our Shop </h1>
          </div>
        </div>
      </div>

      {/* Bottom hover effect */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
    </div>
  );
};

export default Productsitem;
