import React, { useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './cssfile/DigitalCardDisplay.css';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import html2pdf from 'html2pdf.js';

const DigitalCardDisplay = ({ formData, userId }) => {
  const cardRef = useRef(); // reference to the card

  const { name, title, phone, email, address, website, instagram, whatsapp, facebook, avatar, about } = formData;

  const renderLinkIfPresent = (url, text, iconClass) => {
    if (!url) return null;

    const formattedUrl = url.startsWith('http://') || url.startsWith('https://') ? url : `https://${url}`;

    return (
      <a href={formattedUrl} target="_blank" rel="noopener noreferrer" className="card-social-icon-link me-3">
        <i className={`bi ${iconClass}`}></i>
      </a>
    );
  };

  // ✅ Download as Image
  const downloadCardAsImage = async () => {
    const canvas = await html2canvas(cardRef.current, {
      scale: 2,
      useCORS: true,
    });
    const link = document.createElement('a');
    link.download = 'digital_card.png';
    link.href = canvas.toDataURL('image/png');
    link.click();
  };

  // ✅ Download as PDF (Improved Quality)
const downloadCardAsPDF = () => {
  const element = cardRef.current;

  const elementWidth = element.offsetWidth;
  const elementHeight = element.offsetHeight;

  const opt = {
    margin: 0,
    filename: 'digital_card.pdf',
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2, useCORS: true },
    jsPDF: {
      unit: 'px',
      format: [elementWidth, elementHeight],
      orientation: 'portrait',
    },
    pagebreak: { mode: ['avoid-all'] }  // 🛑 Avoid extra pages
  };

  html2pdf().set(opt).from(element).save();
};

 
  // ✅ Download as Website (.html)
  const downloadCardAsWebsite = () => {
    window.open(`http://localhost:8080/api/export/card/html/${userId}`, '_blank');
  };

  // ✅ Share Card
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
    <div className="card-background-container-display " style={{ paddingTop: '0rem' }}>
      <div
        className="card-custom-display shadow-lg p-4"
        ref={cardRef}
        style={{ backgroundColor: '#fffbe6', borderRadius: '20px' }}
      >
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
          {renderLinkIfPresent(facebook, 'Facebook', 'bi-facebook fs-3')}
          {renderLinkIfPresent('https://wa.me/91' + whatsapp, 'WhatsApp', 'bi-whatsapp fs-3')}
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

      {/* Floating Icon Bar */}
      <div className="floating-icon-bar">
        <i
          className="bi bi-image text-primary"
          title="Download as Image"
          role="button"
          onClick={downloadCardAsImage}
        ></i>

        <i
          className="bi bi-file-earmark-pdf text-danger"
          title="Download as PDF"
          role="button"
          onClick={downloadCardAsPDF}
        ></i>

        <i
          className="bi bi-code-slash text-success"
          title="Download as Website"
          role="button"
          onClick={downloadCardAsWebsite}
        ></i>

        <i
          className="bi bi-share-fill text-secondary"
          title="Share"
          role="button"
          onClick={shareCard}
        ></i>
      </div>
    </div>
  );
};

export default DigitalCardDisplay;
