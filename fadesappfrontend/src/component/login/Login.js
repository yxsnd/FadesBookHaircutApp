import { React, useState } from "react";
import { FaLock, FaUserNinja } from "react-icons/fa6";
import api from "../../api/axiosConfig";
import "./Login.css";

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
    e.preventDefault();

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

  // Render the form
  return (
    <div className="wrapper">
      <form action="">
        <h1 className="title">Login</h1>

        <div className="input-box">
          <input
            type="text"
            placeholder="username"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <FaUserNinja className="icon" />
        </div>
        <div className="input-box">
          <input
            type="password"
            placeholder="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <FaLock className="icon" />
        </div>
        <div className="remember-forgot">
          <label>
            <input type="checkbox" />
            Remember me
          </label>
          <a href="#">Forgot password?</a>
        </div>
        <input type="submit" value="Login" onClick={doLogin} />

        <div className="register-link">
          <p>
            Don't have an account? <a href="#">Register here</a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
