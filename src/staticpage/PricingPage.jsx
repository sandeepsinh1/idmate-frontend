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
          <p className="price">₹49 / mo</p>
          <ul className="features">
            <li>In You Edit Card Only twice</li>
            <li>It Valid for 3 Month</li>
            <li>It have No option of Card Design</li>
          </ul>
          <button className="btn">Choose Plan</button>
        </div>

        {/* Standard Plan */}
        <div className="card highlighted">
          <h2 className="plan-title">Standard</h2>
          <p className="price">₹99 / mo</p>
          <ul className="features">
            <li>In You Edit Card Once in a month</li>
            <li>It Valid for 6 Month</li>
            <li>But you have limited Design</li>
            <li>Priority Support</li>
          </ul>
          <button className="btn">Most Popular</button>
        </div>

        {/* Premium Plan */}
        <div className="card">
          <h2 className="plan-title">Premium</h2>
          <p className="price">₹199 / mo</p>
          <ul className="features">
            <li>Unlimited</li>
            <li>you have limited Design</li>
            <li>It Valid for 1 year</li>
            
            <li>Phone & Email Support</li>
          </ul>
          <button className="btn">Choose Plan</button>
        </div>

      </div>
    </section>
  );
};

export default PricingPage;
