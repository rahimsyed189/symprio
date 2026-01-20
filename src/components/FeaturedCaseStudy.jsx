import React from 'react';

export default function FeaturedCaseStudy() {
  return (
    <section style={{
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '80px 20px',
      backgroundColor: '#fff'
    }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '50px',
        alignItems: 'center'
      }}>
        {/* Image/Content Side */}
        <div data-aos="fade-right" data-aos-duration="800" data-aos-offset="50" style={{
          background: 'linear-gradient(135deg, #19b5fe, #0f8cc8)',
          borderRadius: '0px',
          overflow: 'hidden',
          minHeight: '500px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '60px 40px',
          position: 'relative'
        }}>
          {/* Briefcase Icon */}
          <svg viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="1.5" style={{
            width: '150px',
            height: '150px',
            opacity: 0.95,
            flexShrink: 0
          }}>
            <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
            <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/>
            <line x1="9" y1="12" x2="9" y2="17"/>
            <line x1="15" y1="12" x2="15" y2="17"/>
          </svg>

          <div style={{
            fontSize: '48px',
            fontWeight: '700',
            color: '#ffffff',
            writingMode: 'vertical-rl',
            textOrientation: 'mixed',
            letterSpacing: '12px',
            lineHeight: '1.1',
            fontFamily: 'Georgia, serif',
            flexShrink: 0,
            marginRight: '0'
          }}>
            Case Study
          </div>
        </div>

        {/* Text Content Side */}
        <div data-aos="fade-left" data-aos-duration="800" data-aos-delay="100" data-aos-offset="50">
          <h2 style={{
            fontSize: '32px',
            fontWeight: '700',
            color: '#1f2937',
            margin: '0 0 20px 0'
          }}>
            Success Story: RPA Implementation
          </h2>
          
          <p style={{
            fontSize: '16px',
            color: '#6b7280',
            lineHeight: '1.8',
            margin: '0 0 30px 0'
          }}>
            A leading financial services organization struggled with manual invoice processing that consumed 200+ hours monthly. Through our end-to-end RPA implementation, we deployed intelligent automation that transformed their operations.
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
            gap: '30px',
            margin: '40px 0'
          }}>
            <div>
              <h3 style={{
                fontSize: '28px',
                fontWeight: '700',
                color: '#3b82f6',
                margin: '0'
              }}>
                60%
              </h3>
              <p style={{
                fontSize: '14px',
                color: '#6b7280',
                margin: '10px 0 0 0'
              }}>
                Processing Time Reduction
              </p>
            </div>
            <div>
              <h3 style={{
                fontSize: '28px',
                fontWeight: '700',
                color: '#3b82f6',
                margin: '0'
              }}>
                15
              </h3>
              <p style={{
                fontSize: '14px',
                color: '#6b7280',
                margin: '10px 0 0 0'
              }}>
                Bots Deployed
              </p>
            </div>
            <div>
              <h3 style={{
                fontSize: '28px',
                fontWeight: '700',
                color: '#3b82f6',
                margin: '0'
              }}>
                3M
              </h3>
              <p style={{
                fontSize: '14px',
                color: '#6b7280',
                margin: '10px 0 0 0'
              }}>
                Annual Savings
              </p>
            </div>
          </div>

          <p style={{
            fontSize: '14px',
            color: '#6b7280',
            lineHeight: '1.8',
            margin: '30px 0 0 0'
          }}>
            The organization now processes invoices in 24 hours with 99.8% accuracy, freeing up their team to focus on strategic finance initiatives.
          </p>

          <button style={{
            marginTop: '30px',
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
          onMouseEnter={(e) => {
            e.target.style.background = '#2563eb';
            e.target.style.transform = 'translateY(-3px)';
            e.target.style.boxShadow = '0 10px 20px rgba(59, 130, 246, 0.3)';
          }}
          onMouseLeave={(e) => {
            e.target.style.background = '#3b82f6';
            e.target.style.transform = 'translateY(0)';
            e.target.style.boxShadow = 'none';
          }}
          >
            Read Full Case Study
          </button>
        </div>
      </div>
    </section>
  );
}
