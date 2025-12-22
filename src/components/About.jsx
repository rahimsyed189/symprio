import React, { useState, useEffect } from 'react';

export default function About() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
    }, { threshold: 0.2 });

    const element = document.getElementById('about-section');
    if (element) observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: '🔍',
      title: 'End to End RPA Service',
      description: 'From assessment till delivery, including support and training'
    },
    {
      icon: '🎯',
      title: 'Center of Excellence',
      description: 'Processes, templates and tools for optimal automation'
    },
    {
      icon: '👨‍💼',
      title: 'Expert Architects',
      description: 'High level design validation by senior RPA Architects & Developers'
    }
  ];

  const clients = [
    { name: 'Facebook (Meta)', color: '#1877f2' },
    { name: 'Amway', color: '#003da5' },
    { name: 'JPA', color: '#e74c3c' },
    { name: 'HRDF', color: '#27ae60' }
  ];

  return (
    <div id="about-section" style={{
      position: 'relative',
      zIndex: 1,
      maxWidth: '1200px',
      margin: '60px auto 0',
      padding: '80px 20px'
    }}>
      {/* Header */}
      <div style={{
        textAlign: 'center',
        marginBottom: '80px'
      }}>
        <h2 style={{
          fontSize: '44px',
          fontWeight: '800',
          color: '#0f172a',
          margin: '0 0 16px 0',
          lineHeight: '1.2'
        }}>
          Why Choose Symprio
        </h2>
        <p style={{
          fontSize: '16px',
          color: '#475569',
          maxWidth: '600px',
          margin: '0 auto',
          lineHeight: '1.6'
        }}>
          We combine deep RPA expertise with proven delivery frameworks to drive measurable business outcomes.
        </p>
      </div>

      {/* Content Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '80px',
        marginBottom: '80px',
        alignItems: 'center'
      }}>
        {/* Left - Clients */}
        <div>
          <h3 style={{
            fontSize: '24px',
            fontWeight: '700',
            marginBottom: '24px',
            color: '#0f172a'
          }}>
            Trusted by Industry Leaders
          </h3>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '16px'
          }}>
            {clients.map((client, idx) => (
              <div
                key={idx}
                style={{
                  padding: '20px',
                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(248, 250, 252, 0.95))',
                  border: '1.5px solid rgba(0, 212, 255, 0.15)',
                  borderRadius: '12px',
                  textAlign: 'center',
                  fontSize: '14px',
                  fontWeight: '700',
                  color: client.color,
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = `0 12px 24px ${client.color}20`;
                  e.currentTarget.style.borderColor = client.color;
                  e.currentTarget.style.background = `linear-gradient(135deg, rgba(255, 255, 255, 1), ${client.color}08)`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.borderColor = 'rgba(0, 212, 255, 0.15)';
                  e.currentTarget.style.background = 'linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(248, 250, 252, 0.95))';
                }}>
                {client.name}
              </div>
            ))}
          </div>
        </div>

        {/* Right - Features */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '24px'
        }}>
          {features.map((feature, idx) => (
            <div
              key={idx}
              style={{
                padding: '28px',
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(248, 250, 252, 0.95))',
                border: '1.5px solid rgba(0, 212, 255, 0.15)',
                borderRadius: '12px',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 16px 32px rgba(0, 212, 255, 0.1)';
                e.currentTarget.style.borderColor = 'rgba(0, 212, 255, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.borderColor = 'rgba(0, 212, 255, 0.15)';
              }}>
              <div style={{
                fontSize: '40px',
                marginBottom: '12px'
              }}>
                {feature.icon}
              </div>
              <h3 style={{
                fontSize: '18px',
                fontWeight: '700',
                color: '#0f172a',
                margin: '0 0 12px 0'
              }}>
                {feature.title}
              </h3>
              <p style={{
                fontSize: '14px',
                color: '#64748b',
                margin: '0',
                lineHeight: '1.6'
              }}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Stats Section */}
      <div style={{
        background: 'linear-gradient(135deg, rgba(0, 212, 255, 0.06), rgba(0, 212, 255, 0.02))',
        padding: '60px 40px',
        borderRadius: '16px',
        border: '1.5px solid rgba(0, 212, 255, 0.15)',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
        gap: '40px'
      }}>
        {[
          { label: '100+', value: 'Successful Implementations' },
          { label: '50+', value: 'Enterprise Clients' },
          { label: '300+', value: 'Process Automations' },
          { label: '95%', value: 'Client Satisfaction' }
        ].map((stat, idx) => (
          <div key={idx} style={{ textAlign: 'center' }}>
            <div style={{
              fontSize: '40px',
              fontWeight: '800',
              color: '#00d4ff',
              marginBottom: '8px'
            }}>
              {stat.label}
            </div>
            <div style={{
              fontSize: '14px',
              color: '#475569'
            }}>
              {stat.value}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


