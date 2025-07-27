import React from 'react';
import './PricingPage.css'; // Make sure to create this CSS file or import your styles

const PricingPage = () => {
  return (
    <section className="pricing-section">
      <h1 className="heading">Choose Your Plan</h1>
      <div className="pricing-cards">
        
        {/* Basic Plan */}
        <div className="card">
          <h2 className="plan-title">Basic</h2>
          <p className="price">₹199 / mo</p>
          <ul className="features">
            <li>1 User</li>
            <li>5GB Storage</li>
            <li>Email Support</li>
          </ul>
          <button className="btn">Choose Plan</button>
        </div>

        {/* Standard Plan */}
        <div className="card highlighted">
          <h2 className="plan-title">Standard</h2>
          <p className="price">₹499 / mo</p>
          <ul className="features">
            <li>5 Users</li>
            <li>50GB Storage</li>
            <li>Priority Support</li>
          </ul>
          <button className="btn">Most Popular</button>
        </div>

        {/* Premium Plan */}
        <div className="card">
          <h2 className="plan-title">Premium</h2>
          <p className="price">₹999 / mo</p>
          <ul className="features">
            <li>Unlimited Users</li>
            <li>500GB Storage</li>
            <li>Phone & Email Support</li>
          </ul>
          <button className="btn">Choose Plan</button>
        </div>

      </div>
    </section>
  );
};

export default PricingPage;
