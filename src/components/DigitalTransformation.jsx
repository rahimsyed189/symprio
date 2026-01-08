import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const DigitalTransformation = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const [containerVisible, setContainerVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const container = document.getElementById('dt-container');
      if (container) {
        const rect = container.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.75) {
          setContainerVisible(true);
          window.removeEventListener('scroll', handleScroll);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const keyAreas = [
    {
      title: 'Enterprise Platform',
      icon: 'https://www.symprio.com/wp-content/uploads/2024/01/process_box_1.png',
      description: 'Building scalable enterprise solutions'
    },
    {
      title: 'Hyper Automation',
      icon: 'https://www.symprio.com/wp-content/uploads/2024/01/process_box_2.png',
      description: 'Advanced automation capabilities'
    },
    {
      title: 'Design and Build',
      icon: 'https://www.symprio.com/wp-content/uploads/2024/01/process_box_3.png',
      description: 'Custom solution development'
    },
    {
      title: 'Upskilling and Reskilling Workforce',
      icon: 'https://www.symprio.com/wp-content/uploads/2024/04/why_3_3.png',
      description: 'Team development and training'
    },
    {
      title: 'Improving Customer Experience',
      icon: 'https://www.symprio.com/wp-content/uploads/2024/01/counter_2_4.png',
      description: 'Enhanced user satisfaction'
    },
    {
      title: 'Enhancing Operational Efficiency',
      icon: 'https://www.symprio.com/wp-content/uploads/2024/01/process_box_3.png',
      description: 'Streamlined operations'
    },
    {
      title: 'Increasing Service Accessibility',
      icon: 'https://www.symprio.com/wp-content/uploads/2024/01/process_box_4.png',
      description: 'Better service availability'
    },
    {
      title: 'Ensuring Data Security',
      icon: 'https://www.symprio.com/wp-content/uploads/2024/01/process_box_1.png',
      description: 'Comprehensive security measures'
    }
  ];

  const coverageAreas = [
    { title: 'Ecosystem', icon: 'https://www.symprio.com/wp-content/uploads/2024/01/service_3d_1.png' },
    { title: 'Organization Culture', icon: 'https://www.symprio.com/wp-content/uploads/2024/01/service_3d_3.png' },
    { title: 'Change Management', icon: 'https://www.symprio.com/wp-content/uploads/2024/01/service_3d_4.png' },
    { title: 'Data & Insights', icon: 'https://www.symprio.com/wp-content/uploads/2024/01/service_3d_1.png' },
    { title: 'Customer Experience', icon: 'https://www.symprio.com/wp-content/uploads/2024/01/service_3d_2.png' },
    { title: 'Innovation', icon: 'https://www.symprio.com/wp-content/uploads/2024/01/service_3d_1.png' },
    { title: 'Technology', icon: 'https://www.symprio.com/wp-content/uploads/2024/01/service_3d_2.png' },
    { title: 'People & Skillset', icon: 'https://www.symprio.com/wp-content/uploads/2024/01/service_3d_4.png' }
  ];

  return (
    <div style={{ background: '#fff', minHeight: '100vh' }}>
      {/* Hero Banner */}
      <div style={{
        backgroundImage: 'url(/digitaltransformation/banner.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: '#fff',
        padding: '60px 60px 140px',
        textAlign: 'left',
        marginTop: '0',
        position: 'relative',
        minHeight: '300px',
        display: 'flex',
        alignItems: 'flex-start'
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0, 0, 0, 0.4)',
          zIndex: 1
        }}></div>
        <div style={{ maxWidth: '100%', margin: '0', paddingLeft: '0', paddingTop: '0', position: 'relative', zIndex: 2 }}>
          <h1 style={{
            fontSize: '56px',
            fontWeight: '700',
            margin: '0 0 15px 0',
            color: '#fff',
            animation: isVisible ? 'slideInLeft 0.8s ease-out 0.1s both' : 'none',
            textAlign: 'left'
          }}>
            Digital Transformation
          </h1>
          <p style={{
            fontSize: '18px',
            color: '#e0e0e0',
            margin: 0,
            animation: isVisible ? 'slideInLeft 0.8s ease-out 0.2s both' : 'none',
            textAlign: 'left'
          }}>
            Your Partners to Digital Transformation
          </p>
        </div>
      </div>

      {/* Intro Container - Half on Banner */}
      <div 
        id="dt-container"
        style={{
          position: 'relative',
          marginTop: '-120px',
          marginBottom: '80px',
          maxWidth: '1200px',
          margin: '-120px auto 80px',
          padding: '0 20px',
          zIndex: 10
        }}>
        <div style={{
          background: '#ffffff',
          borderRadius: '12px',
          padding: '50px',
          boxShadow: '0 10px 40px rgba(0, 0, 0, 0.15)',
          border: '2px solid #e5e7eb',
          animation: containerVisible ? 'slideUp 0.8s ease-out both' : 'none',
          position: 'relative',
          zIndex: 10
        }}>
          <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          {/* Two Column Section with Text and Image */}
          <section>
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '60px',
              alignItems: 'center'
            }}>
              {/* Left Column - Information */}
              <div style={{
                animation: isVisible ? 'slideUp 0.8s ease-out 0.1s both' : 'none'
              }}>
                <h2 style={{ 
                  fontSize: '32px',
                  fontWeight: '700',
                  color: '#1e5eb8',
                  marginTop: 0,
                  marginBottom: '25px'
                }}>
                  Digital Transformation
                </h2>
                
                <p style={{ 
                  color: '#4b5563',
                  lineHeight: '1.8',
                  fontSize: '16px',
                  marginBottom: '30px'
                }}>
                  Symprio helps leading organizations such as Facebook (Meta), Amway, JPA, HRDF and many others in digital transformation initiatives focused on AI, Automation, Process improvements & application rationalization.
                </p>
                
                <div>
                  <h3 style={{ 
                    fontSize: '18px',
                    fontWeight: '600',
                    color: 'rgba(25, 181, 254, 1)',
                    marginTop: 0,
                    marginBottom: '12px'
                  }}>
                    Assessment
                  </h3>
                  <ul style={{
                    listStyle: 'none',
                    padding: 0,
                    margin: 0
                  }}>
                    <li style={{
                      color: '#4b5563',
                      lineHeight: '1.8',
                      fontSize: '15px',
                      marginBottom: '12px',
                      paddingLeft: '24px',
                      position: 'relative'
                    }}>
                      <span style={{
                        position: 'absolute',
                        left: 0,
                        color: '#3b82f6',
                        fontWeight: 'bold'
                      }}>•</span>
                      Assessment of the entire organization to identify the current state of digital journey
                    </li>
                    <li style={{
                      color: '#4b5563',
                      lineHeight: '1.8',
                      fontSize: '15px',
                      marginBottom: '12px',
                      paddingLeft: '24px',
                      position: 'relative'
                    }}>
                      <span style={{
                        position: 'absolute',
                        left: 0,
                        color: '#3b82f6',
                        fontWeight: 'bold'
                      }}>•</span>
                      Assessment of awareness and willingness to adopt new technologies
                    </li>
                    <li style={{
                      color: '#4b5563',
                      lineHeight: '1.8',
                      fontSize: '15px',
                      marginBottom: 0,
                      paddingLeft: '24px',
                      position: 'relative'
                    }}>
                      <span style={{
                        position: 'absolute',
                        left: 0,
                        color: '#3b82f6',
                        fontWeight: 'bold'
                      }}>•</span>
                      Recommendation on technology adoption and provide digital roadmap to the organization
                    </li>
                  </ul>
                </div>
              </div>

              {/* Right Column - Image */}
              <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                animation: isVisible ? 'slideUp 0.8s ease-out 0.2s both' : 'none'
              }}>
                <img 
                  src="/digitaltransformation/CircleDiagram.jpg"
                  alt="Digital Transformation Circle Diagram"
                  style={{
                    maxWidth: '70%',
                    height: 'auto'
                  }}
                />
              </div>
            </div>
          </section>
        </div>
        </div>
      </div>

      {/* Rest of Content */}
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 20px 80px 20px' }}>
        {/* Key Areas Section */}
        <section style={{ marginBottom: '80px' }}>
          <h2 style={{
            fontSize: '36px',
            fontWeight: '700',
            color: '#1f2937',
            marginBottom: '50px',
            textAlign: 'center'
          }}>
            Key Areas of Digital Transformation
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '30px',
            position: 'relative',
            paddingTop: '60px'
          }}>
            {/* Connecting lines SVG overlay with arrows */}
            <svg 
              style={{
                position: 'absolute',
                top: '0',
                left: '0',
                width: '100%',
                height: '80px',
                pointerEvents: 'none',
                zIndex: 0
              }}
              viewBox="0 0 1200 80"
              preserveAspectRatio="none"
            >
              {/* Define arrowhead marker */}
              <defs>
                <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                  <polygon points="0 0, 10 3, 0 6" fill="#3b82f6" />
                </marker>
              </defs>
              
              {/* Dotted lines connecting cards with arrows */}
              <line x1="12.5%" y1="40" x2="37.5%" y2="40" stroke="#3b82f6" strokeWidth="2" strokeDasharray="8,4" markerEnd="url(#arrowhead)" />
              <line x1="37.5%" y1="40" x2="62.5%" y2="40" stroke="#3b82f6" strokeWidth="2" strokeDasharray="8,4" markerEnd="url(#arrowhead)" />
              <line x1="62.5%" y1="40" x2="87.5%" y2="40" stroke="#3b82f6" strokeWidth="2" strokeDasharray="8,4" markerEnd="url(#arrowhead)" />
            </svg>

            {/* Cards with relative positioning */}
            {[
              { title: 'Enterprise Platform', icon: '/digitaltransformation/process_box_1.png' },
              { title: 'Hyper Automation', icon: '/digitaltransformation/process_box_2.png' },
              { title: 'Design and Build', icon: '/digitaltransformation/process_box_3.png' },
              { title: 'Upskilling and Reskilling Workforce', icon: '/digitaltransformation/why_3_3.png' },
              { title: 'Improving Customer Experience', icon: '/digitaltransformation/counter_2_4.png' },
              { title: 'Enhancing Operational Efficiency', icon: '/digitaltransformation/process_box_3.png' },
              { title: 'Increasing Service Accessibility', icon: '/digitaltransformation/process_box_4.png' },
              { title: 'Ensuring Data Security', icon: '/digitaltransformation/process_box_1.png' }
            ].map((area, idx) => {
              const positionInRow = idx % 4;
              const offsetDown = positionInRow % 2 === 1 ? '40px' : '0';
              return (
                <div
                  key={idx}
                  style={{
                    background: '#f9fafb',
                    padding: '30px',
                    borderRadius: '8px',
                    border: '1px solid #e5e7eb',
                    textAlign: 'center',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                    animation: isVisible ? `slideUp 0.8s ease-out ${idx * 0.05}s both` : 'none',
                    position: 'relative',
                    zIndex: 1,
                    marginTop: offsetDown,
                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = '0 12px 24px rgba(0, 0, 0, 0.15)';
                    e.currentTarget.style.transform = 'translateY(-8px)';
                    e.currentTarget.style.borderColor = '#3b82f6';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.08)';
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.borderColor = '#e5e7eb';
                  }}
                >
                  <img 
                    src={area.icon}
                    alt={area.title}
                    style={{
                      width: '100px',
                      height: '100px',
                      marginBottom: '20px',
                      objectFit: 'contain'
                    }}
                  />
                  <h3 style={{
                    fontSize: '16px',
                    fontWeight: '600',
                    color: '#1f2937',
                    margin: '0'
                  }}>
                    {area.title}
                  </h3>
                </div>
              );
            })}
          </div>
        </section>

        {/* Areas of Coverage Section */}
        <section style={{ marginBottom: '80px' }}>
          <h2 style={{
            fontSize: '36px',
            fontWeight: '700',
            color: '#1f2937',
            marginBottom: '50px',
            textAlign: 'center'
          }}>
            Areas of Coverage
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '30px',
            position: 'relative',
            paddingTop: '60px'
          }}>
            {/* Connecting lines SVG overlay with arrows */}
            <svg 
              style={{
                position: 'absolute',
                top: '0',
                left: '0',
                width: '100%',
                height: '80px',
                pointerEvents: 'none',
                zIndex: 0
              }}
              viewBox="0 0 1200 80"
              preserveAspectRatio="none"
            >
              {/* Define arrowhead marker */}
              <defs>
                <marker id="arrowhead2" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                  <polygon points="0 0, 10 3, 0 6" fill="#3b82f6" />
                </marker>
              </defs>
              
              {/* Dotted lines connecting cards with arrows */}
              <line x1="12.5%" y1="40" x2="37.5%" y2="40" stroke="#3b82f6" strokeWidth="2" strokeDasharray="8,4" markerEnd="url(#arrowhead2)" />
              <line x1="37.5%" y1="40" x2="62.5%" y2="40" stroke="#3b82f6" strokeWidth="2" strokeDasharray="8,4" markerEnd="url(#arrowhead2)" />
              <line x1="62.5%" y1="40" x2="87.5%" y2="40" stroke="#3b82f6" strokeWidth="2" strokeDasharray="8,4" markerEnd="url(#arrowhead2)" />
            </svg>

            {/* Cards with relative positioning */}
            {[
              { title: 'Ecosystem', icon: '/digitaltransformation/service_3d_1.png' },
              { title: 'Organization Culture', icon: '/digitaltransformation/service_3d_3.png' },
              { title: 'Change Management', icon: '/digitaltransformation/service_3d_4.png' },
              { title: 'Data & Insights', icon: '/digitaltransformation/service_3d_1.png' },
              { title: 'Customer Experience', icon: '/digitaltransformation/service_3d_2.png' },
              { title: 'Innovation', icon: '/digitaltransformation/service_3d_1.png' },
              { title: 'Technology', icon: '/digitaltransformation/service_3d_2.png' },
              { title: 'People & Skillset', icon: '/digitaltransformation/service_3d_4.png' }
            ].map((area, idx) => {
              const positionInRow = idx % 4;
              const offsetDown = positionInRow % 2 === 1 ? '40px' : '0';
              return (
                <div
                  key={idx}
                  style={{
                    background: '#f9fafb',
                    padding: '30px',
                    borderRadius: '8px',
                    border: '1px solid #e5e7eb',
                    textAlign: 'center',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                    animation: isVisible ? `slideUp 0.8s ease-out ${idx * 0.05}s both` : 'none',
                    position: 'relative',
                    zIndex: 1,
                    marginTop: offsetDown,
                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = '0 12px 24px rgba(0, 0, 0, 0.15)';
                    e.currentTarget.style.transform = 'translateY(-8px)';
                    e.currentTarget.style.borderColor = '#3b82f6';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.08)';
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.borderColor = '#e5e7eb';
                  }}
                >
                  <img 
                    src={area.icon}
                    alt={area.title}
                    style={{
                      width: '100px',
                      height: '100px',
                      marginBottom: '20px',
                      objectFit: 'contain'
                    }}
                  />
                  <h3 style={{
                    fontSize: '16px',
                    fontWeight: '600',
                    color: '#1f2937',
                    margin: '0'
                  }}>
                    {area.title}
                  </h3>
                </div>
              );
            })}
          </div>
        </section>
      </div>

      {/* CTA Section */}
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 20px 80px 20px' }}>
        <section style={{
          background: 'linear-gradient(135deg, rgba(25, 181, 254, 0.8) 0%, rgba(25, 181, 254, 1) 100%)',
          color: '#fff',
          padding: '60px 40px',
          borderRadius: '12px',
          textAlign: 'center'
        }}>
          <h2 style={{ fontSize: '32px', margin: '0 0 20px 0' }}>
            Ready to Transform Your Business?
          </h2>
          <p style={{ fontSize: '16px', marginBottom: '30px', opacity: 0.95 }}>
            Let us help you identify the root cause and deliver efficient digital solutions.
          </p>
          <button style={{
            padding: '14px 40px',
            background: '#fff',
            color: '#3b82f6',
            border: 'none',
            borderRadius: '6px',
            fontSize: '16px',
            fontWeight: '600',
            cursor: 'pointer',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = '#f0f9ff';
            e.currentTarget.style.transform = 'translateY(-2px)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = '#fff';
            e.currentTarget.style.transform = 'translateY(0)';
          }}
          >
            Contact Us Today
          </button>
        </section>
      </div>

      <style>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(60px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-60px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default DigitalTransformation;
