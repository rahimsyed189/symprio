import React from 'react';

export default function SymprioHero() {
  return (
    <div style={{
      position: 'relative',
      width: '100%',
      minHeight: '420px',
      background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/hero-banner.png')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px 20px 80px',
      textAlign: 'center'
    }}>
      <div style={{ maxWidth: '800px', color: '#fff' }}>
        <h6 style={{
          fontSize: '14px',
          fontWeight: '600',
          color: '#3b82f6',
          letterSpacing: '1.5px',
          textTransform: 'uppercase',
          marginBottom: '20px',
          margin: '0 0 20px 0'
        }}>
          Automate Your Business Processes
        </h6>
        <h1 style={{
          fontSize: '56px',
          fontWeight: '700',
          lineHeight: '1.2',
          marginBottom: '20px',
          margin: '0 0 20px 0',
          color: '#fff'
        }}>
          Robotic Process Automation
        </h1>
        <p style={{
          fontSize: '16px',
          color: '#e5e7eb',
          lineHeight: '1.6',
          marginBottom: '30px',
          margin: '0 0 30px 0'
        }}>
          Transform your business with intelligent automation solutions. Streamline workflows, reduce costs, and increase efficiency with cutting-edge RPA technology.
        </p>
        <div style={{
          display: 'flex',
          gap: '20px',
          justifyContent: 'center',
          alignItems: 'center',
          flexWrap: 'wrap'
        }}>
          <button style={{
            background: '#3b82f6',
            color: '#fff',
            border: 'none',
            padding: '12px 30px',
            fontSize: '14px',
            fontWeight: '600',
            borderRadius: '4px',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            textTransform: 'uppercase',
            letterSpacing: '0.5px'
          }}
          onMouseEnter={(e) => e.target.style.background = '#2563eb'}
          onMouseLeave={(e) => e.target.style.background = '#3b82f6'}
          >
            Make Appointment
          </button>
          <a href="https://www.youtube.com/watch?v=4lnpcpZY5PI" style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '10px',
            color: '#fff',
            textDecoration: 'none',
            fontSize: '14px',
            fontWeight: '600',
            cursor: 'pointer',
            transition: 'color 0.3s ease'
          }}
          onMouseEnter={(e) => e.target.style.color = '#3b82f6'}
          onMouseLeave={(e) => e.target.style.color = '#fff'}
          >
            <span style={{
              width: '50px',
              height: '50px',
              background: 'rgba(255, 255, 255, 0.2)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '2px solid #3b82f6'
            }}>
              ▶
            </span>
            Watch Video
          </a>
        </div>
      </div>
    </div>
  );
}


