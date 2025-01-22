import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const SignupPage = () => {
  const [signUpData, setSignUpData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPass: "",
  });

  const navigate = useNavigate();

  const handleGoogleSignUp = () => {
    alert("Sign up with Google functionality goes here!");
  };

  const changeHandler = (e) => {
    const { name, value } = e.target;

    setSignUpData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const { name, email, password, confirmPass } = signUpData;

    if (password !== confirmPass) {
      alert("Passwords do not match!");
      return;
    }

    //API call from backend

    try {
      const url = `${import.meta.env.VITE_APP_API_URI}/auth/signup`;
      const response = await axios.post(
        url,
        {
          name,
          email,
          password,
        },

        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response.data);

      const { msg, success } = response.data;

      if (success) {
        toast.success(msg);
        setTimeout(() => {
          navigate("/login");
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
          toast.error("An error occurred during signup.");
        }
      } else {
        toast.error("An error occurred during signup.");
      }
      console.error("Error signing up:", error);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className=" rounded-lg shadow-xl p-8 w-full max-w-md">
        <h1 className="text-3xl font-bold text-center text-purple-500 mb-2">
          Create your Google Account
        </h1>
        <p className="text-black text-center mb-6">
          to continue to Google Docs
        </p>
        <button
          className="w-full flex items-center justify-center gap-2 bg-gray-300 border border-gray-600 rounded-lg py-2 px-4  hover:bg-gray-400 transition duration-300 ease-in-out mb-4"
          onClick={handleGoogleSignUp}
        >
          <img
            src="https://static-00.iconduck.com/assets.00/google-icon-2048x2048-czn3g8x8.png"
            alt="Google Icon"
            className="w-6 h-6"
          />
          Sign up with Google
        </button>
        <div className="relative mb-6">
          <hr className="border-gray-600" />
          <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-800 px-2 text-gray-400 text-sm">
            or
          </span>
        </div>

        <form onSubmit={submitHandler} className="space-y-4">
          <div className="flex flex-col items-start">
            <label htmlFor="name">Full Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              onChange={changeHandler}
              value={signUpData.name}
              placeholder="Enter your name"
              className="w-full px-3 py-2 bg-gray-300 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500  placeholder-gray-400"
            />

            <label htmlFor="email">Email:</label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="abc@gmail.com"
              value={signUpData.email}
              onChange={changeHandler}
              required
              className="w-full px-3 py-2 bg-gray-300 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-black placeholder-gray-400"
            />

            <label htmlFor="password">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="Create a password"
              value={signUpData.password}
              onChange={changeHandler}
              required
              className="w-full px-3 py-2 bg-gray-300 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-black  placeholder-gray-400"
            />

            <label htmlFor="confirmPass">Confirm Password</label>
            <input
              id="confirmPass"
              type="password"
              name="confirmPass"
              placeholder="Confirm your password"
              value={signUpData.confirmPass}
              onChange={changeHandler}
              required
              className="w-full px-3 py-2 bg-gray-300 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-black  placeholder-gray-400"
            />

            <button
              type="submit"
              className="w-full bg-purple-600 text-white rounded-lg py-2 px-4 hover:bg-purple-700 transition duration-300 ease-in-out"
            >
              Sign Up
            </button>
          </div>
        </form>

        <p className="mt-6 text-center text-black ">
          Already have an account?{" "}
          <Link to="/login" className="text-purple-600 hover:underline">
            Sign in instead
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignupPage;
