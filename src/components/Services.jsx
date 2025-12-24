import React from 'react';

const Services = () => {
  const services = [
    {
      title: 'Digital Transformation',
      desc: 'End-to-end transformation strategies powered by RPA and automation technologies.',
      icon: '🔄'
    },
    {
      title: 'Robotic Process Automation',
      desc: 'Scalable RPA solutions using UiPath, Blue Prism, and Power Automate platforms.',
      icon: '🤖'
    },
    {
      title: 'ERP Practice',
      desc: 'Enterprise resource planning implementation and optimization services.',
      icon: '📊'
    },
    {
      title: 'Intelligent Chatbots',
      desc: 'AI-powered conversational solutions for customer engagement and support.',
      icon: '💬'
    },
    {
      title: 'Custom Development',
      desc: 'Tailored software solutions built to your specific business requirements.',
      icon: '⚙️'
    },
    {
      title: 'Digital Workforce',
      desc: 'Build and manage a scalable digital workforce for your enterprise.',
      icon: '👥'
    }
  ];

  return (
    <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '80px 20px' }}>
      <div style={{
        textAlign: 'center',
        marginBottom: '60px'
      }}>
        <p style={{
          fontSize: '14px',
          fontWeight: '600',
          color: '#00d4ff',
          textTransform: 'uppercase',
          letterSpacing: '2px',
          margin: '0 0 16px 0'
        }}>
          Services
        </p>
        <h2 style={{
          fontSize: '42px',
          fontWeight: '700',
          color: '#1a1a1a',
          margin: '0 0 20px 0'
        }}>
          Our Services
        </h2>
        <p style={{
          fontSize: '16px',
          color: '#666666',
          maxWidth: '600px',
          margin: '0 auto',
          lineHeight: '1.6'
        }}>
          Comprehensive automation and digital transformation services tailored to drive business value
        </p>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '30px'
      }}>
        {services.map((service, idx) => (
          <div
            key={idx}
            style={{
              padding: '40px 30px',
              background: '#ffffff',
              border: '1px solid #e0e0e0',
              borderRadius: '8px',
              transition: 'all 0.3s ease',
              textAlign: 'center'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.1)';
              e.currentTarget.style.borderColor = '#00d4ff';
              e.currentTarget.style.transform = 'translateY(-5px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = 'none';
              e.currentTarget.style.borderColor = '#e0e0e0';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <div style={{
              fontSize: '48px',
              marginBottom: '16px'
            }}>
              {service.icon}
            </div>
            <h3 style={{
              fontSize: '18px',
              fontWeight: '600',
              color: '#1a1a1a',
              margin: '0 0 12px 0'
            }}>
              {service.title}
            </h3>
            <p style={{
              fontSize: '14px',
              color: '#666666',
              margin: '0',
              lineHeight: '1.6'
            }}>
              {service.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;






