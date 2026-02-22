import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ReadyToStartCTA from './ReadyToStartCTA';

export default function DigitalWorkforce() {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    AOS.init({
      duration: 800,
      easing: 'ease-out',
      once: false,
      offset: 100
    });
    return () => AOS.refresh();
  }, []);

  return (
    <div>
      {/* Hero Banner */}
      <section style={{
        backgroundImage: `linear-gradient(135deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.3) 100%), url('/digitalworkforce/banner.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        position: 'relative',
        padding: '100px 20px 140px',
        textAlign: 'center',
        color: '#fff',
        minHeight: '500px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        {/* Banner content */}
        <div style={{ position: 'relative', zIndex: 2, maxWidth: '800px' }}>
          <h1 style={{
            fontSize: '64px',
            fontWeight: '800',
            color: '#ffffff',
            margin: '0 0 20px 0',
            lineHeight: '1.2',
            letterSpacing: '-2px'
          }} data-aos="fade-up">
            Digital Workforce Services
          </h1>
          <p style={{
            fontSize: '22px',
            color: '#e0e0e0',
            margin: 0,
            fontWeight: '300'
          }} data-aos="fade-up" data-aos-delay="100">
            Flexible, Transparent Talent Solutions
          </p>
        </div>
      </section>

      {/* Main content container */}
      <div style={{
        maxWidth: '1200px',
        margin: '-80px auto 0',
        padding: '0 20px',
        position: 'relative',
        zIndex: 10
      }}>

        {/* Introduction Section - Overlapping Container */}
        <section style={{ 
          marginBottom: '80px',
          background: '#ffffff',
          borderRadius: '12px',
          padding: '60px 50px',
          boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
          border: '2px solid #0891b2'
        }} data-aos="fade-up">
          <div style={{
            maxWidth: '900px',
            margin: '0 auto',
            textAlign: 'center'
          }}>
            <h2 style={{
              fontSize: '42px',
              fontWeight: '800',
              background: 'linear-gradient(135deg, #0f172a 0%, #0891b2 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              margin: '0 0 15px 0',
              lineHeight: '1.3'
            }}>
              About Our Services
            </h2>
            <div
              style={{
                width: '100px',
                height: '6px',
                background: 'linear-gradient(90deg, #0f172a 0%, #0891b2 100%)',
                margin: '20px auto 30px',
                borderRadius: '3px'
              }}
            />
              <p style={{
                fontSize: '16px',
                lineHeight: '1.8',
                color: '#4b5563',
                marginBottom: '20px'
              }}>
                Symprio provides flexible and transparent talent solutions to support large organizations. With a proven track record serving leading enterprises like Meta, Amway, AXA and AIA, we deliver skilled professionals across IT, software development, project management and business functions.
              </p>
              <p style={{
                fontSize: '16px',
                lineHeight: '1.8',
                color: '#4b5563',
                margin: '0'
              }}>
                We invest heavily in ongoing training, certifications and career development, ensuring our talent pool remains at the cutting edge of technology and business best practices. Our flexible engagement models scale with your needs.
              </p>
            </div>
        </section>

        {/* Offerings Section - Vertical Stack with Descriptions */}
        <section style={{ marginBottom: '100px', maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '44px',
            fontWeight: '800',
            color: '#1f2937',
            marginBottom: '80px',
            textAlign: 'center'
          }} data-aos="fade-up">
            Our Talent Offerings by Category
          </h2>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '50px'
          }}>
            {[
              {
                num: '01',
                title: 'IT, InfoSec & QA',
                icon: '🔒',
                description: 'Enterprise-grade IT support, security, and quality assurance professionals. Our specialists cover infrastructure, cloud architecture, and DevOps.',
                roles: ['IT Support Engineer', 'Security Consultant', 'Cloud Architect', 'Oracle Apps DBA', 'DevOps Engineer', 'QA Engineer'],
                background: 'linear-gradient(135deg, #fee2e2 0%, #fecaca 100%)',
                borderColor: '#fca5a5'
              },
              {
                num: '02',
                title: 'Software & Data Professionals',
                icon: '💻',
                description: 'Full-stack developers, architects, and data specialists. From mobile to cloud-native solutions, we have the expertise you need.',
                roles: ['Full-Stack Developer', 'Technical Lead', 'Solutions Architect', 'Front-End Developer', 'Data Scientist', 'Analytics Engineer'],
                background: 'linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%)',
                borderColor: '#7dd3fc'
              },
              {
                num: '03',
                title: 'Project Management',
                icon: '📊',
                description: 'Experienced project and program managers who deliver results. Scrum masters, PMs, and business analysts with proven track records.',
                roles: ['Scrum Master', 'Project Manager', 'Change Manager', 'Technical PM', 'Business Analyst', 'Program Manager'],
                background: 'linear-gradient(135deg, #dcfce7 0%, #bbf7d0 100%)',
                borderColor: '#86efac'
              },
              {
                num: '04',
                title: 'Non-IT Business Functions',
                icon: '🎯',
                description: 'Flexible staffing across HR, marketing, sales, and operations. We support diverse business functions beyond technology.',
                roles: ['HR Specialist', 'Recruiter', 'SEO Engineer', 'Marketing Specialist', 'Sales Lead', 'Operations Manager'],
                background: 'linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)',
                borderColor: '#fcd34d'
              }
            ].map((offering, idx) => (
              <div
                key={idx}
                data-aos={idx % 2 === 0 ? 'fade-left' : 'fade-right'}
                data-aos-delay={idx * 100}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '50px',
                  alignItems: 'center'
                }}
              >
                {/* Visual Side */}
                <div style={{
                  order: idx % 2 === 0 ? 1 : 2,
                  height: '300px',
                  borderRadius: '16px',
                  background: offering.background,
                  border: `3px solid ${offering.borderColor}`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '80px',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'all 0.4s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.05)';
                  e.currentTarget.style.boxShadow = '0 20px 50px rgba(0,0,0,0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                  e.currentTarget.style.boxShadow = 'none';
                }}>
                  {offering.icon}
                </div>

                {/* Content Side */}
                <div style={{ order: idx % 2 === 0 ? 2 : 1, padding: '30px' }}>
                  <div style={{
                    display: 'inline-block',
                    background: offering.background,
                    color: '#1f2937',
                    padding: '8px 16px',
                    borderRadius: '20px',
                    fontSize: '12px',
                    fontWeight: '700',
                    marginBottom: '15px'
                  }}>
                    CATEGORY 0{offering.num}
                  </div>
                  <h3 style={{
                    fontSize: '32px',
                    fontWeight: '800',
                    color: '#1f2937',
                    margin: '15px 0 15px 0',
                    lineHeight: '1.3'
                  }}>
                    {offering.title}
                  </h3>
                  <p style={{
                    fontSize: '16px',
                    color: '#4b5563',
                    lineHeight: '1.8',
                    marginBottom: '20px'
                  }}>
                    {offering.description}
                  </p>
                  <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '8px'
                  }}>
                    {offering.roles.map((role, i) => (
                      <span
                        key={i}
                        style={{
                          fontSize: '12px',
                          fontWeight: '700',
                          color: '#0c4a6e',
                          background: 'linear-gradient(135deg, rgba(8,145,178,0.15) 0%, rgba(8,145,178,0.05) 100%)',
                          padding: '6px 14px',
                          borderRadius: '20px',
                          border: '1px solid #0891b2',
                          transition: 'all 0.3s ease',
                          cursor: 'pointer'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = '#0891b2';
                          e.currentTarget.style.color = '#ffffff';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = 'linear-gradient(135deg, rgba(8,145,178,0.15) 0%, rgba(8,145,178,0.05) 100%)';
                          e.currentTarget.style.color = '#0c4a6e';
                        }}
                      >
                        {role}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Engagement Models Section - Comparison Table Approach */}
        <section style={{ marginBottom: '100px' }}>
          <h2 style={{
            fontSize: '44px',
            fontWeight: '800',
            color: '#1f2937',
            marginBottom: '80px',
            textAlign: 'center'
          }} data-aos="fade-up">
            How We Engage With You
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '30px',
            maxWidth: '1200px',
            margin: '0 auto'
          }}>
            {[
              {
                title: 'Digital Acceleration Service',
                icon: '🤝',
                color: '#0891b2',
                bgColor: '#dbeafe',
                keyPoints: [
                  'Add specialized talent to your teams',
                  'Fill specific skill gaps quickly',
                  'Scale up or down on demand',
                  'Maintain internal team control',
                  'Pay as you grow model'
                ],
                bestFor: 'Short-term projects, specific expertise needed'
              },
              {
                title: 'Managed Teams',
                icon: '👥',
                color: '#10b981',
                bgColor: '#dcfce7',
                keyPoints: [
                  'Dedicated Symprio team for your project',
                  'Agreed outcomes & SLAs',
                  'We manage hiring & training',
                  'Performance-based delivery',
                  'Scalable team model'
                ],
                bestFor: 'Full project delivery, medium-term engagements',
                featured: true
              },
              {
                title: 'Outsourcing',
                icon: '🏢',
                color: '#f59e0b',
                bgColor: '#fef3c7',
                keyPoints: [
                  'End-to-end function ownership',
                  'Strategy to execution',
                  'Complete responsibility',
                  'Business continuity guaranteed',
                  'Long-term partnership'
                ],
                bestFor: 'Entire business function, strategic focus'
              }
            ].map((model, idx) => (
              <div
                key={idx}
                data-aos="zoom-in"
                data-aos-delay={idx * 100}
                style={{
                  padding: '35px',
                  background: model.bgColor,
                  borderRadius: '16px',
                  border: `3px solid ${model.color}`,
                  transition: 'all 0.4s ease',
                  position: 'relative',
                  transform: model.featured ? 'scale(1.05)' : 'scale(1)',
                  boxShadow: model.featured ? '0 20px 50px rgba(8,145,178,0.25)' : '0 5px 15px rgba(0,0,0,0.08)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = model.featured ? 'scale(1.08)' : 'scale(1.03)';
                  e.currentTarget.style.boxShadow = '0 20px 50px rgba(0,0,0,0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = model.featured ? 'scale(1.05)' : 'scale(1)';
                  e.currentTarget.style.boxShadow = model.featured ? '0 20px 50px rgba(8,145,178,0.25)' : '0 5px 15px rgba(0,0,0,0.08)';
                }}
              >
                {model.featured && (
                  <div style={{
                    position: 'absolute',
                    top: '-15px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    background: model.color,
                    color: 'white',
                    padding: '6px 20px',
                    borderRadius: '20px',
                    fontSize: '11px',
                    fontWeight: '700',
                    textTransform: 'uppercase',
                    letterSpacing: '1px'
                  }}>
                    Most Popular
                  </div>
                )}
                
                <div style={{ fontSize: '48px', marginBottom: '15px', textAlign: 'center' }}>
                  {model.icon}
                </div>
                <h3 style={{
                  fontSize: '24px',
                  fontWeight: '800',
                  color: '#1f2937',
                  margin: '0 0 20px 0',
                  textAlign: 'center'
                }}>
                  {model.title}
                </h3>

                <div style={{
                  display: 'grid',
                  gap: '12px',
                  marginBottom: '25px'
                }}>
                  {model.keyPoints.map((point, i) => (
                    <div key={i} style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '10px'
                    }}>
                      <span style={{
                        color: model.color,
                        fontWeight: '700',
                        fontSize: '16px',
                        marginTop: '2px'
                      }}>✓</span>
                      <span style={{
                        fontSize: '13px',
                        color: '#4b5563',
                        lineHeight: '1.5'
                      }}>
                        {point}
                      </span>
                    </div>
                  ))}
                </div>

                <div style={{
                  paddingTop: '20px',
                  borderTop: `1px solid ${model.color}33`,
                  fontSize: '12px',
                  color: '#6b7280',
                  fontStyle: 'italic'
                }}>
                  <span style={{ fontWeight: '700', color: model.color }}>Best for:</span> {model.bestFor}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Workforce Development Section - Learning Pathways */}
        <section style={{ marginBottom: '100px' }}>
          <h2 style={{
            fontSize: '44px',
            fontWeight: '800',
            color: '#1f2937',
            marginBottom: '80px',
            textAlign: 'center'
          }} data-aos="fade-up">
            Continuous Learning & Development
          </h2>
          
          {/* Intro */}
          <div style={{
            maxWidth: '800px',
            margin: '0 auto 60px',
            textAlign: 'center',
            padding: '0 20px'
          }} data-aos="fade-up">
            <p style={{
              fontSize: '16px',
              lineHeight: '1.8',
              color: '#4b5563',
              margin: '0'
            }}>
              At Symprio, we invest significantly in ongoing training, professional certifications, and career development. Our talent stays at the forefront of technology and industry best practices.
            </p>
          </div>

          {/* Training Categories Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '30px',
            maxWidth: '1200px',
            margin: '0 auto'
          }}>
            {[
              {
                category: 'Cloud Certifications',
                icon: '☁️',
                programs: ['AWS', 'Azure', 'GCP'],
                description: 'Multi-cloud expertise for modern infrastructure',
                color: '#0891b2',
                bgColor: '#dbeafe'
              },
              {
                category: 'Enterprise Systems',
                icon: '🗄️',
                programs: ['Oracle', 'SAP', 'Salesforce'],
                description: 'Deep expertise in enterprise platforms',
                color: '#10b981',
                bgColor: '#dcfce7'
              },
              {
                category: 'Agile & DevOps',
                icon: '⚡',
                programs: ['Scrum Master', 'DevOps', 'CI/CD'],
                description: 'Modern development practices and tools',
                color: '#f59e0b',
                bgColor: '#fef3c7'
              },
              {
                category: 'Security & Compliance',
                icon: '🔐',
                programs: ['Security+', 'CISSP', 'GDPR'],
                description: 'Certified security and compliance expertise',
                color: '#ef4444',
                bgColor: '#fee2e2'
              },
              {
                category: 'AI & Machine Learning',
                icon: '🤖',
                programs: ['TensorFlow', 'PyTorch', 'Analytics'],
                description: 'Next-generation AI and ML capabilities',
                color: '#8b5cf6',
                bgColor: '#f3e8ff'
              },
              {
                category: 'Leadership Development',
                icon: '👨‍💼',
                programs: ['PM Training', 'Coaching', 'Management'],
                description: 'Build strong leaders and managers',
                color: '#ec4899',
                bgColor: '#ffe4e6'
              }
            ].map((training, idx) => (
              <div
                key={idx}
                data-aos="fade-up"
                data-aos-delay={idx * 100}
                style={{
                  padding: '30px',
                  background: training.bgColor,
                  border: `3px solid ${training.color}`,
                  borderRadius: '12px',
                  transition: 'all 0.4s ease',
                  cursor: 'pointer',
                  position: 'relative',
                  overflow: 'hidden'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-12px)';
                  e.currentTarget.style.boxShadow = `0 20px 50px ${training.color}33`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div style={{ fontSize: '40px', marginBottom: '12px' }}>
                  {training.icon}
                </div>
                <h4 style={{
                  fontSize: '18px',
                  fontWeight: '800',
                  color: training.color,
                  margin: '0 0 12px 0'
                }}>
                  {training.category}
                </h4>
                <p style={{
                  fontSize: '12px',
                  color: '#6b7280',
                  margin: '0 0 15px 0',
                  lineHeight: '1.5'
                }}>
                  {training.description}
                </p>
                <div style={{
                  display: 'flex',
                  gap: '6px',
                  flexWrap: 'wrap'
                }}>
                  {training.programs.map((program, i) => (
                    <span
                      key={i}
                      style={{
                        fontSize: '11px',
                        fontWeight: '700',
                        color: '#ffffff',
                        background: training.color,
                        padding: '4px 10px',
                        borderRadius: '12px'
                      }}
                    >
                      {program}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Why Choose Symprio - Value Comparison */}
        <section style={{ marginBottom: '60px', marginTop: '100px' }}>
          <h2 style={{
            fontSize: '44px',
            fontWeight: '800',
            color: '#1f2937',
            marginBottom: '15px',
            textAlign: 'center'
          }} data-aos="fade-up">
            Why Choose Symprio
          </h2>
          <p style={{
            fontSize: '16px',
            color: '#6b7280',
            textAlign: 'center',
            maxWidth: '700px',
            margin: '0 auto 80px',
            lineHeight: '1.6'
          }} data-aos="fade-up">
            We're not just a staffing company. We're your strategic partner in building world-class teams.
          </p>

          {/* Comparison Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '60px',
            maxWidth: '1200px',
            margin: '0 auto'
          }}>
            {/* Left Column - Challenges */}
            <div>
              <h3 style={{
                fontSize: '24px',
                fontWeight: '800',
                color: '#ef4444',
                marginBottom: '40px',
                paddingBottom: '20px',
                borderBottom: '3px solid #fee2e2'
              }} data-aos="fade-right">
                Traditional Staffing
              </h3>
              <div style={{
                display: 'grid',
                gap: '20px'
              }}>
                {[
                  { icon: '❌', text: 'Limited talent pool and quality', detail: 'Same profiles offered repeatedly' },
                  { icon: '⏱️', text: 'Long time-to-hire', detail: '4-8 weeks for placement' },
                  { icon: '💸', text: 'High cost overhead', detail: 'Expensive recruitment fees' },
                  { icon: '📍', text: 'Location-bound talent', detail: 'Limited geographic reach' },
                  { icon: '🔄', text: 'High turnover rates', detail: 'Poor team retention' },
                  { icon: '📊', text: 'No performance metrics', detail: 'Hard to measure ROI' }
                ].map((item, idx) => (
                  <div
                    key={idx}
                    data-aos="fade-right"
                    data-aos-delay={idx * 80}
                    style={{
                      padding: '20px',
                      background: '#fef2f2',
                      border: '2px solid #fee2e2',
                      borderRadius: '8px',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    <div style={{ fontSize: '24px', marginBottom: '8px' }}>
                      {item.icon}
                    </div>
                    <p style={{
                      fontSize: '14px',
                      fontWeight: '700',
                      color: '#7f1d1d',
                      margin: '0 0 6px 0'
                    }}>
                      {item.text}
                    </p>
                    <p style={{
                      fontSize: '12px',
                      color: '#a16162',
                      margin: '0'
                    }}>
                      {item.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Symprio Solutions */}
            <div>
              <h3 style={{
                fontSize: '24px',
                fontWeight: '800',
                color: '#10b981',
                marginBottom: '40px',
                paddingBottom: '20px',
                borderBottom: '3px solid #dcfce7'
              }} data-aos="fade-left">
                Symprio Difference
              </h3>
              <div style={{
                display: 'grid',
                gap: '20px'
              }}>
                {[
                  { icon: '⭐', text: 'Vetted elite talent', detail: 'Top 10% of professionals screened' },
                  { icon: '⚡', text: 'Fast turnaround', detail: '5-10 business days average' },
                  { icon: '💰', text: 'Flexible pricing', detail: 'Pay only for quality placements' },
                  { icon: '🌍', text: 'Global talent network', detail: '50+ countries, 24/7 coverage' },
                  { icon: '🤝', text: 'Dedicated support', detail: '90-day guarantee on placement' },
                  { icon: '📈', text: 'Clear outcomes', detail: 'Transparent ROI tracking & reporting' }
                ].map((item, idx) => (
                  <div
                    key={idx}
                    data-aos="fade-left"
                    data-aos-delay={idx * 80}
                    style={{
                      padding: '20px',
                      background: '#f0fdf4',
                      border: '2px solid #dcfce7',
                      borderRadius: '8px',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    <div style={{ fontSize: '24px', marginBottom: '8px' }}>
                      {item.icon}
                    </div>
                    <p style={{
                      fontSize: '14px',
                      fontWeight: '700',
                      color: '#065f46',
                      margin: '0 0 6px 0'
                    }}>
                      {item.text}
                    </p>
                    <p style={{
                      fontSize: '12px',
                      color: '#6ee7b7',
                      margin: '0'
                    }}>
                      {item.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

      </div>

      {/* CTA Section */}
      <ReadyToStartCTA />

      <style>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
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
}
