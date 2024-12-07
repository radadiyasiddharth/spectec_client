// import React from "react";
// import { BsFillSendFill } from "react-icons/bs";
// import { FaFacebook } from "react-icons/fa";
// import { FaTwitter } from "react-icons/fa";
// import { FaLinkedin } from "react-icons/fa6";
// import { FaYoutube } from "react-icons/fa6";
// import { FaPinterest } from "react-icons/fa";


// function Footer() {
//   return (
//     <div className="bg-[#2F333A]">
//       <div className="container mx-auto p-4 py-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14 text-[#ffffff]">
//         <div className="text-[14px]">
//           <p className="mb-3">ABOUT US</p>
//           <p>
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa,
//             assumenda! Quam cupiditate saepe tenetur quas iusto, dolores
//             veritatis reprehenderit
//           </p>
//           <div className="flex gap-3 mt-[20px] text-[18px]">
//           <span className=" hover:bg-[#FF7004] hover:rounded-full p-[5px]"><FaFacebook/></span>
//           <span className=" hover:bg-[#FF7004] hover:rounded-full p-[5px]"><FaTwitter/></span>
//           <span className=" hover:bg-[#FF7004] hover:rounded-full p-[5px]"><FaLinkedin/></span>
//           <span className=" hover:bg-[#FF7004] hover:rounded-full p-[5px]"><FaYoutube/></span>
//           <span className=" hover:bg-[#FF7004] hover:rounded-full p-[5px]"><FaPinterest/></span>
//           </div>
//         </div>
//         <div className="text-[14px]">
//             <p className="mb-3">INFORMATION</p>
//             <p>About us</p>
//             <p>Manufactures</p>
//             <p>Tracking Order</p>
//             <p>Privacy & Policy</p>
//             <p>Terms & Conditions</p>
//         </div>
//         <div className="text-[14px]">
//           <p className="mb-3">MY ACCOUNT</p>
//           <p>Login</p>
//           <p>My Cart</p>
//           <p>Wishlist</p>
//           <p>Compare</p>
//           <p>My Account</p>
//         </div>
//         <div className="text-[14px]">
//           <p className="mb-3">NEWSLETTER</p>
//           <input  className="border-[1px] pl-[20px] pe-[10px] py-[10px]  border-[rgb(67,71,78)] bg-[#2F333A]" type="text" placeholder="Enter E-Mail Address"/>
//           <div className="">
//             <button className="flex items-center gap-1 text-[13px] py-[10px] font-[600] px-[30px] bg-[#FF7004] mt-[20px] hover:bg-[#212121] "><BsFillSendFill className="text-[10px]"/>Subscribe</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Footer;
import React from "react";
import { motion } from "framer-motion";
import { BsFillSendFill } from "react-icons/bs";
import { FaFacebook, FaTwitter, FaLinkedin, FaYoutube, FaPinterest } from "react-icons/fa";

const footerVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    transition: { duration: 0.7, ease: 'easeOut' }
  },
};

const iconVariants = {
  hidden: { opacity: 0, rotate: -30 },
  visible: { 
    opacity: 1, 
    rotate: 0, 
    transition: { duration: 0.5, ease: 'easeInOut' }
  },
};

function Footer() {
  return (
    <motion.div 
      className="bg-[#2F333A]"
      variants={footerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="container mx-auto p-4 py-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14 text-[#ffffff]">
        <div className="text-[14px]">
          <p className="mb-3">ABOUT US</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa,
            assumenda! Quam cupiditate saepe tenetur quas iusto, dolores
            veritatis reprehenderit
          </p>
          <div className="flex gap-3 mt-[20px] text-[18px]">
            <motion.span 
              className="hover:bg-[#FF7004] hover:rounded-full p-[5px]" 
              variants={iconVariants}
              initial="hidden"
              animate="visible"
            >
              <FaFacebook />
            </motion.span>
            <motion.span 
              className="hover:bg-[#FF7004] hover:rounded-full p-[5px]" 
              variants={iconVariants}
              initial="hidden"
              animate="visible"
            >
              <FaTwitter />
            </motion.span>
            <motion.span 
              className="hover:bg-[#FF7004] hover:rounded-full p-[5px]" 
              variants={iconVariants}
              initial="hidden"
              animate="visible"
            >
              <FaLinkedin />
            </motion.span>
            <motion.span 
              className="hover:bg-[#FF7004] hover:rounded-full p-[5px]" 
              variants={iconVariants}
              initial="hidden"
              animate="visible"
            >
              <FaYoutube />
            </motion.span>
            <motion.span 
              className="hover:bg-[#FF7004] hover:rounded-full p-[5px]" 
              variants={iconVariants}
              initial="hidden"
              animate="visible"
            >
              <FaPinterest />
            </motion.span>
          </div>
        </div>
        <div className="text-[14px]">
          <p className="mb-3">INFORMATION</p>
          <p>About us</p>
          <p>Manufactures</p>
          <p>Tracking Order</p>
          <p>Privacy & Policy</p>
          <p>Terms & Conditions</p>
        </div>
        <div className="text-[14px]">
          <p className="mb-3">MY ACCOUNT</p>
          <p>Login</p>
          <p>My Cart</p>
          <p>Wishlist</p>
          <p>Compare</p>
          <p>My Account</p>
        </div>
        <div className="text-[14px]">
          <p className="mb-3">NEWSLETTER</p>
          <input 
            className="border-[1px] pl-[20px] pe-[10px] py-[10px] border-[rgb(67,71,78)] bg-[#2F333A]" 
            type="text" 
            placeholder="Enter E-Mail Address"
          />
          <div className="">
            <button 
              className="flex items-center gap-1 text-[13px] py-[10px] font-[600] px-[30px] bg-[#FF7004] mt-[20px] hover:bg-[#212121]"
            >
              <BsFillSendFill className="text-[10px]" /> Subscribe
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Footer;
