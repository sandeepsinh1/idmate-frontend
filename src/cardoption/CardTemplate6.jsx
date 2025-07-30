import React from 'react';
import { Phone, Mail, Globe, MapPin, Instagram, Facebook, Linkedin } from 'lucide-react';

// CardTemplate6 (based on business-cards-template-design-9f30e0b266403539d06aaf9ab984c943_screen.jpg)
const CardTemplate6 = ({
    companyName = "DOMINION REAL ESTATE COMPANY",
    logoSrc = "https://placehold.co/60x60/ADD8E6/000000?text=Logo", // Placeholder for a circular logo
    fullName = "MAXWELL MICHAEL A.",
    title = "Chief Executive Office",
    phone = "+1 23 45 789",
    email = "info@dominionrealestate.com",
    website = "www.dominionrealestate.com",
    address = "Nextgen Company 123E Arapaho Road Dallas, TX 75248",
    socialText = "Dominion Real Estate",
    instagramLink = "#", facebookLink = "#", linkedinLink = "#", tiktokLink = "#", pinterestLink = "#"
}) => {
    return (
        <div className="w-[500px] h-64 bg-white rounded-xl shadow-lg flex relative overflow-hidden font-inter">
            {/* Background Waves */}
            <div className="absolute top-0 left-0 w-full h-full">
                <div className="absolute -top-10 -right-10 w-48 h-48 bg-blue-400 opacity-20 transform rotate-45 rounded-full"></div>
                <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-500 opacity-20 transform rotate-45 rounded-full"></div>
                <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-blue-600 opacity-20 transform -rotate-45 rounded-full"></div>
                <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-blue-700 opacity-20 transform -rotate-45 rounded-full"></div>
                {/* More subtle wave shapes */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-blue-200 opacity-30 rounded-bl-full"></div>
                <div className="absolute bottom-0 left-0 w-40 h-40 bg-blue-200 opacity-30 rounded-tr-full"></div>
            </div>

            {/* Left Section */}
            <div className="w-1/3 p-6 flex flex-col justify-between items-center z-10">
                <div className="flex flex-col items-center text-center">
                    <img src={logoSrc} alt="Company Logo" className="w-16 h-16 rounded-full mb-2" />
                    <p className="text-sm font-semibold text-gray-700">{companyName}</p>
                </div>
                <div className="text-xs text-gray-600 text-center">
                    <p className="flex items-start mb-1">
                        <MapPin size={14} className="mr-1 mt-0.5 text-blue-600 flex-shrink-0" />
                        <span>{address}</span>
                    </p>
                    <div className="flex justify-center items-center mt-2 space-x-2">
                        <a href={instagramLink} target="_blank" rel="noopener noreferrer"><Instagram size={16} className="text-gray-500 hover:text-pink-500" /></a>
                        <a href={facebookLink} target="_blank" rel="noopener noreferrer"><Facebook size={16} className="text-gray-500 hover:text-blue-600" /></a>
                        <a href={linkedinLink} target="_blank" rel="noopener noreferrer"><Linkedin size={16} className="text-gray-500 hover:text-blue-700" /></a>
                        {/* Assuming TikTok and Pinterest icons are not in lucide-react, using simple text or placeholder */}
                        <span className="text-gray-500 text-xs">TikTok</span>
                        <span className="text-gray-500 text-xs">Pinterest</span>
                        <span className="text-gray-700 text-xs ml-2">{socialText}</span>
                    </div>
                </div>
            </div>

            {/* Right Section */}
            <div className="w-2/3 p-6 flex flex-col justify-center space-y-3 z-10">
                <h3 className="text-xl font-bold text-gray-900">{fullName}</h3>
                <p className="text-sm text-blue-600">{title}</p>
                <div className="space-y-2 mt-4">
                    <p className="flex items-center text-sm text-gray-700">
                        <Phone size={16} className="mr-2 text-blue-600" /> {phone}
                    </p>
                    <p className="flex items-center text-sm text-gray-700">
                        <Mail size={16} className="mr-2 text-blue-600" /> {email}
                    </p>
                    <p className="flex items-center text-sm text-gray-700">
                        <Globe size={16} className="mr-2 text-blue-600" /> {website}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default CardTemplate6;
