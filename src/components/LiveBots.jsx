import React from 'react';

export default function LiveBots() {
  const bots = [
    {
      id: 1,
      name: 'Invoice Processing Bot',
      accuracy: '99.8%',
      uptime: '99.9%'
    },
    {
      id: 2,
      name: 'HR Onboarding Automation',
      accuracy: '99.5%',
      uptime: '100%'
    },
    {
      id: 3,
      name: 'Supply Chain Optimizer',
      accuracy: '99.9%',
      uptime: '99.8%'
    },
    {
      id: 4,
      name: 'Customer Support Bot',
      accuracy: '98.7%',
      uptime: '99.7%'
    }
  ];

  return (
    <div style={{
      position: 'relative',
      zIndex: 1,
      maxWidth: '1200px',
      margin: '60px auto 0',
      padding: '80px 20px',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '60px',
      alignItems: 'center'
    }}>
      {/* Left Side - Text */}
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
            color: '#00d4ff',
            textTransform: 'uppercase',
            letterSpacing: '0.5px'
          }}>🚀 Live Operations</span>
        </div>

        <h2 style={{
          fontSize: '40px',
          fontWeight: '800',
          color: '#0f172a',
          margin: '0 0 16px 0',
          lineHeight: '1.2'
        }}>
          Real-Time Bot Performance
        </h2>

        <p style={{
          fontSize: '15px',
          color: '#475569',
          margin: '0 0 32px 0',
          lineHeight: '1.6'
        }}>
          Our bots are running 24/7 across your operations, delivering consistent accuracy and reliability with enterprise-grade monitoring.
        </p>

        <div style={{
          background: 'linear-gradient(135deg, rgba(0, 212, 255, 0.06), rgba(0, 212, 255, 0.02))',
          border: '1.5px solid rgba(0, 212, 255, 0.15)',
          borderRadius: '12px',
          padding: '24px'
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '24px'
          }}>
            <div>
              <div style={{
                fontSize: '28px',
                fontWeight: '800',
                color: '#00d4ff'
              }}>
                99.8%
              </div>
              <div style={{
                fontSize: '13px',
                color: '#475569',
                marginTop: '4px'
              }}>
                Average Accuracy
              </div>
            </div>
            <div>
              <div style={{
                fontSize: '28px',
                fontWeight: '800',
                color: '#22c55e'
              }}>
                99.9%
              </div>
              <div style={{
                fontSize: '13px',
                color: '#475569',
                marginTop: '4px'
              }}>
                Average Uptime
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Bot Cards */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '16px'
      }}>
        {bots.map((bot) => (
          <div
            key={bot.id}
            style={{
              background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(248, 250, 252, 0.95))',
              border: '1.5px solid rgba(0, 212, 255, 0.15)',
              borderRadius: '12px',
              padding: '20px',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = '0 12px 24px rgba(0, 212, 255, 0.1)';
              e.currentTarget.style.borderColor = 'rgba(0, 212, 255, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = 'none';
              e.currentTarget.style.borderColor = 'rgba(0, 212, 255, 0.15)';
            }}
          >
            <div style={{
              fontSize: '13px',
              fontWeight: '700',
              color: '#ffffff',
              marginBottom: '12px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              background: 'linear-gradient(135deg, #00d4ff, #0891b2)',
              padding: '10px',
              borderRadius: '6px'
            }}>
              <span>{bot.name.substring(0, 20)}</span>
              <div style={{
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                background: '#10b981'
              }}></div>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '12px'
            }}>
              <div>
                <div style={{
                  fontSize: '10px',
                  color: '#64748b',
                  marginBottom: '4px'
                }}>
                  Accuracy
                </div>
                <div style={{
                  fontSize: '16px',
                  fontWeight: '700',
                  color: '#00d4ff'
                }}>
                  {bot.accuracy}
                </div>
              </div>
              <div>
                <div style={{
                  fontSize: '10px',
                  color: '#64748b',
                  marginBottom: '4px'
                }}>
                  Uptime
                </div>
                <div style={{
                  fontSize: '16px',
                  fontWeight: '700',
                  color: '#22c55e'
                }}>
                  {bot.uptime}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}




