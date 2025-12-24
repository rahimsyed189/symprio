import React from 'react';

const CTA = () => {
  return (
    <section style={{
      maxWidth: '1200px',
      margin: '60px auto 0',
      padding: '100px 18px',
      borderTop: '1px solid rgba(0, 212, 255, 0.2)'
    }}>
      <div style={{ textAlign: 'center', marginBottom: '50px' }}>
        <h2 style={{
          fontSize: '44px',
          fontWeight: '800',
          marginBottom: '16px',
          color: '#0f172a',
          lineHeight: '1.2'
        }}>
          Ready to Transform Your Business?
        </h2>
        <p style={{
          fontSize: '16px',
          color: '#475569',
          maxWidth: '600px',
          margin: '0 auto',
          lineHeight: '1.6'
        }}>
          Get in touch with our RPA experts today to explore how automation can drive growth and efficiency.
        </p>
      </div>

      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '16px',
        flexWrap: 'wrap'
      }}>
        <button style={{
          fontSize: '14px',
          padding: '14px 32px',
          borderRadius: '8px',
          border: 'none',
          background: 'linear-gradient(135deg, #00d4ff, #0891b2)',
          color: '#ffffff',
          cursor: 'pointer',
          fontWeight: '700',
          transition: 'all 0.3s ease'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.boxShadow = '0 12px 32px rgba(0, 212, 255, 0.4)';
          e.currentTarget.style.transform = 'translateY(-2px)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.boxShadow = 'none';
          e.currentTarget.style.transform = 'translateY(0)';
        }}
        >
          Schedule a Demo →
        </button>
        <button style={{
          fontSize: '14px',
          padding: '14px 32px',
          borderRadius: '8px',
          border: '2px solid rgba(0, 212, 255, 0.3)',
          background: 'rgba(0, 212, 255, 0.05)',
          color: '#0891b2',
          cursor: 'pointer',
          fontWeight: '700',
          transition: 'all 0.3s ease'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = 'rgba(0, 212, 255, 0.15)';
          e.currentTarget.style.borderColor = 'rgba(0, 212, 255, 0.6)';
          e.currentTarget.style.boxShadow = '0 8px 20px rgba(0, 212, 255, 0.2)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = 'rgba(0, 212, 255, 0.08)';
          e.currentTarget.style.borderColor = 'rgba(0, 212, 255, 0.4)';
          e.currentTarget.style.boxShadow = 'none';
        }}
        >
          Contact Us
        </button>
      </div>
    </section>
  );
};

export default CTA;




