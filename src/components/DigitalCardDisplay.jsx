import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './cssfile/DigitalCardDisplay.css'; // Create this CSS file for styling

const DigitalCardDisplay = ({ formData }) => {
  const { name, title, phone, email, address, website, linkedin, facebook, avatar, about } = formData;

  // Function to render content only if it exists
  const renderIfPresent = (content, prefix = '', suffix = '') => {
    return content ? (
      <p className="mb-0 card-content-item">
        {prefix}{content}{suffix}
      </p>
    ) : null;
  };

  const renderLinkIfPresent = (url, text, iconClass) => {
    if (!url) return null;

    // Check if the URL already has a protocol, if not, prepend 'https://'
    const formattedUrl = url.startsWith('http://') || url.startsWith('https://') ? url : `https://${url}`;

    return (
      <a href={formattedUrl} target="_blank" rel="noopener noreferrer" className="card-social-icon-link me-3">
        <i className={`bi ${iconClass}`}></i>
      </a>
    );
  };

  return (
    <div className="card-background-container-display" style={{paddingTop: '20rem'}}>
      <div className="card-custom-display shadow-lg p-4">
        {/* Logo/Avatar */}
        <div className="text-center mb-3">
          {avatar ? (
            <img
              src={avatar}
              alt="Profile Avatar"
              className="card-logo-display rounded-circle border border-light"
            />
          ) : (
            <img
              src="https://placehold.co/100x100/eeeeee/333333?text=Logo" // Default logo if no avatar
              alt="Default Logo"
              className="card-logo-display rounded-circle border border-light"
            />
          )}
        </div>

        {/* Shop Name */}
        <div className="text-center mb-4">
          {name && <h1 className="card-title-display">{name}</h1>}
        </div>

        {/* Business Categories (About Shop) */}
        <div className="text-center mb-4">
          {about && <p className="card-text-category-display">{about}</p>}
        </div>

        {/* Contact Info */}
        <div className="card-contact-info-display mb-4 ">
  {phone && (
    <p className="mb-2 d-flex justify-content-center align-items-center gap-2">
      <i className="bi bi-telephone-fill"></i> {phone}
    </p>

          )}
          {address && (
            <p className="mb-1  text-left">
              <i className="bi-geo-alt-fill card-icon-display"></i> {address}
            </p>
          )}
        </div>

        {/* Social Icons (WhatsApp and Instagram) */}
        <div className="card-social-icons-display mb-4">
          {renderLinkIfPresent(facebook, 'WhatsApp', 'bi-whatsapp fs-3')} {/* Using facebook field for WhatsApp */}
          {renderLinkIfPresent(linkedin, 'Instagram', 'bi-instagram fs-3')} {/* Using linkedin field for Instagram */}
          {renderLinkIfPresent(website, 'Website', 'bi-globe fs-3')} {/* Website can also be an icon */}
        </div>

        {/* QR Code (Placeholder - You'd generate this dynamically or provide a static one) */}
        <div className="text-center mb-3">
          <img
            src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://example.com/your-card-link" // Dynamic QR code example
            alt="QR Code"
            className="card-qr-code-display img-fluid"
          />
        </div>

        {/* Scan for more details text */}
        <div className="text-center">
          <p className="card-scan-text-display">Scan for more details</p>
        </div>
      </div>
    </div>
  );
};

export default DigitalCardDisplay;