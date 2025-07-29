import React, { useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './cssfile/DigitalCardDisplay.css';
import html2canvas from 'html2canvas';

const DigitalCardDisplay = ({ formData }) => {
  const cardRef = useRef(); // reference to the card

  const { name, title, phone, email, address, website, instagram, whatsapp,facebook, avatar, about } = formData;
console.log(whatsapp);
  const renderIfPresent = (content, prefix = '', suffix = '') => {
    return content ? (
      <p className="mb-0 card-content-item">
        {prefix}{content}{suffix}
      </p>
    ) : null;
  };

  const renderLinkIfPresent = (url, text, iconClass) => {
    if (!url) return null;

    const formattedUrl = url.startsWith('http://') || url.startsWith('https://') ? url : `https://${url}`;

    return (
      <a href={formattedUrl} target="_blank" rel="noopener noreferrer" className="card-social-icon-link me-3">
        <i className={`bi ${iconClass}`}></i>
      </a>
    );
  };

  // ✅ Download Card Function
  const downloadCard = async () => {
    const canvas = await html2canvas(cardRef.current);
    const link = document.createElement('a');
    link.download = 'digital_card.png';
    link.href = canvas.toDataURL('image/png');
    link.click();
  };

  // ✅ Share Card Function
  const shareCard = () => {
    const shareUrl = window.location.href;

    if (navigator.share) {
      navigator.share({
        title: 'My Digital Card',
        text: 'Check out my digital business card!',
        url: shareUrl,
      }).catch((err) => console.error('Share failed:', err));
    } else {
      alert("Sharing not supported on this browser. Copy this link:\n" + shareUrl);
    }
  };

  return (
    <div className="card-background-container-display" style={{ paddingTop: '20rem' }}>
      <div className="card-custom-display shadow-lg p-4" ref={cardRef}>
        <div className="text-center mb-4">
          {name && <h1 className="card-title-display">{name}</h1>}
        </div>

        <div className="text-center mb-4">
          {about && <p className="card-text-category-display">{about}</p>}
        </div>

        <div className="card-contact-info-display mb-4">
          {phone && (
            <p className="mb-2 d-flex justify-content-center align-items-center gap-2">
              <a href={`tel:${phone}`} className="text-decoration-none text-dark">
                <i className="bi bi-telephone-fill"></i> {phone}
              </a>
            </p>
          )}

          {address && (
            <p className="mb-1 text-left">
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none text-dark"
              >
                <i className="bi-geo-alt-fill card-icon-display"></i> {address}
              </a>
            </p>
          )}
        </div>

        <div className="card-social-icons-display mb-4">
          {renderLinkIfPresent(website, 'Website', 'bi-globe fs-3')}
          {renderLinkIfPresent(instagram, 'Instagram', 'bi-instagram fs-3')}
          {renderLinkIfPresent(facebook, 'facebook', 'bi-facebook fs-3')}
          {renderLinkIfPresent('https://wa.me/91'+whatsapp, 'whatsapp', 'bi-whatsapp fs-3')}
         </div>

        <div className="text-center mb-3">
          <img
            src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://example.com/your-card-link"
            alt="QR Code"
            className="card-qr-code-display img-fluid"
          />
        </div>

        <div className="text-center">
          <p className="card-scan-text-display">Scan for more details</p>
        </div>
      </div>
    </div>
  );
};

export default DigitalCardDisplay;
