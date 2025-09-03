import React from "react";
import { Phone, Globe, Mail } from "lucide-react";

const CardTemplate2 = ({
  fullName = "FULL NAME",
  title = "CEO & Founder",
  phone = "415-999-9999",
  email = "john@email.com",
  website = "website.com",
  logoText = "Logo Text Here",
  preview = false,
}) => {
  // Helper to add https:// if missing
  const formatWebsite = (url) => {
    if (!url) return "";
    return url.startsWith("http://") || url.startsWith("https://") ? url : `https://${url}`;
  };

  return (
    <div
      className={`${
        preview ? "" : "d-flex justify-content-center align-items-center"
      } container`}
      style={{
        height: preview ? "auto" : "100vh",
        backgroundColor: preview ? "transparent" : "#6c4545ff",
      }}
    >
      <div
        className="card shadow-lg border-0"
        style={{
          width: preview ? "100%" : "32rem",
          maxWidth: "36rem",
          background: "#000",
          color: "#fff",
          padding: "2rem 2.5rem",
          borderRadius: "0.5rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* LEFT SECTION */}
        <div style={{ flex: 1 }}>
          <h2
            style={{
              fontWeight: "900",
              fontSize: "1.8rem",
              marginBottom: "0.3rem",
            }}
          >
            {fullName}
          </h2>
          <p
            style={{
              fontSize: "1.1rem",
              color: "#ddd",
              marginBottom: "1.5rem",
            }}
          >
            {title}
          </p>

          <ul className="list-unstyled" style={{ fontSize: "0.95rem", margin: 0, padding: 0 }}>
            <li className="d-flex align-items-center mb-2">
              <a
                href={`tel:${phone}`}
                style={{ color: "#fff", textDecoration: "none", display: "flex", alignItems: "center" }}
              >
                <Phone size={18} className="me-2" /> {phone}
              </a>
            </li>
            <li className="d-flex align-items-center mb-2">
              <a
                href={`mailto:${email}`}
                style={{ color: "#fff", textDecoration: "none", display: "flex", alignItems: "center" }}
              >
                <Mail size={18} className="me-2" /> {email}
              </a>
            </li>
            <li className="d-flex align-items-center">
                  <a
               href={formatWebsite(website)}
               target="_blank"
               rel="noopener noreferrer"
               style={{ display: "flex", alignItems: "center", color: "#fff", textDecoration: "none" }}
             >
               <Globe size={16} className="me-2" />
               {/* Website URL text hidden here */}
             </a>
           </li>
          </ul>
        </div>

        {/* RIGHT SECTION (LOGO TEXT) */}
        <div style={{ marginLeft: "2rem", textAlign: "right" }}>
          <h4
            style={{
              fontFamily: "'Brush Script MT', cursive",
              fontSize: "1.5rem",
              fontStyle: "italic",
              fontWeight: 500,
              color: "#fff",
            }}
          >
            {logoText}
          </h4>
        </div>
      </div>
    </div>
  );
};

export default CardTemplate2;
