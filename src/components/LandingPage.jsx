import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    
    <div className="d-flex flex-column min-vh-100 bg-light text-dark">
      {/* Main Content */}
          <main style={{ paddingTop: '45rem' }}>
  {/* Hero Section */}
        <section className="text-center py-4 px-3 bg-light bg-gradient">
          <h1 className="text-primary display-5 mb-3">
            Create & Share Your Digital Identity
          </h1>
          <p className="lead text-secondary mb-4 mx-auto" style={{ maxWidth: '700px' }}>
            The universal tool to design and share your ID for business, shop, or yourself — anytime, anywhere.
          </p>

          <div className="d-flex flex-wrap justify-content-center gap-3 mb-4">
            <Link to="/RegisterPage">
              <button className="btn btn-primary rounded-pill px-4 py-2 fw-semibold">
                Register 
              </button>
            </Link>
              <Link to="/SampleCardPage">
              <button className="btn btn-primary rounded-pill px-4 py-2 fw-semibold">
              Sample Card
              </button>
            </Link>
            
           </div>
       <p className="login-link">
                        Already have an account? <Link to="/LoginPage">Login here</Link>
                      </p>
            
        <div
  className="card mx-auto text-center shadow-lg p-4"
  style={{
    maxWidth: '800px',
    backgroundColor: '#f6e8d9',
    borderRadius: '1.5rem',
    fontFamily: 'Arial, sans-serif',
    color: '#2c2c2c',
  }}
>
  {/* Logo */}
  <div className="mb-3">
    <img
      src="https://cdn-icons-png.flaticon.com/512/4290/4290854.png"
      alt="Logo"
      style={{ width: '50px', height: '50px' }}
    />
    <div className="mt-1 small">Logo</div>
  </div>

  {/* Name */}
  <h2 className="fw-bold text-uppercase mb-2" style={{ color: '#1e1e1e' }}>
    Shree Collection
  </h2>

  {/* Tagline */}
  <p className="mb-2" style={{ fontSize: '0.95rem' }}>
    Men's Wear | Women's Wear | Kids Collection
  </p>

  {/* Phone */}
  <p className="mb-2">
    📞 <span style={{ fontWeight: '500' }}>07610316422</span>
  </p>

  {/* Address */}
  <p className="mb-2">
    📍 Meena Mansion, 274 Abhinandan Nagar, Shyam Nagar Annex
  </p>

  {/* Social Icons */}
  <div className="d-flex justify-content-center gap-3 my-3">
    <img src="https://cdn-icons-png.flaticon.com/512/733/733585.png" alt="WhatsApp" width="30" />
    <img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" alt="Instagram" width="30" />
  </div>

  {/* QR Code */}
  <div className="mt-2">
    <img
      src="https://api.qrserver.com/v1/create-qr-code/?size=130x130&data=https://yourcardlink.com"
      alt="QR Code"
      width="130"
      height="130"
    />
    <p className="mt-2 small">Scan for more details</p>
  </div>
</div>
</section>

        {/* Features Section */}
        <section className="py-5 bg-white">
          <div className="container">
            <div className="row g-4 justify-content-center">
              <div className="col-md-6 col-lg-3">
                <div className="card text-center shadow-sm p-3">
                  <h5 className="text-primary">🔹 Custom Card</h5>
                  <p className="text-muted small">Create cards with your unique brand</p>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="card text-center shadow-sm p-3">
                  <h5 className="text-primary">🔸 Easy Sharing</h5>
                  <p className="text-muted small">Share via link, QR, or WhatsApp</p>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="card text-center shadow-sm p-3">
                  <h5 className="text-primary">🔒 Secure</h5>
                  <p className="text-muted small">Your data is protected with encryption</p>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="card text-center shadow-sm p-3">
                  <h5 className="text-primary">📱 Mobile Friendly</h5>
                  <p className="text-muted small">Works great on all devices</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="text-center py-3 bg-light border-top small">
        &copy; 2025 Digital Card | Privacy Policy | Terms | Contact Us
      </footer>
    </div>
  );
};

export default LandingPage;
