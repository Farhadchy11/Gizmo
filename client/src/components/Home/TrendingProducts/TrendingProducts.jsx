


const TrendingProducts = () => {

    // const [products, setProducts] = useState([...MobilesData]);
    // console.log(products)
    //  const [categories, setCategories] = useState(['all']);
    //  const [selectedCategory, setSelectedCategory] = useState("All");
    // const [priceLimit, setPriceLimit] = useState(30000);

    //  useEffect(() => {

    //      setCategories(uniqueCategories);

    //    const uniqueCategories = ["All", ...new Set(products.map((pd) => pd.brand))];
    //      setCategories(uniqueCategories);
    //  }, []);


    // const filteredProducts = products.filter(product =>
    //     (selectedCategory === 'All' || product.brand === selectedCategory))
    //  &&  product.price <= priceLimit)

    // && product.title.toLowerCase().includes(search.toLowerCase()) // Search functionality


    // p-4 max-w-6xl mx-auto mt-28
    return (
        <>
            <div className=" flex flex-row bg-black">

                {/* md:col-span-1 p-4 rounded-lg */}

                {/* <div className="">
                    <h2 className="font-bold mb-2">Categories</h2>
                    <ul>
                        {categories.map((cat) => (
                            <li
                                key={cat}
                                onClick={() => setSelectedCategory(cat)}
                            >
                                {cat}
                            </li>
                        ))}
                    </ul>
                </div>


                <div className="flex flex-row">

                    {filteredProducts.map((pd) => (
                        <ProductItems pd={pd} />
                    ))}

                </div> */}

                <h1>TrendingProducts</h1>
            </div>
        </>

    );
};

export default TrendingProducts;


