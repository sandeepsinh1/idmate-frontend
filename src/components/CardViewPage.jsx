import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const CardViewPage = () => {
  return (
    <div style={{  paddingTop: '37rem' , minHeight: '100vh', background: 'linear-gradient(to bottom right, #e3f2fd, #fff)' }}>
      <div className="card shadow-lg text-center p-4" style={{ maxWidth: '500px', width: '100%', borderRadius: '16px' }}>
        
        {/* Card Header */}
        <div className="mb-3">
          <img
            src="https://placehold.co/100x100/0d6efd/ffffff?text=JD"
            alt="Profile Avatar"
            className="rounded-circle border border-primary shadow"
            style={{ width: '100px', height: '100px', objectFit: 'cover' }}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "https://placehold.co/100x100/cccccc/333333?text=User";
            }}
          />
          <h2 className="mt-3 mb-1">John Doe</h2>
          <p className="text-muted">Founder & CEO, Example Corp.</p>
        </div>

        {/* Contact Info */}
        <div className="mb-4 text-ce">
          <h5 className="text-primary fw-normal border-bottom pb-2">Contact Info</h5>
          <p className="mb-1">📞 +91 9876543210</p>
          <p className="mb-1">📧 john.doe@example.com</p>
          <p className="mb-1">📍 123 Business Park, Indore, MP</p>
        </div>

        {/* Social Links */}
        <div className="mb-4 text-center">
          <h5 className="text-primary fw-normal border-bottom pb-2">Connect with me</h5>
          <p className="mb-1">🔗 <a href="https://linkedin.com/in/johndoe" target="_blank" rel="noopener noreferrer">LinkedIn/johndoe</a></p>
          <p className="mb-1">📘 <a href="https://facebook.com/johndoe" target="_blank" rel="noopener noreferrer">Facebook/johndoe</a></p>
          <p className="mb-1">🌐 <a href="https://example.com" target="_blank" rel="noopener noreferrer">example.com</a></p>
        </div>

        {/* About Me */}
        <div className="mb-4 text-center">
          <h5 className="text-primary fw-normal border-bottom pb-2">About Me</h5>
          <p>Passionate entrepreneur focused on innovation and building impactful solutions for the digital age.</p>
        </div>

        {/* Actions */}
        <div className="d-flex gap-3 justify-content-center mb-4">
          <button className="btn btn-primary fw-bold px-4">Save Contact</button>
          <button className="btn btn-outline-primary fw-bold px-4">Share Card</button>
        </div>

        {/* QR Code */}
        <div className="text-center">
          <img
            src="https://placehold.co/120x120/0d6efd/ffffff?text=QR+Code"
            alt="QR Code"
            className="img-thumbnail"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "https://placehold.co/120x120/cccccc/333333?text=QR";
            }}
          />
          <p className="mt-2 text-muted">Scan to connect</p>
        </div>
      </div>
    </div>
  );
};

export default CardViewPage;
