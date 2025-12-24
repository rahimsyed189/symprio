import React from 'react';

const Stats = () => {
  const stats = [
    { number: '40+', label: 'Automation Programs', desc: 'From discovery to production, with governance built-in.' },
    { number: '15+', label: 'Regions Supported', desc: 'Follow the sun support for global operations teams.' },
    { number: '400+', label: 'Bots Deployed', desc: 'Attended & unattended bots orchestrated from a single pane.' },
    { number: '50+', label: 'Automation Experts', desc: 'Architects, developers and process consultants under one roof.' }
  ];

  return (
    <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '80px 20px' }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '40px',
        textAlign: 'center'
      }}>
        {stats.map((stat, idx) => (
          <div key={idx}>
            <h2 style={{
              fontSize: '42px',
              fontWeight: '700',
              color: '#00d4ff',
              margin: '0 0 10px 0'
            }}>
              {stat.number}
            </h2>
            <h3 style={{
              fontSize: '18px',
              fontWeight: '600',
              color: '#1a1a1a',
              margin: '0 0 8px 0'
            }}>
              {stat.label}
            </h3>
            <p style={{
              fontSize: '14px',
              color: '#666666',
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


