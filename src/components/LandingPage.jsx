import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const LandingPage = () => {
  return (
    <div className="d-flex flex-column min-vh-100 bg-dark text-light">
      {/* Main Content */}
      <main style={{ paddingTop: "50rem" }}>
        {/* Hero Section */}
        <section
          className="text-center py-5 px-0"
          style={{
            background: "linear-gradient(to right, #0f172a, #1e293b)",
            width: "100vw", // ✅ Ensure full width
            margin: 0, // ✅ Remove margin
          }}
        >
          <div className="w-100"> {/* ✅ Replace container-fluid */}
            <h1 className="display-4 fw-bold mb-4" style={{ color: "#38bdf8" }}>
              Create & Share Your Digital Identity
            </h1>
            <p
              className="lead mb-4 mx-auto"
              style={{ maxWidth: "800px", color: "#cbd5e1" }}
            >
              The universal tool to design and share your ID for business, shop,
              or yourself — anytime, anywhere.
            </p>

            <div className="d-flex justify-content-center gap-3 mb-4 flex-wrap">
              <a
                href="/RegisterPage"
                className="btn btn-info btn-lg shadow-sm text-white"
              >
                Register
              </a>
              <a
                href="/SampleCardPage"
                className="btn btn-outline-info btn-lg shadow-sm"
              >
                Sample Card
              </a>
            </div>

            <p style={{ color: "#94a3b8" }}>
              Already have an account?{" "}
              <a
                href="/LoginPage"
                className="fw-semibold"
                style={{ color: "#38bdf8" }}
              >
                Login here
              </a>
            </p>

            {/* Sample Card Preview */}
            <div
              className="mt-5 mx-auto text-center p-4 p-md-5 rounded-4 shadow"
              style={{
                maxWidth: "300px",
                background: "linear-gradient(to bottom, #1e293b, #0f172a)",
                color: "#f8fafc",
              }}
            >
              {/* Logo */}
              <div className="mb-3">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/4290/4290854.png"
                  alt="Logo"
                  className="mb-2"
                  style={{ width: "50px", height: "50px" }}
                />
                <div className="small" style={{ color: "#94a3b8" }}>
                  Logo
                </div>
              </div>

              {/* Name */}
              <h2 className="fw-bold text-uppercase mb-2">Shree Collection</h2>

              {/* Tagline */}
              <p className="mb-2" style={{ color: "#94a3b8" }}>
                Men's Wear | Women's Wear | Kids Collection
              </p>

              {/* Phone */}
              <p className="mb-2">
                📞 <span className="fw-semibold">07610316422</span>
              </p>

              {/* Address */}
              <p className="mb-3">
                📍 Meena Mansion, 274 Abhinandan Nagar, Shyam Nagar Annex
              </p>

              {/* Social Icons */}
              <div className="d-flex justify-content-center gap-3 my-3">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/733/733585.png"
                  alt="WhatsApp"
                  className="rounded"
                  style={{
                    width: "35px",
                    height: "35px",
                    cursor: "pointer",
                    background: "#ffffff10",
                    borderRadius: "50%",
                    padding: "5px",
                  }}
                />
                <img
                  src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png"
                  alt="Instagram"
                  className="rounded"
                  style={{
                    width: "35px",
                    height: "35px",
                    cursor: "pointer",
                    background: "#ffffff10",
                    borderRadius: "50%",
                    padding: "5px",
                  }}
                />
              </div>

              {/* QR Code */}
              <div>
                <img
                  src="https://api.qrserver.com/v1/create-qr-code/?size=130x130&data=https://yourcardlink.com"
                  alt="QR Code"
                  className="mx-auto"
                  style={{ width: "130px", height: "130px" }}
                />
                <p className="small mt-2" style={{ color: "#94a3b8" }}>
                  Scan for more details
                </p>
              </div>
            </div>
          </div>

          {/* Features Section */}
          <div className="w-100 py-5">
            <div className="row g-4 mx-0 px-3">
              <div className="col-12 col-sm-6 col-lg-3">
                <div
                  className="p-4 text-center rounded-3 shadow h-100"
                  style={{ background: "#1e293b" }}
                >
                  <h5 className="fw-bold text-info">🔹 Custom Card</h5>
                  <p className="small text-light">
                    Create cards with your unique brand
                  </p>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-lg-3">
                <div
                  className="p-4 text-center rounded-3 shadow h-100"
                  style={{ background: "#1e293b" }}
                >
                  <h5 className="fw-bold text-info">🔸 Easy Sharing</h5>
                  <p className="small text-light">
                    Share via link, QR, or WhatsApp
                  </p>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-lg-3">
                <div
                  className="p-4 text-center rounded-3 shadow h-100"
                  style={{ background: "#1e293b" }}
                >
                  <h5 className="fw-bold text-info">🔒 Secure</h5>
                  <p className="small text-light">
                    Your data is protected with encryption
                  </p>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-lg-3">
                <div
                  className="p-4 text-center rounded-3 shadow h-100"
                  style={{ background: "#1e293b" }}
                >
                  <h5 className="fw-bold text-info">📱 Mobile Friendly</h5>
                  <p className="small text-light">
                    Works great on all devices
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="text-center py-3 bg-black text-light border-top mt-auto">
        &copy; 2025 Digital Card | Privacy Policy | Terms | Contact Us
      </footer>
    </div>
  );
};

export default LandingPage;
