import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

const LoginPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8080/api/users/login', {
        email: formData.email,
        password: formData.password,
      });

      console.log(response);

      if (response.status === 200 && response.data === 'login successfulll') {
        alert(response.data);
        navigate('/FirstPage');
      } else {
        alert('Invalid Credentials');
      }
    } catch (error) {
      console.error(error);
      alert('Login Failed');
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card shadow-lg p-4" style={{ width: "22rem", borderRadius: "15px" }}>
        <div className="text-center mb-3">
          <img
            src="https://via.placeholder.com/60"
            alt="App Logo"
            className="mb-2"
            style={{ width: "60px" }}
          />
          <h2>IDMate</h2>
          <p className="text-muted">Your Digital Identity, Simplified</p>
        </div>

        <form onSubmit={handleLogin}>
          <h4 className="text-center mb-3">Login to Your Account</h4>
          <div className="mb-3">
            <input
              type="email"
              name="email"
              className="form-control"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              name="password"
              className="form-control"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">Login</button>

          <p className="text-center mt-3">
            Don't have an account? <a href="/RegisterPage">Register here</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
