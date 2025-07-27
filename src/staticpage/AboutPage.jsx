// AboutPage.jsx
import React from 'react';
import './AboutPage.css';

const AboutPage = () => {
  return (
    <div className="about-hero-container">
      <div className="hero-section">
        <div className="overlay">
          <h1>Together we can make a <span>Difference</span></h1>
          <p>Build your digital presence now. A modern solution to create, share, and manage visiting cards online.</p>
          <div className="hero-buttons">
            <button className="btn primary">Create Your Card</button>
            <button className="btn secondary">Learn More</button>
          </div>
        </div>
      </div>

      <div className="about-features">
        <div className="feature-card">
          <img src="" alt="Customize" />
          <h3>Fully Customizable</h3>
          <p>Create your digital visiting card with name, logo, phone, links, and more!</p>
          <a href="#">Read More</a>
        </div>

        <div className="feature-card">
          <img src="" alt="Share" />
          <h3>Easy Sharing</h3>
          <p>Share your card instantly via QR code, WhatsApp, or direct link.</p>
          <a href="#">Read More</a>
        </div>

        <div className="feature-card">
          <img src="" alt="Secure" />
          <h3>Secure & Accessible</h3>
          <p>Access anytime, anywhere with your credentials. No paper needed!</p>
          <a href="#">Read More</a>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
