import React, { useState } from 'react';
import './cssfile/CardCreationPaidPage.css'; // Import the separate CSS file

const CardCreationPaidPage = () => {
  // State to manage form inputs
  const [formData, setFormData] = useState({
    name: '',
    title: '',
    phone: '',
    email: '',
    address: '',
    website: '',
    linkedin: '',
    facebook: '',
    twitter: '', // Added for paid features
    instagram: '', // Added for paid features
    avatar: '',
    about: '',
    premiumFeature1: false, // Example premium feature
    premiumFeature2: false, // Example premium feature
    paymentMethod: '', // Simulated payment method
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  // Handle avatar upload (simplified for demonstration)
  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData(prevData => ({
        ...prevData,
        avatar: URL.createObjectURL(file) // Creates a temporary URL for preview
      }));
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Paid Card Data Submitted:', formData);
    // In a real app, you would send this data to a backend and process payment
    alert('Paid card data submitted! (Check console for data)'); // Using alert for demo, replace with custom modal
  };

  return (
    <div className="card-creation-page-container">
      <div className="card-creation-form-box">
        <h1 className="form-title">Create Your Premium Digital Card</h1>
        <p className="form-description">Unlock advanced features and customization options. Fill in your details below.</p>

        <form onSubmit={handleSubmit} className="card-form">
          {/* Avatar Section */}
          <div className="form-group avatar-upload-section">
            <label htmlFor="avatar-upload" className="avatar-label">
              {formData.avatar ? (
                <img
                  src={formData.avatar}
                  alt="Avatar Preview"
                  className="avatar-preview"
                  onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/100x100/cccccc/333333?text=User"; }}
                />
              ) : (
                <img
                  src="https://placehold.co/100x100/0d6efd/ffffff?text=Add+Photo"
                  alt="Placeholder Avatar"
                  className="avatar-preview placeholder"
                  onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/100x100/cccccc/333333?text=User"; }}
                />
              )}
              <input
                type="file"
                id="avatar-upload"
                name="avatar"
                accept="image/*"
                onChange={handleAvatarChange}
                className="hidden-input"
              />
              <span className="upload-text">Click to upload Avatar</span>
            </label>
          </div>

          {/* Personal Information */}
          <div className="form-section">
            <h3 className="section-title">Personal Information</h3>
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="e.g., John Doe"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="title">Your Title/Profession</label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="e.g., Founder & CEO, Graphic Designer"
                required
              />
            </div>
          </div>

          {/* Contact Details */}
          <div className="form-section">
            <h3 className="section-title">Contact Details</h3>
            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="e.g., +91 9876543210"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="e.g., john.doe@example.com"
              />
            </div>
            <div className="form-group">
              <label htmlFor="address">Address</label>
              <textarea
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="e.g., 123 Business Park, Indore, MP"
                rows="3"
              ></textarea>
            </div>
          </div>

          {/* Social & Web Links (Extended for Paid) */}
          <div className="form-section">
            <h3 className="section-title">Social & Web Links (Premium)</h3>
            <div className="form-group">
              <label htmlFor="website">Website URL</label>
              <input
                type="url"
                id="website"
                name="website"
                value={formData.website}
                onChange={handleChange}
                placeholder="e.g., https://www.example.com"
              />
            </div>
            <div className="form-group">
              <label htmlFor="linkedin">LinkedIn Profile</label>
              <input
                type="url"
                id="linkedin"
                name="linkedin"
                value={formData.linkedin}
                onChange={handleChange}
                placeholder="e.g., https://linkedin.com/in/yourprofile"
              />
            </div>
            <div className="form-group">
              <label htmlFor="facebook">Facebook Profile</label>
              <input
                type="url"
                id="facebook"
                name="facebook"
                value={formData.facebook}
                onChange={handleChange}
                placeholder="e.g., https://facebook.com/yourprofile"
              />
            </div>
            <div className="form-group">
              <label htmlFor="twitter">Twitter Handle</label>
              <input
                type="url"
                id="twitter"
                name="twitter"
                value={formData.twitter}
                onChange={handleChange}
                placeholder="e.g., https://twitter.com/yourhandle"
              />
            </div>
            <div className="form-group">
              <label htmlFor="instagram">Instagram Profile</label>
              <input
                type="url"
                id="instagram"
                name="instagram"
                value={formData.instagram}
                onChange={handleChange}
                placeholder="e.g., https://instagram.com/yourprofile"
              />
            </div>
          </div>

          {/* About Section */}
          <div className="form-section">
            <h3 className="section-title">About You</h3>
            <div className="form-group">
              <label htmlFor="about">Short Bio/Description</label>
              <textarea
                id="about"
                name="about"
                value={formData.about}
                onChange={handleChange}
                placeholder="Tell us a little about yourself or your business..."
                rows="4"
              ></textarea>
            </div>
          </div>

          {/* Premium Features Section */}
          <div className="form-section premium-features-section">
            <h3 className="section-title">Premium Features</h3>
            <div className="form-group checkbox-group">
              <input
                type="checkbox"
                id="premiumFeature1"
                name="premiumFeature1"
                checked={formData.premiumFeature1}
                onChange={handleChange}
              />
              <label htmlFor="premiumFeature1">Advanced Analytics Dashboard</label>
            </div>
            <div className="form-group checkbox-group">
              <input
                type="checkbox"
                id="premiumFeature2"
                name="premiumFeature2"
                checked={formData.premiumFeature2}
                onChange={handleChange}
              />
              <label htmlFor="premiumFeature2">Custom QR Code Design</label>
            </div>
            <p className="premium-note">These features will be activated upon successful payment.</p>
          </div>

          {/* Simulated Payment Section */}
          <div className="form-section payment-section">
            <h3 className="section-title">Payment Information</h3>
            <div className="form-group">
              <label htmlFor="paymentMethod">Select Payment Method</label>
              <select
                id="paymentMethod"
                name="paymentMethod"
                value={formData.paymentMethod}
                onChange={handleChange}
                required
              >
                <option value="">-- Select --</option>
                <option value="credit_card">Credit Card</option>
                <option value="paypal">PayPal</option>
                <option value="upi">UPI</option>
              </select>
            </div>
            {/* In a real app, you'd have more payment fields here (card number, expiry, CVV) */}
            <p className="payment-amount">Total: $9.99/month</p>
          </div>

          {/* Submit Button */}
          <button type="submit" className="submit-button">Proceed to Payment</button>
        </form>
      </div>
    </div>
  );
};

export default CardCreationPaidPage;
