import React, { useEffect, useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import NavigationPage from "./Components/NavigationPage";
import Products from "./Components/Products";
import Cart from "./Components/Cart";
import Login from "./Components/Login";
import Register from "./Components/Register";
import ContactUs from "./Components/ContactUs";
import AboutUs from "./pages/AboutUs";
import NotFound from "./Components/NotFound";
import Footer from "./Components/Footer";
import Labs from "./pages/Labs";
// import HomeCard from "./Components/HomeCard";
import Product from "./Components/Product";
import getUserapi from "./api/getUser";
import getCartapi from "./api/getCart";

export default function App() {
  const [cart, setCart] = useState([]);
  const [user, setUser] = useState([]);
  
  const retreiveCartData = async () => {
    const response = await getCartapi();
    setCart(response);
  };

  useEffect(() => {
    localStorage.getItem("token") && retreiveCartData();
    // eslint-disable-next-line
  }, []);

  const getUserDetails = async () => {
    const response = await getUserapi();
    setUser(response);
    // console.log(response);
  };

  useEffect(() => {
    localStorage.getItem("token") && getUserDetails();
  }, []);
  return (
    <>
      <NavigationPage cartData={cart} setCart={setCart} user={user} setUser={setUser}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/products"
          element={<Products cartData={cart} setCart={setCart} category="" />}
        />
        <Route path="/products/:id" element={<Product cartData={cart} setCart={setCart} />} />
        <Route path="/get-cart" element={<Cart cartData={cart} setCart={setCart}/>} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/labs" element={<Labs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/men" element={<Products category="men" cartData={cart} setCart={setCart}/>} />
        <Route path="/women" element={<Products category="women" cartData={cart} setCart={setCart}/>} />
        <Route path="/sneakers" element={<Products category="sneakers" cartData={cart} setCart={setCart}/>} />
        <Route path="/boots" element={<Products category="boots" cartData={cart} setCart={setCart}/>} />
        <Route
          path="/Bestsellers"
          element={<Products category="Bestsellers" cartData={cart} setCart={setCart}/>}
        />
        <Route path="/canvas" element={<Products category="canvas" cartData={cart} setCart={setCart}/>} />
        <Route path="/notfound" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}
