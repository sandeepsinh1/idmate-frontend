import React from 'react';
import { Phone, Mail, Globe } from 'lucide-react';

const CardTemplate4 = ({
  fullName = "FULL NAME",
  title = "CEO & Founder",
  phone = "415-999-9999",
  email = "john@email.com",
  website = "website.com",
  logoText = "LOGO TEXT HERE",
  slogan = "SLOGAN HERE",
  logoIcon = "https://placehold.co/80x50?text=Logo", // Replace with real logo or SVG
  preview = false,
}) => {
  // Helper to add https:// if missing
  const formatWebsite = (url) => {
    if (!url) return "";
    return url.startsWith("http://") || url.startsWith("https://") ? url : `https://${url}`;
  };

  return (
    <div
      className={`${preview ? '' : 'd-flex justify-content-center align-items-center'} container`}
      style={{
        height: preview ? 'auto' : '100vh',
        backgroundColor: preview ? 'transparent' : '#351e07ff',
        fontFamily: "'Poppins', sans-serif",
        color: '#000',
        padding: preview ? 0 : '2rem',
      }}
    >
      <div
        className="card shadow border-0 d-flex flex-row justify-content-between align-items-center p-3"
        style={{
          width: '336px',
          height: '192px',
          backgroundColor: '#e1984d',
          fontSize: '11px',
          borderRadius: '8px',
        }}
      >
        {/* Left Section */}
        <div style={{ flex: 1, paddingRight: '10px' }}>
          <div className="fw-bold" style={{ fontSize: '15px', marginBottom: '4px' }}>
            {fullName}
          </div>
          <div style={{ marginBottom: '8px' }}>{title}</div>

          <div className="d-flex align-items-center mb-1">
            <a href={`tel:${phone}`} style={{ color: '#000', textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
              <Phone size={12} className="me-2" /> {phone}
            </a>
          </div>
          <div className="d-flex align-items-center mb-1">
            <a href={`mailto:${email}`} style={{ color: '#000', textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
              <Mail size={12} className="me-2" /> {email}
            </a>
          </div>
          <div className="d-flex align-items-center">
           <a
                         href={formatWebsite(website)}
                         target="_blank"
                         rel="noopener noreferrer"
                         style={{ display: "flex", alignItems: "center", color: "#000", textDecoration: "none" }}
                       >
                         <Globe size={16} className="me-2" />
                         {/* Website URL text hidden here */}
                       </a></div>
        </div>

        {/* Right Section */}
        <div className="text-end" style={{ flex: 1 }}>
          <img
            src={logoIcon}
            alt="Logo"
            style={{ width: '80px', height: 'auto', marginBottom: '5px' }}
          />
          <div className="fw-bold" style={{ fontSize: '12px' }}>{logoText}</div>
          <div style={{ fontSize: '10px' }}>{slogan}</div>
        </div>
      </div>
    </div>
  );
};

export default CardTemplate4;
