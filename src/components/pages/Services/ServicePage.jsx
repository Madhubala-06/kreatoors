import React from 'react';
import { useParams } from 'react-router-dom';
import EmployeeAdvorcacy from './EmployeeAdvorcacy';
const ServicesPage = () => {
  const { index } = useParams(); 

  const renderContent = (index) => {
    switch (index) {
      case '1':
        return <EmployeeAdvorcacy/>;
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
      {renderContent(index)}  
    </div>
  );
};

export default ServicesPage;
