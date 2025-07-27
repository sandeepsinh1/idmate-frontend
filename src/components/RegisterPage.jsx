import React, { useState } from 'react';
import axios from 'axios';
import { Link,useNavigate } from 'react-router-dom';
import './cssfile/RegisterPage.css';

const RegisterPage = () => {
  const navigate=useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    try {
      const response = await axios.post('http://localhost:8080/api/users/register', {
        name: formData.name,
        email: formData.email,
        password: formData.password,
      });
if(response.status===200)
{
      alert(response.data); // backend success message
        navigate('/LoginPage')
}
      } catch (error) {
      console.error(error);
      alert('Registration failed');
    }
  };

  return (
    <div className="register-container">
      <div className="register-card">
        <div className="branding">
          <img src="https://via.placeholder.com/60" alt="App Logo" className="logo" />
          <h2>IDMate</h2>
          <p className="tagline">Create Your Digital Identity</p>
        </div>
        <form className="register-form" onSubmit={handleSubmit}>
          <h3>Create an Account</h3>
          <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} required />
          <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} required />
          <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
          <input type="password" name="confirmPassword" placeholder="Confirm Password" value={formData.confirmPassword} onChange={handleChange} required />
          <button type="submit">Register</button>
          <p className="login-link">
            Already have an account? <Link to="/LoginPage">Login here</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
