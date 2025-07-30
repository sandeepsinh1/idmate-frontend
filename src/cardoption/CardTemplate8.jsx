import React from 'react';
import { Phone, MapPin, ShoppingBag, Instagram, MessageCircle } from 'lucide-react';

// CardTemplate8 (based on samplecard.jpg)
const CardTemplate8 = ({ name = "shri dev", category = "Men's Wear | Women's Wear | Kids Collection", phone = "07610316422", location = "Meena Mansion, 274Abhinandan Nagar, Shyam Nagar Annex", whatsappLink = "#", instagramLink = "#", qrCodeSrc = "https://placehold.co/100x100/E5E7EB/000000?text=QR" }) => {
    return (
        <div className="w-72 h-[450px] bg-gradient-to-br from-amber-50 to-orange-100 rounded-3xl shadow-xl p-6 flex flex-col items-center justify-between text-gray-800 font-inter">
            {/* Logo */}
            <div className="flex flex-col items-center mb-4">
                <ShoppingBag size={32} className="text-gray-600 mb-1" />
                <p className="text-sm font-semibold">Logo</p>
            </div>

            {/* Name and Category */}
            <div className="text-center mb-4">
                <h2 className="text-3xl font-bold mb-1">{name}</h2>
                <p className="text-sm text-gray-600">{category}</p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3 text-center mb-4">
                <p className="flex items-center justify-center text-lg">
                    <Phone size={20} className="mr-2 text-red-500" /> {phone}
                </p>
                <p className="flex items-center justify-center text-lg">
                    <MapPin size={20} className="mr-2 text-red-500" /> {location}
                </p>
            </div>

            {/* Social Icons */}
            <div className="flex justify-center space-x-4 mb-4">
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="bg-green-500 p-2 rounded-full shadow-md hover:scale-105 transition-transform">
                    <MessageCircle size={24} className="text-white" />
                </a>
                <a href={instagramLink} target="_blank" rel="noopener noreferrer" className="bg-gradient-to-tr from-purple-500 via-pink-500 to-orange-500 p-2 rounded-full shadow-md hover:scale-105 transition-transform">
                    <Instagram size={24} className="text-white" />
                </a>
            </div>

            {/* QR Code */}
            <div className="mt-auto flex flex-col items-center">
                <img src={qrCodeSrc} alt="QR Code" className="w-32 h-32 rounded-lg shadow-md mb-2" />
                <p className="text-sm text-gray-600">Scan for more details</p>
            </div>
        </div>
    );
};

export default CardTemplate8;
