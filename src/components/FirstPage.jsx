import React from 'react';
import './cssfile/LandingPage.css';
import {Link} from 'react-router-dom';
const FirstPage = () => {
  return (
    <div className="landing-page">
      {/* Header */}
      <header className="header">
        <div>   
      <span className="logo">Idmate</span>
      <div className="slogan">Say Hello with a Tap.</div>
        </div>
  <div className="nav-buttons">
                      <Link to="/">

            <button className="nav-btn Try-btn">Try Demo</button>
            </Link>

          <button className="nav-btn features-btn">Features</button>
          <button className="nav-btn pricing-btn">Pricing</button>
          <button className="nav-btn about-btn">About Us</button>

        </div>
      </header>

      {/* Main Content with proper spacing */}
      <main className="main-content">
        {/* Hero Section */}
        <section className="hero-section">
          <h1>Create & Share Your Digital Identity</h1>
          <p className="hero-description">
            The universal tool to design and share your ID for business, shop, or yourself - anytime, anywhere.
          </p>

          <div className="cta-buttons">
            <Link to="/RegisterPage">
                        <button className="nav-btn btn-primary">Get Register Yourself</button>
            </Link>

          </div>

          <div className="sample-card">
            <h2>Youth Fashion Center</h2>
            <p>Men's Wear | Women's Wear | Kids Collection</p>
            <p>Owner - JD Store</p>
            <p>📞 +91 9876543210</p>
            <p>📍 Indore, MP</p>
            <p>🌐 facebook.com/john</p>
          </div>
        </section>

        {/* Features Section */}
        <section className="features-section">
          <div className="features-container">
            <div className="feature-card">
              <h4>🔹 Custom Card</h4>
              <p>Create cards with your unique brand</p>
            </div>
            <div className="feature-card">
              <h4>🔸 Easy Sharing</h4>
              <p>Share via link, QR, or WhatsApp</p>
            </div>
            <div className="feature-card">
              <h4>🔒 Secure</h4>
              <p>Your data is protected with encryption</p>
            </div>
            <div className="feature-card">
              <h4>📱 Mobile Friendly</h4>
              <p>Works great on all devices</p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        &copy; 2025 Digital Card | Privacy Policy | Terms | Contact Us
      </footer>
    </div>
  );
};

export default FirstPage;
