import React from "react";
import "./cssfile/LoginPage.css";
import { useNavigate } from "react-router-dom";
const LoginPage = () => {
     const navigate = useNavigate();
    const handleLogin = (e) => {
    e.preventDefault(); 
    navigate('/FirstPage');
  }
  return (
    <div className="login-container">
      <div className="login-card">
        <div className="branding">
          <img
            src="https://via.placeholder.com/60"
            alt="App Logo"
            className="logo"
          />
          <h2>IDMate</h2>
          <p className="tagline">Your Digital Identity, Simplified</p>
        </div>
     
        <form className="FirstPage" onSubmit={handleLogin}>     
          <h3>Login to Your Account</h3>
          <input type="email" placeholder="Email Address" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">Login</button>
          <p className="register-link">
            Don't have an account? <a href="/RegisterPage">Register here</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
