import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

// Import card templates
import CardTemplate8 from './CardTemplate8';
import CardTemplate7 from './CardTemplate7';
import CardTemplate6 from './CardTemplate6';
import CardTemplate5 from './CardTemplate5';
import CardTemplate4 from './CardTemplate4';
import CardTemplate3 from './CardTemplate3';
import CardTemplate2 from './CardTemplate2';
import CardTemplate1 from './CardTemplate1';

// CSS
import '../components/cssfile/CardSelectionPage.css';

const templates = [
    {
        id: 'template-sample',
        name: 'Classic Blue',
        component: CardTemplate8,
        props: {
            name: "Shri Dev",
            category: "Men's Wear | Women's Wear | Kids Collection",
            phone: "0761031422",
            location: "Meena Mansion, 274Abhinandan Nagar, Shyam Nagar Annex",
            whatsappLink: "#",
            instagramLink: "#",
            qrCodeSrc: "https://placehold.co/100x100/E5E7EB/000000?text=QR1"
        }
    },
    {
        id: 'template-black-minimal',
        name: 'Modern Dark (Black)',
        component: CardTemplate7,
        props: {
            fullName: "JOHN DOE",
            title: "Software Engineer",
            phone: "123-456-7890",
            email: "john.doe@example.com",
            website: "johndoe.com",
            logoText: "Tech Solutions"
        }
    },
    {
        id: 'template-black-minimal',
        name: '1Blue Wave',
        component: CardTemplate6,
        props: {
            companyName: "GLOBAL TECH INC.",
            logoSrc: "https://placehold.co/60x60/ADD8E6/000000?text=GTI",
            fullName: "ALEXANDER B. SMITH",
            title: "Lead Developer",
            phone: "+1 987 654 321",
            email: "alex.smith@globaltech.com",
            website: "globaltech.com",
            address: "101 Innovation Drive, Tech City, CA 90210",
            socialText: "Global Tech"
        }
    },
    {
        id: 'template-orange-vertical',
        name: 'Orange Wave Vertical',
        component: CardTemplate5,
        props: {
            companyName: "CREATIVE DESIGNS",
            logoSrc: "https://placehold.co/50x50/FF7F50/FFFFFF?text=CD",
            fullName: "SARAH JOHNSON",
            title: "Graphic Designer",
            phone: "+012 345 6789",
            website: "sarahdesigns.com",
            address: "Art Studio, 456 Creative Lane, NY",
            twitterLink: "#",
            facebookLink: "#",
            whatsappLink: "#",
            linkedinLink: "#"
        }
    },
    {
        id: 'template-split-minimal',
        name: 'Split Minimal',
        component: CardTemplate4,
        props: {
            companyLogoText: "DESIGN HUB",
            companySlogan: "Innovate & Create",
            fullName: "EMILY WHITE",
            title: "UX/UI Specialist",
            address: "Design District, London",
            phone: "+44 20 1234 5678",
            email: "emily@designhub.com",
            website: "designhub.co.uk"
        }
    },
    {
        id: 'template-dark-gray-minimal',
        name: 'Modern Dark (Gray)',
        component: CardTemplate3,
        props: {
            fullName: "ROBERT DAVIS",
            title: "Marketing Director",
            phone: "555-123-4567",
            email: "robert.d@example.com",
            website: "robertdavis.com",
            logoText: "MARKET PRO",
            slogan: "Your Growth Partner"
        }
    },
    {
        id: 'template-dark-blue-minimal',
        name: 'Modern Dark (Blue)',
        component: CardTemplate2,
        props: {
            fullName: "CHLOE BROWN",
            title: "Data Scientist",
            phone: "999-888-7777",
            email: "chloe.b@example.com",
            website: "chloebrown.ai",
            logoText: "DATA INSIGHTS",
            since: "EST. 2020"
        }
    },
    {
        id: 'template-white-wave',
        name: 'White Wave',
        component: CardTemplate1,
        props: {
            companyName: "SOLUTION CO.",
            companyLogoSrc: "https://placehold.co/40x40/FFFFFF/000000?text=SC",
            fullName: "DAVID MILLER",
            title: "Project Manager",
            phone: "+111-222-3333",
            email: "david.m@solutionco.com",
            website: "solutionco.com",
            location: "123 Main St, Anytown, USA",
            qrCodeSrc: "https://placehold.co/60x60/E5E7EB/000000?text=QR8"
        }
    },
];

const CardSelectionPage = ({ formData }) => {
  const userData = formData;
    const location = useLocation();
    const [selectedTemplate, setSelectedTemplate] = useState(null);

    const handleSelect = (templateId) => {
        setSelectedTemplate(templateId);
    };

    return (
        <div className="container py-5" style={{ marginTop: '35rem' }}>
            <h2 className="text-center mb-5 fw-bold">✨ Select a Card Design</h2>

           <div className="scroll-container d-flex overflow-auto px-3 py-4 gap-4">
  {templates.map(({ id, name, component: TemplateComponent, props: templateProps }) => (
    <div
      key={id}
      className="card shadow-lg rounded-4 text-center p-3 border-2 bg-white flex-shrink-0"
      style={{ width: '250px', minWidth: '250px' }}
    >
      <h6 className="mb-3 fw-semibold">{name}</h6>
      <div className="preview-frame mb-3">
        <div className="preview-inner scale-down">
          <TemplateComponent {...templateProps} />
        </div>
      </div>
      <button
        className={`btn w-100 ${selectedTemplate === id ? 'btn-success' : 'btn-outline-primary'}`}
        onClick={() => handleSelect(id)}
      >
        {selectedTemplate === id ? '✔ Selected' : 'Select This'}
      </button>
    </div>
  ))}
</div>

            {selectedTemplate && (
                <div className="mt-5 p-4 bg-light border rounded shadow-sm text-center">
                    <h4 className="mb-4">🎉 Your Selected Card</h4>
                   
                    {React.createElement(
  templates.find(t => t.id === selectedTemplate).component,
  userData
)}

                </div>
            )}
        </div>
    );
};

export default CardSelectionPage;
