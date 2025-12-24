import React from 'react';

export default function ProgramsStats() {
  const stats = [
    {
      number: '40+',
      title: 'Automation Programs',
      description: 'From discovery to production, with governance built-in.'
    },
    {
      number: '15+',
      title: 'Regions Supported',
      description: 'Follow the sun support for global operations teams.'
    },
    {
      number: '400+',
      title: 'Bots Deployed',
      description: 'Attended & unattended bots orchestrated from a single pane.'
    },
    {
      number: '50+',
      title: 'Automation Experts',
      description: 'Architects, developers and process consultants under one roof.'
    }
  ];

  return (
    <div style={{
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '60px 20px',
      position: 'relative',
      zIndex: 1
    }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '40px'
      }}>
        {stats.map((stat, index) => (
          <div key={index} style={{
            background: 'linear-gradient(135deg, #f8fafc, #f1f5f9)',
            padding: '40px 30px',
            borderRadius: '12px',
            border: '1.5px solid rgba(0, 212, 255, 0.2)',
            textAlign: 'center',
            transition: 'all 0.3s ease',
            cursor: 'pointer',
            boxShadow: '0 4px 15px rgba(0, 0, 0, 0.05)',
            ':hover': {
              transform: 'translateY(-5px)',
              boxShadow: '0 12px 30px rgba(0, 212, 255, 0.15)'
            }
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-5px)';
            e.currentTarget.style.boxShadow = '0 12px 30px rgba(0, 212, 255, 0.15)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.05)';
          }}>
            <div style={{
              fontSize: '44px',
              fontWeight: '700',
              color: '#00d4ff',
              marginBottom: '12px',
              fontFamily: "'Poppins', system-ui, sans-serif"
            }}>
              {stat.number}
            </div>
            <div style={{
              fontSize: '18px',
              fontWeight: '600',
              color: '#0f172a',
              marginBottom: '10px'
            }}>
              {stat.title}
            </div>
            <div style={{
              fontSize: '14px',
              color: '#64748b',
              lineHeight: '1.6'
            }}>
              {stat.description}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


