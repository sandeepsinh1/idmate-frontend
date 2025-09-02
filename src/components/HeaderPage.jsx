import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const HeaderPage = () => {
  return (
    <nav
      className="navbar navbar-expand-lg sticky-top shadow-sm"
      style={{
        background: "linear-gradient(to right, #0f172a, #1e293b)",
        borderBottom: "1px solid #1e293b",
      }}
    >
      <div className="container-fluid">
        {/* Brand */}
        <Link className="navbar-brand text-info fw-bold" to="/">
          Idmate <span className="text-light small">Say Hello with a Tap.</span>
        </Link>

        {/* Hamburger Button */}
        <button
          className="navbar-toggler text-light"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Nav Links */}
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link text-light" to="/FeaturesPage">
                Features
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to="/PricingPage">
                Pricing
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to="/AboutPage">
                About Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default HeaderPage;
