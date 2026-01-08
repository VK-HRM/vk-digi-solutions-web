
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Company from './pages/Company';
import CaseStudies from './pages/CaseStudies';
import Contact from './pages/Contact';
import FreeAudit from './pages/FreeAudit';
import Services from './pages/Services';
import Industries from './pages/Industries';
import Blog from './pages/Blog';

// Service Sub-pages
import MetaAds from './pages/services/MetaAds';
import GoogleAds from './pages/services/GoogleAds';
import SEO from './pages/services/SEO';
import Websites from './pages/services/Websites';
import WhatsApp from './pages/services/WhatsApp';
import GrowthSystem from './pages/services/GrowthSystem';

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/company" element={<Company />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/meta-ads" element={<MetaAds />} />
            <Route path="/services/google-ads" element={<GoogleAds />} />
            <Route path="/services/seo" element={<SEO />} />
            <Route path="/services/websites" element={<Websites />} />
            <Route path="/services/whatsapp" element={<WhatsApp />} />
            <Route path="/services/growth-system" element={<GrowthSystem />} />
            <Route path="/industries" element={<Industries />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/free-audit" element={<FreeAudit />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
