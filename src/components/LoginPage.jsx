import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { jwtDecode } from "jwt-decode";

const LoginPage = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("jwtToken");
    if (token) {
      try {
        const decoded = jwtDecode(token);
        const currentTime = Date.now() / 1000;
        if (decoded.exp && decoded.exp > currentTime) {
          navigate("/FirstPage");
        } else {
          localStorage.removeItem("jwtToken");
          localStorage.removeItem("userId");
        }
      } catch (err) {
        console.error("Invalid token:", err);
        localStorage.removeItem("jwtToken");
        localStorage.removeItem("userId");
      }
    }
  }, [navigate]);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    setError('');
  };

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
        const userId = decoded.userId || decoded.id || decoded.sub;
        localStorage.setItem("jwtToken", token);
        localStorage.setItem("userId", userId);

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
    <div className="d-flex justify-content-center align-items-center vh-100" style={{
      background: 'linear-gradient(135deg,#0f2027, #203a43, #2c5364)'
    }}>
      <div className="card shadow-lg p-4" style={{
        width: "22rem",
        borderRadius: "15px",
        backgroundColor: "#203a43,",
        border: "none"
      }}>

        <div className="text-center mb-3">
          <img
            src="https://via.placeholder.com/60"
            alt="App Logo"
            className="mb-2"
            style={{ width: "60px" }}
          />
          <h2 style={{ color: "#00bfff" }}>IDMate</h2>
          <p className="text-muted" style={{ color: "#a0a0a0" }}>Your Digital Identity, Simplified</p>
        </div>

        <form onSubmit={handleLogin}>
          <h4 className="text-center mb-3 text-dark">Login to Your Account</h4>

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

          <p className="text-center mt-3 text-secondary">
            Don't have an account? <a href="/RegisterPage" className="text-primary fw-semibold">Register here</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
