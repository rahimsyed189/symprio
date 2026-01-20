import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function SymprioNavbar() {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    { name: 'Digital Transformation', url: '/digital-transformation' },
    { name: 'Robotic Process Automation', url: 'https://www.symprio.com/robotic-process-automation/' },
    { name: 'ERP Practice (Oracle)', url: 'https://www.symprio.com/erp-practice-oracle/' },
    { name: 'Chatbots', url: '/chatbots' },
    { name: 'Custom Development', url: 'https://www.symprio.com/custom-development/' },
    { name: 'Digital Workforce', url: 'https://www.symprio.com/digital-workforce/' }
  ];

  return (
    <>
      {/* Top Info Bar - Symprio Design */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
        padding: '20px 60px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottom: '3px solid #ffffff',
        zIndex: 10001,
        transform: scrolled ? 'translateY(-80px)' : 'translateY(0)',
        transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        height: '80px'
      }}>
        {/* Left: Logo */}
        <div onClick={() => navigate('/')} style={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          cursor: 'pointer',
          fontSize: '0'
        }}>
          <img 
            src="/symprio-logo.png" 
            alt="Symprio Logo" 
            style={{
              height: '45px',
              width: 'auto',
              objectFit: 'contain',
              filter: 'brightness(0) invert(1)'
            }}
          />
        </div>

        {/* Center: Contact Info */}
        <div style={{
          display: 'flex',
          gap: '35px',
          alignItems: 'center'
        }}>
          {/* Phone with WhatsApp */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px'
          }}>
            <img 
              src="/whatsapp.png" 
              alt="WhatsApp"
              style={{
                width: '24px',
                height: '24px',
                objectFit: 'contain'
              }}
            />
            <div style={{ fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif' }}>
              <div style={{
                fontSize: '13px',
                fontWeight: '600',
                color: '#ffffff',
                letterSpacing: '0.3px'
              }}>
                +60 13 880 2574
              </div>
              <div style={{
                fontSize: '11px',
                color: '#25D366',
                fontWeight: '500',
                letterSpacing: '0.2px'
              }}>
                WhatsApp Available
              </div>
            </div>
          </div>

          {/* Divider */}
          <div style={{
            width: '1.5px',
            height: '50px',
            background: 'linear-gradient(to bottom, transparent, rgba(255,255,255,0.3), transparent)',
            opacity: 0.8
          }}></div>

          {/* Address */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px'
          }}>
            <div style={{
              width: '24px',
              height: '24px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '20px',
              fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif'
            }}>
              📍
            </div>
            <div style={{ fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif' }}>
              <div style={{
                fontSize: '13px',
                fontWeight: '600',
                color: '#ffffff',
                letterSpacing: '0.3px'
              }}>
                Symprio Sdn Bhd, Tower B, 8-05
              </div>
              <div style={{
                fontSize: '11px',
                color: '#cbd5e1',
                fontWeight: '500',
                letterSpacing: '0.2px'
              }}>
                Kuala Lumpur, Malaysia
              </div>
            </div>
          </div>

          {/* Divider */}
          <div style={{
            width: '1.5px',
            height: '50px',
            background: 'linear-gradient(to bottom, transparent, #9ca3af, transparent)',
            opacity: 0.8
          }}></div>

          {/* Email */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px'
          }}>
            <div style={{
              width: '24px',
              height: '24px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '20px',
              fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif'
            }}>
              ✉️
            </div>
            <div style={{ fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif' }}>
              <div style={{
                fontSize: '13px',
                fontWeight: '600',
                color: '#ffffff',
                letterSpacing: '0.3px'
              }}>
                contact@symprio.com
              </div>
              <div style={{
                fontSize: '11px',
                color: '#cbd5e1',
                fontWeight: '500',
                letterSpacing: '0.2px'
              }}>
                Email Support
              </div>
            </div>
          </div>
        </div>

        {/* Right: Social Icons */}
        <div style={{
          display: 'flex',
          gap: '12px',
          alignItems: 'center'
        }}>
          <a href="#" style={{
            width: '28px',
            height: '28px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#3b82f6',
            fontSize: '16px',
            cursor: 'pointer'
          }}>
            f
          </a>
          <a href="#" style={{
            width: '28px',
            height: '28px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#3b82f6',
            fontSize: '16px',
            cursor: 'pointer'
          }}>
            𝕏
          </a>
        </div>
      </div>

      {/* Main Navigation Bar - Blue Background */}
      <nav style={{
        position: 'fixed',
        top: scrolled ? '0px' : '80px',
        left: 0,
        right: 0,
        height: '58px',
        background: 'linear-gradient(90deg, rgba(15, 140, 200, 0.95) 0%, rgba(25, 181, 254, 0.9) 100%)',
        zIndex: 10001,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft: '60px',
        paddingRight: '60px',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
        transition: 'top 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
      }}>
        {/* Navigation Links */}
        <div style={{
          display: 'flex',
          gap: '35px',
          alignItems: 'center',
          position: 'relative'
        }}>
          <a href="/" onClick={(e) => { e.preventDefault(); navigate('/'); }} style={{
            fontSize: '15px',
            fontWeight: '600',
            color: '#fff',
            textDecoration: 'none',
            transition: 'color 0.3s ease',
            cursor: 'pointer',
            fontFamily: 'Segoe UI, Inter, sans-serif',
            letterSpacing: '0.3px'
          }}
          onMouseEnter={(e) => e.target.style.color = '#bfdbfe'}
          onMouseLeave={(e) => e.target.style.color = '#fff'}
          >
            Home
          </a>

          <a href="/services" onClick={(e) => { e.preventDefault(); navigate('/services'); }} style={{
            fontSize: '15px',
            fontWeight: '600',
            color: '#fff',
            textDecoration: 'none',
            transition: 'color 0.3s ease',
            cursor: 'pointer',
            fontFamily: 'Segoe UI, Inter, sans-serif',
            letterSpacing: '0.3px'
          }}
          onMouseEnter={(e) => e.target.style.color = '#bfdbfe'}
          onMouseLeave={(e) => e.target.style.color = '#fff'}
          >
            Services
          </a>

          <a href="https://symprioideas.medium.com/" target="_blank" rel="noopener noreferrer" style={{
            fontSize: '15px',
            fontWeight: '600',
            color: '#fff',
            textDecoration: 'none',
            transition: 'color 0.3s ease',
            cursor: 'pointer',
            fontFamily: 'Segoe UI, Inter, sans-serif',
            letterSpacing: '0.3px'
          }}
          onMouseEnter={(e) => e.target.style.color = '#bfdbfe'}
          onMouseLeave={(e) => e.target.style.color = '#fff'}
          >
            Blog
          </a>

          <a href="/about" onClick={(e) => { e.preventDefault(); navigate('/about'); }} style={{
            fontSize: '15px',
            fontWeight: '600',
            color: '#fff',
            textDecoration: 'none',
            transition: 'color 0.3s ease',
            cursor: 'pointer',
            fontFamily: 'Segoe UI, Inter, sans-serif',
            letterSpacing: '0.3px'
          }}
          onMouseEnter={(e) => e.target.style.color = '#bfdbfe'}
          onMouseLeave={(e) => e.target.style.color = '#fff'}
          >
            About
          </a>
        </div>

        {/* Right Side Auth */}
        {!user ? (
          <button onClick={() => navigate('/admin')} style={{
            background: '#fff',
            color: 'rgba(25, 181, 254, 1)',
            border: 'none',
            padding: '10px 24px',
            fontSize: '13px',
            fontWeight: '700',
            borderRadius: '3px',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            fontFamily: 'Segoe UI, Inter, sans-serif',
            letterSpacing: '0.3px'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = '#bfdbfe';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = '#fff';
          }}
          >
            Login
          </button>
        ) : (
          <div style={{ display: 'flex', gap: '10px' }}>
            <button onClick={() => {
              logout();
              navigate('/');
            }} style={{
              background: '#ef4444',
              color: '#fff',
              border: 'none',
              padding: '10px 18px',
              fontSize: '13px',
              fontWeight: '700',
              borderRadius: '3px',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => e.currentTarget.style.background = '#dc2626'}
            onMouseLeave={(e) => e.currentTarget.style.background = '#ef4444'}
            >
              Logout
            </button>
          </div>
        )}
      </nav>

      {/* Spacer for fixed navbar */}
      <div style={{ height: '138px' }} />
    </>
  );
}


