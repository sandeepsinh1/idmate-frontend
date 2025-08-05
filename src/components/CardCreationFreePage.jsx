import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import DigitalCardDisplay from '../components/DigitalCardDisplay'; // Import the new component
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const CardCreationFreePage = () => {
const navigate=useNavigate();
  
  const [formData, setFormData] = useState({
    name: '',
    title: '', // This will be used for a tagline or secondary title if desired
    phone: '',
    email: '', // Not used in the current card design, but kept for data collection
    address: '',
    website: '',
    instagram: '', // Re-purposed for Instagram
    facebook: '', // Re-purposed for WhatsApp
    whatsapp: '', // Re-purposed for WhatsApp
    avatar: '',
    about: '' // Used for categories
  });

 const [cardGenerated, setCardGenerated] = useState(false);
const userId =Number(localStorage.getItem("userId"));
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
// ths is correct work after that


  // If the card is generated, display the DigitalCardDisplay component
  if (cardGenerated) {
    return <DigitalCardDisplay formData={formData} />;
  }

   const handleSubmit = async (e) => {
    e.preventDefault();
 console.log('Card Data Submitted:', formData);
    setCardGenerated(true); // Set to true to display the card
   
        // If the card is generated, display the DigitalCardDisplay component
 
 try {
    const response = await axios.post(`http://localhost:8080/api/cards/insertDetail?userId=${userId}`, {
     name: formData.name,
      title:formData.title, // This will be used for a tagline or secondary title if desired
    phone: formData.phone,
    email: formData.email, // Not used in the current card design, but kept for data collection
    address: formData.address,
    website: formData.website,
    instagram: formData.instagram, // Re-purposed for Instagram
    facebook: formData.facebook, // Re-purposed for WhatsApp
    avatar: formData.avatar,
    whatsapp: formData.whatsapp  ? `https://wa.me/91${formData.whatsapp.replace(/\D/g, '')}`  : '',

    about: formData.about 

      });
if(response.status===200)
{
      alert(response.data); // backend success message
  return <DigitalCardDisplay formData={formData} />;
    
}
else
{
  alert(response.data); // backend success message
}
      } catch (error) {
      console.error(error);
      alert('CardNOtGenerated');
    }
 };


  return (
    <div className="d-flex flex-column min-vh-100 bg-light text-dark">
      <div style={{ paddingTop: '43rem', paddingBottom: '2rem' }}> {/* Adjusted padding for better fit */}
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
                  style={{ width: '100px', height: '30px', objectFit: 'cover', cursor: 'pointer' }}
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
              <small className="d-block mt-2 text-secondary">Click to upload Logo/Avatar</small>
            </div>

            {/* Personal Information */}
            <h5 className="text-dark mb-3">Shop Information</h5> {/* Changed heading */}
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Shop Name</label>
              <input type="text" className="form-control" id="name" name="name" value={formData.name} onChange={handleChange} placeholder="e.g., Youth Cloth Shop" required />
            </div>
            {/* Changed title field to be optional and for a tagline if needed in future */}
            <div className="mb-3">
              <label htmlFor="about" className="form-label">Shop Categories</label> {/* Renamed label */}
              <input type="text" className="form-control" id="about" name="about" value={formData.about} onChange={handleChange} placeholder="e.g., Men's Wear | Women's Wear | Kids Collection" />
            </div>

            {/* Contact Details */}
            <h5 className="text-dark mt-4 mb-3">Contact Details</h5>
            <div className="mb-3">
              <label htmlFor="phone" className="form-label">Phone Number</label>
              <input type="tel" className="form-control" id="phone" name="phone" value={formData.phone} onChange={handleChange} placeholder="e.g., +91 9876543210" />
            </div>
            {/* Email is not displayed on the card based on the image, but kept in form data */}
            <div className="mb-3">
              <label htmlFor="address" className="form-label">Address</label>
              <textarea className="form-control" id="address" name="address" rows="3" value={formData.address} onChange={handleChange} placeholder="e.g., 123 Business Street, Indore"></textarea>
            </div>

            {/* Social & Web Links */}
            <h5 className="text-dark mt-4 mb-3">Social & Web Links</h5>
            <div className="mb-3">
              <label htmlFor="website" className="form-label">Website URL (Optional)</label>
              <input type="url" className="form-control" id="website" name="website" value={formData.website} onChange={handleChange} placeholder="https://yourwebsite.com" />
            </div>
            <div className="mb-3">
              <label htmlFor="instagram" className="form-label">Instagram Profile URL (Optional)</label>
              <input type="url" className="form-control" id="instagram" name="instagram" value={formData.instagram} onChange={handleChange} placeholder="https://instagram.com/yourprofile" />
            </div>
            <div className="mb-3">
              <label htmlFor="facebook" className="form-label">Facebook Link (Optional)</label>
              <input type="url" className="form-control" id="facebook" name="facebook" value={formData.facebook} onChange={handleChange} placeholder="https://wa.me/919876543210" />
            </div>
 <div className="mb-3">
              <label htmlFor="whatsapp" className="form-label">WhatsApp Link (Optional)</label>
                      <input type="tel" 
            pattern="[0-9]{10}"
            maxLength={10}
            className="form-control"
            id="whatsapp"
            name="whatsapp"
            value={formData.whatsapp}
            onChange={handleChange}
            placeholder="e.g. 9876543210"
          />
          <small className="form-text text-muted">Enter 10-digit Indian mobile number without +91</small>
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