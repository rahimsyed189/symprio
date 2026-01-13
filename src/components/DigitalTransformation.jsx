import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// Zigzag Features Component
const ZigzagFeatures = () => {
  const [scrollOffset, setScrollOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const zigzagSection = document.getElementById('zigzag-section');
      if (zigzagSection) {
        // Get section position in document
        const sectionRect = zigzagSection.getBoundingClientRect();
        const sectionTopInDoc = sectionRect.top + window.scrollY;
        const sectionHeight = sectionRect.height;
        
        // Get current scroll position
        const currentScroll = window.scrollY;
        
        // Calculate how much we've scrolled INTO the section
        const scrollIntoSection = currentScroll - sectionTopInDoc;
        
        // Only animate when section is in/near view
        if (scrollIntoSection > -window.innerHeight && scrollIntoSection < sectionHeight) {
          // Clamp between 0 and section height for smooth progression
          const clampedScroll = Math.max(0, Math.min(scrollIntoSection, sectionHeight));
          // Map to line animation (smaller multiplier for controlled flow)
          setScrollOffset(clampedScroll / 3);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const features = [
    {
      title: 'Enterprise Platform',
      description: 'Building scalable enterprise solutions that streamline operations, enhance collaboration, and drive digital transformation at organizational level. Our enterprise platforms provide robust infrastructure for modern business needs.',
      image: '/digitaltransformation/enterprise-platform.png',
      imagePosition: 'left'
    },
    {
      title: 'Hyper Automation',
      description: 'Advanced automation capabilities that combine RPA, AI, and intelligent process automation to eliminate manual work, reduce errors, and accelerate business processes. Unlock unprecedented efficiency gains across your operations.',
      image: '/digitaltransformation/hyper-automation-new.png',
      imagePosition: 'right'
    },
    {
      title: 'Upskilling and Reskilling',
      description: 'Comprehensive workforce development programs designed to equip your teams with cutting-edge skills. Our training initiatives ensure your employees stay ahead of technological advancements and business evolution.',
      image: '/digitaltransformation/upskilling-reskilling.png',
      imagePosition: 'left'
    },
    {
      title: 'Improving Customer Experience',
      description: 'Enhance customer interactions through intelligent automation, personalized engagement, and seamless omnichannel experiences. Deliver exceptional value at every touchpoint and build lasting customer relationships.',
      image: '/digitaltransformation/customer-experience-new.png',
      imagePosition: 'right'
    },
    {
      title: 'Enhancing Operational Efficiency',
      description: 'Optimize workflows, reduce operational costs, and improve resource utilization through intelligent automation. Achieve more with less while maintaining quality standards and improving employee satisfaction.',
      image: '/digitaltransformation/operational-efficiency-new.png',
      imagePosition: 'left'
    },
    {
      title: 'Increasing Service Accessibility',
      description: 'Make your services accessible to a broader audience through digital-first approaches. Ensure 24/7 availability, multi-channel support, and inclusive design that serves all customer segments effectively.',
      image: '/digitaltransformation/service-accessibility.png',
      imagePosition: 'right'
    },
    {
      title: 'Data Security',
      description: 'Protect your organization with comprehensive security measures, advanced threat detection, and compliance frameworks. Our data security solutions ensure confidentiality, integrity, and availability of your critical information.',
      image: '/digitaltransformation/data-security.png',
      imagePosition: 'left'
    }
  ];

  return (
    <section id="zigzag-section" style={{
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '60px 20px',
      position: 'relative'
    }}>
      {/* Animated Scroll-Triggered Glowing Elements */}
      <div style={{
        position: 'absolute',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0
      }}>
        {/* Glowing orbs that appear on scroll */}
        <div style={{
          position: 'absolute',
          width: '120px',
          height: '120px',
          left: '50%',
          transform: 'translateX(-50%)',
          top: '150px',
          opacity: Math.min(scrollOffset / 100, 1),
          transition: 'opacity 0.3s ease-out'
        }}>
          <div style={{
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(102, 217, 255, 0.6) 0%, rgba(102, 217, 255, 0.2) 70%, transparent 100%)',
            boxShadow: '0 0 40px rgba(102, 217, 255, 0.5)',
            animation: 'pulse 3s ease-in-out infinite'
          }}/>
        </div>

        {/* Additional scroll-triggered elements */}
        <div style={{
          position: 'absolute',
          width: '100px',
          height: '100px',
          left: '50%',
          transform: 'translateX(-50%)',
          top: '800px',
          opacity: Math.min(Math.max((scrollOffset - 300) / 100, 0), 1),
          transition: 'opacity 0.3s ease-out'
        }}>
          <div style={{
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(139, 92, 246, 0.6) 0%, rgba(139, 92, 246, 0.2) 70%, transparent 100%)',
            boxShadow: '0 0 40px rgba(139, 92, 246, 0.5)',
            animation: 'pulse 3s ease-in-out infinite 0.5s'
          }}/>
        </div>
      </div>

      {/* Content with relative positioning */}
      <div style={{ position: 'relative', zIndex: 1 }}>
      {/* Animated Title Section */}
      <div style={{
        textAlign: 'center',
        marginBottom: '80px'
      }}>
        <h2
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-offset="50"
          style={{
            fontSize: '48px',
            fontWeight: '800',
            color: '#1f2937',
            margin: '0 0 15px 0',
            lineHeight: '1.3'
          }}
        >
          Digital Transformation Solutions
        </h2>
        <div
          data-aos="fade-up"
          data-aos-delay="100"
          data-aos-duration="800"
          data-aos-offset="50"
          style={{
            width: '80px',
            height: '5px',
            background: 'linear-gradient(90deg, #19b5fe, #0f8cc8)',
            margin: '20px auto 30px',
            borderRadius: '3px'
          }}
        />
        <p
          data-aos="fade-up"
          data-aos-delay="150"
          data-aos-duration="800"
          data-aos-offset="50"
          style={{
            fontSize: '18px',
            color: '#6b7280',
            maxWidth: '600px',
            margin: '0 auto',
            lineHeight: '1.6'
          }}
        >
          Comprehensive solutions designed to accelerate your digital journey and drive sustainable business growth
        </p>
      </div>

      {features.map((feature, idx) => (
        <div
          key={idx}
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '50px',
            alignItems: 'center',
            marginBottom: '60px',
            gridAutoFlow: feature.imagePosition === 'right' ? 'dense' : 'initial'
          }}
        >
          {/* Image Container */}
          <div
            data-aos={feature.imagePosition === 'left' ? 'fade-right' : 'fade-left'}
            data-aos-duration="900"
            data-aos-offset="50"
            style={{
              order: feature.imagePosition === 'right' ? 2 : 1,
              display: 'flex',
              alignItems: 'flex-start',
              justifyContent: feature.imagePosition === 'left' ? 'flex-start' : 'flex-end',
              minHeight: 'auto',
              backgroundColor: '#ffffff',
              borderRadius: '0',
              overflow: 'visible',
              padding: '0'
            }}
          >
            <img
              src={feature.image}
              alt={feature.title}
              style={{
                maxWidth: '100%',
                maxHeight: '200px',
                objectFit: 'contain',
                width: 'auto',
                height: 'auto'
              }}
            />
          </div>

          {/* Text Container */}
          <div
            data-aos={feature.imagePosition === 'left' ? 'fade-left' : 'fade-right'}
            data-aos-delay="100"
            data-aos-duration="900"
            data-aos-offset="50"
            style={{
              order: feature.imagePosition === 'right' ? 1 : 2
            }}
          >
            <h3 style={{
              fontSize: '36px',
              fontWeight: '800',
              color: '#1f2937',
              margin: '0 0 20px 0',
              lineHeight: '1.3'
            }}>
              {feature.title}
            </h3>
            <div style={{
              width: '60px',
              height: '4px',
              background: 'linear-gradient(90deg, #19b5fe, #0f8cc8)',
              borderRadius: '2px',
              margin: '20px 0 30px 0'
            }} />
            <p style={{
              fontSize: '16px',
              color: '#6b7280',
              lineHeight: '1.8',
              margin: '0',
              textAlign: 'justify'
            }}>
              {feature.description}
            </p>
          </div>
        </div>
      ))}
      </div>

      <style>{`
        @keyframes dashflow {
          0% {
            stroke-dasharray: 1000;
            stroke-dashoffset: 0;
          }
          100% {
            stroke-dasharray: 1000;
            stroke-dashoffset: -1000;
          }
        }

        @keyframes pulse {
          0%, 100% {
            r: 8;
            opacity: 0.7;
          }
          50% {
            r: 12;
            opacity: 0.3;
          }
        }
      `}</style>
    </section>
  );
};

const DigitalTransformation = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const [containerVisible, setContainerVisible] = useState(false);
  const [coverageItemsScroll, setCoverageItemsScroll] = useState(0);

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

  useEffect(() => {
    const handleCoverageScroll = () => {
      const coverageSection = document.getElementById('coverage-section');
      if (coverageSection) {
        const rect = coverageSection.getBoundingClientRect();
        const sectionTop = rect.top;
        const sectionHeight = rect.height;
        
        // Calculate progress: 0 when section is below, 1 when fully visible
        const progress = Math.max(0, Math.min(1, (window.innerHeight - sectionTop) / (window.innerHeight + sectionHeight * 0.5)));
        setCoverageItemsScroll(progress);
      }
    };

    window.addEventListener('scroll', handleCoverageScroll);
    return () => window.removeEventListener('scroll', handleCoverageScroll);
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
          borderRadius: '0',
          padding: '50px',
          boxShadow: 'none',
          border: 'none',
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

      {/* Zigzag Features Section */}
      <ZigzagFeatures />

      {/* Rest of Content */}
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 20px 80px 20px' }}>
        {/* Areas of Coverage Section - Simple Layout */}
        <section id="coverage-section" style={{ marginBottom: '80px' }}>
          <h2 style={{
            fontSize: '36px',
            fontWeight: '700',
            color: '#1f2937',
            marginBottom: '80px',
            textAlign: 'center',
            animation: 'fadeIn 0.8s ease-out both'
          }}>
            Areas of Coverage
          </h2>

          {/* Simple 2-Column Layout */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '200px 1fr',
            gap: '120px',
            alignItems: 'flex-start',
            maxWidth: '1000px',
            margin: '0 auto'
          }}>
            {/* Left: Smaller Hub Image */}
            <div style={{
              position: 'relative',
              width: '200px',
              height: '200px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              animation: 'fadeIn 0.8s ease-out 0.1s both'
            }}>
              <img
                src="/digitaltransformation/coverage-hub.png"
                alt="Areas of Coverage Hub"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain'
                }}
              />
            </div>

            {/* Right: Scroll-Animated List */}
            <div style={{
              paddingTop: '20px'
            }}>
              <ul style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '24px 40px'
              }}>
                {[
                  'Ecosystem',
                  'Organization Culture',
                  'Change Management',
                  'Data & Insights',
                  'Customer Experience',
                  'Innovation',
                  'Technology',
                  'People & Skillset'
                ].map((item, idx) => {
                  // Calculate when this item should appear during scroll (staggered)
                  const itemTrigger = idx * 0.08; // Each item appears at 8% progress intervals
                  const itemVisible = coverageItemsScroll > itemTrigger;
                  const itemProgress = Math.max(0, Math.min(1, (coverageItemsScroll - itemTrigger) * 10));
                  
                  return (
                    <li
                      key={idx}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px',
                        opacity: itemProgress,
                        transform: `translateX(${(1 - itemProgress) * 40}px) translateY(${(1 - itemProgress) * 20}px)`,
                        transition: 'all 0.4s ease-out'
                      }}
                    >
                      <div style={{
                        width: '20px',
                        height: '20px',
                        borderRadius: '4px',
                        border: '2px solid #19b5fe',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: '#f0f9ff',
                        flexShrink: 0,
                        position: 'relative'
                      }}>
                        {itemVisible && (
                          <svg
                            width="14"
                            height="14"
                            viewBox="0 0 14 14"
                            fill="none"
                            style={{
                              stroke: '#19b5fe',
                              strokeWidth: '2',
                              strokeLinecap: 'round',
                              strokeLinejoin: 'round',
                              animation: 'drawCheckmark 0.6s ease-out'
                            }}
                          >
                            <polyline points="2 7 6 10 12 3" />
                          </svg>
                        )}
                      </div>
                      <span style={{
                        color: '#4b5563',
                        fontSize: '15px',
                        fontWeight: '500',
                        lineHeight: '1.5'
                      }}>
                        {item}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
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

        @keyframes drawCheckmark {
          from {
            stroke-dasharray: 20;
            stroke-dashoffset: 20;
          }
          to {
            stroke-dasharray: 20;
            stroke-dashoffset: 0;
          }
        }

        @keyframes pulse {
          0%, 100% {
            box-shadow: 0 0 40px rgba(102, 217, 255, 0.5), inset 0 0 20px rgba(102, 217, 255, 0.2);
            transform: scale(1);
          }
          50% {
            box-shadow: 0 0 60px rgba(102, 217, 255, 0.8), inset 0 0 30px rgba(102, 217, 255, 0.4);
            transform: scale(1.05);
          }
        }
      `}</style>
    </div>
  );
};

export default DigitalTransformation;
