import React from 'react';
import { Link } from 'react-router-dom';

const FirstPage = () => {
  return (
    <div className="d-flex flex-column min-vh-100" style={{
      background: 'linear-gradient(to bottom right, #0f2027, #203a43, #2c5364)',
      color: '#fff',
    }}>
      {/* Main Content */}
      <main style={{ paddingTop: '0rem' }}>
        {/* Hero Section */}
        <section className="text-center py-4 px-3">
          <h1 className="display-5 mb-3" style={{ color: '#00bfff' }}>
            Create & Share Your Digital Identity
          </h1>
          <p className="lead mb-4 mx-auto" style={{ maxWidth: '700px', color: '#ccc' }}>
            The universal tool to design and share your ID for business, shop, or yourself — anytime, anywhere.
          </p>

          <div className="d-flex flex-wrap justify-content-center gap-3 mb-4">
            <Link to="/FormPage">
              <button className="btn btn-primary rounded-pill px-4 py-2 fw-semibold">
                Create Paid Cards
              </button>
            </Link>
            <Link to="/CardWeb">
              <button className="btn btn-primary rounded-pill px-4 py-2 fw-semibold">
                Cards Web
              </button>
            </Link>
            <Link to="/CardCreationFreePage">
              <button className="btn btn-primary rounded-pill px-4 py-2 fw-semibold">
                Create Free Cards
              </button>
            </Link>
          </div>

          {/* Compare Plans */}
          <div className="container mt-5">
            <h4 className="fw-bold mb-4 text-white">Compare Plans</h4>
            <div className="row justify-content-center g-4">
              {/* Free Card */}
              <div className="col-md-5">
                <div className="card border-0 shadow-sm h-100" style={{ backgroundColor: '#1e1e2f', color: '#ccc' }}>
                  <div className="card-body">
                    <h5 className="text-success fw-bold text-center mb-4">Free Card</h5>
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item bg-transparent border-0 text-light">✅ Basic Contact Information</li>
                      <li className="list-group-item bg-transparent border-0 text-light">✅ Limited Template Options</li>
                      <li className="list-group-item bg-transparent border-0 text-light">✅ Share via Link or QR</li>
                      <li className="list-group-item bg-transparent border-0 text-danger">❌ Custom Branding</li>
                      <li className="list-group-item bg-transparent border-0 text-danger">❌ Card Analytics</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Paid Card */}
              <div className="col-md-5">
                <div className="card border-0 shadow-sm h-100" style={{ backgroundColor: '#1e1e2f', color: '#ccc' }}>
                  <div className="card-body">
                    <h5 className="text-primary fw-bold text-center mb-4">Paid Card</h5>
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item bg-transparent border-0 text-light">✅ All Free Features</li>
                      <li className="list-group-item bg-transparent border-0 text-light">✅ Premium & Animated Templates</li>
                      <li className="list-group-item bg-transparent border-0 text-light">✅ Add Logo & Branding</li>
                      <li className="list-group-item bg-transparent border-0 text-light">✅ Advanced Sharing Options</li>
                      <li className="list-group-item bg-transparent border-0 text-light">✅ Analytics & View Tracking</li>
                      <li className="list-group-item bg-transparent border-0 text-light">✅ Priority Support</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="text-center py-3 border-top small" style={{ color: '#aaa', backgroundColor: '#111' }}>
        &copy; 2025 Digital Card | Privacy Policy | Terms | Contact Us
      </footer>
    </div>
  );
};

export default FirstPage;
