import React from 'react';

const Services = () => {
  const steps = [
    {
      title: '1. Discover & Prioritize',
      desc: 'Conduct process walkthroughs, define business cases and build an automation pipeline aligned to your goals.',
      tags: ['Process mining', 'ROI modeling']
    },
    {
      title: '2. Design & Architect',
      desc: 'Translate requirements into resilient, scalable designs that integrate with your existing systems securely.',
      tags: ['Solution design', 'Security & controls']
    },
    {
      title: '3. Build, Test & Deploy',
      desc: 'Develop bots using best-practice frameworks, test thoroughly and release with rollback and monitoring in place.',
      tags: ['UiPath', 'Power Automate']
    },
    {
      title: '4. Operate & Scale',
      desc: 'Establish a Center of Excellence with governance, training and support so automation becomes a capability, not a project.',
      tags: ['RPA CoE', 'Managed support']
    }
  ];

  const services = [
    { label: 'ROI Matrix', badge: 'Strategy', desc: 'Quantify savings, effort, and risk to build a ranked automation roadmap.' },
    { label: 'Licenses & Platforms', badge: 'Advisory', desc: 'Right-size your license mix and hosting model across cloud or on-prem.' },
    { label: 'Automation Lifecycle', badge: 'Delivery', desc: 'Reusable assets, templates and accelerators for faster delivery cycles.' },
    { label: 'Bot Monitoring', badge: 'Support', desc: 'Proactive alerts, runbooks and incident response for critical workloads.' }
  ];

  return (
    <section id="services" style={{ maxWidth: '1200px', margin: '60px auto 0', padding: '80px 18px' }}>
      <div style={{ textAlign: 'center', marginBottom: '60px' }}>
        <h2 style={{
          fontSize: '44px',
          fontWeight: '800',
          color: '#0f172a',
          margin: '0 0 16px 0'
        }}>
          Our Services
        </h2>
        <p style={{
          fontSize: '16px',
          color: '#475569',
          maxWidth: '600px',
          margin: '0 auto',
          lineHeight: '1.6'
        }}>
          End-to-end RPA solutions tailored to your business needs and objectives
        </p>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '24px'
      }}>
        {steps.map((step, idx) => (
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
              e.currentTarget.style.boxShadow = '0 12px 24px rgba(0, 212, 255, 0.1)';
              e.currentTarget.style.borderColor = 'rgba(0, 212, 255, 0.3)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = 'none';
              e.currentTarget.style.borderColor = 'rgba(0, 212, 255, 0.15)';
            }}
          >
            <h3 style={{
              fontSize: '16px',
              fontWeight: '700',
              color: '#0f172a',
              margin: '0 0 12px 0'
            }}>
              {step.title}
            </h3>
            <p style={{
              fontSize: '14px',
              color: '#64748b',
              margin: '0 0 16px 0',
              lineHeight: '1.6'
            }}>
              {step.desc}
            </p>
            <div style={{
              display: 'flex',
              gap: '8px',
              flexWrap: 'wrap'
            }}>
              {step.tags.map((tag, i) => (
                <span
                  key={i}
                  style={{
                    fontSize: '11px',
                    padding: '6px 12px',
                    background: 'rgba(0, 212, 255, 0.15)',
                    color: '#00d4ff',
                    borderRadius: '4px',
                    fontWeight: '600'
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Additional Services */}
      <div style={{
        marginTop: '60px',
        padding: '50px',
        background: 'linear-gradient(135deg, rgba(0, 212, 255, 0.06), rgba(0, 212, 255, 0.02))',
        borderRadius: '16px',
        border: '1.5px solid rgba(0, 212, 255, 0.15)'
      }}>
        <h3 style={{
          fontSize: '24px',
          fontWeight: '700',
          color: '#0f172a',
          margin: '0 0 32px 0',
          textAlign: 'center'
        }}>
          Additional Capabilities
        </h3>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '24px'
        }}>
          {services.map((svc, idx) => (
            <div key={idx} style={{ padding: '20px' }}>
              <div style={{
                fontSize: '11px',
                fontWeight: '700',
                color: '#00d4ff',
                marginBottom: '8px',
                textTransform: 'uppercase',
                letterSpacing: '0.5px'
              }}>
                {svc.badge}
              </div>
              <div style={{
                fontSize: '16px',
                fontWeight: '700',
                color: '#0f172a',
                marginBottom: '8px'
              }}>
                {svc.label}
              </div>
              <p style={{
                fontSize: '13px',
                color: '#64748b',
                margin: '0',
                lineHeight: '1.6'
              }}>
                {svc.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;


