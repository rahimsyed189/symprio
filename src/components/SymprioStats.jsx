import React from 'react';

export default function SymprioStats() {
  const stats = [
    { number: '45', label: 'Customers', description: 'Leading organizations including Meta, Amway, JPA, HRDF and many others trust Symprio for their digital transformation initiatives.' },
    { number: '15', label: 'Countries Serviced', description: 'Serving customers across the Indo-Pacific region including Silicon Valley, Singapore, Malaysia, and India with global expertise.' },
    { number: '400', label: 'Robots Deployed', description: 'Successfully deployed over 400 robotic process automation solutions, delivering end-to-end RPA services from assessment to delivery.' },
    { number: '50', label: 'Active Consultants', description: 'Expert RPA architects and developers providing high-level design, validation, and feedback for comprehensive automation solutions.' },
  ];

  return (
    <section style={{
      padding: '15px 20px',
      background: '#f9fafb',
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '20px'
        }}>
          {stats.map((stat, idx) => (
            <div key={idx} style={{
              textAlign: 'center',
              padding: '12px 15px'
            }}>
              <h3 style={{
                fontSize: '36px',
                fontWeight: '700',
                color: '#3b82f6',
                margin: '0 0 5px 0'
              }}>
                {stat.number} +
              </h3>
              <h6 style={{
                fontSize: '13px',
                fontWeight: '600',
                color: '#1f2937',
                textTransform: 'uppercase',
                margin: '0 0 8px 0',
                letterSpacing: '0.5px'
              }}>
                {stat.label}
              </h6>
              <p style={{
                fontSize: '11px',
                color: '#6b7280',
                margin: 0,
                lineHeight: '1.4'
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


