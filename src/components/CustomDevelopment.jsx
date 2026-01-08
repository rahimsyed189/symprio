import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function CustomDevelopment() {
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
            <span>Custom Development</span>
          </div>
          <h1 style={{
            fontSize: '48px',
            fontWeight: '700',
            color: '#fff',
            margin: '0 0 20px 0',
            animation: isVisible ? 'slideDown 0.8s ease-out both' : 'none'
          }}>
            Custom Software & Product Development
          </h1>
          <p style={{
            fontSize: '18px',
            color: '#e0e0e0',
            margin: 0,
            animation: isVisible ? 'fadeIn 0.8s ease-out 0.2s both' : 'none'
          }}>
            Full-Stack Solutions with Agile & DevOps Excellence
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
                Symprio is your trusted partner for building bespoke solutions that align with your unique business objectives. We specialize in full-stack development leveraging modern technologies, agile methodologies, and DevOps practices to deliver scalable, secure and innovative solutions.
              </p>
              <p style={{
                fontSize: '16px',
                lineHeight: '1.8',
                color: '#4b5563',
                marginBottom: '30px'
              }}>
                From concept to deployment and ongoing support, we guide you through the entire product lifecycle with a focus on quality, speed to market, and maximum business value.
              </p>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section style={{ marginBottom: '80px' }}>
          <h2 style={{
            fontSize: '36px',
            fontWeight: '700',
            color: '#1f2937',
            marginBottom: '50px',
            textAlign: 'center'
          }}>
            Our Services
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '30px'
          }}>
            {[
              {
                title: 'Discovery & Design',
                description: 'Define requirements, create prototypes and plan the product roadmap. User research and design thinking to ensure solutions meet real business needs.'
              },
              {
                title: 'Development',
                description: 'Full-stack development across web, mobile and cloud. Modern front-end frameworks (React, Angular, Vue) and back-end technologies (Node.js, .NET, Java). Microservices and API development.'
              },
              {
                title: 'Quality Assurance',
                description: 'Automated and manual testing, security testing and performance optimization. Ensure reliability, security and optimal user experience across all platforms.'
              },
              {
                title: 'DevOps & Deployment',
                description: 'Continuous integration, continuous deployment and infrastructure as code. Automated pipelines for faster, safer releases and seamless scalability.'
              },
              {
                title: 'Maintenance & Support',
                description: 'Ongoing enhancements, bug fixes and technical support. Proactive monitoring and optimization to keep your systems running smoothly.'
              },
              {
                title: 'Cloud Architecture',
                description: 'AWS, Azure and GCP expertise. Cloud migration, serverless architecture, containerization and managed services for scalable solutions.'
              }
            ].map((service, idx) => (
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
                  {service.title}
                </h3>
                <p style={{
                  fontSize: '14px',
                  color: '#374151',
                  lineHeight: '1.7',
                  margin: 0
                }}>
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Typical Projects Section */}
        <section style={{ marginBottom: '80px' }}>
          <h2 style={{
            fontSize: '36px',
            fontWeight: '700',
            color: '#1f2937',
            marginBottom: '50px',
            textAlign: 'center'
          }}>
            Typical Projects
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '25px',
            maxWidth: '1100px',
            margin: '0 auto'
          }}>
            {[
              {
                title: 'Custom Portals & Dashboards',
                description: 'Executive dashboards, customer portals and internal collaboration platforms with real-time analytics and intuitive UX.',
                icon: '📊'
              },
              {
                title: 'API & Integration Platforms',
                description: 'RESTful and GraphQL APIs, middleware solutions and enterprise integration connecting disparate systems.',
                icon: '🔗'
              },
              {
                title: 'Cloud Migrations',
                description: 'Seamless migration from on-premises systems to AWS, Azure or GCP with minimal downtime and risk.',
                icon: '☁️'
              },
              {
                title: 'Mobile Applications',
                description: 'iOS, Android and cross-platform applications with native performance, offline capabilities and engaging UX.',
                icon: '📱'
              },
              {
                title: 'Data Pipelines & Analytics',
                description: 'ETL solutions, data warehousing and analytics platforms for actionable business intelligence.',
                icon: '📈'
              },
              {
                title: 'Microservices Architectures',
                description: 'Scalable, resilient microservices deployed in containerized environments with orchestration and monitoring.',
                icon: '⚙️'
              }
            ].map((project, idx) => (
              <div
                key={idx}
                style={{
                  padding: '28px',
                  border: '2px solid #dbeafe',
                  borderRadius: '8px',
                  background: '#f0f9ff',
                  transition: 'all 0.3s ease',
                  animation: isVisible ? `slideUp 0.8s ease-out ${idx * 0.1}s both` : 'none'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#0284c7';
                  e.currentTarget.style.background = '#e0f2fe';
                  e.currentTarget.style.boxShadow = '0 8px 20px rgba(2, 132, 199, 0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#dbeafe';
                  e.currentTarget.style.background = '#f0f9ff';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div style={{
                  fontSize: '32px',
                  marginBottom: '12px'
                }}>
                  {project.icon}
                </div>
                <h4 style={{
                  fontSize: '18px',
                  fontWeight: '700',
                  color: '#0c4a6e',
                  margin: '0 0 12px 0'
                }}>
                  {project.title}
                </h4>
                <p style={{
                  fontSize: '14px',
                  color: '#374151',
                  lineHeight: '1.6',
                  margin: 0
                }}>
                  {project.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Technology Stack Section */}
        <section style={{ marginBottom: '80px' }}>
          <h2 style={{
            fontSize: '36px',
            fontWeight: '700',
            color: '#1f2937',
            marginBottom: '50px',
            textAlign: 'center'
          }}>
            Technology Expertise
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '30px',
            maxWidth: '1000px',
            margin: '0 auto'
          }}>
            {[
              {
                category: 'Front-End',
                technologies: ['React', 'Angular', 'Vue.js', 'TypeScript', 'Tailwind CSS', 'Next.js']
              },
              {
                category: 'Back-End',
                technologies: ['Node.js', '.NET Core', 'Java', 'Python', 'Go', 'Kotlin']
              },
              {
                category: 'Cloud & DevOps',
                technologies: ['AWS', 'Azure', 'GCP', 'Docker', 'Kubernetes', 'CI/CD Pipelines']
              },
              {
                category: 'Databases & Cache',
                technologies: ['PostgreSQL', 'MongoDB', 'Redis', 'Elasticsearch', 'DynamoDB', 'Firestore']
              }
            ].map((tech, idx) => (
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
                  margin: '0 0 15px 0'
                }}>
                  {tech.category}
                </h4>
                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '8px'
                }}>
                  {tech.technologies.map((t, i) => (
                    <span
                      key={i}
                      style={{
                        fontSize: '12px',
                        fontWeight: '600',
                        color: '#0c4a6e',
                        background: 'rgba(12, 74, 110, 0.1)',
                        padding: '6px 12px',
                        borderRadius: '20px'
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
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
