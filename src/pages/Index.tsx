
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Benefits from '../components/Benefits';
import UseCases from '../components/UseCases';
import Testimonials from '../components/Testimonials';
import CallToAction from '../components/CallToAction';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Benefits />
        <UseCases />
        <Testimonials />
        <CallToAction />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
