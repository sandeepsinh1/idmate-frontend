import React from 'react';
import { Phone, Globe, MapPin, Twitter, Facebook, MessageCircle, Linkedin } from 'lucide-react';

const CardTemplate3 = ({
    companyName = "GENADIN REAL ESTATE",
    logoSrc = "https://placehold.co/50x50/FF7F50/FFFFFF?text=Logo",
    fullName = "MICHAEL SMITH",
    title = "Creative Director",
    phone = "+012 078 5688",
    website = "www.website.com",
    address = "Street View Address, 012 North York, NY",
    twitterLink = "#", facebookLink = "#", whatsappLink = "#", linkedinLink = "#",
    preview = false // NEW
}) => {
    return (
        <div
            className={`${preview ? '' : 'd-flex justify-content-center align-items-center'} container`}
            style={{
                height: preview ? 'auto' : '100vh',
                backgroundColor: preview ? 'transparent' : '#141111ff'
            }}
        >
            <div className="card shadow-sm rounded-5 border-0 p-4"
                style={{
                    width: preview ? '100%' : '22rem',
                    maxWidth: '22rem',
                    background: 'green',
                    position: 'relative',
                    zIndex: 1
                }}
            >
                <div className="text-center mb-3">
                    <img src={logoSrc} alt="Logo" className="rounded mb-2" style={{ width: 50, height: 50 }} />
                    <h6 className="text-muted mb-2" style={{ fontSize: '0.85rem', fontWeight: 500 }}>{companyName}</h6>
                    <h4 className="fw-bold mb-1" style={{ fontSize: '1.5rem' }}>{fullName}</h4>
                    <p className="text-secondary" style={{ fontSize: '0.95rem' }}>{title}</p>
                </div>

                <ul className="list-unstyled ps-0 mb-4" style={{ fontSize: '0.9rem' }}>
                    <li className="d-flex align-items-center mb-2">
                        <Phone size={18} className="me-2 text-secondary" /> {phone}
                    </li>
                    <li className="d-flex align-items-center mb-2">
                        <Globe size={18} className="me-2 text-secondary" /> {website}
                    </li>
                    <li className="d-flex align-items-center">
                        <MapPin size={18} className="me-2 text-secondary" /> {address}
                    </li>
                </ul>

                <div className="d-flex justify-content-center gap-3">
                    <a href={twitterLink} className="btn btn-outline-primary btn-sm rounded-circle">
                        <Twitter size={18} />
                    </a>
                    <a href={facebookLink} className="btn btn-outline-primary btn-sm rounded-circle">
                        <Facebook size={18} />
                    </a>
                    <a href={whatsappLink} className="btn btn-outline-success btn-sm rounded-circle">
                        <MessageCircle size={18} />
                    </a>
                    <a href={linkedinLink} className="btn btn-outline-info btn-sm rounded-circle">
                        <Linkedin size={18} />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default CardTemplate3;
