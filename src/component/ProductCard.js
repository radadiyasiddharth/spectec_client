import React, { useContext } from "react";
import { FaCartPlus, FaRegHeart } from "react-icons/fa"; // Importing React Icons
import { addToCart, addToWishlist } from "../api/Api";
import Context from "../context";
import { Link, useNavigate } from "react-router-dom";

function ProductCard({ data }) {
  const navigate = useNavigate()
  const { countproduct } = useContext(Context);
  const addToCartHandler = async (productId) => {
    try {
      const res =  await addToCart(productId);
      await countproduct();
      // if(!res){
      // navigate("/login")
      // }
      // console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const addtowishlist = async (productId) => {
    await addToWishlist(productId);
  };

  return (
    <div className="flex flex-col h-full bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl border border-gray-300">
      <Link to={`/productdescription/${data._id}`}>
        <img
          className="w-full bg-opacity-20  bg-[#7a95a2] object-cover rounded-t-lg"
          src={data.productImage}
          alt={data.productTitle}
        />
      </Link>
      <div className="flex flex-col flex-grow p-4 bg-gray-50">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          {data.productTitle}
        </h2>
        <p className="text-gray-600 mb-3">{data.productDesc}</p>
        {/* <p className="text-gray-500 text-sm mb-4">{data.productCategory}</p> */}
        <div className="flex justify-between items-center mt-auto">
          <span className="text-red-600 font-semibold text-lg">
          ₹{data.productPrice}
          </span>
          <span className="line-through text-gray-400 text-sm">
          ₹{data.productFakePrice}
          </span>
        </div>
      </div>
      <div className="flex justify-between items-center p-4 bg-gray-100 border-t border-gray-300">
        <button
          className="flex items-center text-gray-700 hover:text-green-600 transition-transform transform hover:scale-110"
          onClick={() => addToCartHandler(data?._id)}
        >
          <FaCartPlus className="text-xl mr-2" />
          <span className="font-medium text-base">Add to Cart</span>
        </button>
        <button
          className="flex items-center text-gray-700 hover:text-red-600 transition-transform transform hover:scale-110"
          onClick={() => addtowishlist(data?._id)}
        >
          <FaRegHeart className="text-xl mr-2" />
          <span className="font-medium text-base">Wishlist</span>
        </button>
      </div>
    </div>
  );
}

export default ProductCard;

