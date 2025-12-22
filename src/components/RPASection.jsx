import React from 'react';

export default function RPASection() {
  return (
    <>
    <div style={{
      position: 'relative',
      zIndex: 1,
      maxWidth: '1200px',
      margin: '60px auto 0',
      padding: '50px 20px',
      background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95), rgba(248, 250, 252, 0.98))',
      borderRadius: '16px',
      border: '1px solid rgba(0, 212, 255, 0.15)',
      boxShadow: '0 20px 60px rgba(0, 0, 0, 0.08)',
      willChange: 'contents'
    }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '50px',
        alignItems: 'center'
      }}>
        {/* Left Side - Content */}
        <div>
          <div style={{
            display: 'inline-block',
            padding: '8px 16px',
            background: 'rgba(0, 212, 255, 0.1)',
            border: '1px solid rgba(0, 212, 255, 0.3)',
            borderRadius: '20px',
            marginBottom: '16px'
          }}>
            <span style={{
              fontSize: '11px',
              fontWeight: '600',
              color: '#0891b2',
              textTransform: 'uppercase',
              letterSpacing: '0.5px'
            }}>✨ Automation Excellence</span>
          </div>

          <h2 style={{
            fontSize: '40px',
            fontWeight: '800',
            color: '#0f172a',
            margin: '0 0 16px 0',
            lineHeight: '1.2'
          }}>
            Robotic Process Automation
          </h2>

          <p style={{
            fontSize: '15px',
            color: '#475569',
            margin: '0 0 20px 0',
            lineHeight: '1.6',
            fontWeight: '500'
          }}>
            Symprio helps leading organizations such as Facebook (Meta), Amway, JPA, HRDF and many others in digital transformation initiatives focused on AI, Automation, Process improvements & application rationalization.
          </p>

          <p style={{
            fontSize: '14px',
            color: '#64748b',
            margin: '0 0 32px 0',
            lineHeight: '1.7'
          }}>
            End to End RPA service from assessment till delivery, including support and training. Establish an RPA Center of Excellence with processes, templates and tools for optimal automation. Get high level design validation and technical feedback from senior RPA Architects & Developers.
          </p>

          {/* Features List */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '14px',
            marginBottom: '32px'
          }}>
            {[
              { icon: '⚡', title: 'Lightning Fast', desc: 'Process millions of transactions' },
              { icon: '🔒', title: 'Enterprise Secure', desc: 'Bank-grade security & compliance' },
              { icon: '🤖', title: 'AI-Enhanced', desc: 'UiPath, Power Automate & custom bots' }
            ].map((feature, idx) => (
              <div key={idx} style={{
                display: 'flex',
                gap: '12px',
                alignItems: 'flex-start'
              }}>
                <span style={{
                  fontSize: '18px',
                  minWidth: '24px'
                }}>{feature.icon}</span>
                <div>
                  <p style={{
                    fontSize: '13px',
                    fontWeight: '600',
                    color: '#0f172a',
                    margin: '0 0 2px 0'
                  }}>{feature.title}</p>
                  <p style={{
                    fontSize: '12px',
                    color: '#64748b',
                    margin: '0'
                  }}>{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Buttons */}
          <div style={{
            display: 'flex',
            gap: '12px',
            flexWrap: 'wrap'
          }}>
            <button style={{
              padding: '12px 28px',
              background: 'linear-gradient(135deg, #00d4ff, #0891b2)',
              color: '#ffffff',
              border: 'none',
              borderRadius: '8px',
              fontSize: '14px',
              fontWeight: '700',
              cursor: 'pointer',
              boxShadow: '0 8px 16px rgba(0, 212, 255, 0.25)',
              transition: 'all 0.3s ease'
            }}>
              Start Automation Audit →
            </button>
            <button style={{
              padding: '12px 28px',
              background: 'rgba(0, 212, 255, 0.08)',
              color: '#0891b2',
              border: '1.5px solid rgba(0, 212, 255, 0.3)',
              borderRadius: '8px',
              fontSize: '14px',
              fontWeight: '700',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}>
              Explore Services
            </button>
          </div>
        </div>

        {/* Right Side - All Services */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
          minHeight: '350px'
        }}>
          <div style={{
            fontSize: '14px',
            fontWeight: '600',
            color: '#0891b2',
            textTransform: 'uppercase',
            letterSpacing: '1px'
          }}>
            All Services
          </div>
          
          {[
            'Digital Transformation',
            'Robotic Process Automation',
            'ERP Practice (Oracle)',
            'Chatbots',
            'Custom Development',
            'Digital Workforce'
          ].map((service, idx) => (
            <div key={idx} style={{
              padding: '16px 20px',
              background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.12), rgba(248, 250, 252, 0.08))',
              border: '1.5px solid rgba(0, 212, 255, 0.3)',
              borderRadius: '10px',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              fontSize: '14px',
              fontWeight: '600',
              color: '#1e293b'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'linear-gradient(135deg, rgba(0, 212, 255, 0.2), rgba(0, 212, 255, 0.12))';
              e.currentTarget.style.borderColor = 'rgba(0, 212, 255, 0.6)';
              e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 212, 255, 0.25)';
              e.currentTarget.style.color = '#0f172a';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'linear-gradient(135deg, rgba(255, 255, 255, 0.12), rgba(248, 250, 252, 0.08))';
              e.currentTarget.style.borderColor = 'rgba(0, 212, 255, 0.3)';
              e.currentTarget.style.boxShadow = 'none';
              e.currentTarget.style.color = '#1e293b';
            }}>
              <span style={{ color: '#00d4ff', fontSize: '18px' }}>→</span>
              {service}
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  );
}


