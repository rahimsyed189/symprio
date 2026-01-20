import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function SymprioStats() {
  React.useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-out',
      once: false,
      offset: 100
    });
  }, []);

  const stats = [
    { number: '45', label: 'Customers', description: 'Leading organizations including Meta, Amway, JPA, HRDF and many others trust Symprio for their digital transformation initiatives.' },
    { number: '15', label: 'Countries Serviced', description: 'Serving customers across the Indo-Pacific region including Silicon Valley, Singapore, Malaysia, and India with global expertise.' },
    { number: '400', label: 'Robots Deployed', description: 'Successfully deployed over 400 robotic process automation solutions, delivering end-to-end RPA services from assessment to delivery.' },
    { number: '50', label: 'Active Consultants', description: 'Expert RPA architects and developers providing high-level design, validation, and feedback for comprehensive automation solutions.' },
  ];

  return (
    <section style={{
      padding: '35px 20px',
      background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
      borderRadius: '0px',
      margin: '30px 20px',
      borderTop: '3px solid #ffffff'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '20px'
        }}>
          {stats.map((stat, idx) => (
            <div 
              key={idx} 
              data-aos="fade-up" 
              data-aos-delay={idx * 120} 
              data-aos-duration="1500"
              data-aos-offset="100"
              data-aos-once="false"
              style={{
                background: 'rgba(15, 140, 200, 0.12)',
                backdropFilter: 'blur(10px)',
                border: '1.5px solid rgba(15, 140, 200, 0.25)',
                borderRadius: '0px',
                padding: '25px 20px',
                textAlign: 'center',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(15, 140, 200, 0.25)';
                e.currentTarget.style.borderColor = 'rgba(15, 140, 200, 0.5)';
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 10px 40px rgba(15, 140, 200, 0.25)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(15, 140, 200, 0.12)';
                e.currentTarget.style.borderColor = 'rgba(15, 140, 200, 0.25)';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <h3 style={{
                fontSize: '56px',
                fontWeight: '700',
                color: '#19b5fe',
                margin: '0 0 10px 0'
              }}>
                {stat.number}
              </h3>
              <span style={{
                fontSize: '16px',
                fontWeight: '600',
                color: '#19b5fe',
                marginRight: '4px'
              }}>
                +
              </span>
              <h6 style={{
                fontSize: '16px',
                fontWeight: '700',
                color: '#ffffff',
                textTransform: 'uppercase',
                margin: '15px 0 15px 0',
                letterSpacing: '1px'
              }}>
                {stat.label}
              </h6>
              <p style={{
                fontSize: '14px',
                color: '#cbd5e1',
                margin: 0,
                lineHeight: '1.6'
              }}>
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


