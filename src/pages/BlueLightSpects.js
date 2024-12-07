import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ProductCard from "../component/ProductCard";
import { get_product } from "../api/Api";
import CommenSection from "../component/CommenSection";

const textVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 2,
      ease: "easeInOut",
    },
  },
};

function BlueLightSpects() {
  const [allProduct, setAllProduct] = useState([]);

  useEffect(() => {
    get_product()
      .then((res) => {
        const filteredProducts = res.filter(product => product.productCategory === 'blue light spectacles');
        setAllProduct(filteredProducts);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="container mx-auto py-12 px-4">
      {/* Header Section */}
      <motion.div
        className="text-center mb-16"
        initial="hidden"
        animate="visible"
        variants={textVariants}
      >
        <CommenSection title="Blue Light Spectacles" />
      </motion.div>

      <motion.div
  className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
  initial="hidden"
  animate="visible"
  variants={textVariants}
>
  {/* Gradient Card */}
  <div className="bg-gradient-to-r from-teal-500 to-teal-700 p-8 rounded-lg shadow-lg text-white">
    <h2 className="text-2xl font-bold mb-4">
      Why Choose Blue Light Spectacles?
    </h2>
    <ul className="list-disc pl-5 space-y-2">
      <li>Reduces eye strain</li>
      <li>Improves sleep quality</li>
      <li>Enhances visual comfort</li>
      <li>Stylish and comfortable design</li>
    </ul>
  </div>

  {/* Gradient Plain Card */}
  <div className="bg-gradient-to-r from-gray-300 via-gray-100 to-white p-8 rounded-lg shadow-lg border border-gray-300">
    <h2 className="text-2xl font-bold mb-4 text-gray-800">
      Available Styles
    </h2>
    <p className="text-lg text-gray-700">
      Choose from a range of stylish frames to suit your look, whether you
      prefer classic, modern, or trendy designs. Our blue light spectacles
      are not just functional but also fashionable.
    </p>
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
        className="bg-gradient-to-r from-gray-100 to-gray-200 p-8 rounded-lg shadow-lg"
        initial="hidden"
        animate="visible"
        variants={textVariants}
      >
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          What Our Customers Say
        </h2>
        <div className="space-y-6">
          <div className="p-4 border border-gray-300 rounded-lg shadow-sm">
            <p className="text-lg text-gray-700 italic mb-2">
              "These blue light spectacles have made a huge difference! My eyes
              feel less tired, and I'm sleeping better too."
            </p>
            <p className="text-lg text-gray-800 font-semibold">- Sarah L.</p>
          </div>
          <div className="p-4 border border-gray-300 rounded-lg shadow-sm">
            <p className="text-lg text-gray-700 italic mb-2">
              "Stylish and effective! I love the design, and they really help
              when I'm working long hours on my computer."
            </p>
            <p className="text-lg text-gray-800 font-semibold">- Mark T.</p>
          </div>
        </div>
      </motion.div>

      {/* Call to Action Section */}
      <motion.div
        className="text-center mt-12"
        initial="hidden"
        animate="visible"
        variants={textVariants}
      >
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          Ready to Protect Your Eyes?
        </h2>
        <button className="text-white bg-teal-600 hover:bg-teal-700 py-3 px-8 font-semibold rounded-lg transition">
          Shop Blue Light Spectacles Now
        </button>
      </motion.div>
    </div>
  );
}

export default BlueLightSpects;
