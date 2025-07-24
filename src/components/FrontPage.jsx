import React from 'react';
import './cssfile/FrontPage.css'; // Import the CSS below or use inline styles
import { useNavigate } from 'react-router-dom';

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="landing-page">
      {/* Header */}
      <header className="header">
        <div className="logo">Digital Card</div>
        <div className="nav-buttons">
          <button className="login-btn" onClick={() => navigate('/login')}>Login</button>
          <button className="register-btn" onClick={() => navigate('/register')}>Register</button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-section">
        <h1>Create & Share Your Digital Identity</h1>
        <p>The universal tool to design and share your ID for business, shop, or yourself — anytime, anywhere.</p>

        <div className="cta-buttons">
          <button className="get-started" onClick={() => navigate('/register')}>Get Started</button>
          <button className="demo-btn" onClick={() => navigate('/view-card')}>Try Demo</button>
        </div>

        <div className="sample-card">
          <h2>John Doe</h2>
          <p>Owner - JD Store</p>
          <p>📞 ‪+91 9876543210‬</p>
          <p>📍 Indore, MP</p>
          <p>🌐 facebook.com/john</p>
        </div>
      </section>

      {/* Features */}
      <section className="features">
        <div className="feature-box">
          <h4>💼 Custom Card</h4>
          <p>Create cards with your unique brand</p>
        </div>
        <div className="feature-box">
          <h4>🔗 Easy Sharing</h4>
          <p>Share via link, QR, or WhatsApp</p>
        </div>
        <div className="feature-box">
          <h4>🔒 Secure</h4>
          <p>Your data is protected with encryption</p>
        </div>
        <div className="feature-box">
          <h4>📱 Mobile Friendly</h4>
          <p>Works great on all devices</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        &copy; 2025 Digital Card | Privacy Policy | Terms | Contact Us
      </footer>
 </div>
);
}
