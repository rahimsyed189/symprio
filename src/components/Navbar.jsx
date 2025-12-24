import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '16px 40px',
      background: isScrolled ? '#f8f8f8' : '#ffffff',
      borderBottom: isScrolled ? '1px solid #e0e0e0' : 'none',
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      transition: 'all 0.3s ease'
    }}>
      {/* Logo */}
      <a href="/" style={{
        fontSize: '24px',
        fontWeight: '700',
        color: '#00d4ff',
        textDecoration: 'none',
        cursor: 'pointer'
      }}>
        Symprio
      </a>

      {/* Navigation Links */}
      <nav style={{
        display: 'flex',
        gap: '40px',
        alignItems: 'center'
      }}>
        <a href="#" style={{
          fontSize: '14px',
          color: '#333333',
          textDecoration: 'none',
          fontWeight: '500',
          transition: 'color 0.3s ease',
          cursor: 'pointer'
        }}
        onMouseEnter={(e) => e.currentTarget.style.color = '#00d4ff'}
        onMouseLeave={(e) => e.currentTarget.style.color = '#333333'}>
          Services
        </a>
        <a href="#" style={{
          fontSize: '14px',
          color: '#333333',
          textDecoration: 'none',
          fontWeight: '500',
          transition: 'color 0.3s ease',
          cursor: 'pointer'
        }}
        onMouseEnter={(e) => e.currentTarget.style.color = '#00d4ff'}
        onMouseLeave={(e) => e.currentTarget.style.color = '#333333'}>
          About
        </a>
        <a href="#" style={{
          fontSize: '14px',
          color: '#333333',
          textDecoration: 'none',
          fontWeight: '500',
          transition: 'color 0.3s ease',
          cursor: 'pointer'
        }}
        onMouseEnter={(e) => e.currentTarget.style.color = '#00d4ff'}
        onMouseLeave={(e) => e.currentTarget.style.color = '#333333'}>
          Contact
        </a>
      </nav>

      {/* Right Side */}
      <div style={{
        display: 'flex',
        gap: '16px',
        alignItems: 'center'
      }}>
        {user ? (
          <>
            <button
              onClick={() => navigate('/admin')}
              style={{
                padding: '8px 16px',
                background: 'transparent',
                color: '#00d4ff',
                border: '1px solid #00d4ff',
                borderRadius: '4px',
                fontSize: '13px',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#00d4ff';
                e.currentTarget.style.color = '#ffffff';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.color = '#00d4ff';
              }}
            >
              Dashboard
            </button>
            <button
              onClick={() => {
                logout();
                navigate('/');
              }}
              style={{
                padding: '8px 16px',
                background: '#00d4ff',
                color: '#ffffff',
                border: 'none',
                borderRadius: '4px',
                fontSize: '13px',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = '#3b82f6'}
              onMouseLeave={(e) => e.currentTarget.style.background = '#00d4ff'}
            >
              Logout
            </button>
          </>
        ) : (
          <button
            onClick={() => navigate('/admin')}
            style={{
              padding: '10px 24px',
              background: '#00d4ff',
              color: '#ffffff',
              border: 'none',
              borderRadius: '4px',
              fontSize: '14px',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => e.currentTarget.style.background = '#3b82f6'}
            onMouseLeave={(e) => e.currentTarget.style.background = '#00d4ff'}
          >
            Login
          </button>
        )}
      </div>
    </header>
  );
};

export default Navbar;




