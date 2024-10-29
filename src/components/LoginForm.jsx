import React, { useState } from "react";
import GoogleSignIn from "./GoogleSignIn";
import FbSignIn from "./FbSignIn";

const LoginForm = () => {
  // Step 1: Initialize form data with default values for email and password
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // Step 2: Handle input changes by updating the corresponding form field in formData state
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Step 3: Handle form submission, log the formData, and reset the form
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted", formData);
    setFormData({
      email: "",
      password: "",
    });
  };

  return (
    <>
      {/* Center the form horizontally and vertically on the screen */}
      <div className="flex justify-center items-center h-screen my-auto">
        <form
          onSubmit={handleSubmit}
          className="min-w-96 w-1/3 backdrop-blur-sm bg-sky-300/10 p-10 rounded-md border border-t-teal-200 border-r-teal-200"
        >
          {/* Form Header */}
          <h1 className="text-slate-100 text-center text-4xl font-medium">
            Welcome!
          </h1>
          <h2 className="text-slate-300 pb-8 text-center">
            Start taking notes by simply logging in
          </h2>
          <hr className="mb-5" />

          {/* Email Input Field */}
          <div className="flex flex-col">
            <label className="text-slate-100 text-xl font-semibold">
              Email:
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:border-blue-500 focus:ring-blue-500 focus:ring-1 mb-3"
              placeholder="example123@gmail.com"
            />
          </div>

          {/* Password Input Field */}
          <div className="flex flex-col">
            <label className="text-slate-100 text-xl font-semibold">
              Password:
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:border-blue-500 focus:ring-blue-500 focus:ring-1"
              placeholder="Enter Password"
            />
          </div>

          {/* Remember Me and Forgot Password Options */}
          <div className="flex justify-between items-center mt-3">
            <div>
              <input type="checkbox" className="mr-1" />
              <label htmlFor="remember" className="text-slate-100">
                Remember me?
              </label>
            </div>
            <h1 className="text-slate-100">|</h1>
            <a
              href="#"
              className="text-slate-100 hover:underline hover:translate-y-px hover:text-blue-400"
            >
              Forgot Password?
            </a>
          </div>

          {/* Submit Button for Logging In */}
          <div className="flex justify-center items-center mt-5">
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-10 rounded-md hover:bg-blue-600 hover:-translate-y-px"
            >
              Log In
            </button>
          </div>

          {/* Divider and Social Media Login Options */}
          <div className="text-center mt-3">
            <h1 className="text-slate-100">or</h1>
            <GoogleSignIn />
            <FbSignIn />
          </div>
        </form>
      </div>
    </>
  );
};

export default LoginForm;
