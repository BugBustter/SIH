import React from 'react';
import { LanguageProvider } from './contexts/LanguageContext';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import VideoConsultation from './components/VideoConsultation';
import LocationFinder from './components/LocationFinder';
import Doctors from './components/Doctors';
import Chatbot from './components/Chatbot';
import Footer from './components/Footer';

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen">
        <Header />
        <main>
          <Hero />
          <Services />
          <VideoConsultation />
          <LocationFinder />
          <Doctors />
        </main>
        <Footer />
        <Chatbot />
      </div>
    </LanguageProvider>
  );
}

export default App;