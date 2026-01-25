import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function ReadyToStartCTA() {
  const navigate = useNavigate();
  return (
    <section style={{
      background: 'linear-gradient(135deg, #87CEEB 0%, #5B9FBD 100%)',
      color: '#fff',
      padding: '80px 40px',
      textAlign: 'center',
      fontFamily: "'Work Sans', sans-serif",
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Decorative background elements */}
      <div style={{
        position: 'absolute',
        top: '-100px',
        right: '-50px',
        width: '300px',
        height: '300px',
        borderRadius: '50%',
        background: 'rgba(102, 217, 255, 0.1)',
        pointerEvents: 'none'
      }} />
      <div style={{
        position: 'absolute',
        bottom: '-100px',
        left: '-50px',
        width: '250px',
        height: '250px',
        borderRadius: '50%',
        background: 'rgba(139, 92, 246, 0.1)',
        pointerEvents: 'none'
      }} />

      <div style={{
        maxWidth: '800px',
        margin: '0 auto',
        position: 'relative',
        zIndex: 1
      }}>
        <h2 
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-offset="50"
          style={{
            fontSize: '42px',
            fontWeight: '800',
            marginBottom: '20px',
            lineHeight: '1.3',
            fontFamily: '"Georgia", serif'
          }}>
          Ready to Transform Your Enterprise?
        </h2>
        
        <p 
          data-aos="fade-up"
          data-aos-delay="100"
          data-aos-duration="800"
          data-aos-offset="50"
          style={{
            fontSize: '18px',
            lineHeight: '1.6',
            marginBottom: '40px',
            opacity: 0.95,
            maxWidth: '700px',
            margin: '0 auto 40px'
          }}>
          Let us help you navigate your digital transformation journey with proven strategies and innovative solutions
        </p>

        <div 
          style={{
            display: 'flex',
            gap: '20px',
            justifyContent: 'center',
            flexWrap: 'wrap',
            marginBottom: '20px'
          }}>
          <button 
            onClick={() => navigate('/enquiry')}
            data-aos="fade-up"
            data-aos-delay="150"
            data-aos-duration="800"
            data-aos-offset="50"
            style={{
              background: '#fff',
              color: '#0891b2',
              border: 'none',
              padding: '16px 48px',
              borderRadius: '8px',
              fontSize: '16px',
              fontWeight: '700',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = '0 8px 30px rgba(0,0,0,0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.1)';
            }}>
            Get Started Today
          </button>
          
          <button 
            onClick={() => navigate('/enquiry')}
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="800"
            data-aos-offset="50"
            style={{
              background: 'transparent',
              color: '#fff',
              border: '2px solid #fff',
              padding: '16px 48px',
              borderRadius: '8px',
              fontSize: '16px',
              fontWeight: '700',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
              e.currentTarget.style.transform = 'translateY(-4px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.transform = 'translateY(0)';
            }}>
            Schedule a Consultation
          </button>
        </div>
      </div>
    </section>
  );
}
