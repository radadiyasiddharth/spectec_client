import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";
import { SignupUser } from "../api/Api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import CommenSection from "../component/CommenSection";

function SignUp() {
  const navigate = useNavigate();
  const [showconPassword, setConShowPassword] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const onChangeData = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
    console.log(data);
  };

  const onSubmitHandler = async(e) => {
    e.preventDefault();
    if (e.target.conpassword.value === data.password) {
      const signupUser = await SignupUser(data);
      console.log( signupUser);
      if (signupUser) {
        navigate("/login");
      }
    } else {
      toast.error("password and password must be same");
    }
  };

  return (
    <div className="container py-16 mx-auto">
      <CommenSection title="Sign Up"></CommenSection>
      <div className="w-full max-w-md mx-auto shadow-md">
        <div className="px-4 py-8">
          <form action="" className="flex flex-col gap-3" onSubmit={onSubmitHandler}>
            <label htmlFor="username">
              Username<span className="text-red-500">*</span>
            </label>
            <input
              onChange={onChangeData}
              type="text"
              placeholder="Enter Username"
              className="py-2 px-2 border rounded"
              required
              name="username"
            />

            <label htmlFor="email">
              Email<span className="text-red-500">*</span>
            </label>
            <input
              onChange={onChangeData}
              type="email"
              placeholder="Enter Email"
              className="py-2 px-2 border rounded"
              required
              name="email"
            />

            <label htmlFor="password">
              Password<span className="text-red-500">*</span>
            </label>

            <div className="relative">
              <input
                onChange={onChangeData}
                type={showPassword ? "text" : "password"}
                placeholder="Enter Password"
                className="py-2 px-2 border rounded w-full"
                required
                name="password"
              />
              <span
                className="absolute top-1/2 right-2 transform -translate-y-1/2 cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <IoMdEyeOff /> : <IoMdEye />}
              </span>
            </div>
            <label htmlFor="confirm-password">
              Confirm Password<span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <input
                type={showconPassword ? "text" : "password"}
                placeholder="Enter Confirm Password"
                className="py-2 px-2 border rounded w-full"
                required
                name="conpassword"
              />
              <span
                className="absolute top-1/2 right-2 transform -translate-y-1/2 cursor-pointer"
                onClick={() => setConShowPassword(!showconPassword)}
              >
                {showconPassword ? <IoMdEyeOff /> : <IoMdEye />}
              </span>
            </div>

            <button className="bg-orange-500 mt-5 text-white py-2 rounded hover:bg-orange-600 transition duration-300">
              Sign Up
            </button>
            <Link to={"/login"}>
              <button className="bg-gray-800 w-full text-white py-2 px-4 rounded hover:bg-gray-900 transition duration-300">
                Already have an account?
              </button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
