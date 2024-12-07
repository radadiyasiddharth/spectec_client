import React from "react";
import { motion } from "framer-motion";
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

function About() {
  return (
    <div className="container mx-auto py-12 px-4">
      <CommenSection title="About Us"></CommenSection>

      {/* Company Overview */}
      <motion.div
        className="text-center mb-12"
        initial="hidden"
        animate="visible"
        variants={textVariants}
      >
        <p className="text-lg text-[#474747] mb-6">
          Our company has been at the forefront of the eyewear industry, dedicated to providing high-quality, stylish, and affordable products to our customers. We believe in the power of vision and strive to make it clearer for everyone.
        </p>
        <p className="text-lg text-[#474747]">
          From our humble beginnings to becoming a leading name in the industry, our journey has been fueled by innovation, passion, and a relentless commitment to excellence.
        </p>
      </motion.div>

      {/* Mission & Vision */}
      <motion.div
        className="bg-[#e7e7e7] p-8 rounded-lg shadow-md mb-12"
        initial="hidden"
        animate="visible"
        variants={textVariants}
      >
        <h2 className="text-2xl font-semibold text-[#212121] mb-4">
          Our Mission
        </h2>
        <p className="text-lg text-[#474747]">
          To enhance the way people see the world through innovative eyewear solutions that combine functionality with style.
        </p>
        <h2 className="text-2xl font-semibold text-[#212121] mt-8 mb-4">
          Our Vision
        </h2>
        <p className="text-lg text-[#474747]">
          To be a global leader in the eyewear industry, known for our commitment to quality, customer satisfaction, and sustainable practices.
        </p>
      </motion.div>

      {/* Our Team */}
      <motion.div
        className="mb-12"
        initial="hidden"
        animate="visible"
        variants={textVariants}
      >
        <h2 className="text-3xl font-bold text-[#212121] mb-6 text-center">
          Meet Our Team
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="p-6 bg-white rounded-lg shadow-md text-center">
            <img
              src="https://res.cloudinary.com/dvksivb6b/image/upload/v1726286327/young-man-with-trendy-fashion-sense_1199394-13435_sqwpdl.jpg"
              alt="Team Member"
              className="w-32 h-32 rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-[#212121]">John Doe</h3>
            <p className="text-[#474747]">CEO & Founder</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md text-center">
            <img
              src="https://res.cloudinary.com/dvksivb6b/image/upload/v1726286327/woman-jacket-is-holding-phone-with-smile_1029679-153371_nnsvoz.jpg"
              alt="Team Member"
              className="w-32 h-32 rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-[#212121]">Jane Smith</h3>
            <p className="text-[#474747]">Chief Marketing Officer</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md text-center">
            <img
              src="https://res.cloudinary.com/dvksivb6b/image/upload/v1726286339/bohemian-man-with-his-arms-crossed_a69icz.jpg"
              alt="Team Member"
              className="w-32 h-32 rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-[#212121]">Bob Johnson</h3>
            <p className="text-[#474747]">Head of Product Development</p>
          </div>
        </div>
      </motion.div>

      {/* Customer Testimonials */}
      <motion.div
        className="bg-[#f7f7f7] p-8 rounded-lg shadow-md"
        initial="hidden"
        animate="visible"
        variants={textVariants}
      >
        <h2 className="text-3xl font-bold text-[#212121] mb-6 text-center">
          What Our Customers Say
        </h2>
        <div className="space-y-8">
          <div>
            <p className="text-lg text-[#474747] italic mb-4">
              "The best eyewear I've ever purchased! The quality is amazing, and the customer service is top-notch."
            </p>
            <p className="text-lg text-[#212121] font-semibold">
              - Alex Williams
            </p>
          </div>
          <div>
            <p className="text-lg text-[#474747] italic mb-4">
              "I've been a loyal customer for years. Their products are always on-trend, and I get compliments everywhere I go!"
            </p>
            <p className="text-lg text-[#212121] font-semibold">
              - Maria Garcia
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default About;
