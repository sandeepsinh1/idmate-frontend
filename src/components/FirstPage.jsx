import React from 'react';
import { Link } from 'react-router-dom';

const FirstPage = () => {
  return (
    <div className="d-flex flex-column min-vh-100 bg-light text-dark">
      {/* Main Content */}
      <main style={{ paddingTop: '28rem' }}>
        {/* Hero Section */}
        <section className="text-center py-4 px-3 bg-light bg-gradient">
          <h1 className="text-primary display-5 mb-3">
            Create & Share Your Digital Identity
          </h1>
          <p className="lead text-secondary mb-4 mx-auto" style={{ maxWidth: '700px' }}>
            The universal tool to design and share your ID for business, shop, or yourself — anytime, anywhere.
          </p>

          <div className="d-flex flex-wrap justify-content-center gap-3 mb-4">
            <Link to="/FormPage">
              <button className="btn btn-primary rounded-pill px-4 py-2 fw-semibold">
                Create Paid Card
              </button>
            </Link>
            <Link to="/CardCreationFreePage">
              <button className="btn btn-primary rounded-pill px-4 py-2 fw-semibold">
                Create Free Card
              </button>
            </Link>
          </div>

          {/* 👉 Free vs Paid Card Comparison */}
         {/* 👉 Free vs Paid Card Comparison - Professional Style */}
<div className="container mt-5">
  <h4 className="text-dark fw-bold mb-4">Compare Plans</h4>
  <div className="row justify-content-center g-4">
    {/* Free Card */}
    <div className="col-md-5">
      <div className="card border-0 shadow-sm h-100">
        <div className="card-body">
          <h5 className="text-success fw-bold text-center mb-4">Free Card</h5>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">✅ Basic Contact Information</li>
            <li className="list-group-item">✅ Limited Template Options</li>
            <li className="list-group-item">✅ Share via Link or QR</li>
            <li className="list-group-item text-danger">❌ Custom Branding</li>
            <li className="list-group-item text-danger">❌ Card Analytics</li>
          </ul>
        </div>
      </div>
    </div>

    {/* Paid Card */}
    <div className="col-md-5">
      <div className="card border-0 shadow-sm h-100">
        <div className="card-body">
          <h5 className="text-primary fw-bold text-center mb-4">Paid Card</h5>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">✅ All Free Features</li>
            <li className="list-group-item">✅ Premium & Animated Templates</li>
            <li className="list-group-item">✅ Add Logo & Branding</li>
            <li className="list-group-item">✅ Advanced Sharing Options</li>
            <li className="list-group-item">✅ Analytics & View Tracking</li>
            <li className="list-group-item">✅ Priority Support</li>
          </ul>
        </div>
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

export default FirstPage;
