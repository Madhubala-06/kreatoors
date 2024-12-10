import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Home from './components/pages/Home/Home';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import ServicesPage from './components/pages/Services/ServicePage';
import AboutPage from './components/pages/Aboutus/About'
function AppContent() {
  const location = useLocation();
  const isServicesPage = location.pathname.startsWith('/services');

  return (
    <div className={` ${isServicesPage ? 'bg-white':'bg-[#F8F0FD]'}`}>
      <div className=''>
        <Header isServices={isServicesPage} />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/services/:index" element={<ServicesPage />} />
        <Route path="/aboutus" element={<AboutPage />} />

        
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