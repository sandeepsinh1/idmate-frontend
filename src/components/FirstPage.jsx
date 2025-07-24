 import React from 'react';
import './cssfile/FirstPage.css'; // Import the CSS below or use inline styles
import { useNavigate } from 'react-router-dom';

function FirstPage() {
  const navigate = useNavigate();

  return (
    <div className="landing-page">
      {/* Header */}
      <header className="header">
        <div className="logo">Digital Visiting Card</div>
  <div className="nav-buttons">
              <button className="register-btn" onClick={() => navigate('/dd')}>Features</button>
          
          <button className="login-btn" onClick={() => navigate('/dd')}>Princing</button>
          <button className="register-btn" onClick={() => navigate('/dfdf')}>About Us</button>
          
        </div>

        </header>

      {/* Hero Section */}
      <section className="hero-section">
        <h1>Create & Share Your Digital Identity</h1>
        <p>The universal tool to design and share your ID for business, shop, or yourself — anytime, anywhere.</p>

      <div className="nav-buttons">
          <button onClick={() => navigate('/register')} className="btn primary">Get Started</button>
          <button onClick={() => navigate('/view-card')} className="btn outline">Try Demo</button>
        </div>
        <div className="sample-card">
          <h2>Youth Fashion Center</h2>
           <p>Men's Wear | Women's Wear | Kids Collection</p>
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
export default FirstPage;
