import React from 'react';

export default function TransformCTA() {
  return (
    <section style={{
      background: 'linear-gradient(135deg, #1e5eb8 0%, #3b82f6 100%)',
      color: '#fff',
      padding: '80px 20px',
      textAlign: 'center',
      fontFamily: "'Work Sans', sans-serif"
    }}>
      <div style={{
        maxWidth: '800px',
        margin: '0 auto'
      }}>
        <h2 style={{
          fontSize: '42px',
          fontWeight: '700',
          marginBottom: '24px',
          fontFamily: "'Lora', serif"
        }}>
          Ready to Transform Your Business?
        </h2>
        
        <p style={{
          fontSize: '18px',
          lineHeight: '1.8',
          marginBottom: '40px',
          opacity: '0.95'
        }}>
          Let our team of experts guide you through your digital transformation journey. Schedule a consultation today and discover how Symprio can unlock new opportunities for growth and efficiency.
        </p>

        <div style={{
          display: 'flex',
          gap: '16px',
          justifyContent: 'center',
          flexWrap: 'wrap',
          marginBottom: '40px'
        }}>
          <button style={{
            background: '#fff',
            color: '#1e5eb8',
            border: 'none',
            padding: '14px 32px',
            borderRadius: '6px',
            fontSize: '16px',
            fontWeight: '600',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            fontFamily: "'Work Sans', sans-serif"
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = 'translateY(-2px)';
            e.target.style.boxShadow = '0 8px 16px rgba(0,0,0,0.2)';
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = 'translateY(0)';
            e.target.style.boxShadow = 'none';
          }}>
            Schedule a Consultation
          </button>
          
          <button style={{
            background: 'transparent',
            color: '#fff',
            border: '2px solid #fff',
            padding: '12px 32px',
            borderRadius: '6px',
            fontSize: '16px',
            fontWeight: '600',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            fontFamily: "'Work Sans', sans-serif"
          }}
          onMouseEnter={(e) => {
            e.target.style.background = '#fff';
            e.target.style.color = '#1e5eb8';
            e.target.style.transform = 'translateY(-2px)';
            e.target.style.boxShadow = '0 8px 16px rgba(0,0,0,0.2)';
          }}
          onMouseLeave={(e) => {
            e.target.style.background = 'transparent';
            e.target.style.color = '#fff';
            e.target.style.transform = 'translateY(0)';
            e.target.style.boxShadow = 'none';
          }}>
            Contact Us
          </button>
        </div>

        <div style={{
          fontSize: '15px',
          lineHeight: '1.8',
          opacity: '0.9'
        }}>
          <p style={{ marginBottom: '8px' }}>Have questions? Email us at <strong>hello@symprio.com</strong> or call us at <strong>+1 (234) 567-890</strong></p>
        </div>
      </div>
    </section>
  );
}
