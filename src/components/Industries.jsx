import React from 'react';

const Industries = () => {
  const industries = [
    { icon: '🏦', name: 'Banking & Finance' },
    { icon: '🏛️', name: 'Public Sector' },
    { icon: '🚚', name: 'Logistics' },
    { icon: '🎬', name: 'Media & Entertainment' },
    { icon: '🏭', name: 'Manufacturing' },
    { icon: '⚡', name: 'Energy & Utilities' },
    { icon: '🏥', name: 'Healthcare' },
    { icon: '💻', name: 'High Tech' },
    { icon: '📡', name: 'Telecommunications' },
    { icon: '🛒', name: 'Retail & Insurance' }
  ];

  return (
    <section id="industries" style={{ maxWidth: '1200px', margin: '60px auto 0', padding: '80px 18px' }}>
      <div style={{ textAlign: 'center', marginBottom: '60px' }}>
        <h2 style={{
          fontSize: '44px',
          fontWeight: '800',
          color: '#0f172a',
          margin: '0 0 16px 0'
        }}>
          Industries We Serve
        </h2>
        <p style={{
          fontSize: '16px',
          color: '#475569',
          maxWidth: '600px',
          margin: '0 auto',
          lineHeight: '1.6'
        }}>
          Delivering proven RPA solutions across diverse sectors and business models
        </p>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
        gap: '20px'
      }}>
        {industries.map((industry, idx) => (
          <div
            key={idx}
            style={{
              padding: '32px 24px',
              textAlign: 'center',
              background: 'linear-gradient(135deg, rgba(0, 212, 255, 0.08), rgba(15, 23, 42, 0.5))',
              border: '1px solid rgba(0, 212, 255, 0.2)',
              borderRadius: '12px',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'linear-gradient(135deg, rgba(0, 212, 255, 0.15), rgba(0, 191, 255, 0.08))';
              e.currentTarget.style.boxShadow = '0 12px 24px rgba(0, 212, 255, 0.2)';
              e.currentTarget.style.borderColor = 'rgba(0, 212, 255, 0.4)';
              e.currentTarget.style.transform = 'translateY(-4px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'linear-gradient(135deg, rgba(0, 212, 255, 0.08), rgba(15, 23, 42, 0.5))';
              e.currentTarget.style.boxShadow = 'none';
              e.currentTarget.style.borderColor = 'rgba(0, 212, 255, 0.2)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <div style={{ fontSize: '40px', marginBottom: '12px' }}>
              {industry.icon}
            </div>
            <div style={{
              fontSize: '14px',
              fontWeight: '700',
              color: '#0f172a'
            }}>
              {industry.name}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Industries;


