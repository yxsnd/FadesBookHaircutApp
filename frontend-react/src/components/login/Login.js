import { React, useState } from "react";
import { FaLock, FaUserNinja } from "react-icons/fa6";
import api from "../../api/axiosConfig";
import Footer from "../footer/Footer";

// Login form component

const Login = () => {
  // Set form data state
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Login function
  const doLogin = async (e) => {
    let formDataJSON = new FormData();
    formDataJSON.append("email", formData.email);
    formDataJSON.append("password", formData.password);

    e.preventDefault();
    try {
      const response = await api
        .post("api/v1/auth/authenticate", formData, {
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
          },
        })
        .then((response) => {
          console.log("Login successful:", response.data);
        }); // Replace with your actual API endpoint
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  const handleRegister = () => {
    window.location.href = "/register";
  };
  // Render the form
  return (
    <div class="flex justify-center items-center h-screen bg-login-bg1 bg-cover bg-center bg-no-repeat">
      <div
        class="w-96 bg-transparent text-black rounded-lg p-8 border-2 border-white border-opacity-20"
        //     class="container mx-auto box-border h-auto w-96 p-4 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800
        //  dark:border-gray-700 mt-96"
        //    style={{ backgroundImage: 'url("../assests/bg4.jpg")' }}
      >
        <form action="">
          <h1 class="text-center text-4xl font-bold text-gray-900 dark:text-white">
            Login
          </h1>

          <div class="relative mt-8 w-full pb-4 text-sm">
            <input
              class="border rounded-full py-2 px-3 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
              type="text"
              placeholder="username"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <span class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <FaUserNinja class="h-5 w-5 text-black mb-4 " />
            </span>
          </div>
          <div class="relative text-sm pb-10">
            <input
              class="border rounded-full py-2 px-3 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
              type="password"
              placeholder="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <span class="absolute inset-y-0 right-0 flex items-center pr-3 pb-10 pointer-events-none">
              <FaLock class="h-5 w-5 text-black" />
            </span>
          </div>
          <div class="flex justify-between text-sm mt-2 mb-15px">
            <label class="inline-flex items-center space-x-2">
              <input
                type="checkbox"
                class="form-checkbox text-blue-500 border-gray-300 rounded-sm focus:ring-2 focus:ring-blue-500"
              />
              <span class="text-sm"> Remember me</span>
            </label>
            <a href="#" class="text-sm hover:underline">
              Forgot Password?
            </a>
          </div>
          <div class="text-center pb-3">
            <button
              type="button"
              class="bg-blue-500 text-white py-2 px-4 rounded-full block mx-auto mt-4 hover:bg-blue-600 w-52 font-bold"
              onClick={doLogin}
              //   onClick={() => navigate("/dashboard")}"
            >
              Login
            </button>
          </div>

          <div class="text-sm text-center">
            <p>
              Don't have an account?{" "}
              <a
                href="#"
                class="hover:underline font-bold"
                onClick={handleRegister}
              >
                Register here
              </a>
            </p>
          </div>
        </form>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Login;
