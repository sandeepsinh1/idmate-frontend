import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import CardSelectionPage from './CardSelectionPage';

const FormPage = () => {
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
    return <CardSelectionPage formData={formData} />;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Card Data Submitted:', formData);
    setCardGenerated(true);

    try {
      const response = await axios.post('http://localhost:8080/api/cards/insertDetail', {
        ...formData,
        whatsapp: formData.whatsapp ? `https://wa.me/91${formData.whatsapp.replace(/\D/g, '')}` : ''
      });

      if (response.status === 200) {
        alert(response.data);
      } else {
        alert(response.data);
      }
    } catch (error) {
      console.error(error);
      alert('Card Not Generated');
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100 bg-dark text-light">
      <div className="p-5 rounded-4 shadow-lg form-glass" style={{ width: '100%', maxWidth: '800px' }}>
        <h2 className="text-center text-info fw-bold mb-1">✨ Create Your Digital Card</h2>
        <p className="text-center text-secondary mb-4">Stand out with a beautiful, tappable digital card.</p>

        <form onSubmit={handleSubmit}>

          {/* Avatar Upload */}
          <div className="text-center mb-4">
            <label htmlFor="avatar-upload" className="d-inline-block position-relative avatar-upload">
              <img
                src={formData.avatar || "https://placehold.co/120x120/0d6efd/ffffff?text=Add"}
                alt="Avatar"
                className="rounded-circle border border-light"
                style={{ width: '120px', height: '120px', objectFit: 'cover', cursor: 'pointer', transition: '0.3s' }}
              />
              <span className="edit-icon bi bi-pencil-fill text-white"></span>
            </label>
            <input type="file" id="avatar-upload" name="avatar" accept="image/*" onChange={handleAvatarChange} className="d-none" />
            <small className="d-block mt-2 text-light">Upload your logo or profile photo</small>
          </div>

          {/* Fields */}
          <div className="row g-3">
            <div className="col-md-6 form-floating">
              <input type="text" className="form-control bg-dark text-light border-secondary" id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Shop Name" required />
              <label htmlFor="name" className="text-secondary">Shop Name *</label>
            </div>

            <div className="col-md-6 form-floating">
              <input type="text" className="form-control bg-dark text-light border-secondary" id="about" name="about" value={formData.about} onChange={handleChange} placeholder="Shop Categories" />
              <label htmlFor="about" className="text-secondary">Categories</label>
            </div>

            <div className="col-md-6 form-floating">
              <input type="tel" className="form-control bg-dark text-light border-secondary" id="phone" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone" />
              <label htmlFor="phone" className="text-secondary">Phone Number</label>
            </div>

            <div className="col-md-6 form-floating">
              <input type="email" className="form-control bg-dark text-light border-secondary" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" />
              <label htmlFor="email" className="text-secondary">Email</label>
            </div>

            <div className="col-md-12 form-floating">
              <textarea className="form-control bg-dark text-light border-secondary" id="address" name="address" rows="3" value={formData.address} onChange={handleChange} placeholder="Address" style={{ height: '100px' }} />
              <label htmlFor="address" className="text-secondary">Address</label>
            </div>

            <div className="col-md-6 form-floating">
              <input type="url" className="form-control bg-dark text-light border-secondary" id="website" name="website" value={formData.website} onChange={handleChange} placeholder="Website" />
              <label htmlFor="website" className="text-secondary">Website</label>
            </div>

            <div className="col-md-6 form-floating">
              <input type="url" className="form-control bg-dark text-light border-secondary" id="instagram" name="instagram" value={formData.instagram} onChange={handleChange} placeholder="Instagram" />
              <label htmlFor="instagram" className="text-secondary">Instagram</label>
            </div>

            <div className="col-md-6 form-floating">
              <input type="url" className="form-control bg-dark text-light border-secondary" id="facebook" name="facebook" value={formData.facebook} onChange={handleChange} placeholder="Facebook" />
              <label htmlFor="facebook" className="text-secondary">Facebook</label>
            </div>

            <div className="col-md-6 form-floating">
              <input type="tel" maxLength={10} pattern="[0-9]{10}" className="form-control bg-dark text-light border-secondary" id="whatsapp" name="whatsapp" value={formData.whatsapp} onChange={handleChange} placeholder="WhatsApp" />
              <label htmlFor="whatsapp" className="text-secondary">WhatsApp (10-digit)</label>
            </div>
          </div>

          <div className="text-center mt-4">
            <button type="submit" className="btn btn-info text-dark fw-semibold px-5 py-2 rounded-pill">
              🚀 Generate Card
            </button>
          </div>
        </form>
      </div>

      {/* Styles */}
      <style>{`
        .form-glass {
          background: rgba(60, 60, 60, 0.7);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        .form-floating > .form-control:focus {
          border-color: #0dcaf0;
          box-shadow: 0 0 0 0.2rem rgba(13, 202, 240, 0.25);
        }
        .avatar-upload:hover img {
          opacity: 0.85;
        }
        .edit-icon {
          position: absolute;
          bottom: 0;
          right: 0;
          background: #0d6efd;
          padding: 6px;
          border-radius: 50%;
          font-size: 14px;
        }
      `}</style>
    </div>
  );
};

export default FormPage;
