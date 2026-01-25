import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ReadyToStartCTA from './ReadyToStartCTA';

export default function CustomDevelopment() {
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
        backgroundImage: `linear-gradient(135deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.3) 100%), url('/customdevelopment/banner.jpg')`,
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
            Custom Software & Product Development
          </h1>
          <p style={{
            fontSize: '22px',
            color: '#e0e0e0',
            margin: 0,
            fontWeight: '300'
          }} data-aos="fade-up" data-aos-delay="100">
            Full-Stack Solutions with Agile & DevOps Excellence
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
                Symprio is your trusted partner for building bespoke solutions that align with your unique business objectives. We specialize in full-stack development leveraging modern technologies, agile methodologies, and DevOps practices to deliver scalable, secure and innovative solutions.
              </p>
              <p style={{
                fontSize: '16px',
                lineHeight: '1.8',
                color: '#4b5563',
                margin: '0'
              }}>
                From concept to deployment and ongoing support, we guide you through the entire product lifecycle with a focus on quality, speed to market, and maximum business value.
              </p>
            </div>
        </section>

        {/* Services Section - Timeline/Process Flow */}
        <section style={{ marginBottom: '100px', maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <h2 style={{
            fontSize: '44px',
            fontWeight: '800',
            color: '#1f2937',
            marginBottom: '80px',
            textAlign: 'center'
          }} data-aos="fade-up">
            Our Development Lifecycle
          </h2>
          
          {/* Horizontal Timeline */}
          <div style={{
            position: 'relative',
            paddingBottom: '40px'
          }}>
            {/* Timeline Line */}
            <div style={{
              position: 'absolute',
              top: '30px',
              left: '50px',
              right: '50px',
              height: '3px',
              background: 'linear-gradient(90deg, #0891b2 0%, #0f172a 100%)',
              zIndex: 0
            }}/>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(6, 1fr)',
              gap: '20px',
              position: 'relative',
              zIndex: 1
            }}>
              {[
                { step: '01', title: 'Discovery & Design', icon: '🎨', description: 'Requirements, prototypes, roadmap' },
                { step: '02', title: 'Development', icon: '💻', description: 'Full-stack implementation' },
                { step: '03', title: 'Quality Assurance', icon: '✓', description: 'Testing & optimization' },
                { step: '04', title: 'DevOps Deploy', icon: '🚀', description: 'CI/CD & release' },
                { step: '05', title: 'Support', icon: '🔧', description: 'Maintenance & monitoring' },
                { step: '06', title: 'Cloud Scale', icon: '☁️', description: 'Growth & optimization' }
              ].map((item, idx) => (
                <div
                  key={idx}
                  data-aos="fade-up"
                  data-aos-delay={idx * 100}
                  style={{
                    textAlign: 'center'
                  }}
                >
                  {/* Timeline Dot */}
                  <div style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #0891b2 0%, #0f172a 100%)',
                    margin: '0 auto 20px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontWeight: '800',
                    fontSize: '18px',
                    boxShadow: '0 8px 20px rgba(8, 145, 178, 0.3)',
                    border: '3px solid white'
                  }}>
                    {item.step}
                  </div>
                  
                  {/* Content Box */}
                  <div style={{
                    padding: '20px',
                    background: 'white',
                    borderRadius: '12px',
                    border: '2px solid #dbeafe',
                    minHeight: '140px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = '#0891b2';
                    e.currentTarget.style.boxShadow = '0 12px 30px rgba(8, 145, 178, 0.2)';
                    e.currentTarget.style.transform = 'translateY(-8px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = '#dbeafe';
                    e.currentTarget.style.boxShadow = 'none';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}>
                    <div style={{ fontSize: '32px', marginBottom: '10px' }}>{item.icon}</div>
                    <h4 style={{
                      fontSize: '16px',
                      fontWeight: '700',
                      color: '#0c4a6e',
                      margin: '0 0 8px 0'
                    }}>
                      {item.title}
                    </h4>
                    <p style={{
                      fontSize: '12px',
                      color: '#6b7280',
                      margin: 0
                    }}>
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Typical Projects Section - Staggered Showcase */}
        <section style={{ marginBottom: '100px', maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <h2 style={{
            fontSize: '44px',
            fontWeight: '800',
            color: '#1f2937',
            marginBottom: '80px',
            textAlign: 'center'
          }} data-aos="fade-up">
            Projects We Deliver
          </h2>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '60px'
          }}>
            {[
              {
                num: '01',
                title: 'Custom Portals & Dashboards',
                icon: '📊',
                description: 'Executive dashboards, customer portals and internal collaboration platforms with real-time analytics and intuitive UX. We build single-pane-of-glass solutions that empower decision makers.',
                highlights: ['Real-time data visualization', 'Advanced filtering & drill-down', 'Mobile responsive design']
              },
              {
                num: '02',
                title: 'API & Integration Platforms',
                icon: '🔗',
                description: 'RESTful and GraphQL APIs, middleware solutions and enterprise integration connecting disparate systems. Seamless data flow across your technology stack.',
                highlights: ['Event-driven architecture', 'API management & monitoring', 'Legacy system integration']
              },
              {
                num: '03',
                title: 'Cloud Migrations',
                icon: '☁️',
                description: 'Seamless migration from on-premises systems to AWS, Azure or GCP with minimal downtime and risk. Data integrity and compliance maintained throughout.',
                highlights: ['Zero-downtime deployments', 'Cost optimization strategies', 'Disaster recovery setup']
              },
              {
                num: '04',
                title: 'Mobile Applications',
                icon: '📱',
                description: 'iOS, Android and cross-platform applications with native performance, offline capabilities and engaging UX. App store ready with continuous deployment pipelines.',
                highlights: ['Native & cross-platform options', 'Offline-first architecture', 'App store optimization']
              },
              {
                num: '05',
                title: 'Data Pipelines & Analytics',
                icon: '📈',
                description: 'ETL solutions, data warehousing and analytics platforms for actionable business intelligence. Transform raw data into strategic insights.',
                highlights: ['Real-time data pipelines', 'ML/AI ready infrastructure', 'Self-service analytics']
              },
              {
                num: '06',
                title: 'Microservices Architectures',
                icon: '🏗️',
                description: 'Scalable, resilient microservices deployed in containerized environments with orchestration and monitoring. Build systems that grow with your business.',
                highlights: ['Kubernetes orchestration', 'Service mesh implementation', 'Distributed tracing & monitoring']
              }
            ].map((project, idx) => (
              <div
                key={idx}
                data-aos={idx % 2 === 0 ? 'fade-left' : 'fade-right'}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '50px',
                  alignItems: 'center',
                  position: 'relative'
                }}
              >
                {/* Content Side */}
                <div style={{
                  order: idx % 2 === 0 ? 1 : 2,
                  padding: '30px'
                }}>
                  <div style={{
                    fontSize: '48px',
                    marginBottom: '15px'
                  }}>
                    {project.icon}
                  </div>
                  <div style={{
                    display: 'inline-block',
                    background: 'linear-gradient(135deg, #0891b2 0%, #0f172a 100%)',
                    color: 'white',
                    padding: '8px 16px',
                    borderRadius: '20px',
                    fontSize: '12px',
                    fontWeight: '700',
                    marginBottom: '15px'
                  }}>
                    PROJECT 0{project.num}
                  </div>
                  <h3 style={{
                    fontSize: '28px',
                    fontWeight: '800',
                    color: '#0c4a6e',
                    margin: '15px 0 15px 0',
                    lineHeight: '1.3'
                  }}>
                    {project.title}
                  </h3>
                  <p style={{
                    fontSize: '15px',
                    color: '#4b5563',
                    lineHeight: '1.8',
                    marginBottom: '20px'
                  }}>
                    {project.description}
                  </p>
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr',
                    gap: '10px'
                  }}>
                    {project.highlights.map((highlight, hidx) => (
                      <div key={hidx} style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                        fontSize: '13px',
                        color: '#4b5563'
                      }}>
                        <span style={{
                          color: '#0891b2',
                          fontWeight: '700',
                          fontSize: '16px'
                        }}>✓</span>
                        {highlight}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Visual Side */}
                <div
                  style={{
                    order: idx % 2 === 0 ? 2 : 1,
                    height: '300px',
                    borderRadius: '16px',
                    background: `linear-gradient(135deg, ${idx % 2 === 0 ? 'rgba(8,145,178,0.1)' : 'rgba(219,234,254,0.5)'} 0%, ${idx % 2 === 0 ? 'rgba(241,245,249,0.8)' : 'rgba(248,250,252,0.9)'} 100%)`,
                    border: '2px solid #0891b2',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = '#0c4a6e';
                    e.currentTarget.style.boxShadow = '0 20px 50px rgba(8, 145, 178, 0.15)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = '#0891b2';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <div style={{
                    fontSize: '120px',
                    opacity: '0.2',
                    position: 'absolute'
                  }}>
                    {project.icon}
                  </div>
                  <div style={{
                    textAlign: 'center',
                    position: 'relative',
                    zIndex: 2
                  }}>
                    <div style={{
                      fontSize: '64px',
                      fontWeight: '800',
                      color: '#0891b2',
                      opacity: '0.8'
                    }}>
                      {project.num}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Technology Stack Section - Layered Architecture */}
        <section style={{ marginBottom: '100px', maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <h2 style={{
            fontSize: '44px',
            fontWeight: '800',
            color: '#1f2937',
            marginBottom: '80px',
            textAlign: 'center'
          }} data-aos="fade-up">
            Technology Stack & Expertise
          </h2>
          
          {/* Layered Architecture Visualization */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '20px',
            perspective: '1000px'
          }}>
            {[
              {
                layer: 'Presentation Layer',
                icon: '🎨',
                color: '#e0f2fe',
                borderColor: '#0891b2',
                technologies: ['React', 'Angular', 'Vue.js', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Progressive Web Apps']
              },
              {
                layer: 'Business Logic Layer',
                icon: '⚙️',
                color: '#dbeafe',
                borderColor: '#0c4a6e',
                technologies: ['Node.js', '.NET Core', 'Java', 'Python', 'Go', 'GraphQL', 'Microservices']
              },
              {
                layer: 'Data & Integration Layer',
                icon: '🗄️',
                color: '#bfdbfe',
                borderColor: '#075985',
                technologies: ['PostgreSQL', 'MongoDB', 'Redis', 'Elasticsearch', 'RabbitMQ', 'Apache Kafka', 'AWS Lambda']
              },
              {
                layer: 'Infrastructure & Deployment',
                icon: '☁️',
                color: '#93c5fd',
                borderColor: '#0369a1',
                technologies: ['AWS', 'Azure', 'GCP', 'Docker', 'Kubernetes', 'CI/CD', 'Infrastructure as Code', 'Terraform']
              }
            ].map((stack, idx) => (
              <div
                key={idx}
                data-aos="fade-up"
                data-aos-delay={idx * 150}
                style={{
                  padding: '40px',
                  background: `linear-gradient(135deg, ${stack.color} 0%, rgba(255,255,255,0.8) 100%)`,
                  border: `3px solid ${stack.borderColor}`,
                  borderRadius: '16px',
                  transition: 'all 0.4s ease',
                  cursor: 'pointer',
                  position: 'relative',
                  overflow: 'hidden'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-12px) scale(1.02)';
                  e.currentTarget.style.boxShadow = '0 25px 50px rgba(8, 145, 178, 0.25)';
                  e.currentTarget.style.borderColor = '#0891b2';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.borderColor = stack.borderColor;
                }}
              >
                {/* Background Accent */}
                <div style={{
                  position: 'absolute',
                  top: '-50px',
                  right: '-50px',
                  width: '200px',
                  height: '200px',
                  borderRadius: '50%',
                  background: stack.borderColor,
                  opacity: '0.08',
                  pointerEvents: 'none'
                }}/>
                
                {/* Content */}
                <div style={{
                  position: 'relative',
                  zIndex: 2
                }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '15px',
                    marginBottom: '20px'
                  }}>
                    <div style={{
                      fontSize: '36px'
                    }}>
                      {stack.icon}
                    </div>
                    <h3 style={{
                      fontSize: '24px',
                      fontWeight: '800',
                      color: stack.borderColor,
                      margin: '0'
                    }}>
                      {stack.layer}
                    </h3>
                  </div>
                  
                  {/* Technology Tags */}
                  <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '12px'
                  }}>
                    {stack.technologies.map((tech, tidx) => (
                      <div
                        key={tidx}
                        style={{
                          fontSize: '13px',
                          fontWeight: '700',
                          color: '#ffffff',
                          background: `linear-gradient(135deg, ${stack.borderColor} 0%, ${stack.borderColor}dd 100%)`,
                          padding: '8px 16px',
                          borderRadius: '24px',
                          border: `1px solid ${stack.borderColor}`,
                          transition: 'all 0.3s ease',
                          cursor: 'pointer',
                          whiteSpace: 'nowrap'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = 'linear-gradient(135deg, #0891b2 0%, #0c4a6e 100%)';
                          e.currentTarget.style.transform = 'scale(1.1) translateY(-2px)';
                          e.currentTarget.style.boxShadow = '0 8px 16px rgba(8, 145, 178, 0.3)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = `linear-gradient(135deg, ${stack.borderColor} 0%, ${stack.borderColor}dd 100%)`;
                          e.currentTarget.style.transform = 'scale(1) translateY(0)';
                          e.currentTarget.style.boxShadow = 'none';
                        }}
                      >
                        {tech}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
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
