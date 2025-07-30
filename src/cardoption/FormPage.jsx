import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const FormPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    whatsapp: '',
  });

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/CardSelectionPage');
  };

  return (
    <form onSubmit={handleSubmit} className="p-4">
      <input type="text" placeholder="Name" onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
      <input type="text" placeholder="Phone" onChange={(e) => setFormData({ ...formData, phone: e.target.value })} />
      <input type="text" placeholder="WhatsApp Link" onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })} />
      <button type="submit">Next</button>
    </form>
  );
};

export default FormPage;
