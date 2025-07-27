import React from 'react';
import './FeaturesPage.css';

const FeaturesPage = () => {
  const features = [
    {
      img: 'https://img.icons8.com/external-flat-icons-inmotus-design/64/share.png',
      title: 'Instant Sharing',
      description: 'Share your digital card with just one click via WhatsApp, email, or QR code.',
    },
    {
      img: 'https://img.icons8.com/external-flat-icons-inmotus-design/64/security.png',
      title: 'Secure & Private',
      description: 'Your data is encrypted and safe. Only the people you share it with can view it.',
    },
    {
      img: 'https://img.icons8.com/external-flat-icons-inmotus-design/64/devices.png',
      title: 'Fully Responsive',
      description: 'Looks great on mobile, tablet, or desktop with seamless user experience.',
    },
    {
      img: 'https://img.icons8.com/external-flat-icons-inmotus-design/64/edit-file.png',
      title: 'Easy to Edit',
      description: 'Update your name, business, contact info, or image in real-time from dashboard.',
    },
    {
      img: 'https://img.icons8.com/external-flat-icons-inmotus-design/64/globe.png',
      title: 'Global Accessibility',
      description: 'Reach customers globally with a professional card that never goes out of date.',
    },
    {
      img: 'https://img.icons8.com/external-flat-icons-inmotus-design/64/analytics.png',
      title: 'Analytics',
      description: 'Track how many people viewed, clicked, and engaged with your digital card.',
    },
  ];

  return (
    <section className="features-section">
      <div className="container">
        <h1 className="title">Why Choose Our Digital Card?</h1>
        <p className="subtitle">All-in-one solution to share your identity with style and security.</p>
        
        <div className="features-grid">
          {features.map((feature, index) => (
            <div className="feature-card" key={index}>
              <img src={feature.img} alt={feature.title} />
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesPage;
