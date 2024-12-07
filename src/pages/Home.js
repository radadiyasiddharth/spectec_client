import React, { useContext, useEffect, useState } from "react";
import { motion } from "framer-motion";
import hero_banner from "../assets/hero_banner.png";
import BannerSection from "../component/BannerSection";
import { get_product } from "../api/Api";
import ProductCard from "../component/ProductCard";
import FeaturesSection from "../component/FeaturesSection";
import TestimonialsSection from "../component/TestimonialsSection";
import Context from "../context";
import { Link } from "react-router-dom";

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

const imgVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 2,
      ease: "easeInOut",
    },
  },
};

function Home() {
  const [allProduct, setAllProduct] = useState([]);
  const { user } = useContext(Context)
  const banner1Image =
    "https://res.cloudinary.com/dzahbpebb/image/upload/v1721729357/discount_banner_iibjdh.jpg";
  const banner2Image =
    "https://res.cloudinary.com/dzahbpebb/image/upload/v1721729364/discount_banner2_sfg6rf.jpg";
  const style = {
    fontSize: 'clamp(1.875rem, 1.2682rem + 2.589vw, 4.375rem)'
  };
  useEffect(() => {
    get_product()
      .then((res) => {
        setAllProduct(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="overflow-x-hidden">
      <div className="bg-[#e7e7e7] relative">
        {
          user?.role === "admin" && <div className="fixed z-50 right-10 bottom-10 p-4 bg-gray-800 text-white rounded-lg shadow-lg">
            <Link to="/admin"> <p className="text-sm">admin</p></Link>
          </div>
        }
        <div className="container mx-auto px-4 py-12 md:flex md:flex-row items-center">
          <motion.div
            className="md:w-1/2 p-6"
            initial="hidden"
            animate="visible"
            variants={textVariants}
          >
            <p className="text-lg font-semibold text-[#474747] mb-2">
              WHAT WE'RE ABOUT
            </p>
            {/* <p className="text-4xl font-bold text-[#212121] mb-4">
              SEE THE WORLD DIFFERENTLY
            </p> */}
            <div className='w-full h-full'>
              <div className='__className_e3c363 font-extrabold w-full' style={style} >
                <h2>SEE
                  <span className='bg-clip-text text-transparent bg-gradient-to-r from-[#212630] via-[#01BFFD] to-[#9769EF]'> THE WORLD </span>
                  <span className='bg-clip-text text-transparent bg-gradient-to-r from-[#9769EF] via-[#FD2726] to-[#5A274B]'>DIFFERENT</span>LY
                </h2>
              </div>
            </div>

            <p className="text-[#474747] mb-6">
              We make everyday life look and feel ten times better. How? Click
              on the links below to see for yourself.
            </p>
            <button className="text-white bg-[#FF7004] hover:bg-[#212121] py-3 px-6 font-semibold rounded transition">
              Shop Now
            </button>
          </motion.div>
          <motion.div
            className="md:w-1/2 flex justify-center"
            initial="hidden"
            animate="visible"
            variants={imgVariants}
          >
            <img
              src={hero_banner}
              className="w-full max-w-md h-auto object-cover rounded"
              alt="Hero Banner"
            />
          </motion.div>
        </div>
      </div>

      <BannerSection className="my-12" />

      <div className="container mx-auto px-4 py-12 text-center">
        <p className="text-3xl font-bold text-[#212121] mb-4">Our Products</p>
        <p className="text-lg text-[#474747] max-w-3xl mx-auto mb-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id adipisci
          quisquam veritatis magnam, fugit ipsum.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
          {allProduct?.map((val, index) => (
            <ProductCard key={index} data={val} />
          ))}
        </div>
      </div>

      <FeaturesSection className="my-12" />
      <TestimonialsSection className="my-12" />


      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Banner 1 */}
          <div
            className="relative flex items-center justify-center rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105 h-64 md:h-80 lg:h-96"
            style={{
              backgroundImage: `url(${banner1Image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="flex flex-col justify-center items-center p-6 md:p-8 bg-black h-[inherit] bg-opacity-50 text-white w-full text-center">
              <h2 className="text-lg md:text-xl lg:text-2xl font-bold mb-3">
                Exclusive Summer Sale
              </h2>
              <p className="text-sm md:text-base lg:text-lg leading-relaxed">
                Don’t miss out on our exclusive summer sale! Get up to 50% off
                on selected items. Shop now and enjoy great discounts on your
                favorite products.
              </p>
              <button className="mt-4 px-6 py-2 bg-white text-yellow-600 rounded-lg font-semibold hover:bg-yellow-100 transition-colors duration-300">
                Shop Now
              </button>
            </div>
          </div>

          {/* Banner 2 */}
          <div
            className="relative flex items-center justify-center rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105 h-64 md:h-80 lg:h-96"
            style={{
              backgroundImage: `url(${banner2Image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="flex flex-col justify-center items-center p-6 md:p-8 bg-black h-[inherit] bg-opacity-50 text-white w-full text-center">
              <h2 className="text-lg md:text-xl lg:text-2xl font-bold mb-3">
                New Arrivals
              </h2>
              <p className="text-sm md:text-base lg:text-lg leading-relaxed">
                Check out our latest collection of stylish eyewear. Stay ahead
                of the trends with our new arrivals. Shop the collection today!
              </p>
              <button className="mt-4 px-6 py-2 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-100 transition-colors duration-300">
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;


