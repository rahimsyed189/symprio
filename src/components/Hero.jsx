import React from 'react';

export default function Hero() {
  return (
    <div style={{
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '100px 20px 80px',
      textAlign: 'center',
      marginTop: '100px'
    }}>
      <div style={{ marginBottom: '30px' }}>
        <p style={{
          fontSize: '14px',
          fontWeight: '600',
          color: '#00d4ff',
          textTransform: 'uppercase',
          letterSpacing: '2px',
          margin: '0 0 16px 0'
        }}>
          Welcome to Symprio
        </p>
        <h1 style={{
          fontSize: '48px',
          fontWeight: '700',
          color: '#1a1a1a',
          margin: '0 0 20px 0',
          lineHeight: '1.2'
        }}>
          Better Automation & Best Ideas
        </h1>
        <p style={{
          fontSize: '16px',
          color: '#666666',
          maxWidth: '600px',
          margin: '0 auto 30px',
          lineHeight: '1.6'
        }}>
          Transform your business with cutting-edge RPA solutions, expert consulting, and innovative automation strategies tailored to your needs.
        </p>
      </div>

      <div style={{
        display: 'flex',
        gap: '16px',
        justifyContent: 'center',
        marginBottom: '40px'
      }}>
        <button style={{
          padding: '12px 30px',
          background: '#00d4ff',
          color: '#ffffff',
          border: 'none',
          borderRadius: '5px',
          fontSize: '14px',
          fontWeight: '600',
          cursor: 'pointer',
          transition: 'all 0.3s ease'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = '#3b82f6';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = '#00d4ff';
        }}>
          Get Started
        </button>
        <button style={{
          padding: '12px 30px',
          background: 'transparent',
          color: '#00d4ff',
          border: '2px solid #00d4ff',
          borderRadius: '5px',
          fontSize: '14px',
          fontWeight: '600',
          cursor: 'pointer',
          transition: 'all 0.3s ease'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = '#f0f9ff';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = 'transparent';
        }}>
          Learn More
        </button>
      </div>

      <div style={{
        background: '#f8f8f8',
        padding: '60px 40px',
        borderRadius: '10px',
        marginTop: '60px'
      }}>
        <div style={{
          maxWidth: '200px',
          height: '100px',
          background: '#e0e0e0',
          borderRadius: '8px',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#999999',
          fontSize: '14px'
        }}>
          Symprio Logo
        </div>
      </div>
    </div>
  );
}


