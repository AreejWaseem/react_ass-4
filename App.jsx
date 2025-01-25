import React from 'react';
import './styles/App.css';
import Header from './components/Header';
import ServicesSection from './components/ServicesSection';
import BusinessPlanSection from './components/BusinessPlanSection';
import ServicesList from './components/ServicesList';
import Gallery from './components/Gallery';
import TrustedSection from './components/TrustedSection';
import ClientsSection from './components/ClientsSection';

function App() {
  return (
    <div>
      <Header />
      <ServicesSection />
      <BusinessPlanSection />
      <ServicesList />
      <Gallery />
      <TrustedSection />
      <ClientsSection />
    </div>
  );
}

export default App;
