import React from 'react';
import './cssfile/CardViewPage.css'; // Import the separate CSS file

const CardViewPage = () => {
  return (
    <div className="card-view-page-container">
      <div className="digital-card">
        {/* Card Header Section */}
        <div className="card-header">
          <img
            src="https://placehold.co/100x100/0d6efd/ffffff?text=JD"
            alt="Profile Avatar"
            className="profile-avatar"
            onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/100x100/cccccc/333333?text=User"; }}
          />
          <h2 className="card-name">John Doe</h2>
          <p className="card-title">Founder & CEO, Example Corp.</p>
        </div>

        {/* Contact Information */}
        <div className="card-section contact-info">
          <h3>Contact Info</h3>
          <p>📞 +91 9876543210</p>
          <p>📧 john.doe@example.com</p>
          <p>📍 123 Business Park, Indore, MP</p>
        </div>

        {/* Social Media Links */}
        <div className="card-section social-links">
          <h3>Connect with me</h3>
          <p>🔗 <a href="https://linkedin.com/in/johndoe" target="_blank" rel="noopener noreferrer">LinkedIn/johndoe</a></p>
          <p>📘 <a href="https://facebook.com/johndoe" target="_blank" rel="noopener noreferrer">Facebook/johndoe</a></p>
          <p>🌐 <a href="https://example.com" target="_blank" rel="noopener noreferrer">example.com</a></p>
        </div>

        {/* About Section (Optional) */}
        <div className="card-section about-me">
          <h3>About Me</h3>
          <p>Passionate entrepreneur focused on innovation and building impactful solutions for the digital age.</p>
        </div>

        {/* Call to Action Buttons */}
        <div className="card-actions">
          <button className="action-button primary-action">Save Contact</button>
          <button className="action-button secondary-action">Share Card</button>
        </div>

        {/* QR Code Placeholder */}
        <div className="qr-code-placeholder">
          <img
            src="https://placehold.co/120x120/0d6efd/ffffff?text=QR+Code"
            alt="QR Code"
            className="qr-code-img"
            onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/120x120/cccccc/333333?text=QR"; }}
          />
          <p className="qr-text">Scan to connect</p>
        </div>
      </div>
    </div>
  );
};

export default CardViewPage;
