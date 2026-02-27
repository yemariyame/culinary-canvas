import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Menu from './components/Menu';
import SpecialOffers from './components/SpecialOffers';
import ReservationForm from './components/ReservationForm';
import ChefProfiles from './components/ChefProfiles';
import EventBooking from './components/EventBooking';
import Reviews from './components/Reviews';
import Footer from './components/Footer';
import { Toaster } from 'sonner';

function App() {
  return (
    <div className="min-h-screen bg-stone-50 font-sans text-stone-900 selection:bg-orange-200 selection:text-orange-900">
      <Toaster position="top-center" richColors />
      <Navbar />
      <Hero />
      <SpecialOffers />
      <Menu />
      <ReservationForm />
      <ChefProfiles />
      <EventBooking />
      <Reviews />
      <Footer />
    </div>
  );
}

export default App;