import React, { useState, useEffect } from 'react';

export default function KeyBenefits() {
  const [isVisible, setIsVisible] = useState(false);
  const [containerVisible, setContainerVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('keybenefits-container');
      if (element) {
        const rect = element.getBoundingClientRect();
        const isInView = rect.top < window.innerHeight * 0.75;
        if (isInView) {
          setContainerVisible(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const benefits = [
    {
      title: "End-to-End Digital Transformation",
      description: "From assessment to execution, we guide your organisation through every stage of its digital journey. We combine domain expertise with proven methodologies to optimize processes, integrate modern technologies and align solutions with your business goals."
    },
    {
      title: "AI & Agentic AI Solutions",
      description: "Unlike traditional AI assistants, agentic AI solutions act as autonomous digital team members capable of reasoning, planning and acting with minimal oversight. Symprio delivers autonomous agents for customer service, sales, supply chain and more, enabling enterprises to scale efficiency and innovation."
    },
    {
      title: "Trusted Industry Expertise",
      description: "Our consultants have deep experience across sectors such as banking, public sector, telecom, healthcare and manufacturing. With offices in Silicon Valley and the Indo-Pacific region, we combine global know-how with local insight."
    }
  ];

  return (
    <div style={{ background: '#fff' }}>
      {/* Banner with Dark Gradient */}
      <div style={{
        background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
        color: '#fff',
        padding: '60px 60px 100px',
        textAlign: 'left',
        marginTop: '0',
        position: 'relative',
        minHeight: '280px',
        display: 'flex',
        alignItems: 'flex-start',
        overflow: 'hidden'
      }}>
        <div style={{ maxWidth: '100%', margin: '0', paddingLeft: '0', paddingTop: '0', position: 'relative', zIndex: 2 }}>
          <h1 data-aos="slide-left" data-aos-duration="900" style={{
            fontSize: '48px',
            fontWeight: '700',
            margin: '0 0 15px 0',
            color: '#fff',
            animation: isVisible ? 'slideInLeft 0.8s ease-out 0.1s both' : 'none',
            textAlign: 'left'
          }}>
            Why Choose Symprio?
          </h1>
          <p data-aos="slide-left" data-aos-delay="150" data-aos-duration="900" style={{
            fontSize: '18px',
            color: '#e0e0e0',
            margin: 0,
            animation: isVisible ? 'slideInLeft 0.8s ease-out 0.2s both' : 'none',
            textAlign: 'left'
          }}>
            Our core capabilities that drive your success
          </p>
        </div>
      </div>

      {/* Benefits Container - Overlapping Banner */}
      <div 
        id="keybenefits-container"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-offset="100"
        style={{
          position: 'relative',
          marginTop: '-80px',
          marginBottom: '80px',
          maxWidth: '1200px',
          margin: '-80px auto 80px',
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
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '40px'
          }}>
        {benefits.map((benefit, idx) => (
          <div
            key={idx}
            data-aos={idx % 2 === 0 ? "fade-left" : "fade-right"}
            data-aos-delay={idx * 150}
            data-aos-duration="800"
            data-aos-once="false"
            style={{
              padding: '40px',
              background: 'linear-gradient(135deg, #19b5fe 0%, #0f8cc8 100%)',
              borderRadius: '12px',
              transition: 'all 0.4s ease',
              position: 'relative',
              cursor: 'pointer',
              minHeight: '340px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              overflow: 'hidden',
              transform: 'scale(1)',
              boxShadow: '0 5px 15px rgba(0, 0, 0, 0.08)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = '0 12px 30px rgba(0, 0, 0, 0.15)';
              e.currentTarget.style.transform = 'translateY(-8px)';
              const titleElement = e.currentTarget.querySelector('h3');
              const descElement = e.currentTarget.querySelector('p');
              if (titleElement) {
                titleElement.style.transform = 'scale(1.1)';
              }
              if (descElement) {
                descElement.style.transform = 'scale(1.1)';
              }
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.08)';
              e.currentTarget.style.transform = 'translateY(0)';
              const titleElement = e.currentTarget.querySelector('h3');
              const descElement = e.currentTarget.querySelector('p');
              if (titleElement) {
                titleElement.style.transform = 'scale(1)';
              }
              if (descElement) {
                descElement.style.transform = 'scale(1)';
              }
            }}
          >
            <div style={{
              position: 'absolute',
              bottom: '-30px',
              right: '-30px',
              width: '220px',
              height: '220px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              opacity: 0.15,
              zIndex: 0,
              pointerEvents: 'none'
            }}>
              {idx === 0 ? (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{width: '100%', height: '100%', color: '#ffffff'}}>
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
                </svg>
              ) : idx === 1 ? (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{width: '100%', height: '100%', color: '#ffffff'}}>
                  <rect x="6" y="8" width="12" height="12" rx="2"/>
                  <path d="M9 8V6c0-1 .5-2 1-2h4c.5 0 1 1 1 2v2"/>
                  <circle cx="10" cy="13" r="1" fill="currentColor"/>
                  <circle cx="14" cy="13" r="1" fill="currentColor"/>
                  <path d="M9 16h6"/>
                  <path d="M7 11h1M16 11h1"/>
                </svg>
              ) : (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{width: '100%', height: '100%', color: '#ffffff'}}>
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                  <path d="M12 12h.01"/>
                </svg>
              )}
            </div>
            <h3 style={{
              fontSize: '24px',
              fontWeight: '700',
              color: '#ffffff',
              margin: '0 0 12px 0',
              transition: 'all 0.4s ease',
              transformOrigin: 'center'
            }}>
              {benefit.title}
            </h3>
            <p style={{
              fontSize: '13px',
              color: '#ffffff',
              lineHeight: '1.7',
              margin: '0',
              opacity: 0.95,
              transition: 'all 0.4s ease',
              transformOrigin: 'center'
            }}>
              {benefit.description}
            </p>
          </div>
        ))}
          </div>
        </div>
      </div>

      <style>{`
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
      `}</style>
    </div>
  );
}
