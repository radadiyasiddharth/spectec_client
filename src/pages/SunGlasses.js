import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import CommenSection from "../component/CommenSection";
import { get_product } from "../api/Api";
import ProductCard from "../component/ProductCard";

const slideInVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1.5,
      ease: "easeInOut",
    },
  },
};

const scaleVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1.5,
      ease: "easeInOut",
    },
  },
};

function SunGlasses() {
  const [allProduct, setAllProduct] = useState([]);

  useEffect(() => {
    get_product()
      .then((res) => {
        const filteredProducts = res.filter(
          (product) => product.productCategory === "goggles"
        );
        setAllProduct(filteredProducts);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div className="container mx-auto py-12 px-4">
      {/* Hero Section */}
      <motion.div
        className="text-center mb-12"
        initial="hidden"
        animate="visible"
        variants={slideInVariants}
      >
        <CommenSection title="SunGlasses" />
        <p className="text-lg text-[#474747] mb-12">
          Discover our exclusive collection of sunglasses, crafted to combine
          style and functionality. Perfect for every occasion and designed to
          turn heads.
        </p>
      </motion.div>

      {/* Product Grid */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-12"
        initial="hidden"
        animate="visible"
        variants={scaleVariants}
      >
        <div className="p-6 bg-white shadow-md rounded-lg text-center">
          <h3 className="text-xl font-semibold text-[#212121] mb-4">
            Classic Aviators
          </h3>
          <p className="text-lg text-[#474747] mb-4">
            Timeless aviators with a modern twist. Perfect for any adventure.
          </p>
          <button className="bg-[#FF7004] text-white py-2 px-4 rounded-lg">
            Shop Now
          </button>
        </div>
        <div className="p-6 bg-white shadow-md rounded-lg text-center">
          <h3 className="text-xl font-semibold text-[#212121] mb-4">
            Retro Round
          </h3>
          <p className="text-lg text-[#474747] mb-4">
            Add a touch of vintage with our retro round sunglasses. Ideal for a
            classic look.
          </p>
          <button className="bg-[#FF7004] text-white py-2 px-4 rounded-lg">
            Shop Now
          </button>
        </div>
        <div className="p-6 bg-white shadow-md rounded-lg text-center">
          <h3 className="text-xl font-semibold text-[#212121] mb-4">
            Sporty Shades
          </h3>
          <p className="text-lg text-[#474747] mb-4">
            Designed for the active lifestyle, our sporty shades offer both
            comfort and performance.
          </p>
          <button className="bg-[#FF7004] text-white py-2 px-4 rounded-lg">
            Shop Now
          </button>
        </div>
      </motion.div>
      {/* Product Grid */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Explore Our Collection
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {allProduct?.map((val, index) => (
            <ProductCard key={index} data={val} />
          ))}
        </div>
      </div>

      {/* Testimonials Section */}
      <motion.div
        className="bg-[#f7f7f7] p-8 rounded-lg shadow-md text-center mb-12"
        initial="hidden"
        animate="visible"
        variants={slideInVariants}
      >
        <h2 className="text-3xl font-bold text-[#212121] mb-6">
          What Our Customers Say
        </h2>
        <p className="text-lg text-[#474747] mb-4">
          "I absolutely love my new sunglasses! They are stylish, comfortable,
          and perfect for every occasion."
        </p>
        <p className="text-lg text-[#474747]">- Jamie L.</p>
      </motion.div>

      {/* Additional Info Section */}
      <motion.div
        className="text-center"
        initial="hidden"
        animate="visible"
        variants={scaleVariants}
      >
        <h2 className="text-3xl font-bold text-[#212121] mb-6">
          Why Choose Us?
        </h2>
        <p className="text-lg text-[#474747] mb-6">
          We offer a wide range of sunglasses that blend fashion and
          functionality. Each pair is crafted with precision to ensure the
          highest quality and style.
        </p>
        <button className="bg-[#FF7004] text-white py-3 px-6 rounded-lg font-semibold">
          Learn More
        </button>
      </motion.div>
    </div>
  );
}

export default SunGlasses;
