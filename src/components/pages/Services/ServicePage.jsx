import React from 'react';
import { useParams } from 'react-router-dom';

const ServicesPage = () => {
  const { index } = useParams(); 

  const renderContent = (index) => {
    switch (index) {
      case '1':
        return <div> Service 1 </div>;
      case '2':
        return <div> Service 2 </div>;
      case '3':
        return <div>Service</div>;
      default:
        return <div>Welcome to our services</div>;
    }
  };

  return (
    <div className="service-page">
      <h1>Service Details</h1>
      {renderContent(index)}  
    </div>
  );
};

export default ServicesPage;
