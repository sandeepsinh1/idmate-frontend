import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './cssfile/SampleCardPage.css';
import { Link } from 'react-router-dom';

const cardData = Array.from({ length: 50 }, (_, i) => {
  if (i < 20) return { type: 'shop', id: i + 1 };
  if (i < 35) return { type: 'employee', id: i + 1 };
  return { type: 'basic', id: i + 1 };
});

const SampleCardPage = () => {
  const bgColors = ['#1e293b', '#334155', '#0f172a', '#1e3a8a', '#0c4a6e'];
  const employeeImg =
    'https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=600&q=80';

  return (
    <div style={{ backgroundColor: '#0f172a', minHeight: '100%', paddingTop: '0rem' }}>
      {/* Navbar */}
      <nav
        className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm sticky-top"
        style={{ borderBottom: '1px solid #1e293b' }}
      >
        <div className="container-fluid">
          <Link className="navbar-brand text-info fw-bold" to="/">
            Idmate <span className="text-light small">Say Hello with a Tap.</span>
          </Link>

          {/* Hamburger */}
          <button
            className="navbar-toggler"
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
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/RegisterPage">Register</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/FeaturesPage">Features</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/PricingPage">Pricing</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/AboutPage">About Us</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Headings */}
      <h2 className="text-center mb-2 fw-bold text-info mt-4">50 Attractive Sample Cards</h2>
      <h3 className="text-center mb-2 fw-semibold text-light">These are Static Generated Cards</h3>
      <h4 className="text-center mb-4 fw-semibold text-secondary">We have many varieties that look great!</h4>

      {/* Card Grid */}
      <div className="row g-4 px-3 pb-5">
        {cardData.map((card, index) => {
          const isShop = card.type === 'shop';
          const isEmp = card.type === 'employee';

          return (
            <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={index}>
              <div
                className={`p-4 rounded-4 text-center position-relative shadow-sm ${
                  isShop || isEmp ? 'card-with-bg text-white' : ''
                }`}
                style={{
                  background:
                    isShop
                      ? `url('https://source.unsplash.com/300x400/?store,business,retail&sig=${index}')`
                      : isEmp
                      ? `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${employeeImg})`
                      : bgColors[index % bgColors.length],
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  border: '1px solid #334155',
                }}
              >
                {(isShop || isEmp) && <div className="card-overlay" />}
                <div className={`position-relative ${isShop || isEmp ? 'text-white' : 'text-light'}`}>
                  <i className="bi bi-person-badge-fill fs-1 text-warning"></i>
                  <h5 className="mt-2 fw-bold text-uppercase">Card {card.id}</h5>
                  <p className="small mb-1 text-info">Men's Wear | Women's Wear | Kids</p>
                  <p>
                    <i className="bi bi-telephone-fill me-2 text-success"></i>07610{300000 + index}
                  </p>
                  <p>
                    <i className="bi bi-geo-alt-fill me-2 text-danger"></i>Some City, Zone {index % 10}
                  </p>
                  <div className="d-flex justify-content-center gap-3 mb-3">
                    <a href="#"><i className="bi bi-whatsapp fs-4 text-success"></i></a>
                    <a href="#"><i className="bi bi-instagram fs-4 text-danger"></i></a>
                  </div>
                  <img
                    src={`https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=https://card${index + 1}.example.com`}
                    alt="QR"
                    className="bg-white p-1 rounded"
                    width="100"
                  />
                  <p className="small mt-2">Scan for more details</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SampleCardPage;
