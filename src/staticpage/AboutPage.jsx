import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  const [showMore, setShowMore] = useState([false, false, false]);

  const toggleReadMore = (index) => {
    const updated = [...showMore];
    updated[index] = !updated[index];
    setShowMore(updated);
  };

  const moreContent = [
    "Our platform offers flexible templates that let you choose colors, fonts, layout, and social links. You can add personal branding and make your card stand out instantly.",
    "Easily share your card using a QR code or direct URL. Anyone can open it on any device — no app or installation required. It's fast, professional, and convenient.",
    "Your data is protected and cloud-stored. Access it anytime by logging into your dashboard. Never lose your card and reduce your carbon footprint by going paperless!"
  ];

  return (
    <div style={{ paddingTop: '0rem', background: 'linear-gradient(to right, #0f172a, #1e293b)', color: '#f1f5f9' }}>
      <div className="container-fluid p-0">

        {/* Hero Section */}
        <div
          className="d-flex align-items-center justify-content-center"
          style={{
            height: '100%',
            position: 'relative',
            background: 'linear-gradient(to right, #1e293b, #0f172a)',
          }}
        >
          <div className="p-5 text-center w-100">
            <h1 className="display-4 fw-bold text-light">
              Together we can make a <span className="text-warning">Difference</span>
            </h1>
            <p className="lead my-4 text-light">
              Build your digital presence now. A modern solution to create, share, and manage visiting cards online.
            </p>
            <div className="d-flex justify-content-center gap-3">
              <Link to="/">
                <button className="btn btn-warning fw-bold px-4">Home</button>
              </Link>
              <button className="btn btn-outline-info fw-bold px-4 text-light border-info">
                Learn More
              </button>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="container py-5" style={{ marginTop: '-4rem', zIndex: 1, position: 'relative' }}>
          <div className="row g-4 justify-content-center">

            {[
              {
                title: "Fully Customizable",
                description: "Create your digital visiting card with name, logo, phone, links, and more!",
              },
              {
                title: "Easy Sharing",
                description: "Share your card instantly via QR code, WhatsApp, or direct link.",
              },
              {
                title: "Secure & Accessible",
                description: "Access anytime, anywhere with your credentials. No paper needed!",
              },
            ].map((card, index) => (
              <div className="col-md-4" key={index}>
                <div
                  className="card h-100 text-center shadow border-0"
                  style={{ backgroundColor: '#1e293b', color: '#f8fafc' }}
                >
                  <div className="card-body">
                    {/* Optional icon/image can be added here */}
                    <h5 className="card-title text-info">{card.title}</h5>
                    <p className="card-text">{card.description}</p>

                    {showMore[index] && (
                      <p className="card-text text-secondary">{moreContent[index]}</p>
                    )}

                    <button
                      className="btn btn-link text-info fw-semibold"
                      onClick={() => toggleReadMore(index)}
                    >
                      {showMore[index] ? "Show Less" : "Read More"}
                    </button>
                  </div>
                </div>
              </div>
            ))}

          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
