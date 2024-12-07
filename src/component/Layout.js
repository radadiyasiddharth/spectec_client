import React, { useEffect, useState } from "react";
import Header from "./Header";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import BlueLightSpects from "../pages/BlueLightSpects";
import SunGlasses from "../pages/SunGlasses";
import Contact from "../pages/Contact";
import Footer from "./Footer";
import Eyeglasses from "../pages/Eyeglasses";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import { ToastContainer, Flip } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Cart from "../pages/Cart";
import Context from "../context";
import { countProduct, currentUser, userLogout } from "../api/Api";
import Wishlist from "../pages/Wishlist";
import ProductDescription from "./ProductDescription";
import Admin from "../pages/Admin";
import UserPage from "./UserPage";
import AdminProduct from "./AdminProduct";
import Checkout from "../pages/Checkout";
import Bill from "../pages/Bill";
import OrderSuccess from "../pages/OrderSuccess";

export default function Layout() {
  const [count, setcount] = useState(0);
  const [user, setUser] = useState(false);

  const countproduct = async () => {
    const count = await countProduct();
    setcount(count);
  };

  const loginHandler = async () => {
    const res = await currentUser();
    if (res?._id) {
      setUser(res);
    }
  };

  const logoutHandler = async () => {
    await userLogout();
    const res = await currentUser();
    if (!res) {
      setUser(false);
    }
  };

  useEffect(() => {
    loginHandler();
  }, []);

  return (
    <Context.Provider
      value={{
        countproduct,
        count,
        loginHandler,
        user,
        logoutHandler,
        setUser
      }}
    >
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Flip}
      />

      <Header />
      <div className="md:pt-[0] pt-[75px]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/bluelightspects" element={<BlueLightSpects />} />
          <Route path="/eyeglasses" element={<Eyeglasses />} />
          <Route path="/sunglasses" element={<SunGlasses />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/bill" element={<Bill />} />
          <Route path="/order-success" element={<OrderSuccess />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="productdescription/:productId" element={<ProductDescription />} />
         
          <Route
              path="/admin"
              element={user?.role === "admin" ? <Admin /> : <Navigate to="/unauthorized" />}
            >
              <Route
                path="users"
                element={ <UserPage /> }
              />
               <Route
                path="products"
                element={ <AdminProduct/>}
              />
            </Route>
          <Route path="/unauthorized" element={<h1>Unauthorized Access</h1>} />
        </Routes>
      </div>
      <Footer />
    </Context.Provider>
  );
}
