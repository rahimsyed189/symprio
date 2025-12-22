import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showUpdates, setShowUpdates] = useState(false);
  const [updates, setUpdates] = useState([]);
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fetch events and trainings for updates
  useEffect(() => {
    const fetchUpdates = async () => {
      try {
        const [eventsRes, trainingsRes] = await Promise.all([
          fetch('http://localhost:5000/api/events'),
          fetch('http://localhost:5000/api/trainings')
        ]);

        let allUpdates = [];

        if (eventsRes.ok) {
          const events = await eventsRes.json();
          allUpdates = allUpdates.concat(
            events.map(e => ({
              id: `event-${e.id}`,
              title: e.title,
              date: e.date,
              type: 'event',
              icon: '📅'
            }))
          );
        }

        if (trainingsRes.ok) {
          const trainings = await trainingsRes.json();
          allUpdates = allUpdates.concat(
            trainings.map(t => ({
              id: `training-${t.id}`,
              title: t.title,
              date: t.date,
              type: 'training',
              icon: '🎓'
            }))
          );
        }

        setUpdates(allUpdates);
      } catch (error) {
        console.error('Failed to fetch updates:', error);
      }
    };

    fetchUpdates();
    // Poll for updates every 3 seconds
    const interval = setInterval(fetchUpdates, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
    <header style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: isScrolled ? '12px 18px' : '24px 18px',
      borderBottom: isScrolled ? '1px solid rgba(0, 212, 255, 0.3)' : '1px solid rgba(0, 0, 0, 0.08)',
      background: isScrolled 
        ? 'linear-gradient(90deg, rgba(0, 212, 255, 0.9), rgba(0, 191, 255, 0.9))'
        : '#ffffff',
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000
    }}>
      {/* Logo */}
      <a href="#" style={{
        fontSize: '24px',
        fontWeight: '800',
        color: isScrolled ? '#ffffff' : '#00d4ff',
        textDecoration: 'none',
        cursor: 'pointer'
      }}>
        Symprio
      </a>

      <nav style={{
        display: 'flex',
        alignItems: 'center',
        gap: '20px'
      }}>
        {/* Notifications Bell */}
        <div style={{ position: 'relative' }}>
          <button
            onClick={() => setShowUpdates(!showUpdates)}
            style={{
              background: 'transparent',
              border: 'none',
              fontSize: '18px',
              cursor: 'pointer',
              padding: '8px'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent';
            }}
          >
            🔔
            {updates.length > 0 && (
              <span style={{
                position: 'absolute',
                top: '4px',
                right: '4px',
                width: '8px',
                height: '8px',
                background: '#ef4444',
                borderRadius: '50%',
                boxShadow: '0 0 4px rgba(239, 68, 68, 0.8)'
              }}></span>
            )}
          </button>

          {showUpdates && updates.length > 0 && (
            <div style={{
              position: 'absolute',
              top: '40px',
              right: '0',
              background: '#1f2937',
              borderRadius: '8px',
              padding: '8px',
              minWidth: '300px',
              maxHeight: '400px',
              overflowY: 'auto',
              zIndex: 10,
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)'
            }}>
              {updates.map((update) => (
                <div key={update.id} style={{
                  display: 'flex',
                  gap: '8px',
                  padding: '8px',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'transparent';
                }}>
                  <div style={{ fontSize: '16px', marginTop: '2px' }}>{update.icon}</div>
                  <div style={{ flex: 1 }}>
                    <div style={{
                      fontSize: '13px',
                      fontWeight: '600',
                      color: '#ffffff',
                      marginBottom: '4px'
                    }}>
                      {update.title}
                    </div>
                    <div style={{
                      fontSize: '11px',
                      color: '#9ca3af'
                    }}>
                      {update.date}
                    </div>
                  </div>
                </div>
              ))}
              <div style={{
                padding: '8px',
                textAlign: 'center',
                fontSize: '12px',
                color: '#00d4ff',
                cursor: 'pointer',
                fontWeight: '600'
              }}>
                View All Updates
              </div>
            </div>
          )}
        </div>

        <a href="#rpa" style={{ 
          color: isScrolled ? '#ffffff' : '#1f2937', 
          textDecoration: 'none', 
          cursor: 'pointer',
          padding: '8px 12px',
          borderRadius: '4px'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = isScrolled ? 'rgba(255, 255, 255, 0.15)' : 'rgba(0, 212, 255, 0.08)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = 'transparent';
        }}>RPA</a>

        <a href="#industries" style={{ 
          color: isScrolled ? '#ffffff' : '#1f2937', 
          textDecoration: 'none', 
          cursor: 'pointer',
          padding: '8px 12px',
          borderRadius: '4px'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = isScrolled ? 'rgba(255, 255, 255, 0.15)' : 'rgba(0, 212, 255, 0.08)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = 'transparent';
        }}>Industries</a>

        <a href="#services" style={{ 
          color: isScrolled ? '#ffffff' : '#1f2937', 
          textDecoration: 'none', 
          cursor: 'pointer',
          padding: '8px 12px',
          borderRadius: '4px'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = isScrolled ? 'rgba(255, 255, 255, 0.15)' : 'rgba(0, 212, 255, 0.08)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = 'transparent';
        }}>Services</a>

        <a href="#contact" style={{ 
          color: isScrolled ? '#ffffff' : '#1f2937', 
          textDecoration: 'none', 
          cursor: 'pointer',
          padding: '8px 12px',
          borderRadius: '4px'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = isScrolled ? 'rgba(255, 255, 255, 0.15)' : 'rgba(0, 212, 255, 0.08)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = 'transparent';
        }}>Contact</a>

        {user && (
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            marginLeft: '12px',
            paddingLeft: '12px',
            borderLeft: isScrolled ? '1px solid rgba(255, 255, 255, 0.2)' : '1px solid rgba(0, 0, 0, 0.1)'
          }}>
            <span style={{
              color: isScrolled ? '#ffffff' : '#1f2937',
              fontSize: '13px',
              fontWeight: '500'
            }}>
              {user.name || user.email}
            </span>
            <button
              onClick={() => {
                logout();
                navigate('/admin');
              }}
              style={{
                background: 'rgba(239, 68, 68, 0.9)',
                color: '#ffffff',
                border: 'none',
                padding: '6px 12px',
                borderRadius: '4px',
                fontSize: '12px',
                fontWeight: '600',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(239, 68, 68, 1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(239, 68, 68, 0.9)';
              }}
            >
              Logout
            </button>
          </div>
        )}
      </nav>
    </header>
  </> 
  );
};

export default Navbar;


