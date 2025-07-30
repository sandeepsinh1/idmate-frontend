import React from 'react';
import { Phone, Mail, Globe } from 'lucide-react';

// CardTemplate7 (based on 70048a0e-7677-4e0f-8676-c32d96bd0640.png)
const CardTemplate7 = ({ fullName = "FULL NAME", title = "CEO & Founder", phone = "415-999-9999", email = "john@email.com", website = "website.com", logoText = "Logo Text Here" }) => {
    return (
        <div className="w-96 h-56 bg-black rounded-xl shadow-lg p-6 flex items-center justify-between font-inter text-white">
            <div className="flex flex-col justify-center space-y-2">
                <h2 className="text-3xl font-bold uppercase">{fullName}</h2>
                <p className="text-md text-gray-300">{title}</p>
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
            <div className="self-start mt-2 mr-2">
                <p className="font-['Brush Script MT'] text-2xl italic">{logoText}</p>
            </div>
        </div>
    );
};

export default CardTemplate7;
