import React, { useState } from 'react'
import '../css/Register.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom'

const Register = () => {
  const navigate=useNavigate()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  })

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
        "https://fashion-store-backend-0yqd.onrender.com/api/users/register",
        formData
      );


      if (response.data.success) {

        alert(response.data.message);

        navigate("/login");

      }

    } catch (error) {

      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("Registration failed");
      }

    }

  };


  return (
    <section className="register-page">
      <div className="register-container">
        <h1>Create Account</h1>
        <p className="register-subtitle">
          Create your account to continue shopping.
        </p>
        <form className='register-form' onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id='name'
            name='name'
            value={formData.name}
            onChange={handleChange}
            placeholder='Enter Your name'
            required
          />
          <label htmlFor="name">Email</label>
          <input
            type="email"
            id='email'
            name='email'
            value={formData.email}
            onChange={handleChange}
            placeholder='Enter Your Email'
            required
          />
          <label htmlFor="name">Password</label>
          <input
            type="password"
            id='password'
            name='password'
            value={formData.password}
            onChange={handleChange}
            placeholder='Enter Your password'
            required
          />
          <button
            type="submit"
            className="register-btn"
          >
            Register
          </button>
        </form>

        <p className="login-link">
          Already have an account?
          <button type='button' onClick={() => navigate('/login')}>Login</button>
        </p>

      </div>
    </section>
  )
}

export default Register
