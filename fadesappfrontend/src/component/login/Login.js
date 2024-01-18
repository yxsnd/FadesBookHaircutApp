import React from "react";
import { FaUserNinja, FaLock } from "react-icons/fa6";
import "./Login.css";

const Login = () => {
  return (
    <div className="wrapper">
      <form action="">
        <h1 className="title">Login</h1>

        <div className="input-box">
          <input type="text" placeholder="username" required />
          <FaUserNinja  className="icon"/>
        </div>
        <div className="input-box">
          <input type="password" placeholder="password" required />
          <FaLock className="icon"/>
        </div>
        <div className="remember-forgot">
          <label>
            <input type="checkbox" />
            Remember me
          </label>
          <a href="#">Forgot password?</a>
        </div>
        <input type="submit" value="Login" />

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
