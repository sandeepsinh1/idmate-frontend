import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import DigitalCardDisplay from '../components/DigitalCardDisplay';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CardCreationFreePage = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    title: '',
    phone: '',
    email: '',
    address: '',
    website: '',
    instagram: '',
    facebook: '',
    whatsapp: '',
    avatar: '',
    about: ''
  });

  const [cardGenerated, setCardGenerated] = useState(false);
  const userId = Number(localStorage.getItem("userId"));
  console.log("User ID:", userId);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
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

  if (cardGenerated) {
    return <DigitalCardDisplay formData={formData} />;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Card Data Submitted:', formData);
    setCardGenerated(true);

    try {
      const response = await axios.post(`http://localhost:8080/api/cards/insertDetail?userId=${userId}`, {
        name: formData.name,
        title: formData.title,
        phone: formData.phone,
        email: formData.email,
        address: formData.address,
        website: formData.website,
        instagram: formData.instagram,
        facebook: formData.facebook,
        avatar: formData.avatar,
        whatsapp: formData.whatsapp ? `https://wa.me/91${formData.whatsapp.replace(/\D/g, '')}` : '',
        about: formData.about
      });

      if (response.status === 200) {
        alert(response.data);
        return <DigitalCardDisplay formData={formData} />;
      } else {
        alert(response.data);
      }
    } catch (error) {
      console.error(error);
      alert('Card not generated.');
    }
  };

 return (
  <div
    className="d-flex flex-column min-vh-100 text-light"
    style={{
      background: 'linear-gradient(to bottom right, #0f2027, #203a43, #2c5364)',
      paddingTop: '4rem',
      paddingBottom: '2rem',
    }}
  >
    <div className="container">
      <div className="mx-auto p-4 shadow-lg rounded-4 bg-dark-navy-blue" style={{ maxWidth: '750px' }}>
        <h2 className="text-center text-info mb-2">Create Your Free Digital Card</h2>
        <p className="text-center text-muted mb-4 fs-6">
          Fill in your details to generate your personalized digital visiting card instantly.
        </p>

        <form onSubmit={handleSubmit} className="row g-3">

          {/* Avatar Upload */}
          <div className="text-center mb-4">
            <label htmlFor="avatar-upload" className="d-block">
              <img
                src={formData.avatar || "https://placehold.co/100x100/1e1e2f/ffffff?text=Add+Photo"}
                alt="Avatar Preview"
                className="rounded-circle border border-light shadow"
                style={{
                  width: '100px',
                  height: '100px',
                  objectFit: 'cover',
                  cursor: 'pointer',
                  backgroundColor: '#f8f9fa'
                }}
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
            <small className="d-block mt-2 text-muted">Click to upload logo/photo</small>
          </div>

          {/* Shop Info */}
          <div className="col-md-6">
            <div className="form-floating">
              <input type="text" className="form-control bg-blue hite text-dark" id="name" name="name"
                value={formData.name} onChange={handleChange} placeholder="Shop Name" required />
              <label htmlFor="name">Shop Name</label>
            </div>
          </div>

          <div className="col-md-6">
            <div className="form-floating">
              <input type="text" className="form-control bg-white text-dark" id="about" name="about"
                value={formData.about} onChange={handleChange}
                placeholder="Shop Categories" />
              <label htmlFor="about">Shop Categories</label>
            </div>
          </div>

          {/* Contact */}
          <div className="col-md-6">
            <div className="form-floating">
              <input type="tel" className="form-control bg-white text-dark" id="phone" name="phone"
                value={formData.phone} onChange={handleChange} placeholder="Phone" />
              <label htmlFor="phone">Phone Number</label>
            </div>
          </div>

          <div className="col-md-6">
            <div className="form-floating">
              <input type="tel" className="form-control bg-bit-dark text-dark" id="whatsapp" name="whatsapp"
                value={formData.whatsapp} onChange={handleChange}
                pattern="[0-9]{10}" maxLength="10" placeholder="WhatsApp" />
              <label htmlFor="whatsapp">WhatsApp (10-digit)</label>
            </div>
          </div>

          <div className="col-12">
            <div className="form-floating">
              <textarea className="form-control bg-white text-dark" id="address" name="address" rows="3"
                value={formData.address} onChange={handleChange} placeholder="Address" style={{ height: '100px' }}></textarea>
              <label htmlFor="address">Business Address</label>
            </div>
          </div>

          {/* Social/Web Links */}
          <div className="col-md-6">
            <div className="form-floating">
              <input type="url" className="form-control bg-white text-dark" id="website" name="website"
                value={formData.website} onChange={handleChange} placeholder="Website" />
              <label htmlFor="website">Website</label>
            </div>
          </div>

          <div className="col-md-6">
            <div className="form-floating">
              <input type="url" className="form-control bg-white text-dark" id="instagram" name="instagram"
                value={formData.instagram} onChange={handleChange} placeholder="Instagram" />
              <label htmlFor="instagram">Instagram</label>
            </div>
          </div>

          <div className="col-md-6">
            <div className="form-floating">
              <input type="url" className="form-control bg-white text-dark" id="facebook" name="facebook"
                value={formData.facebook} onChange={handleChange} placeholder="Facebook" />
              <label htmlFor="facebook">Facebook</label>
            </div>
          </div>

          <div className="col-12 text-center mt-4">
            <button type="submit" className="btn btn-info px-5 py-2 fw-semibold shadow">
              Generate My Card
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
);
};
export default CardCreationFreePage;
