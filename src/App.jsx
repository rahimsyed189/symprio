import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from './context/AuthContext';
import SymprioNavbar from './components/SymprioNavbar';
import UpcomingScrollBanner from './components/UpcomingScrollBanner';
import SymprioHero from './components/SymprioHero';
import SymprioStats from './components/SymprioStats';
import TrainingsContainer from './components/TrainingsContainer';
import SymprioServices from './components/SymprioServices';
import Events from './components/Events';
import Trainings from './components/Trainings';
import SymprioTeam from './components/SymprioTeam';
import SymprioTestimonials from './components/SymprioTestimonials';
import SymprioFAQ from './components/SymprioFAQ';
import SympriBrands from './components/SympriBrands';
import SymprioNews from './components/SymprioNews';
import SymprioFooter from './components/SymprioFooter';
import AdminAuth from './components/AdminAuth';
import AdminDashboard from './components/AdminDashboard';
import ProtectedRoute from './components/ProtectedRoute';
import Clients from './components/Clients';

const HomePage = () => {
  return (
    <div style={{ 
      background: '#fff',
      color: '#1f2937',
      fontFamily: "'Segoe UI', system-ui, -apple-system, sans-serif",
      minHeight: '100vh',
      position: 'relative'
    }}>
      <SymprioNavbar />
      <UpcomingScrollBanner />
      <SymprioHero />
      <SymprioStats />
      <TrainingsContainer />
      <SymprioServices />
      <Events />
      <Trainings />
      <SymprioTeam />
      <SymprioTestimonials />
      <SymprioFAQ />
      <SympriBrands />
      <SymprioNews />
      <SymprioFooter />
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
