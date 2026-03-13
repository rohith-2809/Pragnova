import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import PageLoader from './components/PageLoader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Ecosystem from './components/Ecosystem';
import Identity from './components/Identity';
import Capabilities from './components/Capabilities';
import Services from './components/Services';
import WhyUs from './components/WhyUs';
import Clients from './components/Clients';
import ContactModal from './components/ContactModal';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import Products from './components/Products';
const AboutUs = React.lazy(() => import('./components/AboutUs'));
const ServicesPage = React.lazy(() => import('./components/ServicesPage'));
const WhyUsPage = React.lazy(() => import('./components/WhyUsPage'));
const CapabilitiesPage = React.lazy(() => import('./components/CapabilitiesPage'));

// Define the main landing page content
const LandingPage = () => (
  <main>
    <Hero />
    <Ecosystem />
    <Identity />
    <Capabilities />
    <Services />
    <Products />
    <WhyUs />
    <Clients />
    <ContactForm />
  </main>
);

export const ModalContext = React.createContext({
  openModal: () => {},
});

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <ModalContext.Provider value={{ openModal: () => setIsModalOpen(true) }}>
      <PageLoader />
      <div className="min-h-screen relative">
        <Navbar />
        <React.Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/why-us" element={<WhyUsPage />} />
            <Route path="/capabilities" element={<CapabilitiesPage />} />
          </Routes>
        </React.Suspense>
        <Footer />
        <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      </div>
    </ModalContext.Provider>
  );
}

export default App;
