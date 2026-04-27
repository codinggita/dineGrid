import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SmarterWay from './components/SmarterWay';
import CuratedCollections from './components/CuratedCollections';
import ModernEpicurean from './components/ModernEpicurean';

import HowItWorks from './components/HowItWorks';
import VIPClub from './components/VIPClub';
import PrivateDining from './components/PrivateDining';
import GiftCards from './components/GiftCards';
import MenuShowcase from './components/MenuShowcase';
import Footer from './components/Footer';
import Login from './components/login';

import BookingDate from './pages/booking/BookingDate';
import BookingTable from './pages/booking/BookingTable';
import BookingDetails from './pages/booking/BookingDetails';
import BookingPayment from './pages/booking/BookingPayment';
import BookingSuccess from './pages/booking/BookingSuccess';
import HowItWorksPage from './pages/HowItWorksPage';
import { BookingProvider } from './context/BookingContext';

const LandingPage = () => (
  <div className="min-h-screen bg-[var(--color-neutral-light)]">
    <Navbar />
    <main>
      <Hero />
      <SmarterWay />
      <HowItWorks />
      <CuratedCollections />

      <ModernEpicurean />
      <PrivateDining />
      <GiftCards />
      <VIPClub />
    </main>
    <Footer />
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/menu" element={
          <div className="min-h-screen bg-white">
            <Navbar />
            <div className="pt-10">
              <MenuShowcase />
            </div>
            <Footer />
          </div>
        } />
        <Route path="/how-it-works" element={<HowItWorksPage />} />

        {/* Booking Flow — wrapped in its own BookingProvider */}
        <Route path="/book/*" element={
          <BookingProvider>
            <Routes>
              <Route path="date"    element={<BookingDate />} />
              <Route path="table"   element={<BookingTable />} />
              <Route path="details" element={<BookingDetails />} />
              <Route path="payment" element={<BookingPayment />} />
              <Route path="success" element={<BookingSuccess />} />
            </Routes>
          </BookingProvider>
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;