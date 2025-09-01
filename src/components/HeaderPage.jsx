import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const HeaderPage = () => {
  return (
    <div
      className="container-fluid sticky-top shadow-sm"
      style={{
        background: "linear-gradient(to right, #0f172a, #1e293b)",
        borderBottom: "1px solid #1e293b",
      }}
    >
      <div className="d-flex justify-content-between align-items-center px-4 py-2">

        {/* Brand */}
        <div>
          <span className="h5 fw-bold text-info me-2">Idmate</span>
          <span className="text-light small">Say Hello with a Tap.</span>
        </div>

        {/* Nav Buttons */}
        <div className="d-flex gap-2">
          <Link to="/FeaturesPage">
            <button className="btn btn-outline-info text-light">Features</button>
          </Link>
          <Link to="/PricingPage">
            <button className="btn btn-outline-info text-light">Pricing</button>
          </Link>
          <Link to="/AboutPage">
            <button className="btn btn-outline-info text-light">About Us</button>
          </Link>
        </div>

      </div>
    </div>
  );
};

export default HeaderPage;
