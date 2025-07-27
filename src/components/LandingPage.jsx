import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="d-flex flex-column min-vh-50 bg-light text-dark">
      {/* Header */}
      <header className="bg-white d-flex justify-content-between align-items-center px-4 py-3 shadow sticky-top">
        <div>
          <h5 className="mb-0 fw-bold text-warning">Idmate</h5>
          <small className="text-primary">Say Hello with a Tap.</small>
        </div>
        <div className="d-flex flex-wrap gap-2">
  
          <Link to="/DashBoard">
            <button className="btn btn-outline-primary rounded-pill fw-semibold">Dashboard</button>
          </Link>
          <Link to="/FeaturesPage">
            <button className="btn btn-outline-primary rounded-pill fw-semibold">Features</button>
          </Link>
          <Link to="/PricingPage">
            <button className="btn btn-outline-primary rounded-pill fw-semibold">Pricing</button>
          </Link>
          <Link to="/AboutPage">
            <button className="btn btn-primary text-white rounded-pill fw-semibold">About Us</button>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="mt-5 pt-5">
        {/* Hero Section */}
        <section className="text-center py-5 px-3 bg-light bg-gradient">
          <h1 className="text-primary display-5 mb-3">Create & Share Your Digital Identity</h1>
          <p className="lead text-secondary mb-4 mx-auto" style={{ maxWidth: '700px' }}>
            The universal tool to design and share your ID for business, shop, or yourself - anytime, anywhere.
          </p>

          <div className="d-flex flex-wrap justify-content-center gap-3 mb-4">
            <Link to="/CardCreationPaidPage">
              <button className="btn btn-primary rounded-pill px-4 py-2 fw-semibold">Create Paid Card</button>
            </Link>
            <Link to="/CardCreationFreePage">
              <button className="btn btn-primary rounded-pill px-4 py-2 fw-semibold">Create Free Card</button>
            </Link>
          </div>

          <div className="card mx-auto shadow p-4" style={{ maxWidth: '400px', backgroundColor: '#a9c1e7', borderRadius: '1rem' }}>
            <h2 className="h5 text-dark mb-2">Youth Fashion Center</h2>
            <p className="mb-1 small">Men's Wear | Women's Wear | Kids Collection</p>
            <p className="mb-1 small">Owner - JD Store</p>
            <p className="mb-1 small">📞 +91 9876543210</p>
            <p className="mb-1 small">📍 Indore, MP</p>
            <p className="mb-0 small">🌐 facebook.com/john</p>
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
