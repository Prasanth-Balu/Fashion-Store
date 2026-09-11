import React, { useState } from "react";
import "../css/Login.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });


  const handleChange = (e) => {

    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value
    });

  };


  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const response = await axios.post(
        "https://fashion-store-backend-0yqd.onrender.com/api/users/login",
        formData
      );


      if (response.data.success) {

        localStorage.setItem("token",response.data.token);
        alert(response.data.message);

        if (response.data.user.role === "admin") {
          navigate("/admin");
        } else {
          navigate("/");
        }
      }
    } catch (error) {

      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("Login failed");
      }

    }

  };


  return (
    <section className="login-page">

      <div className="login-container">

        <h1>Welcome Back</h1>

        <p className="login-subtitle">
          Login to continue shopping.
        </p>


        <form
          className="login-form"
          onSubmit={handleSubmit}
        >

          <label htmlFor="email">
            Email
          </label>

          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter Your Email"
            required
          />


          <label htmlFor="password">
            Password
          </label>

          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter Your Password"
            required
          />


          <button
            type="submit"
            className="login-submit-btn"
          >
            Login
          </button>

        </form>


        <p className="register-link">

          Don't have an account?

          <button
            type="button"
            onClick={() => navigate("/register")}
          >
            Register
          </button>

        </p>

      </div>

    </section>
  );
};

export default Login;
