import React, { useEffect, useState } from 'react';
import { getUserProduct, userOderProductEmpty } from "../api/Api";
import { useNavigate } from 'react-router-dom'; // Import useNavigate

function Bill() {
  const navigate = useNavigate(); // Initialize useNavigate
  const [userData, setUserData] = useState(null);
  const [userProduct, setUserProduct] = useState([]);
  const [paymentMethod, setPaymentMethod] = useState('Cash on Delivery'); // Default payment method
  const [paymentDone, setPaymentDone] = useState(false); // State to manage payment completion

  const fetchData = async() => {
    const res = await getUserProduct();
    setUserProduct(res || []);
  };

  useEffect(() => {
    fetchData();
    const data = localStorage.getItem('userData');
    if (data) {
      setUserData(JSON.parse(data));
    }
  }, []);

  const calculateTotal = () => {
    if (!Array.isArray(userProduct)) return 0;
    return userProduct.reduce((total, item) => {
      if (
        item &&
        item.quantity != null &&
        item.productId &&
        item.productId.productPrice != null
      ) {
        return total + item.quantity * item.productId.productPrice;
      }
      return total;
    }, 0).toFixed(2);
  };

  const handlePayment = async() => {
    await userOderProductEmpty()
    fetchData()
    setPaymentDone(true); // Mark payment as done
    navigate('/order-success'); // Navigate to OrderSuccess page after payment
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-5 space-y-6 md:space-y-10">
      <div className="bg-white p-6 sm:p-8 md:p-10 rounded-lg shadow-lg w-full max-w-[95vw] md:max-w-[210mm] mb-4">
        <h1 className="text-2xl sm:text-3xl font-bold text-center mb-4 sm:mb-6 text-gray-800">Invoice</h1>
        
        {userData ? (
          <div className="mb-6">
            <h2 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-4 text-green-600">User Details</h2>
            <p><strong>Name:</strong> {userData.name}</p>
            <p><strong>Email:</strong> {userData.email}</p>
            <p><strong>Phone:</strong> {userData.phone}</p>
            <p><strong>Address:</strong> {userData.address}</p>
          </div>
        ) : (
          <p className="text-gray-600">No user data available.</p>
        )}

        <div className="relative overflow-x-auto shadow-md mb-6">
          <table className="w-full text-sm sm:text-base text-left border border-gray-300">
            <thead className="text-sm text-gray-700 uppercase bg-gray-200">
              <tr>
                <th className="px-2 sm:px-4 py-2 border">Image</th>
                <th className="px-2 sm:px-4 py-2 border">Product Name</th>
                <th className="px-2 sm:px-4 py-2 border">Unit Price</th>
                <th className="px-2 sm:px-4 py-2 border">Qty</th>
                <th className="px-2 sm:px-4 py-2 border">Subtotal</th>
              </tr>
            </thead>
            <tbody>
              {userProduct.length > 0 ? (
                userProduct.map((val, index) => (
                  <tr key={index} className="text-center border-b hover:bg-gray-100">
                    <td className="px-2 sm:px-4 py-2 border">
                      <img src={val?.productId?.productImage} className="w-12 sm:w-16 mx-auto" alt="" />
                    </td>
                    <td className="px-2 sm:px-4 py-2 border">{val?.productId?.productTitle}</td>
                    <td className="px-2 sm:px-4 py-2 border">₹{val?.productId?.productPrice.toFixed(2)}</td>
                    <td className="px-2 sm:px-4 py-2 border">{val?.quantity}</td>
                    <td className="px-2 sm:px-4 py-2 border">₹{(val?.quantity * val?.productId?.productPrice).toFixed(2)}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="text-center py-4">No Products in Bill</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <div className="text-right font-bold text-lg sm:text-xl text-gray-800">
          <h2>Total: ₹{calculateTotal()}</h2>
        </div>
        <button
          onClick={() => navigate("/cart")} // Navigate to the cart page
          className="font-semibold text-white bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg shadow-md transition duration-200"
        >
          Edit Cart
        </button> 
      </div>

      {/* Payment Method Section */}
      <div className="bg-white p-6 sm:p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-lg sm:text-xl font-semibold mb-4 text-gray-800">Payment Method</h2>
        <div className="flex items-center mb-4">
          <input
            type="radio"
            id="cash"
            name="paymentMethod"
            value="Cash on Delivery"
            checked
            className="mr-2"
            readOnly
          />
          <label htmlFor="cash">Cash on Delivery</label>
        </div>
        <div className="flex items-center mb-4">
          <input
            type="radio"
            id="creditCard"
            name="paymentMethod"
            value="Credit Card"
            disabled
            className="mr-2"
          />
          <label htmlFor="creditCard" className="line-through">Credit Card (Disabled)</label>
        </div>
        <div className="flex items-center mb-4">
          <input
            type="radio"
            id="paypal"
            name="paymentMethod"
            value="PayPal"
            disabled
            className="mr-2"
          />
          <label htmlFor="paypal" className="line-through">PayPal (Disabled)</label>
        </div>

        <div className="mt-6 text-center">
          <button
            onClick={handlePayment}
            className="font-semibold text-white bg-green-500 hover:bg-green-600 px-4 py-2 rounded-lg shadow-md transition duration-200"
          >
            Order Now
          </button>
        </div>
      </div>

      {/* Edit Cart Button */}
      <div className="mt-6 text-center">
       
      </div>
    </div>
  );
}

export default Bill;
