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
  return (
    <div
      className={`${
        preview ? "" : "d-flex justify-content-center align-items-center"
      } container`}
      style={{
        height: preview ? "auto" : "100vh",
        backgroundColor: preview ? "transparent" : "#111",
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

          <ul className="list-unstyled" style={{ fontSize: "0.95rem" }}>
            <li className="d-flex align-items-center mb-2">
              <Phone size={18} className="me-2 text-white" /> {phone}
            </li>
            <li className="d-flex align-items-center mb-2">
              <Mail size={18} className="me-2 text-white" /> {email}
            </li>
            <li className="d-flex align-items-center">
              <Globe size={18} className="me-2 text-white" /> {website}
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
