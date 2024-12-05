import { Route, Router, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Collection from "./pages/Collection";
import Cart from "./pages/Cart";
import Contact from "./pages/Contact";
import Product from "./pages/Product";
import Orders from "./pages/Orders";
import PlaceOrder from "./pages/PlaceOrder";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/collections" element={<Collection />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product" element={<Product />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="order" element={<Orders />} />
        <Route path="palce-order" element={<PlaceOrder />} />
        <Route path="login" element={<Login />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
