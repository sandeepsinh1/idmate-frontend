import React from 'react';
import { Link } from 'react-router-dom';
import './cssfile/RegisterPage.css';

const Register = () => {
  return (
    <div className="register-container">
      <div className="register-card">
        <div className="branding">
          <img src="https://via.placeholder.com/60" alt="App Logo" className="logo" />
          <h2>IDMate</h2>
          <p className="tagline">Create Your Digital Identity</p>
        </div>
        <form className="register-form">
          <h3>Create an Account</h3>
          <input type="text" placeholder="Full Name" required />
          <input type="email" placeholder="Email Address" required />
          <input type="password" placeholder="Password" required />
          <input type="password" placeholder="Confirm Password" required />
          <button type="submit">Register</button>
          <p className="login-link">
            Already have an account? <Link to="/LoginPage">Login here</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
