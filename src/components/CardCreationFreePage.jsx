import React, { useState } from 'react';

const CardCreationFreePage = () => {
  const [formData, setFormData] = useState({
    name: '',
    title: '',
    phone: '',
    email: '',
    address: '',
    website: '',
    linkedin: '',
    facebook: '',
    avatar: '',
    about: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData(prevData => ({
        ...prevData,
        avatar: URL.createObjectURL(file)
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Card Data Submitted:', formData);
    alert('Card data submitted! (Check console for data)');
  };

  return (
     <div className="d-flex flex-column min-vh-100 bg-light text-dark">
       <div style={{ paddingTop: '60rem' }}>
      <div className="mx-auto p-4 bg-white shadow rounded" style={{ maxWidth: '720px' }}>
        <h2 className="text-center text-primary mb-3">Create Your Free Digital Card</h2>
        <p className="text-center text-muted mb-4">
          Fill in your details to generate your personalized digital visiting card instantly.
        </p>

        <form onSubmit={handleSubmit}>
          {/* Avatar Upload */}
          <div className="text-center mb-4">
            <label htmlFor="avatar-upload" className="d-block">
              <img
                src={formData.avatar || "https://placehold.co/100x100/0d6efd/ffffff?text=Add+Photo"}
                alt="Avatar Preview"
                className="rounded-circle border"
                style={{ width: '100px', height: '100px', objectFit: 'cover', cursor: 'pointer' }}
              />
            </label>
            <input
              type="file"
              id="avatar-upload"
              name="avatar"
              accept="image/*"
              onChange={handleAvatarChange}
              className="d-none"
            />
            <small className="d-block mt-2 text-secondary">Click to upload Avatar</small>
          </div>

          {/* Personal Information */}
          <h5 className="text-dark mb-3">Personal Information</h5>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Shop Name</label>
            <input type="text" className="form-control" id="name" name="name" value={formData.name} onChange={handleChange} placeholder="e.g.,  Youth Cloth Shop" required />
          </div>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">Your Title</label>
            <input type="text" className="form-control" id="title" name="title" value={formData.title} onChange={handleChange} placeholder="e.g., Cloth & Electronic" required />
          </div>

          {/* Contact Details */}
          <h5 className="text-dark mt-4 mb-3">Contact Details</h5>
          <div className="mb-3">
            <label htmlFor="phone" className="form-label">Phone Number</label>
            <input type="tel" className="form-control" id="phone" name="phone" value={formData.phone} onChange={handleChange} placeholder="e.g., +91 9876543210" />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email Address</label>
            <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="e.g., example@email.com" />
          </div>
          <div className="mb-3">
            <label htmlFor="address" className="form-label">Address</label>
            <textarea className="form-control" id="address" name="address" rows="3" value={formData.address} onChange={handleChange} placeholder="e.g., 123 Business Street, Indore"></textarea>
          </div>

          {/* Social & Web Links */}
          <h5 className="text-dark mt-4 mb-3">Social & Web Links</h5>
          <div className="mb-3">
            <label htmlFor="website" className="form-label">Website URL</label>
            <input type="url" className="form-control" id="website" name="website" value={formData.website} onChange={handleChange} placeholder="https://yourwebsite.com" />
          </div>
          <div className="mb-3">
            <label htmlFor="linkedin" className="form-label">Instagram Profile</label>
            <input type="url" className="form-control" id="linkedin" name="linkedin" value={formData.linkedin} onChange={handleChange} placeholder="https://instagram.com/in/yourprofile" />
          </div>
          <div className="mb-3">
            <label htmlFor="facebook" className="form-label">Whatsapp Profile</label>
            <input type="url" className="form-control" id="facebook" name="facebook" value={formData.facebook} onChange={handleChange} placeholder="https://whatsap.com/yourprofile" />
          </div>

          {/* About Section */}
          <h5 className="text-dark mt-4 mb-3">About shop</h5>
          <div className="mb-4">
            <label htmlFor="about" className="form-label">Short Bio/Description</label>
            <textarea className="form-control" id="about" name="about" rows="4" value={formData.about} onChange={handleChange} placeholder="Men's Wear | Women's Wear | Kid's Wear"></textarea>
          </div>

          <div className="text-center">
            <button type="submit" className="btn btn-primary px-4 py-2">Generate My Card</button>
          </div>
        </form>
      </div>
    </div>
  </div>
  );
};

export default CardCreationFreePage;
