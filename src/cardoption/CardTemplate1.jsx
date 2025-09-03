import React from "react";
import { Phone, Globe, MapPin, Mail } from "lucide-react";

const CardTemplate1 = ({
  companyName = "COMPANY",
  logoSrc = "https://placehold.co/60x60/000000/FFFFFF?text=Logo",
  fullName = "MICHAEL",
  lastName = "STANLEY",
  title = "Business Manager",
  phone = "+555-555-5555",
  email = "yourinfo@email.com",
  website = "www.website.com",
  address = "Add Your Location Here",
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
        backgroundColor: preview ? "transparent" : "#7b7171ff",
      }}
    >
      <div
        className="card shadow-sm border-0"
        style={{
          width: preview ? "100%" : "28rem",
          maxWidth: "32rem",
          background: "white",
          display: "flex",
          flexDirection: "row",
          alignItems: "stretch",
          padding: "1.5rem",
          borderRadius: "12px",
        }}
      >
        {/* LEFT SIDE (Logo + Company) */}
        <div
          style={{
            width: "30%",
            borderRight: "3px solid #007BFF",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            paddingRight: "1rem",
          }}
        >
          <img
            src={logoSrc}
            alt="Logo"
            style={{ width: "50px", height: "50px", marginBottom: "0.5rem" }}
          />
          <h6
            className="text-uppercase text-muted"
            style={{ fontSize: "0.8rem", fontWeight: 600 }}
          >
            {companyName}
          </h6>
        </div>

        {/* RIGHT SIDE (Name + Info) */}
        <div
          style={{
            flex: 1,
            paddingLeft: "1.5rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          {/* Name */}
          <h3 style={{ margin: 0, fontWeight: "bold" }}>
            {fullName}{" "}
            <span style={{ fontWeight: 300, color: "#999" }}>{lastName}</span>
          </h3>
          <p
            style={{
              margin: "0 0 1rem 0",
              fontSize: "0.95rem",
              fontWeight: 500,
              color: "#333",
            }}
          >
            {title}
          </p>

          {/* Contact Details */}
          <ul
            className="list-unstyled"
            style={{ fontSize: "0.85rem", margin: 0, padding: 0 }}
          >
            <li className="d-flex align-items-center mb-2">
              <a href={`tel:${phone}`} style={{ display: "flex", alignItems: "center", color: "#007BFF", textDecoration: "none" }}>
                <Phone size={16} className="me-2" /> {phone}
              </a>
            </li>
            <li className="d-flex align-items-center mb-2">
              <a href={`mailto:${email}`} style={{ display: "flex", alignItems: "center", color: "#007BFF", textDecoration: "none" }}>
                <Mail size={16} className="me-2" /> {email}
              </a>
            </li>
            <li className="d-flex align-items-center mb-2">
                <a
                          href={formatWebsite(website)}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{ display: "flex", alignItems: "center", color: "#007BFF", textDecoration: "none" }}
                        >
                          <Globe size={16} className="me-2" />
                          {/* Website URL text hidden here */}
                        </a>
                       </li>
            <li className="d-flex align-items-center">
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(address)}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: "flex", alignItems: "center", color: "#007BFF", textDecoration: "none" }}
              >
                <MapPin size={16} className="me-2" /> {address}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CardTemplate1;
