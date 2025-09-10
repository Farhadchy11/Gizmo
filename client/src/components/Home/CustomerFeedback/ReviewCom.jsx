const Productsitem = ({ review }) => {
  return (
    <div className="group">
      <div className="relative  rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:-translate-y-2 overflow-hidden border border-gray-100 ">
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

        {/* <h3 className="font-semibold text-gray-800 text-lg mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors duration-200">
            {review.name}
          </h3> */}

        {/* <div className="flex items-center justify-between">
            <div className="flex flex-col">
              <p className="text-2xl text-gray-900">
                {review.description}
              </p> */}
        {/* You can add original price here if needed */}
        {/* <span className="text-sm text-gray-500 line-through">
                                    ৳ {product.originalPrice}
                                </span> */}
        {/* </div>
          </div> */}

        {/* Rating (if you want to add it later) */}
        {/* <div className="flex items-center mt-2">
                            <div className="flex text-yellow-400">
                                ★★★★★
                            </div>
                            <span className="text-sm text-gray-500 ml-2">(24 reviews)</span>
                        </div> */}
      </div>

      {/* Bottom hover effect */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
    </div>
  );
};

export default Productsitem;
