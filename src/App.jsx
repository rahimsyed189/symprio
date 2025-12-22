import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from './context/AuthContext';
import Navbar from './components/Navbar';
import ScrollingBanner from './components/ScrollingBanner';
import RPASection from './components/RPASection';
import ProgramsStats from './components/ProgramsStats';
import About from './components/About';
import LiveBots from './components/LiveBots';
import Events from './components/Events';
import Trainings from './components/Trainings';
import Stats from './components/Stats';
import Services from './components/Services';
import Industries from './components/Industries';
import CTA from './components/CTA';
import Footer from './components/Footer';
import AdminAuth from './components/AdminAuth';
import AdminDashboard from './components/AdminDashboard';
import ProtectedRoute from './components/ProtectedRoute';
import Clients from './components/Clients';

const HomePage = () => {
  return (
    <div style={{ 
      background: `url('https://www.brainwareuniversity.ac.in/blog/wp-content/uploads/2023/08/Robotics1-scaled.jpg')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed',
      color: '#1e293b',
      fontFamily: "'Inter', system-ui, -apple-system, sans-serif",
      minHeight: '100vh',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Content Wrapper */}
      <div style={{ position: 'relative', zIndex: 1, paddingTop: '120px' }}>
        <ScrollingBanner />
        <Navbar />
        <RPASection />
        <ProgramsStats />
        <Events />
        <Trainings />
        <About />
        <LiveBots />
        <Stats />
        <Services />
        <Industries />
        <CTA />
        <Footer />
      </div>
    </div>
  );
};

function App() {
  const { user } = useAuth();

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/clients" element={<Clients />} />
      <Route 
        path="/admin" 
        element={
          user ? <AdminDashboard /> : <AdminAuth />
        } 
      />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;
