import Navbar from "../components/Navbar/Navbar.jsx";
import Homeproducts from "../components/Product/Homeproducts.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//import Products from "../components/Product/Products.jsx";
// import ProductDetail from './components/ProductDetail'
import SearchItem from "../components/SearchItem/SearchItem.jsx";
import Home from "../components/Home/Home.jsx";
import RegisterForm from "../components/RegisterForm/RegisterForm.jsx";
import LoginForm from "../components/LoginForm/LoginForm.jsx";
import Cart from "../components/Cart/Cart.jsx";
import Dashboard from "../components/Dashboard/Dashboard.jsx";
// import Footer from './components/Footer'
// import { items } from './components/Data'

const App = () => {
  // const [data, setData] = useState([...items])
  // const [cart, setCart] = useState([])
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homeproducts />} />
          {/* <Route path="/products/" element={<Products />} />  */}
          <Route path="/search/:term" element={<SearchItem />} />
          <Route path="/home/" element={<Home />} />
          <Route path="/RegisterForm" element={<RegisterForm />} />
          <Route path="/login" element={<LoginForm />} />

          {/* <Route path="/product/:id" element={<ProductDetail cart={cart} setCart={setCart} />} /> */}

          <Route path="/cart" element={<Cart />} />
          <Route path="/Dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
