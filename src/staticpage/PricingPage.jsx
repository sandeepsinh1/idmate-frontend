import React from 'react';
import './PricingPage.css'; // You can still use this for layout if needed

const PricingPage = () => {
  return (
    <section
      className="pricing-section"
      style={{
        background: 'linear-gradient(to right, #0f172a, #1e293b)',
        minHeight: '100%',
        padding: '4rem 1rem',
        color: '#f1f5f9',
      }}
    >
      <h1 className="heading text-center fw-bold mb-5" style={{ color: '#38bdf8' }}>
        Choose Your Plan
      </h1>

      <div
        className="pricing-cards d-flex flex-column flex-md-row justify-content-center gap-4"
        style={{ maxWidth: '1200px', margin: '0 auto' }}
      >
        {/* Basic Plan */}
        <div
          className="card p-4 rounded-4 shadow"
          style={{ backgroundColor: '#1e293b', color: '#cbd5e1', flex: 1 }}
        >
          <h2 className="plan-title text-info">Basic</h2>
          <p className="price fs-4">₹49 / mo</p>
          <ul className="features list-unstyled">
            <li>✅ Edit card only twice</li>
            <li>✅ Valid for 3 months</li>
            <li>❌ No card design option</li>
          </ul>
          <button className="btn btn-outline-info mt-3">Choose Plan</button>
        </div>

        {/* Standard Plan */}
        <div
          className="card p-4 rounded-4 shadow"
          style={{
            backgroundColor: '#1e40af',
            color: '#f1f5f9',
            flex: 1,
            transform: 'scale(1.05)',
          }}
        >
          <h2 className="plan-title text-white">Standard</h2>
          <p className="price fs-4">₹99 / mo</p>
          <ul className="features list-unstyled">
            <li>✅ Edit once per month</li>
            <li>✅ Valid for 6 months</li>
            <li>✅ Limited design options</li>
            <li>🚀 Priority Support</li>
          </ul>
          <button className="btn btn-info mt-3 text-white">Most Popular</button>
        </div>

        {/* Premium Plan */}
        <div
          className="card p-4 rounded-4 shadow"
          style={{ backgroundColor: '#1e293b', color: '#cbd5e1', flex: 1 }}
        >
          <h2 className="plan-title text-info">Premium</h2>
          <p className="price fs-4">₹199 / mo</p>
          <ul className="features list-unstyled">
            <li>✅ Unlimited edits</li>
            <li>✅ Valid for 1 year</li>
            <li>✅ All design options</li>
            <li>📞 Phone & Email Support</li>
          </ul>
          <button className="btn btn-outline-info mt-3">Choose Plan</button>
        </div>
      </div>
    </section>
  );
};

export default PricingPage;
