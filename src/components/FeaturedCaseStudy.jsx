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
          backgroundColor: '#f0f4f8',
          borderRadius: '8px',
          overflow: 'hidden',
          minHeight: '300px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <img 
            src="/case-study.jpg" 
            alt="Case Study" 
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover'
            }}
          />
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
