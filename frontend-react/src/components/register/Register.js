import React from "react";
import Footer from "../footer/Footer";

const Register = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-blur-bg bg-gray-400">
      <div className="bg-white shadow-2xl rounded-md p-4 w-96">
        <h2 className="text-3xl font-semibold mb-4">Register</h2>
        <form>
          <div className="mb-4">
            <label
              htmlFor="firstName"
              className="block text-sm font-medium text-gray-700"
            >
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              className="mt-1 block w-full border border-black rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm h-7"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="lastName"
              className="block text-sm font-medium text-gray-700"
            >
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              className="mt-1 block w-full border border-black rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm h-7"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 block w-full border border-black rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm h-7"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="mt-1 block w-full border border-black rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm h-7"
            />
          </div>
          <div className="mt-4">
            <button
              type="submit"
              className="center w-full inline-flex justify-center items-center bg-indigo-500 text-white py-2 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Register
            </button>
          </div>
        </form>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Register;
