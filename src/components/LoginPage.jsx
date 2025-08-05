import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { jwtDecode } from "jwt-decode"; // ✅ Correct

const LoginPage = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  // Optional: If already logged in, redirect to FirstPage
  useEffect(() => {
    const token = localStorage.getItem("jwtToken");
    if (token) {
      navigate("/FirstPage");
    }
  }, [navigate]);

  // Input change handler
  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    setError(''); // Clear previous error
  };

  // Form submit handler
  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post('http://localhost:8080/api/users/login', {
        email: formData.email,
        password: formData.password,
      });

      const token = response.data.token;
      const decoded = jwtDecode(token);

      if (response.status === 200 && token) {
        // Store token in localStorage
        const userId = decoded.userId || decoded.id || decoded.sub;

        localStorage.setItem("jwtToken", token);
        localStorage.setItem("userId", userId);
        

          // ✅ Decode token to extract userId


        // Optional: You may also save user info from token if returned
        // Redirect to FirstPage
        alert("Login successful!");
        navigate('/FirstPage');
      } else {
        setError("Invalid credentials. Please try again.");
      }
    } catch (err) {
      if (err.response && err.response.status === 401) {
        setError("Incorrect email or password.");
      } else {
        setError("Server error. Please try again later.");
      }
      console.error("Login error:", err);
    } finally {
      setLoading(false);
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

          {error && (
            <div className="alert alert-danger text-center py-1">{error}</div>
          )}

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

          <button type="submit" className="btn btn-primary w-100" disabled={loading}>
            {loading ? "Logging in..." : "Login"}
          </button>

          <p className="text-center mt-3">
            Don't have an account? <a href="/RegisterPage">Register here</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
