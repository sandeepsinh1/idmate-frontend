import React, { useState } from 'react';
import './cssfile/CardCreationFreePage.css'; // Import the separate CSS file

const CardCreationFreePage = () => {
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
    avatar: '', // To store avatar URL or base64
    about: ''
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  // Handle avatar upload (simplified for demonstration)
  const handleAvatarChange = (e) => {
    // In a real application, you'd handle file uploads to a server
    // For now, we'll just use a placeholder or a direct URL if provided
    const file = e.target.files[0];
    if (file) {
      // You might want to display a preview here.
      // For a simple demo, we can just set a placeholder or a dummy URL.
      setFormData(prevData => ({
        ...prevData,
        avatar: URL.createObjectURL(file) // Creates a temporary URL for preview
      }));
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Card Data Submitted:', formData);
    // In a real app, you would send this data to a backend (e.g., Firestore)
    alert('Card data submitted! (Check console for data)'); // Using alert for demo, replace with custom modal
  };

  return (
    <div className="card-creation-page-container">
      <div className="card-creation-form-box">
        <h1 className="form-title">Create Your Free Digital Card</h1>
        <p className="form-description">Fill in your details to generate your personalized digital visiting card instantly.</p>

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

          {/* Social & Web Links */}
          <div className="form-section">
            <h3 className="section-title">Social & Web Links</h3>
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

          {/* Submit Button */}
          <button type="submit" className="submit-button">Generate My Card</button>
        </form>
      </div>
    </div>
  );
};

export default CardCreationFreePage;
