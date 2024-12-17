import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Home from './components/pages/Home/Home';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import ServicesPage from './components/pages/Services/ServicePage';
import AboutPage from './components/pages/Aboutus/About';
import Contactus from './components/pages/contactus/contactus';
import PrivacyPolicy from './components/pages/privacypolicy/PrivacyPolicy';

function AppContent() {
  const location = useLocation();
  const isServicesPage = location.pathname.startsWith('/services');

  useEffect(() => {
    switch (location.pathname) {
      case '/':
        document.title = 'Home - Kreatoors.ai';
        break;
      case '/services':
        document.title = 'Services - Kreatoors.ai';
        break;
      case '/aboutus':
        document.title = 'About Us - Kreatoors.ai';
        break;
      case '/contactus':
        document.title = 'Contact Us - Kreatoors.ai';
        break;
      case '/privacypolicy':
        document.title = 'Privacy Policy - Kreatoors.ai';
        break;
      default:
        document.title = 'Kreatoors.ai';
    }
  }, [location.pathname]);

  return (
    <div className={`${isServicesPage ? 'bg-white' : 'bg-[#F8F0FD]'}`}>
      <div>
        <Header isServices={isServicesPage} />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/services/:index" element={<ServicesPage />} /> 
        <Route path="/aboutus" element={<AboutPage />} />
        <Route path="/contactus" element={<Contactus />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
      </Routes>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
