import React from 'react';
import { Phone, Mail, Globe, MapPin, QrCode } from 'lucide-react';

// CardTemplateWhiteWave (based on images.png)
const CardTemplateWhiteWave = ({
    companyName = "COMPANY",
    companyLogoSrc = "https://placehold.co/40x40/FFFFFF/000000?text=Logo", // Placeholder for wing logo
    fullName = "MICHAEL STANLEY",
    title = "BUSINESS MANAGER",
    phone = "+555-555-5555",
    email = "YOURINFO@EMAIL.COM",
    website = "WWW.WEBSITE.COM",
    location = "ADD YOUR LOCATION HERE",
    qrCodeSrc = "https://placehold.co/60x60/E5E7EB/000000?text=QR"
}) => {
    return (
        <div className="w-[500px] h-64 bg-white rounded-xl shadow-lg flex relative overflow-hidden font-inter">
            {/* Right Wave Pattern */}
            <div className="absolute inset-y-0 right-0 w-1/3 bg-gray-100 rounded-r-xl flex items-center justify-center overflow-hidden">
                {/* SVG for wave pattern */}
                <svg className="absolute w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path d="M0,0 C30,50 70,50 100,0 L100,100 L0,100 Z" fill="#E5E7EB" />
                    <path d="M0,10 C30,60 70,60 100,10 L100,100 L0,100 Z" fill="#D1D5DB" />
                    <path d="M0,20 C30,70 70,70 100,20 L100,100 L0,100 Z" fill="#9CA3AF" />
                </svg>
            </div>

            {/* Left Section - Company Logo and Vertical Line */}
            <div className="w-1/4 flex flex-col items-center justify-between p-6 z-10">
                <div className="flex flex-col items-center">
                    <img src={companyLogoSrc} alt="Company Logo" className="w-10 h-10 mb-2" />
                    <p className="text-sm font-semibold text-gray-700">{companyName}</p>
                </div>
                <img src={qrCodeSrc} alt="QR Code" className="w-16 h-16 rounded-sm" />
            </div>

            {/* Vertical Blue Line */}
            <div className="w-1 bg-blue-600 h-full z-10"></div>

            {/* Right Section - Personal Details */}
            <div className="flex-1 p-6 flex flex-col justify-center space-y-2 z-10">
                <h3 className="text-2xl font-bold text-gray-900">{fullName.split(' ')[0]}<span className="font-normal text-gray-500 ml-1">{fullName.split(' ')[1]}</span></h3>
                <p className="text-sm text-gray-600 mb-4">{title}</p>
                <div className="space-y-2 text-sm text-gray-700">
                    <p className="flex items-center">
                        <Phone size={16} className="mr-2 text-gray-500" /> {phone}
                    </p>
                    <p className="flex items-center">
                        <Mail size={16} className="mr-2 text-gray-500" /> {email}
                    </p>
                    <p className="flex items-center">
                        <Globe size={16} className="mr-2 text-gray-500" /> {website}
                    </p>
                    <p className="flex items-center">
                        <MapPin size={16} className="mr-2 text-gray-500" /> {location}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default CardTemplateWhiteWave;
