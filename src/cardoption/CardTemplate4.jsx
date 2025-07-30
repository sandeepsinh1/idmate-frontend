import React from 'react';

const CardTemplate4 = ({ name = "CARD 4", category = "Men's Wear | Women's Wear | Kids", phone, location = "Some City, Zone 4", whatsappLink, instagramLink, qrCodeSrc }) => {
  return (
    <div className="w-100 rounded-xl shadow-lg bg-green text-center p-4 space-y-3">
      {/* User Icon */}
      <div className="text-4xl text-blue-600 mx-auto">
        <i className="bi bi-person-circle"></i>
      </div>

      {/* Name and Category */}
      <h2 className="text-xl font-bold">{name}</h2>
      <p className="text-sm">{category}</p>

      {/* Phone */}
      <p className="text-red-600 mt-2">
        📞 {phone}
      </p>

      {/* Location */}
      <p className="text-red-600">
        📍 {location}
      </p>

      {/* Social Icons */}
      <div className="flex justify-center space-x-4 text-2xl mt-2">
        <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
          <i className="bi bi-whatsapp text-green-600"></i>
        </a>
        <a href={instagramLink} target="_blank" rel="noopener noreferrer">
          <i className="bi bi-instagram text-pink-500"></i>
        </a>
      </div>

      {/* QR Code */}
      <div className="mt-3">
        <img src={qrCodeSrc} alt="QR Code" className="w-24 h-24 mx-auto" />
        <p className="text-sm text-gray-800 mt-1">Scan for more details</p>
      </div>
    </div>
  );
};

export default CardTemplate4;
