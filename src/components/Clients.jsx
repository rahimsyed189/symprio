import React, { useState } from 'react';

export default function Clients() {
  const [selectedClient, setSelectedClient] = useState(null);

  const clients = [
    {
      id: 1,
      name: 'Facebook',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1200px-Facebook_Logo_%282019%29.png',
      category: 'Technology',
      communication: 'Email, Slack, WhatsApp',
      projects: 12,
      status: 'Active',
      description: 'Global social media platform utilizing our RPA solutions for user data processing and report automation.'
    },
    {
      id: 2,
      name: 'Amway',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Amway_logo.svg/1200px-Amway_logo.svg.png',
      category: 'Direct Sales',
      communication: 'Teams, Email, Phone',
      projects: 8,
      status: 'Active',
      description: 'Leading direct selling company automating order processing and distributor management workflows.'
    },
    {
      id: 3,
      name: 'Microsoft',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/2048px-Microsoft_logo.svg.png',
      category: 'Technology',
      communication: 'Teams, Outlook, Skype',
      projects: 15,
      status: 'Active',
      description: 'Enterprise software leader implementing intelligent automation across multiple departments.'
    },
    {
      id: 4,
      name: 'Amazon',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png',
      category: 'E-commerce',
      communication: 'Chime, Email, Slack',
      projects: 20,
      status: 'Active',
      description: 'E-commerce giant automating supply chain and customer service operations.'
    },
    {
      id: 5,
      name: 'Google',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png',
      category: 'Technology',
      communication: 'Gmail, Chat, Meet',
      projects: 18,
      status: 'Active',
      description: 'Search and advertising platform automating analytics and ad management processes.'
    },
    {
      id: 6,
      name: 'Apple',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/2048px-Apple_logo_black.svg.png',
      category: 'Technology',
      communication: 'iMessage, Mail, FaceTime',
      projects: 10,
      status: 'Active',
      description: 'Premium tech brand automating device management and customer support workflows.'
    },
    {
      id: 7,
      name: 'Coca-Cola',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Coca-Cola_logo.svg/2560px-Coca-Cola_logo.svg.png',
      category: 'Beverage',
      communication: 'Email, Teams, Slack',
      projects: 11,
      status: 'Active',
      description: 'Beverage corporation automating distribution and inventory management systems.'
    },
    {
      id: 8,
      name: 'Walmart',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Walmart_logo.svg/2560px-Walmart_logo.svg.png',
      category: 'Retail',
      communication: 'Email, Teams, Zoom',
      projects: 16,
      status: 'Active',
      description: 'Retail giant automating point-of-sale and inventory reconciliation processes.'
    }
  ];

  return (
    <>
      <style>{`
        
          to { opacity: 1;  }
        }

        
          to { opacity: 1;  }
        }

        .clients-container {
          
        }

        .client-card {
          
          
        }

        .client-card:hover {
          
          box-shadow: 0 20px 50px rgba(0, 212, 255, 0.25) !important;
        }

        .logo-container {
          width: 100%;
          height: 120px;
          background: linear-gradient(135deg, rgba(0, 212, 255, 0.05), rgba(168, 85, 247, 0.05));
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          
        }

        .client-card:hover .logo-container {
          background: linear-gradient(135deg, rgba(0, 212, 255, 0.1), rgba(168, 85, 247, 0.1));
        }

        .logo-img {
          max-width: 90%;
          max-height: 90%;
          object-fit: contain;
        }

        .status-badge {
          display: inline-block;
          padding: 4px 12px;
          background: rgba(34, 197, 94, 0.2);
          color: #16a34a;
          border-radius: 12px;
          font-size: 11px;
          font-weight: 600;
          border: 1px solid rgba(34, 197, 94, 0.3);
        }

        .category-tag {
          display: inline-block;
          padding: 4px 10px;
          background: rgba(0, 212, 255, 0.1);
          color: #00d4ff;
          border-radius: 6px;
          font-size: 11px;
          font-weight: 500;
        }

        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.6);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
        }

        .modal-content {
          background: white;
          border-radius: 16px;
          padding: 40px;
          max-width: 600px;
          width: 90%;
          max-height: 90vh;
          overflow-y: auto;
          
          box-shadow: 0 25px 60px rgba(0, 0, 0, 0.3);
        }

        .modal-close {
          position: absolute;
          top: 20px;
          right: 20px;
          background: rgba(0, 0, 0, 0.05);
          border: none;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 20px;
          
        }

        .modal-close:hover {
          background: rgba(0, 0, 0, 0.1);
          
        }

        .comm-item {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 8px 0;
          font-size: 14px;
          color: #374151;
        }

        .comm-icon {
          width: 24px;
          height: 24px;
          background: rgba(0, 212, 255, 0.1);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #00d4ff;
          font-size: 12px;
        }
      `}</style>

      <div style={{
        position: 'relative',
        zIndex: 1,
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '60px 20px',
        background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.98), rgba(240, 248, 255, 0.95))',
      }}>
        <div className="clients-container">
          {/* Header */}
          <div style={{
            textAlign: 'center',
            marginBottom: '50px'
          }}>
            <span style={{
              display: 'inline-block',
              padding: '8px 16px',
              background: 'rgba(0, 212, 255, 0.1)',
              color: '#00d4ff',
              borderRadius: '20px',
              fontSize: '12px',
              fontWeight: '600',
              marginBottom: '16px',
              letterSpacing: '0.5px'
            }}>
              OUR CLIENTS
            </span>
            <h2 style={{
              fontSize: '40px',
              fontWeight: '700',
              color: '#1f2937',
              margin: '0 0 12px 0',
              lineHeight: '1.2'
            }}>
              Trusted by Global Enterprises
            </h2>
            <p style={{
              fontSize: '16px',
              color: '#6b7280',
              margin: '0 0 20px 0',
              maxWidth: '600px',
              marginLeft: 'auto',
              marginRight: 'auto',
              lineHeight: '1.6'
            }}>
              From Fortune 500 companies to innovative startups, organizations worldwide trust us to automate their critical processes
            </p>
          </div>

          {/* Stats */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '24px',
            marginBottom: '50px',
            padding: '30px',
            background: 'rgba(255, 255, 255, 0.7)',
            borderRadius: '16px',
            border: '1px solid rgba(0, 212, 255, 0.1)'
          }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{
                fontSize: '32px',
                fontWeight: '700',
                color: '#00d4ff',
                marginBottom: '8px'
              }}>
                {clients.length}+
              </div>
              <div style={{ fontSize: '13px', color: '#6b7280', fontWeight: '500' }}>
                Active Clients
              </div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{
                fontSize: '32px',
                fontWeight: '700',
                color: '#00d4ff',
                marginBottom: '8px'
              }}>
                {clients.reduce((sum, c) => sum + c.projects, 0)}+
              </div>
              <div style={{ fontSize: '13px', color: '#6b7280', fontWeight: '500' }}>
                Active Projects
              </div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{
                fontSize: '32px',
                fontWeight: '700',
                color: '#00d4ff',
                marginBottom: '8px'
              }}>
                99.8%
              </div>
              <div style={{ fontSize: '13px', color: '#6b7280', fontWeight: '500' }}>
                Uptime Record
              </div>
            </div>
          </div>

          {/* Clients Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '28px'
          }}>
            {clients.map((client, idx) => (
              <div
                key={client.id}
                className="client-card"
                onClick={() => setSelectedClient(client)}
                style={{
                  background: 'white',
                  borderRadius: '16px',
                  padding: '24px',
                  border: '1px solid rgba(0, 212, 255, 0.1)',
                  boxShadow: '0 10px 30px rgba(0, 212, 255, 0.08)',
                  cursor: 'pointer',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                {/* Background gradient */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  right: -20,
                  width: '80px',
                  height: '80px',
                  background: 'radial-gradient(circle, rgba(0, 212, 255, 0.1), transparent)',
                  borderRadius: '50%'
                }} />

                {/* Logo */}
                <div className="logo-container" style={{ marginBottom: '16px' }}>
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="logo-img"
                  />
                </div>

                {/* Client Info */}
                <div style={{ position: 'relative', zIndex: 1 }}>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'start',
                    marginBottom: '12px'
                  }}>
                    <h3 style={{
                      fontSize: '18px',
                      fontWeight: '700',
                      color: '#1f2937',
                      margin: '0'
                    }}>
                      {client.name}
                    </h3>
                    <span className="status-badge">{client.status}</span>
                  </div>

                  <div style={{ marginBottom: '12px' }}>
                    <span className="category-tag">{client.category}</span>
                  </div>

                  {/* Stats */}
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '12px',
                    padding: '12px 0',
                    borderTop: '1px solid rgba(0, 0, 0, 0.05)',
                    borderBottom: '1px solid rgba(0, 0, 0, 0.05)',
                    marginBottom: '12px'
                  }}>
                    <div>
                      <div style={{
                        fontSize: '20px',
                        fontWeight: '700',
                        color: '#00d4ff'
                      }}>
                        {client.projects}
                      </div>
                      <div style={{
                        fontSize: '11px',
                        color: '#6b7280',
                        fontWeight: '500'
                      }}>
                        Active Projects
                      </div>
                    </div>
                    <div>
                      <div style={{
                        fontSize: '20px',
                        fontWeight: '700',
                        color: '#00d4ff'
                      }}>
                        100%
                      </div>
                      <div style={{
                        fontSize: '11px',
                        color: '#6b7280',
                        fontWeight: '500'
                      }}>
                        Success Rate
                      </div>
                    </div>
                  </div>

                  {/* View Details Button */}
                  <button style={{
                    width: '100%',
                    padding: '10px',
                    background: 'linear-gradient(135deg, #00d4ff, #3b82f6)',
                    color: 'white',
                    border: 'none',
                    borderRadius: '8px',
                    fontSize: '13px',
                    fontWeight: '600',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.boxShadow = '0 8px 16px rgba(0, 212, 255, 0.3)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.boxShadow = 'none';
                  }}
                  >
                    View Details →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedClient && (
        <div className="modal-overlay" onClick={() => setSelectedClient(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button
              className="modal-close"
              onClick={() => setSelectedClient(null)}
            >
              ✕
            </button>

            {/* Modal Logo */}
            <div style={{
              width: '100%',
              height: '150px',
              background: 'linear-gradient(135deg, rgba(0, 212, 255, 0.05), rgba(168, 85, 247, 0.05))',
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '30px'
            }}>
              <img
                src={selectedClient.logo}
                alt={selectedClient.name}
                style={{
                  maxWidth: '80%',
                  maxHeight: '80%',
                  objectFit: 'contain'
                }}
              />
            </div>

            {/* Modal Header */}
            <div style={{ marginBottom: '24px' }}>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '12px'
              }}>
                <h2 style={{
                  fontSize: '28px',
                  fontWeight: '700',
                  color: '#1f2937',
                  margin: '0'
                }}>
                  {selectedClient.name}
                </h2>
                <span className="status-badge">{selectedClient.status}</span>
              </div>
              <span className="category-tag">{selectedClient.category}</span>
            </div>

            {/* Description */}
            <p style={{
              fontSize: '14px',
              color: '#4b5563',
              lineHeight: '1.7',
              marginBottom: '24px'
            }}>
              {selectedClient.description}
            </p>

            {/* Communication Methods */}
            <div style={{ marginBottom: '24px' }}>
              <h3 style={{
                fontSize: '14px',
                fontWeight: '700',
                color: '#1f2937',
                margin: '0 0 12px 0'
              }}>
                Communication Channels
              </h3>
              {selectedClient.communication.split(', ').map((channel, idx) => (
                <div key={idx} className="comm-item">
                  <div className="comm-icon">💬</div>
                  <span>{channel}</span>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr 1fr',
              gap: '16px',
              padding: '20px',
              background: 'rgba(0, 212, 255, 0.05)',
              borderRadius: '12px',
              marginBottom: '24px'
            }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{
                  fontSize: '24px',
                  fontWeight: '700',
                  color: '#00d4ff',
                  marginBottom: '4px'
                }}>
                  {selectedClient.projects}
                </div>
                <div style={{
                  fontSize: '11px',
                  color: '#6b7280',
                  fontWeight: '500'
                }}>
                  Active Projects
                </div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{
                  fontSize: '24px',
                  fontWeight: '700',
                  color: '#00d4ff',
                  marginBottom: '4px'
                }}>
                  100%
                </div>
                <div style={{
                  fontSize: '11px',
                  color: '#6b7280',
                  fontWeight: '500'
                }}>
                  Success Rate
                </div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{
                  fontSize: '24px',
                  fontWeight: '700',
                  color: '#22c55e',
                  marginBottom: '4px'
                }}>
                  24/7
                </div>
                <div style={{
                  fontSize: '11px',
                  color: '#6b7280',
                  fontWeight: '500'
                }}>
                  Support
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '12px'
            }}>
              <button style={{
                padding: '12px',
                background: 'linear-gradient(135deg, #00d4ff, #3b82f6)',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                fontSize: '13px',
                fontWeight: '600',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 8px 16px rgba(0, 212, 255, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = 'none';
              }}
              >
                Start Project
              </button>
              <button style={{
                padding: '12px',
                background: 'transparent',
                color: '#00d4ff',
                border: '2px solid #00d4ff',
                borderRadius: '8px',
                fontSize: '13px',
                fontWeight: '600',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(0, 212, 255, 0.05)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent';
              }}
              >
                Contact Client
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}




