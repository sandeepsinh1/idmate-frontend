import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const RegisterPage = () => {
  const navigate = useNavigate();
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
      if (response.status === 200) {
        alert(response.data);
        navigate('/LoginPage');
      } else {
        alert(response.data);
      }
    } catch (error) {
      console.error(error);
      alert('Registration Failed');
    }
  };

  const styles = {
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      background: 'linear-gradient(135deg, #0f2027, #203a43, #2c5364)',
      fontFamily: 'Arial, sans-serif',
    },
    card: {
      background: '#1e1e2f',
      padding: '40px',
      borderRadius: '15px',
      boxShadow: '0 4px 20px rgba(0,0,0,0.4)',
      width: '100%',
      maxWidth: '400px',
      textAlign: 'center',
      color: '#e0e0e0',
    },
    logo: {
      width: '60px',
      marginBottom: '10px',
    },
    title: {
      margin: '10px 0',
      color: '#00bfff',
    },
    tagline: {
      marginBottom: '20px',
      fontSize: '14px',
      color: '#a0a0a0',
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      gap: '15px',
    },
    input: {
      padding: '12px',
      fontSize: '16px',
      border: '1px solid #444',
      borderRadius: '8px',
      outline: 'none',
      backgroundColor: '#2a2a3b',
      color: '#fff',
      transition: '0.3s',
    },
    button: {
      padding: '12px',
      background: '#4f46e5',
      color: '#fff',
      fontSize: '16px',
      border: 'none',
      borderRadius: '8px',
      cursor: 'pointer',
      transition: '0.3s',
    },
    loginLink: {
      marginTop: '10px',
      fontSize: '14px',
      color: '#ccc',
    },
    link: {
      color: '#00bfff',
      textDecoration: 'none',
      fontWeight: 'bold',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <div className="branding">
          <img
            src="https://via.placeholder.com/60"
            alt="App Logo"
            style={styles.logo}
          />
          <h2 style={styles.title}>IDMate</h2>
          <p style={styles.tagline}>Create Your Digital Identity</p>
        </div>
        <form style={styles.form} onSubmit={handleSubmit}>
          <input
            style={styles.input}
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            style={styles.input}
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            style={styles.input}
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <input
            style={styles.input}
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
          <button
            type="submit"
            style={styles.button}
            onMouseOver={(e) => (e.target.style.background = '#4338ca')}
            onMouseOut={(e) => (e.target.style.background = '#4f46e5')}
          >
            Register
          </button>
          <p style={styles.loginLink}>
            Already have an account?{' '}
            <Link to="/LoginPage" style={styles.link}>
              Login here
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
