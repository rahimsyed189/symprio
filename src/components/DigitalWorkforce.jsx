import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function DigitalWorkforce() {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div>
      {/* Hero Banner */}
      <section style={{
        backgroundImage: 'url(/digitaltransformation/banner.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',
        padding: '40px 20px 40px',
        textAlign: 'center',
        marginTop: '0',
        color: '#fff'
      }}>
        {/* Dark overlay */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.4)',
          zIndex: 1
        }}></div>

        {/* Banner content */}
        <div style={{ position: 'relative', zIndex: 2, maxWidth: '600px' }}>
          <div style={{
            fontSize: '14px',
            color: '#e0e0e0',
            marginBottom: '20px',
            animation: isVisible ? 'fadeIn 0.8s ease-out 0.1s both' : 'none'
          }}>
            <span style={{ cursor: 'pointer' }} onClick={() => navigate('/')}>Home</span>
            <span style={{ margin: '0 10px' }}>/</span>
            <span>Digital Workforce</span>
          </div>
          <h1 style={{
            fontSize: '48px',
            fontWeight: '700',
            color: '#fff',
            margin: '0 0 20px 0',
            animation: isVisible ? 'slideDown 0.8s ease-out both' : 'none'
          }}>
            Digital Workforce Services
          </h1>
          <p style={{
            fontSize: '18px',
            color: '#e0e0e0',
            margin: 0,
            animation: isVisible ? 'fadeIn 0.8s ease-out 0.2s both' : 'none'
          }}>
            Flexible, Transparent Talent Solutions
          </p>
        </div>
      </section>

      {/* Main content container */}
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 20px'
      }}>

        {/* Introduction Section */}
        <section style={{ marginTop: '60px', marginBottom: '80px' }}>
          <div style={{
            maxWidth: '900px',
            margin: '0 auto'
          }}>
            <div style={{
              animation: isVisible ? 'slideUp 0.8s ease-out 0.1s both' : 'none'
            }}>
              <h2 style={{
                fontSize: '32px',
                fontWeight: '700',
                color: '#1f2937',
                marginBottom: '20px'
              }}>
                About Our Services
              </h2>
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
                marginBottom: '30px'
              }}>
                We invest heavily in ongoing training, certifications and career development, ensuring our talent pool remains at the cutting edge of technology and business best practices. Our flexible engagement models scale with your needs.
              </p>
            </div>
          </div>
        </section>

        {/* Offerings Section */}
        <section style={{ marginBottom: '80px' }}>
          <h2 style={{
            fontSize: '36px',
            fontWeight: '700',
            color: '#1f2937',
            marginBottom: '50px',
            textAlign: 'center'
          }}>
            Our Offerings
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '30px'
          }}>
            {[
              {
                title: 'IT, InfoSec & QA',
                description: 'IT support engineers, security consultants, cloud architects, Oracle Apps DBAs, DevOps engineers, mainframe developers and QA specialists.',
                roles: ['IT Support Engineer', 'Security Consultant', 'Cloud Architect', 'Oracle Apps DBA', 'DevOps Engineer', 'QA Engineer']
              },
              {
                title: 'Software & Data Professionals',
                description: 'Developers, technical leads, architects, full-stack and front-end developers, ETL engineers, data scientists and analytics specialists.',
                roles: ['Full-Stack Developer', 'Technical Lead', 'Solutions Architect', 'Front-End Developer', 'Data Scientist', 'Analytics Engineer']
              },
              {
                title: 'Project Management',
                description: 'Scrum masters, project managers, change managers, technical PMs and business analysts with proven delivery track records.',
                roles: ['Scrum Master', 'Project Manager', 'Change Manager', 'Technical PM', 'Business Analyst', 'Program Manager']
              },
              {
                title: 'Non-IT Roles',
                description: 'HR professionals, recruiters, SEO engineers, marketing specialists, sales leads and operations managers for diverse business needs.',
                roles: ['HR Specialist', 'Recruiter', 'SEO Engineer', 'Marketing Specialist', 'Sales Lead', 'Operations Manager']
              }
            ].map((offering, idx) => (
              <div
                key={idx}
                style={{
                  padding: '30px',
                  background: 'linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%)',
                  borderRadius: '12px',
                  transition: 'all 0.4s ease',
                  cursor: 'pointer',
                  boxShadow: '0 5px 15px rgba(0, 0, 0, 0.08)',
                  animation: isVisible ? `slideUp 0.8s ease-out ${idx * 0.1}s both` : 'none',
                  position: 'relative',
                  overflow: 'hidden'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 12px 30px rgba(0, 0, 0, 0.15)';
                  e.currentTarget.style.transform = 'translateY(-8px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.08)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <h3 style={{
                  fontSize: '20px',
                  fontWeight: '700',
                  color: '#000000',
                  margin: '0 0 12px 0'
                }}>
                  {offering.title}
                </h3>
                <p style={{
                  fontSize: '14px',
                  color: '#374151',
                  lineHeight: '1.7',
                  margin: '0 0 15px 0'
                }}>
                  {offering.description}
                </p>
                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '6px'
                }}>
                  {offering.roles.map((role, i) => (
                    <span
                      key={i}
                      style={{
                        fontSize: '11px',
                        fontWeight: '600',
                        color: '#0c4a6e',
                        background: 'rgba(12, 74, 110, 0.1)',
                        padding: '4px 10px',
                        borderRadius: '15px'
                      }}
                    >
                      {role}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Engagement Models Section */}
        <section style={{ marginBottom: '80px' }}>
          <h2 style={{
            fontSize: '36px',
            fontWeight: '700',
            color: '#1f2937',
            marginBottom: '50px',
            textAlign: 'center'
          }}>
            Engagement Models
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '30px',
            maxWidth: '1000px',
            margin: '0 auto'
          }}>
            {[
              {
                title: 'Staff Augmentation',
                description: 'Add specialized talent to your internal teams for specific projects or to fill skill gaps. Scale your team up or down based on demand with flexibility.',
                icon: '🤝'
              },
              {
                title: 'Managed Teams',
                description: 'A dedicated Symprio team delivers a project or function with agreed-upon outcomes, SLAs and deliverables. We manage hiring, training and performance.',
                icon: '👥'
              },
              {
                title: 'Outsourcing',
                description: 'End-to-end management of an entire business function. From strategy to execution, we own the outcomes and ensure business continuity.',
                icon: '🏢'
              }
            ].map((model, idx) => (
              <div
                key={idx}
                style={{
                  padding: '35px',
                  background: 'linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%)',
                  borderRadius: '12px',
                  boxShadow: '0 5px 15px rgba(0, 0, 0, 0.08)',
                  transition: 'all 0.4s ease',
                  textAlign: 'center',
                  animation: isVisible ? `slideUp 0.8s ease-out ${idx * 0.15}s both` : 'none'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 12px 30px rgba(0, 0, 0, 0.15)';
                  e.currentTarget.style.transform = 'translateY(-8px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.08)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <div style={{
                  fontSize: '40px',
                  marginBottom: '15px'
                }}>
                  {model.icon}
                </div>
                <h3 style={{
                  fontSize: '22px',
                  fontWeight: '700',
                  color: '#000000',
                  margin: '0 0 15px 0'
                }}>
                  {model.title}
                </h3>
                <p style={{
                  fontSize: '14px',
                  color: '#374151',
                  lineHeight: '1.7',
                  margin: 0
                }}>
                  {model.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Workforce Development Section */}
        <section style={{ marginBottom: '80px' }}>
          <h2 style={{
            fontSize: '36px',
            fontWeight: '700',
            color: '#1f2937',
            marginBottom: '50px',
            textAlign: 'center'
          }}>
            Workforce Development
          </h2>
          <div style={{
            maxWidth: '900px',
            margin: '0 auto',
            padding: '40px',
            background: 'linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%)',
            borderRadius: '12px',
            boxShadow: '0 5px 15px rgba(0, 0, 0, 0.08)',
            animation: isVisible ? 'slideUp 0.8s ease-out 0.1s both' : 'none'
          }}>
            <p style={{
              fontSize: '16px',
              lineHeight: '1.8',
              color: '#374151',
              margin: '0 0 25px 0'
            }}>
              At Symprio, we believe our talent is our greatest asset. We invest significantly in ongoing training, professional certifications, and career development to ensure our team stays at the forefront of technology and industry best practices.
            </p>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '20px'
            }}>
              {[
                'Cloud Certifications (AWS, Azure, GCP)',
                'Oracle Certifications',
                'Agile & Scrum Training',
                'Security & Compliance',
                'DevOps & Infrastructure',
                'AI & Machine Learning',
                'Project Management',
                'Leadership Development'
              ].map((program, idx) => (
                <div
                  key={idx}
                  style={{
                    padding: '15px',
                    background: 'rgba(255, 255, 255, 0.5)',
                    borderRadius: '8px',
                    border: '1px solid rgba(12, 74, 110, 0.2)'
                  }}
                >
                  <p style={{
                    fontSize: '14px',
                    fontWeight: '600',
                    color: '#0c4a6e',
                    margin: 0
                  }}>
                    ✓ {program}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Symprio Section */}
        <section style={{ marginBottom: '80px' }}>
          <h2 style={{
            fontSize: '36px',
            fontWeight: '700',
            color: '#1f2937',
            marginBottom: '50px',
            textAlign: 'center'
          }}>
            Why Choose Symprio
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '30px',
            maxWidth: '1000px',
            margin: '0 auto'
          }}>
            {[
              {
                title: 'Transparency',
                description: 'Clear communication, honest feedback and transparent pricing with no hidden costs.'
              },
              {
                title: 'Quality',
                description: 'Vetted professionals with verified skills and proven track records of success.'
              },
              {
                title: 'Flexibility',
                description: 'Engagement models that scale with your needs from short-term to long-term partnerships.'
              },
              {
                title: 'Commitment',
                description: 'Dedicated to your success with proactive support and continuous improvement.'
              }
            ].map((reason, idx) => (
              <div
                key={idx}
                style={{
                  padding: '30px',
                  background: 'linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%)',
                  borderRadius: '12px',
                  boxShadow: '0 5px 15px rgba(0, 0, 0, 0.08)',
                  animation: isVisible ? `slideUp 0.8s ease-out ${idx * 0.1}s both` : 'none'
                }}
              >
                <h4 style={{
                  fontSize: '18px',
                  fontWeight: '700',
                  color: '#0c4a6e',
                  margin: '0 0 12px 0'
                }}>
                  {reason.title}
                </h4>
                <p style={{
                  fontSize: '14px',
                  color: '#374151',
                  lineHeight: '1.6',
                  margin: 0
                }}>
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </section>

      </div>

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
