import React from 'react';

const Stats = () => {
  const stats = [
    { number: '40+', label: 'Automation Programs', desc: 'From discovery to production, with governance built-in.' },
    { number: '15+', label: 'Regions Supported', desc: 'Follow the sun support for global operations teams.' },
    { number: '400+', label: 'Bots Deployed', desc: 'Attended & unattended bots orchestrated from a single pane.' },
    { number: '50+', label: 'Automation Experts', desc: 'Architects, developers and process consultants under one roof.' }
  ];

  return (
    <section style={{ maxWidth: '1200px', margin: '60px auto 0', padding: '80px 18px' }}>
      <div style={{ textAlign: 'center', marginBottom: '60px' }}>
        <h2 style={{
          fontSize: '44px',
          fontWeight: '800',
          color: '#0f172a',
          margin: '0 0 16px 0'
        }}>
          Our Track Record
        </h2>
        <p style={{
          fontSize: '16px',
          color: '#475569',
          maxWidth: '600px',
          margin: '0 auto',
          lineHeight: '1.6'
        }}>
          Building expertise and delivering results at scale across enterprise organizations.
        </p>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '24px'
      }}>
        {stats.map((stat, idx) => (
          <div
            key={idx}
            style={{
              padding: '40px 24px',
              background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(248, 250, 252, 0.95))',
              border: '1.5px solid rgba(0, 212, 255, 0.15)',
              borderRadius: '12px',
              textAlign: 'center',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = '0 12px 24px rgba(0, 212, 255, 0.1)';
              e.currentTarget.style.borderColor = 'rgba(0, 212, 255, 0.3)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = 'none';
              e.currentTarget.style.borderColor = 'rgba(0, 212, 255, 0.15)';
            }}
          >
            <div style={{
              fontSize: '44px',
              fontWeight: '800',
              color: '#00d4ff',
              marginBottom: '12px'
            }}>
              {stat.number}
            </div>
            <h3 style={{
              fontSize: '16px',
              fontWeight: '700',
              color: '#0f172a',
              margin: '0 0 8px 0'
            }}>
              {stat.label}
            </h3>
            <p style={{
              fontSize: '13px',
              color: '#64748b',
              margin: '0',
              lineHeight: '1.5'
            }}>
              {stat.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;


