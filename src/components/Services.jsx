import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Services = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const [expandedCards, setExpandedCards] = useState({});

  useEffect(() => {
    setIsVisible(true);
    AOS.init({
      duration: 800,
      easing: 'ease-out',
      once: false,
      offset: 100
    });
  }, []);

  const toggleExpand = (idx) => {
    setExpandedCards(prev => ({
      ...prev,
      [idx]: !prev[idx]
    }));
  };

  const services = [
    {
      number: '01',
      title: 'Digital Transformation',
      description: 'Strategy, assessment and change management for enterprise‑wide digital journeys. We guide organizations through every stage of their digital transformation.',
      link: '/digital-transformation'
    },
    {
      number: '02',
      title: 'Agentic AI & AI‑Powered Solutions',
      description: 'Autonomous AI agents, generative AI and conversational AI to drive productivity. Symprio delivers agentic AI solutions for customer service, sales, supply chain and more.',
      link: '/agentic-ai'
    },
    {
      number: '03',
      title: 'Robotic Process Automation (RPA)',
      description: 'Comprehensive RPA services from assessment and CoE setup to bot development and support. Automate repetitive tasks and improve efficiency across your organization.',
      link: '/rpa'
    },
    {
      number: '04',
      title: 'ERP & Enterprise Platforms',
      description: 'Oracle Cloud/R12 implementations, integrations and upgrades. Deep APAC expertise with proven methodology for successful enterprise platform deployments.',
      link: '/erp'
    },
    {
      number: '06',
      title: 'Digital Workforce Services',
      description: 'Skilled IT and non‑IT professionals with flexible engagement models. Staff augmentation, managed teams and full outsourcing solutions tailored to your needs.',
      link: '/digital-workforce'
    },
    {
      number: '07',
      title: 'Custom Software Development',
      description: 'Full‑stack development, mobile apps and cloud‑native solutions. Agile methodologies and modern frameworks to deliver solutions aligned with your business goals.',
      link: '/custom-development'
    }
  ];

  return (
    <>
      <section style={{
        maxWidth: '100%', 
        margin: '0', 
        padding: '50px 20px',
        background: 'linear-gradient(135deg, #0f172a 0%, #0891b2 100%)',
        borderRadius: '24px',
        borderTop: '3px solid #ffffff',
        position: 'relative',
        overflow: 'hidden'
      }}>
      {/* Bubbles */}
      <div style={{
        position: 'absolute',
        width: '200px',
        height: '200px',
        background: 'rgba(255, 255, 255, 0.05)',
        borderRadius: '50%',
        top: '-50px',
        left: '10%',
        zIndex: 1,
        pointerEvents: 'none'
      }} />
      <div style={{
        position: 'absolute',
        width: '150px',
        height: '150px',
        background: 'rgba(59, 130, 246, 0.1)',
        borderRadius: '50%',
        bottom: '50px',
        right: '10%',
        zIndex: 1,
        pointerEvents: 'none'
      }} />
      <div style={{
        position: 'absolute',
        width: '100px',
        height: '100px',
        background: 'rgba(139, 92, 246, 0.08)',
        borderRadius: '50%',
        top: '50%',
        left: '5%',
        zIndex: 1,
        pointerEvents: 'none'
      }} />
      <div style={{
        position: 'absolute',
        width: '120px',
        height: '120px',
        background: 'rgba(59, 130, 246, 0.08)',
        borderRadius: '50%',
        bottom: '20%',
        left: '20%',
        zIndex: 1,
        pointerEvents: 'none'
      }} />
      <div style={{
        position: 'absolute',
        width: '90px',
        height: '90px',
        background: 'rgba(139, 92, 246, 0.1)',
        borderRadius: '50%',
        top: '30%',
        right: '5%',
        zIndex: 1,
        pointerEvents: 'none'
      }} />
        <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 10 }}>
          <div style={{
            textAlign: 'center',
            marginBottom: '50px'
          }}>
            <h2 style={{
              fontSize: '36px',
              fontWeight: '700',
              color: '#ffffff',
              margin: '0'
            }}
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-once="false">
              Choose The Best IT Service Company
            </h2>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '25px',
            justifyItems: 'center',
            maxWidth: '1100px',
            margin: '0 auto'
          }}>
            {services.map((service, idx) => (
              <div
                key={idx}
                data-aos="fade-up"
                data-aos-delay={idx * 100}
                data-aos-duration="1000"
                data-aos-offset="100"
                data-aos-once="false"
                style={{
                  padding: '30px',
                  background: '#ffffff',
                  border: '1.5px solid #e5e7eb',
                  borderRadius: '0px',
                  transition: 'all 0.3s ease',
                  textAlign: 'left',
                  boxShadow: 'none',
                  position: 'relative',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  minHeight: '380px',
                  display: 'flex',
                  flexDirection: 'column'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 10px 40px rgba(0, 0, 0, 0.1)';
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.borderColor = '#cbd5e1';
                  e.currentTarget.style.backgroundColor = '#ffffff';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = '#e5e7eb';
                  e.currentTarget.style.backgroundColor = '#ffffff';
                }}
                onClick={() => {
                  if (service.link.startsWith('/')) {
                    navigate(service.link);
                  } else {
                    window.open(service.link, '_blank');
                  }
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    bottom: '-20px',
                    right: '-20px',
                    fontSize: '100px',
                    fontWeight: '800',
                    color: '#19b5fe',
                    opacity: '0.1',
                    pointerEvents: 'none'
                  }}
                >
                  {service.number}
                </div>

                <div style={{
                  position: 'absolute',
                  top: '10px',
                  right: '10px',
                  width: '140px',
                  height: '140px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  opacity: 0.1,
                  zIndex: 0,
                  pointerEvents: 'none'
                }}>
                  {idx === 0 ? (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{width: '100%', height: '100%', color: '#3b82f6'}}>
                      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
                    </svg>
                  ) : idx === 1 ? (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{width: '100%', height: '100%', color: '#3b82f6'}}>
                      <rect x="6" y="8" width="12" height="12" rx="2"/>
                      <path d="M9 8V6c0-1 .5-2 1-2h4c.5 0 1 1 1 2v2"/>
                      <circle cx="10" cy="13" r="1" fill="currentColor"/>
                      <circle cx="14" cy="13" r="1" fill="currentColor"/>
                      <path d="M9 16h6"/>
                      <path d="M7 11h1M16 11h1"/>
                    </svg>
                  ) : idx === 2 ? (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{width: '100%', height: '100%', color: '#3b82f6'}}>
                      <path d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                      <circle cx="9.5" cy="7" r="4"/>
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                    </svg>
                  ) : idx === 3 ? (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{width: '100%', height: '100%', color: '#3b82f6'}}>
                      <rect x="3" y="4" width="18" height="18" rx="2"/>
                      <path d="M16 2v4M8 2v4M3 10h18"/>
                    </svg>
                  ) : idx === 4 ? (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{width: '100%', height: '100%', color: '#3b82f6'}}>
                      <path d="M12 2v20M2 12h20"/>
                      <path d="M6 6h12v12H6z"/>
                    </svg>
                  ) : (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{width: '100%', height: '100%', color: '#3b82f6'}}>
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                      <circle cx="9" cy="7" r="4"/>
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                    </svg>
                  )}
                </div>

                <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'space-between' }}>
                  <div>
                    <div style={{
                      fontSize: '32px',
                      fontWeight: '700',
                      color: '#19b5fe',
                      marginBottom: '15px',
                      animation: isVisible ? `scaleIn 0.8s ease-out ${idx * 0.1 + 0.1}s both` : 'none'
                    }}>
                      {service.number}
                    </div>
                    <h3 style={{
                      fontSize: '20px',
                      fontWeight: '600',
                      color: '#1f2937',
                      margin: '0 0 15px 0',
                      animation: isVisible ? `fadeInUp 0.8s ease-out ${idx * 0.1 + 0.15}s both` : 'none'
                    }}>
                      {service.title}
                    </h3>
                    <div
                      style={{
                        width: '40px',
                        height: '3px',
                        background: 'linear-gradient(90deg, #3b82f6, #8b5cf6)',
                        marginBottom: '15px',
                        borderRadius: '2px',
                        animation: isVisible ? `expandLine 0.8s ease-out ${idx * 0.1 + 0.2}s both` : 'none'
                      }}
                    />
                    <p style={{
                      fontSize: '14px',
                      color: '#6b7280',
                      margin: '0 0 15px 0',
                      lineHeight: '1.6',
                      animation: isVisible ? `fadeInUp 0.8s ease-out ${idx * 0.1 + 0.25}s both` : 'none',
                      display: '-webkit-box',
                      WebkitLineClamp: expandedCards[idx] ? 'unset' : '3',
                      WebkitBoxOrient: 'vertical',
                      overflow: expandedCards[idx] ? 'visible' : 'hidden',
                      textOverflow: 'ellipsis'
                    }}>
                      {service.description}
                    </p>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleExpand(idx);
                      }}
                      style={{
                        backgroundColor: '#19b5fe',
                        color: '#ffffff',
                        border: 'none',
                        padding: '10px 20px',
                        borderRadius: '4px',
                        fontSize: '14px',
                        fontWeight: '600',
                        cursor: 'pointer',
                        display: 'inline-block',
                        transition: 'all 0.3s ease',
                        width: 'fit-content'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = '#0f8cc8';
                        e.currentTarget.style.transform = 'scale(1.05)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = '#19b5fe';
                        e.currentTarget.style.transform = 'scale(1)';
                      }}
                    >
                      {expandedCards[idx] ? '− Show Less' : '+ Show More'}
                    </button>
                    <span 
                      style={{
                        color: '#19b5fe',
                        textDecoration: 'none',
                        fontWeight: '600',
                        fontSize: '14px',
                        display: 'inline-block',
                        transition: 'all 0.3s ease',
                        cursor: 'pointer'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = '#0f8cc8';
                        e.currentTarget.style.transform = 'translateX(5px)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = '#19b5fe';
                        e.currentTarget.style.transform = 'translateX(0)';
                      }}
                    >
                      Learn More →
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(15px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scaleIn {
          from {
            transform: scale(0.8);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }

        @keyframes expandLine {
          from {
            width: 0;
            opacity: 0;
          }
          to {
            width: 40px;
            opacity: 1;
          }
        }
      `}</style>
    </>
  );
};

export default Services;






