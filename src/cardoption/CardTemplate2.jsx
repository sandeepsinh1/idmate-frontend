import React from 'react';
import { Home, Phone, Mail, Globe } from 'lucide-react';

// CardTemplate2 (based on images (1).png)
const CardTemplate2 = ({
    companyLogoText = "COMPANY LOGO",
    companySlogan = "We Code to Perfection",
    fullName = "Name Surname",
    title = "Graphic Designer",
    address = "Address Here",
    phone = "+1 234567890",
    email = "info@email.com",
    website = "www.website.com"
}) => {
    return (
        <div className="w-[500px] h-64 bg-white rounded-xl shadow-lg flex font-inter">
            {/* Left White Section */}
            <div className="w-1/2 bg-white flex flex-col justify-center items-center p-6 rounded-l-xl">
                <h2 className="text-2xl font-bold text-red-600 mb-2">{companyLogoText}</h2>
                <p className="text-sm text-gray-600">{companySlogan}</p>
            </div>

            {/* Right Dark Gray Section */}
            <div className="w-1/2 bg-gray-800 text-white p-6 flex flex-col justify-center rounded-r-xl">
                <div className="text-right mb-4">
                    <h3 className="text-2xl font-semibold">{fullName}</h3>
                    <p className="text-sm text-gray-400">{title}</p>
                </div>
                <div className="space-y-2 text-sm text-right">
                    <p className="flex items-center justify-end">
                        <Home size={16} className="ml-2" /> {address}
                    </p>
                    <p className="flex items-center justify-end">
                        <Phone size={16} className="ml-2" /> {phone}
                    </p>
                    <p className="flex items-center justify-end">
                        <Mail size={16} className="ml-2" /> {email}
                    </p>
                    <p className="flex items-center justify-end">
                        <Globe size={16} className="ml-2" /> {website}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default CardTemplate2;
