// src/pages/FeaturesPage.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom'
const FeaturesPage = () => {
  const features = [
    {
      img: 'https://img.icons8.com/external-flat-icons-inmotus-design/64/share.png',
      title: 'Instant Sharing',
      description: 'Share your digital card with just one click via WhatsApp, email, or QR code.',
    },
    {
      img: 'https://img.icons8.com/external-flat-icons-inmotus-design/64/security.png',
      title: 'Secure & Private',
      description: 'Your data is encrypted and safe. Only the people you share it with can view it.',
    },
    {
      img: 'https://img.icons8.com/external-flat-icons-inmotus-design/64/devices.png',
      title: 'Fully Responsive',
      description: 'Looks great on mobile, tablet, or desktop with seamless user experience.',
    },
    {
      img: 'https://img.icons8.com/external-flat-icons-inmotus-design/64/edit-file.png',
      title: 'Easy to Edit',
      description: 'Update your name, business, contact info, or image in real-time from dashboard.',
    },
    {
      img: 'https://img.icons8.com/external-flat-icons-inmotus-design/64/globe.png',
      title: 'Global Accessibility',
      description: 'Reach customers globally with a professional card that never goes out of date.',
    },
    {
      img: 'https://img.icons8.com/external-flat-icons-inmotus-design/64/analytics.png',
      title: 'Analytics',
      description: 'Track how many people viewed, clicked, and engaged with your digital card.',
    },
  ];

  return (
    <section style={{ paddingTop: '5rem' }}>
      <div className="d-flex justify-content-between align-items-center px-4 py-2">
        
        <div>
          <span className="h5 fw-bold text-warning me-2">Idmate</span>
          <span className="text-primary small">Say Hello with a Tap.</span>
        </div>

        <div className="d-flex gap-2">
          <Link to="/">
            <button className="btn btn-outline-primary">Home</button>
          </Link>
          <Link to="/RegistrationPage">
            <button className="btn btn-outline-primary">Go to Registration</button>
          </Link>
          <Link to="/PricingPage">
            <button className="btn btn-outline-primary">Pricing</button>
          </Link>
          <Link to="/AboutPage">
            <button className="btn btn-outline-primary">About Us</button>
          </Link>
        </div>

      </div>
 
      <div className="container text-center">
        <h1 className="mb-3 fw-bold text-dark">Why Choose Our Digital Card?</h1>
        <p className="mb-5 text-secondary fs-5">
          All-in-one solution to share your identity with style and security.
        </p>

        <div className="row g-4">
          {features.map((feature, index) => (
            <div className="col-md-6 col-lg-4" key={index}>
              <div className="bg-white p-4 rounded-4 shadow-sm h-100 transition-transform hover-shadow">
                <img src={feature.img} alt={feature.title} className="mb-3" width="64" />
                <h5 className="fw-bold text-dark mb-2">{feature.title}</h5>
                <p className="text-muted">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesPage;
