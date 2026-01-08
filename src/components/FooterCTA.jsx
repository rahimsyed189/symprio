import React from 'react';

export default function FooterCTA() {
  return (
    <section style={{
      background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
      padding: '80px 20px',
      textAlign: 'center',
      color: '#fff'
    }}>
      <div style={{
        maxWidth: '800px',
        margin: '0 auto'
      }}>
        <h2 style={{
          fontSize: '40px',
          fontWeight: '700',
          margin: '0 0 20px 0',
          lineHeight: '1.3'
        }}>
          Ready to Transform Your Business?
        </h2>

        <p style={{
          fontSize: '18px',
          color: '#e5e7eb',
          lineHeight: '1.8',
          margin: '0 0 40px 0'
        }}>
          Let our team of experts guide you through your digital transformation journey. Schedule a consultation today and discover how Symprio can unlock new opportunities for growth and efficiency.
        </p>

        <div style={{
          display: 'flex',
          gap: '20px',
          justifyContent: 'center',
          alignItems: 'center',
          flexWrap: 'wrap'
        }}>
          <button style={{
            background: '#fff',
            color: '#3b82f6',
            border: 'none',
            padding: '14px 40px',
            fontSize: '16px',
            fontWeight: '600',
            borderRadius: '4px',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            textTransform: 'uppercase',
            letterSpacing: '0.5px',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)'
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = 'translateY(-3px)';
            e.target.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.2)';
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = 'translateY(0)';
            e.target.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
          }}
          >
            Schedule a Consultation
          </button>
          
          <button style={{
            background: 'transparent',
            color: '#fff',
            border: '2px solid #fff',
            padding: '12px 38px',
            fontSize: '16px',
            fontWeight: '600',
            borderRadius: '4px',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            textTransform: 'uppercase',
            letterSpacing: '0.5px'
          }}
          onMouseEnter={(e) => {
            e.target.style.background = '#fff';
            e.target.style.color = '#3b82f6';
            e.target.style.transform = 'translateY(-3px)';
          }}
          onMouseLeave={(e) => {
            e.target.style.background = 'transparent';
            e.target.style.color = '#fff';
            e.target.style.transform = 'translateY(0)';
          }}
          >
            Contact Us
          </button>
        </div>

        <p style={{
          fontSize: '14px',
          color: '#e5e7eb',
          margin: '40px 0 0 0',
          opacity: '0.9'
        }}>
          Have questions? Email us at <a href="mailto:hello@symprio.com" style={{ color: '#fff', textDecoration: 'underline' }}>hello@symprio.com</a> or call us at <a href="tel:+1234567890" style={{ color: '#fff', textDecoration: 'underline' }}>+1 (234) 567-890</a>
        </p>
      </div>
    </section>
  );
}
