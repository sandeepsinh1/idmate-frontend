import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const HeaderPage = () => {
  return (
    <div className="container-fluid bg-light sticky-top shadow-sm">
      <div className="d-flex justify-content-between align-items-center px-4 py-2">
        
        <div>
          <span className="h5 fw-bold text-warning me-2">Idmate</span>
          <span className="text-primary small">Say Hello with a Tap.</span>
        </div>

        <div className="d-flex gap-2">
          <Link to="/FeaturesPage">
            <button className="btn btn-outline-primary">Features</button>
          </Link>
          <Link to="/PricingPage">
            <button className="btn btn-outline-primary">Pricing</button>
          </Link>
          <Link to="/AboutPage">
            <button className="btn btn-outline-primary">About Us</button>
          </Link>
        </div>

      </div>
    </div>
  );
};

export default HeaderPage;
