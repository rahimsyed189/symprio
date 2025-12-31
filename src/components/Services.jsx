import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Services = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = [
    {
      number: '01',
      title: 'Digital Transformation',
      description: 'Digital transformation is a continuous journey that requires strategic planning, strong leadership, and a holistic approach that considers technology, people, processes, and culture.',
      link: '/digital-transformation'
    },
    {
      number: '02',
      title: 'RPA',
      description: 'RPA helps organizations improve efficiency, accuracy, and speed of business processes, reduce costs, and free up human workers to focus on more strategic and value-added activities.',
      link: 'https://www.symprio.com/robotic-process-automation/'
    },
    {
      number: '03',
      title: 'ERP Practice (Oracle)',
      description: 'Successful ERP practice can bring numerous benefits to an organization, including increased operational efficiency, customer service, better financial management and reduced costs.',
      link: 'https://www.symprio.com/erp-practice-oracle/'
    },
    {
      number: '04',
      title: 'Chatbots',
      description: 'Chatbots are constantly evolving with advancements in AI and natural language processing technologies, making them increasingly sophisticated and capable of providing more human-like interactions.',
      link: '/chatbots'
    },
    {
      number: '05',
      title: 'Custom Development',
      description: 'Custom development is often undertaken by in-house development teams or by engaging third-party software development vendors who have the expertise in creating custom software solutions.',
      link: 'https://www.symprio.com/custom-development/'
    }
  ];

  return (
    <>
      <section style={{ 
        maxWidth: '1200px', 
        margin: '0 auto', 
        padding: '80px 20px',
        backgroundColor: '#f9fafb'
      }}>
        <div style={{
          textAlign: 'center',
          marginBottom: '60px'
        }}>
          <h2 style={{
            fontSize: '36px',
            fontWeight: '700',
            color: '#1f2937',
            margin: '0'
          }}>
            Choose The Best IT Service Company
          </h2>
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
                padding: '30px',
                background: '#ffffff',
                border: '1px solid #e5e7eb',
                borderRadius: '8px',
                transition: 'all 0.3s ease',
                textAlign: 'left',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
                position: 'relative',
                overflow: 'hidden',
                cursor: 'pointer',
                animation: isVisible ? `slideUp 0.8s ease-out ${idx * 0.1}s both` : 'none'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.15)';
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.borderColor = '#3b82f6';
                e.currentTarget.style.backgroundColor = '#3b82f6';
                // Change text colors on hover
                const contentDiv = e.currentTarget.querySelector('div[style*="position: relative"]');
                if (contentDiv) {
                  const numberDiv = contentDiv.querySelector('div:first-child');
                  const titleH3 = contentDiv.querySelector('h3');
                  const paragraphP = contentDiv.querySelector('p');
                  const spanRead = contentDiv.querySelector('span');
                  if (numberDiv) numberDiv.style.color = '#ffffff';
                  if (titleH3) titleH3.style.color = '#ffffff';
                  if (paragraphP) paragraphP.style.color = '#e0e7ff';
                  if (spanRead) {
                    spanRead.style.color = '#ffffff';
                    spanRead.style.textDecoration = 'underline';
                  }
                }
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.1)';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = '#e5e7eb';
                e.currentTarget.style.backgroundColor = '#ffffff';
                // Reset text colors
                const contentDiv = e.currentTarget.querySelector('div[style*="position: relative"]');
                if (contentDiv) {
                  const numberDiv = contentDiv.querySelector('div:first-child');
                  const titleH3 = contentDiv.querySelector('h3');
                  const paragraphP = contentDiv.querySelector('p');
                  const spanRead = contentDiv.querySelector('span');
                  if (numberDiv) numberDiv.style.color = '#3b82f6';
                  if (titleH3) titleH3.style.color = '#1f2937';
                  if (paragraphP) paragraphP.style.color = '#6b7280';
                  if (spanRead) {
                    spanRead.style.color = '#3b82f6';
                    spanRead.style.textDecoration = 'none';
                  }
                }
              }}
              onClick={() => {
                if (service.link.startsWith('/')) {
                  navigate(service.link);
                } else {
                  window.open(service.link, '_blank');
                }
              }}
            >
              {/* Large watermark number in bottom right */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '-20px',
                  right: '-20px',
                  fontSize: '100px',
                  fontWeight: '800',
                  color: '#3b82f6',
                  opacity: '0.08',
                  pointerEvents: 'none'
                }}
              >
                {service.number}
              </div>

              {/* Content */}
              <div style={{ position: 'relative', zIndex: 1 }}>
                <div style={{
                  fontSize: '32px',
                  fontWeight: '700',
                  color: '#3b82f6',
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
                  margin: '0 0 20px 0',
                  lineHeight: '1.6',
                  animation: isVisible ? `fadeInUp 0.8s ease-out ${idx * 0.1 + 0.25}s both` : 'none'
                }}>
                  {service.description}
                </p>
                <span 
                  style={{
                    color: '#3b82f6',
                    textDecoration: 'none',
                    fontWeight: '600',
                    fontSize: '14px',
                    display: 'inline-block',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = '#1e40af';
                    e.currentTarget.style.transform = 'translateX(5px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = '#3b82f6';
                    e.currentTarget.style.transform = 'translateX(0)';
                  }}
                >
                  Read More →
                </span>
              </div>
            </div>
          ))}
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






