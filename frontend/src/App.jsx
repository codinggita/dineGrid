import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// ── Existing public components ──────────────────────────────
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

// ── Booking flow ────────────────────────────────────────────
import BookingDate from './pages/booking/BookingDate';
import BookingTable from './pages/booking/BookingTable';
import BookingDetails from './pages/booking/BookingDetails';
import BookingPayment from './pages/booking/BookingPayment';
import BookingSuccess from './pages/booking/BookingSuccess';
import { BookingProvider } from './context/BookingContext';

// ── Extra pages ─────────────────────────────────────────────
import HowItWorksPage from './pages/HowItWorksPage';
import DealsPage from './pages/deals/DealsPage';

// ── Auth ────────────────────────────────────────────────────
import { AuthProvider } from './context/AuthContext';
import LoginPage from './components/login';
import SignupPage from './pages/auth/SignupPage';

// ── Admin pages ─────────────────────────────────────────────
import AdminDashboard from './pages/admin/AdminDashboard';
import LiveQueue from './pages/admin/LiveQueue';
import TablesFloorPlan from './pages/admin/TablesFloorPlan';
import Reservations from './pages/admin/Reservations';
import PreOrders from './pages/admin/PreOrders';
import Approvals from './pages/admin/Approvals';
import MenuManagement from './pages/admin/MenuManagement';
import ReportsAnalytics from './pages/admin/ReportsAnalytics';
import Staff from './pages/admin/Staff';
import Settings from './pages/admin/Settings';

// ── Customer page ────────────────────────────────────────────
import CustomerHome from './pages/customer/CustomerHome';

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
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          {/* ── Public routes ── */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/menu" element={
            <div className="min-h-screen bg-white">
              <Navbar />
              <div className="pt-10"><MenuShowcase /></div>
              <Footer />
            </div>
          } />
          <Route path="/how-it-works" element={<HowItWorksPage />} />
          <Route path="/DealsPage.jsx" element={<DealsPage />} />

          {/* ── Auth routes ── */}
          <Route path="/admin-signup" element={<SignupPage />} />

          {/* ── Admin routes ── */}
          <Route path="/admin" element={<Navigate to="/admin/dashboard" replace />} />
          <Route path="/admin/dashboard"       element={<AdminDashboard />} />
          <Route path="/admin/live-queue"      element={<LiveQueue />} />
          <Route path="/admin/tables"          element={<TablesFloorPlan />} />
          <Route path="/admin/reservations"    element={<Reservations />} />
          <Route path="/admin/pre-orders"      element={<PreOrders />} />
          <Route path="/admin/approvals"       element={<Approvals />} />
          <Route path="/admin/menu-management" element={<MenuManagement />} />
          <Route path="/admin/reports"         element={<ReportsAnalytics />} />
          <Route path="/admin/staff"           element={<Staff />} />
          <Route path="/admin/settings"        element={<Settings />} />

          {/* ── Customer route ── */}
          <Route path="/customer" element={<CustomerHome />} />

          {/* ── Booking flow ── */}
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
    </AuthProvider>
  );
}

export default App;