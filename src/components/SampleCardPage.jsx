import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './cssfile/SampleCardPage.css';
import {Link} from 'react-router-dom';
const cardData = Array.from({ length: 50 }, (_, i) => {
  if (i < 20) return { type: 'shop', id: i + 1 };
  if (i < 35) return { type: 'employee', id: i + 1 };
  return { type: 'basic', id: i + 1 };
});

const SampleCardPage = () => {
  const bgColors = ['#fff8e1', '#f3e5f5', '#e3f2fd', '#f1f8e9', '#fff3e0'];
  const employeeImg = "https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=600&q=80";

  return (
    <div container-fluid bg-light sticky-top shadow-sm style={{ paddingTop: '310rem' }}>
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
    
      <h2 className="text-center mb-4 fw-bold text-info">50 Attractive Sample Cards</h2>
      <h3 className="text-center mb-4 fw-bold text-info">This is Sample Cards It is static Generated Card </h3>
      <h4 className="text-center mb-4 fw-bold text-info">We have lots of Variety Availible that look Great </h4>
      
      
      <div className="row g-4">
        {cardData.map((card, index) => {
          const isShop = card.type === 'shop';
          const isEmp = card.type === 'employee';
          const isBasic = card.type === 'basic';

          return (
            <div className="col-md-6 col-lg-4 col-xl-3" key={index}>
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
                }}
              >
                {(isShop || isEmp) && <div className="card-overlay" />}
                <div className={`position-relative ${isShop || isEmp ? 'text-white' : 'text-dark'}`}>
                  <i className="bi bi-person-badge-fill fs-1 text-primary"></i>
                  <h5 className="mt-2 fw-bold text-uppercase">Card {card.id}</h5>
                  <p className="small mb-1">Men's Wear | Women's Wear | Kids</p>
                  <p>
                    <i className="bi bi-telephone-fill me-2 text-danger"></i>07610{300000 + index}
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
