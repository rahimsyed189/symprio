import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from './context/AuthContext';
import SymprioNavbar from './components/SymprioNavbar';
import SymprioHero from './components/SymprioHero';
import SymprioStats from './components/SymprioStats';
import EventsAndTrainings from './components/EventsAndTrainings';
import Services from './components/Services';
import TeamMembers from './components/TeamMembers';
import EInvoicing from './components/EInvoicing';
import DocumentUnderstanding from './components/DocumentUnderstanding';
import SymprioFooter from './components/SymprioFooter';
import DigitalTransformation from './components/DigitalTransformation';
import Chatbots from './components/Chatbots';
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
      <SymprioHero />
      <SymprioStats />
      <EventsAndTrainings />
      <Services />
      <TeamMembers />
      <EInvoicing />
      <DocumentUnderstanding />
      <SymprioFooter />
    </div>
  );
};

const ServicePage = ({ component: Component }) => {
  return (
    <div style={{
      background: '#fff',
      color: '#1f2937',
      fontFamily: "'Segoe UI', system-ui, -apple-system, sans-serif",
      minHeight: '100vh',
      position: 'relative'
    }}>
      <SymprioNavbar />
      <Component />
      <SymprioFooter />
    </div>
  );
};

function App() {
  const { user } = useAuth();

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/digital-transformation" element={<ServicePage component={DigitalTransformation} />} />
      <Route path="/chatbots" element={<ServicePage component={Chatbots} />} />
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
};

export default App;
