import React from 'react';
import { Phone, Mail, Globe } from 'lucide-react';

// CardTemplate3 (based on images (2).png)
const CardTemplate3 = ({
    fullName = "FULL NAME",
    title = "CEO & Founder",
    phone = "415-999-9999",
    email = "john@email.com",
    website = "website.com",
    logoText = "LOGO TEXT HERE",
    slogan = "SLOGAN HERE"
}) => {
    return (
        <div className="w-96 h-56 bg-gray-700 rounded-xl shadow-lg p-6 flex items-center justify-between font-inter text-gray-200">
            <div className="flex flex-col justify-center space-y-2">
                <h2 className="text-3xl font-bold uppercase">{fullName}</h2>
                <p className="text-md text-gray-400">{title}</p>
                <div className="mt-4 space-y-1">
                    <p className="flex items-center text-sm">
                        <Phone size={16} className="mr-2" /> {phone}
                    </p>
                    <p className="flex items-center text-sm">
                        <Mail size={16} className="mr-2" /> {email}
                    </p>
                    <p className="flex items-center text-sm">
                        <Globe size={16} className="mr-2" /> {website}
                    </p>
                </div>
            </div>
            <div className="self-start mt-2 mr-2 text-right">
                <p className="text-xl font-semibold">{logoText}</p>
                <p className="text-xs text-gray-400">{slogan}</p>
                <div className="w-12 h-0.5 bg-gray-400 mx-auto mt-2"></div>
            </div>
        </div>
    );
};

export default CardTemplate3;
