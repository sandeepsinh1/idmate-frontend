import React from 'react';
import { useLocation } from 'react-router-dom';
import CardTemplate1 from './CardTemplate1';
import CardTemplate2 from './CardTemplate2';

const CardGenerator = () => {
  const { state } = useLocation();

  if (!state) return <p>No data found.</p>;

  const { name, phone, whatsapp, template } = state;

  const props = { name, phone, whatsapp };

  switch (template) {
    case 'template1':
      return <CardTemplate1 {...props} />;
    case 'template2':
      return <CardTemplate2 {...props} />;
    default:
      return <p>Invalid template</p>;
  }
};

export default CardGenerator;
