import React from "react";

const FrontPage = () => {
  return (
    <div className="landing-page bg-light text-dark">
      {/* Header */}
      <header className="bg-white shadow-sm py-3 px-4 d-flex justify-content-between align-items-center">
        <div className="fw-bold fs-4 text-primary">MyApp</div>
        <div>
          <button className="btn btn-outline-primary me-2">Login</button>
          <button className="btn btn-primary">Register</button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="text-center py-5 bg-white">
        <h1 className="text-primary fw-bold">Create Your Digital Card</h1>
        <p className="lead">Make your presence professional and unique</p>
        <div className="d-flex justify-content-center gap-2 mt-3">
          <button className="btn btn-primary px-4">Get Started</button>
          <button className="btn btn-outline-primary px-4">Learn More</button>
        </div>
      </section>

      {/* Sample Card */}
      <div className="container my-5">
        <div className="card mx-auto" style={{ maxWidth: "300px" }}>
          <div className="card-body text-center">
            <h5 className="card-title">John Doe</h5>
            <p className="card-text mb-1">Web Developer</p>
            <p className="card-text">john@example.com</p>
          </div>
        </div>
      </div>

      {/* Features */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row text-center">
            <div className="col-md-4 mb-4">
              <div className="p-4 bg-white rounded shadow-sm">
                <h5 className="text-primary">Easy to Use</h5>
                <p>Create a card in just 2 minutes</p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="p-4 bg-white rounded shadow-sm">
                <h5 className="text-primary">Fully Customizable</h5>
                <p>Add your brand colors, links, and more</p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="p-4 bg-white rounded shadow-sm">
                <h5 className="text-primary">Share Anywhere</h5>
                <p>Send your card via WhatsApp, email, or QR</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-3 bg-white border-top">
        <small>&copy; 2025 MyApp. All rights reserved.</small>
      </footer>
    </div>
  );
};

export default FrontPage;
