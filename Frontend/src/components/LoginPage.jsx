import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import { GoogleOAuthProvider } from "@react-oauth/google";
import GoogleSignIn from "./GoogleSignIn";


const LoginPage = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    const { email, password } = loginData;

    try {
      const url = `${import.meta.env.VITE_APP_API_URI}/auth/login`;
      const response = await axios.post(
        url,
        { email, password },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const { msg, success, jwtToken, name } = response.data;
      const user ={
        name:name,
        email:response.data.email
      }
      

      if (success) {
        toast.success(msg);
        localStorage.setItem("token", jwtToken);
        localStorage.setItem("loggedInUser", name);
        localStorage.setItem("user-info", JSON.stringify(user));
        setTimeout(() => {
          navigate("/home");
        }, 1000);
      }
    } catch (error) {
      if (error.response && error.response.data) {
        const { msg, error: errorDetails } = error.response.data;
        if (errorDetails && errorDetails.details) {
          const details =
            errorDetails.details[0].message || "An error occurred";
          toast.error(details);
        } else if (msg) {
          toast.error(msg);
        } else {
          toast.error("An error occurred during login.");
        }
      } else {
        toast.error("An error occurred during login.");
      }
      console.error("Error logging in:", error);
    }
  };

  const changeHandler = (e) => {
    const { name, value } = e.target;

    setLoginData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="flex justify-center items-center min-h-screen ">
      <div
        className={`w-full max-w-md rounded-2xl shadow-2xl backdrop-blur-lg p-8 transition-all duration-300 ease-in-out ${
          isHovered ? "scale-105" : "scale-100"
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <h1 className="text-3xl font-bold text-center text-purple-600   mb-2">
          Sign in
        </h1>
        <p className=" text-center mb-6">to continue to DocNova</p>

        <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
          <GoogleSignIn buttonText="Sign in with Google" />
        </GoogleOAuthProvider>

        <div className="relative mb-6">
          <hr className="border-gray-600" />
          <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-800 px-2 text-gray-400 text-sm">
            or
          </span>
        </div>

        <form onSubmit={submitHandler} className="space-y-4">
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="abc@gmail.com"
              value={loginData.email}
              onChange={changeHandler}
              required
              className="w-full px-3 py-2 bg-gray-300 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-black placeholder-gray-500"
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter your password"
              value={loginData.password}
              onChange={changeHandler}
              required
              className="w-full px-3 py-2 bg-gray-300 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-black  placeholder-gray-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-purple-600 text-white rounded-lg py-2 px-4 hover:bg-purple-700 transition duration-300 ease-in-out"
          >
            Sign In
          </button>
        </form>
        <p className="mt-6 text-center ">
          Don't have an account?{" "}
          <Link to="/signup" className="text-purple-600 text hover:underline">
            Create account
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
