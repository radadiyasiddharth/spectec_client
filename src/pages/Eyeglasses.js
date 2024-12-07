import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import CommenSection from "../component/CommenSection";
import { get_product } from "../api/Api";
import ProductCard from "../component/ProductCard";

const containerVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1.5,
      ease: 'easeOut',  
    },
  },
};

const textVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 2,
      ease: 'easeInOut',
    },
  },
};

function Eyeglasses() {
  const [allProduct, setAllProduct] = useState([]);
  useEffect(() => {
    get_product()
      .then((res) => {
        const filteredProducts = res.filter(product => product.productCategory === 'eyeglasses');
        setAllProduct(filteredProducts);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <motion.div
      className="container mx-auto py-12 px-4"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <CommenSection title="Eyeglasses" />

      <motion.div
        className="text-center mb-12"
        initial="hidden"
        animate="visible"
        variants={textVariants}
      >
        <p className="text-lg text-[#474747] mb-12">
          Explore our range of eyeglasses that blend style with functionality. Perfect for every occasion and personality.
        </p>
      </motion.div>

      {/* Section 1: Product Features */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <motion.div
          className="bg-[#e7e7e7] p-8 rounded-lg shadow-md"
          initial="hidden"
          animate="visible"
          variants={textVariants}
        >
          <h2 className="text-2xl font-semibold text-[#212121] mb-4">Stylish Designs</h2>
          <p className="text-lg">
            Our eyeglasses feature the latest trends and timeless classics, ensuring you look great no matter your style.
          </p>
        </motion.div>
        <motion.div
          className="bg-[#e7e7e7] p-8 rounded-lg shadow-md"
          initial="hidden"
          animate="visible"
          variants={textVariants}
        >
          <h2 className="text-2xl font-semibold text-[#212121] mb-4">Superior Comfort</h2>
          <p className="text-lg">
            Designed with comfort in mind, our eyeglasses are lightweight and comfortable for all-day wear.
          </p>
        </motion.div>
        <motion.div
          className="bg-[#e7e7e7] p-8 rounded-lg shadow-md"
          initial="hidden"
          animate="visible"
          variants={textVariants}
        >
          <h2 className="text-2xl font-semibold text-[#212121] mb-4">Durable Quality</h2>
          <p className="text-lg">
            Built to last, our eyeglasses are made from high-quality materials that withstand daily wear and tear.
          </p>
        </motion.div>
      </div>
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
      {/* Section 2: Customer Reviews */}
      <motion.div
        className="bg-[#f7f7f7] p-8 rounded-lg shadow-md text-center mb-12"
        initial="hidden"
        animate="visible"
        variants={textVariants}
      >
        <h2 className="text-3xl font-bold text-[#212121] mb-6">What Our Customers Say</h2>
        <p className="text-lg text-[#474747]">
          "These eyeglasses are not only stylish but also incredibly comfortable. I wear them all day without any issues!"
        </p>
        <p className="text-lg text-[#474747] mt-4">- Happy Customer</p>
      </motion.div>
    </motion.div>
  );
}

export default Eyeglasses;
