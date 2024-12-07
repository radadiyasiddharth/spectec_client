// import React, { useContext, useEffect, useState } from "react";
// import { MdDeleteOutline } from "react-icons/md";
// import {
//   AddQuantity,
//   DecQuantity,
//   getUserProduct,
//   deleteProduct,
// } from "../api/Api";
// import Context from "../context";
// import { Link } from "react-router-dom";
// import CommenSection from "../component/CommenSection";

// function Cart() {
//   const [data, setdata] = useState([]);
//   const { countproduct } = useContext(Context);
//   const fetchdata = async () => {
//     const userCart = await getUserProduct();
//     setdata(userCart);
//   };

//   const Addquantity = async (productid) => {
//     await AddQuantity(productid);
//     fetchdata();
//   };

//   const Decquantity = async (productid) => {
//     await DecQuantity(productid);
//     await countproduct();
//     await fetchdata();
//   };

//   const deleteproduct = async (productid) => {
//     await deleteProduct(productid);
//     await countproduct();
//     await fetchdata();
//   };

//   useEffect(() => {
//     fetchdata();
//   }, []);

//   const calculateTotal = () => {
//     if (!Array.isArray(data)) return 0;
//     return data
//       .reduce((total, item) => {
//         if (
//           item &&
//           item.quantity != null &&
//           item.productId &&
//           item.productId.productPrice != null
//         ) {
//           return total + item.quantity * item.productId.productPrice;
//         }
//         return total;
//       }, 0)
//       .toFixed(2);
//   };

//   return (
//     <div className="container mx-auto py-12 px-4">
//       <CommenSection title="Cart" />
//       <div className="relative overflow-x-auto shadow-md">
//         <table className="w-full text-sm text-left rtl:text-right text-black-500 dark:text-black-400">
//           <thead className="text-sm text-gray-700 uppercase bg-[#EBEBEB] dark:text-black-400">
//             <tr className="py-10 text-center">
//               <th scope="col" className="px-6 py-5">
//                 Image
//               </th>
//               <th scope="col" className="px-6 py-5">
//                 Product Name
//               </th>
//               <th scope="col" className="px-6 py-5">
//                 Until Price
//               </th>
//               <th scope="col" className="px-6 py-5">
//                 Qty
//               </th>
//               <th scope="col" className="px-6 py-5">
//                 Subtotal
//               </th>
//               <th scope="col" className="px-6 py-5">
//                 Action
//               </th>
//             </tr>
//           </thead>
//           <tbody>
//             {data.length > 0 ? (
//               data?.map((val, index) => {
//                 return (
//                   <tr
//                     className="border-b dark:border-gray-700 text-center"
//                     key={index}
//                   >
//                     <td className="px-6 py-4 font-medium text-black-900 whitespace-nowrap text-black">
//                       <img
//                         src={val?.productId?.productImage}
//                         className="w-20 mx-auto"
//                         alt=""
//                       />
//                     </td>
//                     <td className="px-6 py-4">
//                       {val?.productId?.productTitle}
//                     </td>
//                     <td className="px-6 py-8 grid">
//                       {val?.productId?.productPrice}
//                       <span className="text-red-400 line-through">
//                         {val?.productId?.productFakePrice}
//                       </span>
//                     </td>
//                     <td className="px-6 py-4">
//                       <span
//                         className="px-2 bg-gray-200 pb-1 cursor-pointer hover:bg-gray-300"
//                         onClick={() => Decquantity(val?.productId?._id)}
//                       >
//                         -
//                       </span>
//                       <span className="px-2">{val?.quantity}</span>
//                       <span
//                         className="px-2 bg-gray-200 pb-1 cursor-pointer hover:bg-gray-300"
//                         onClick={() => Addquantity(val?.productId?._id)}
//                       >
//                         +
//                       </span>
//                     </td>
//                     <td className="px-6 py-4">
//                       {(val?.quantity * val?.productId?.productPrice).toFixed(
//                         2
//                       )}
//                     </td>
//                     <td className="px-6 py-4">
//                       <p
//                         href="#"
//                         className="font-bold text-xl flex justify-center text-red-600 dark:text-red-500"
//                         onClick={() => deleteproduct(val?.productId?._id)}
//                       >
//                         <MdDeleteOutline />
//                       </p>
//                     </td>
//                   </tr>
//                 );
//               })
//             ) : (
//               <tr>
//                 <td colSpan="6" className="text-center py-4">
//                   <h1 className="text-lg">Cart is Empty</h1>
//                 </td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>
//       <div className="mt-4 text-right font-bold text-lg">
//         Total: ${calculateTotal()}
//       </div>
//       <div className="flex justify-end">
//         <Link to={"/checkout"}>
//           <button
//             className="bg-green-500 text-white px-4 py-2 rounded"
//           >
//             Checkout
//           </button>
//         </Link>
//       </div>
//     </div>
//   );
// }

// export default Cart;


import React, { useContext, useEffect, useState } from "react";
import { MdDeleteOutline } from "react-icons/md";
import { AddQuantity, DecQuantity, getUserProduct, deleteProduct } from "../api/Api";
import Context from "../context";
import { Link } from "react-router-dom";
import CommenSection from "../component/CommenSection";

function Cart() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const { countproduct } = useContext(Context);

  const fetchData = async () => {
    try {
      const userCart = await getUserProduct();
      setData(userCart);
    } catch (error) {
      console.error("Error fetching cart data:", error);
    } finally {
      setLoading(false);
    }
  };

  const addQuantity = async (productId) => {
    try {
      await AddQuantity(productId);
      fetchData();
    } catch (error) {
      console.error("Error increasing quantity:", error);
    }
  };

  const decQuantity = async (productId) => {
    try {
      await DecQuantity(productId);
      await countproduct();
      fetchData();
    } catch (error) {
      console.error("Error decreasing quantity:", error);
    }
  };

  const deleteProductFromCart = async (productId) => {
    try {
      await deleteProduct(productId);
      await countproduct();
      fetchData();
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const calculateTotal = () => {
    if (!Array.isArray(data)) return 0;
    return data
      .reduce((total, { quantity, productId }) => {
        if (quantity != null && productId?.productPrice != null) {
          return total + quantity * productId.productPrice;
        }
        return total;
      }, 0)
      .toFixed(2);
  };

  return (
    <div className="container mx-auto py-12 px-4">
      <CommenSection title="Cart" />
      {loading ? (
        <div className="text-center py-12">Loading...</div>
      ) : (
        <div>
          <div className="relative overflow-x-auto shadow-md">
            <table className="w-full text-sm text-left rtl:text-right text-black-500 dark:text-black-400">
              <thead className="text-sm text-gray-700 uppercase bg-[#EBEBEB] dark:text-black-400">
                <tr className="py-10 text-center">
                  <th scope="col" className="px-6 py-5">Image</th>
                  <th scope="col" className="px-6 py-5">Product Name</th>
                  <th scope="col" className="px-6 py-5">Unit Price</th>
                  <th scope="col" className="px-6 py-5">Qty</th>
                  <th scope="col" className="px-6 py-5">Subtotal</th>
                  <th scope="col" className="px-6 py-5">Action</th>
                </tr>
              </thead>
              <tbody>
                {data.length > 0 ? (
                  data.map(({ productId, quantity }, index) => (
                    <tr className="border-b dark:border-gray-700 text-center" key={index}>
                      <td className="px-6 py-4">
                        <img src={productId?.productImage} className="w-20 mx-auto" alt={productId?.productTitle} />
                      </td>
                      <td className="px-6 py-4">{productId?.productTitle}</td>
                      <td className="px-6 py-8">
                        {productId?.productPrice}
                        {productId?.productFakePrice && (
                          <span className="text-red-400 line-through">{productId.productFakePrice}</span>
                        )}
                      </td>
                      <td className="px-6 py-4">
                        <span
                          className="px-2 bg-gray-200 pb-1 cursor-pointer hover:bg-gray-300"
                          onClick={() => decQuantity(productId?._id)}
                        >
                          -
                        </span>
                        <span className="px-2">{quantity}</span>
                        <span
                          className="px-2 bg-gray-200 pb-1 cursor-pointer hover:bg-gray-300"
                          onClick={() => addQuantity(productId?._id)}
                        >
                          +
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        {(quantity * productId?.productPrice).toFixed(2)}
                      </td>
                      <td className="px-6 py-4">
                        <button
                          className="font-bold text-xl flex justify-center text-red-600 dark:text-red-500"
                          onClick={() => deleteProductFromCart(productId?._id)}
                        >
                          <MdDeleteOutline />
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="6" className="text-center py-4">
                      <h1 className="text-lg">Cart is Empty</h1>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
          <div className="mt-4 text-right font-bold text-lg">
            Total: ₹{calculateTotal()}
          </div>
          <div className="flex justify-end">
            <Link to="/checkout">
              <button className="bg-green-500 text-white px-4 py-2 rounded">
                Checkout
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
