import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function ERP() {
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
            <span>ERP & Enterprise Platforms</span>
          </div>
          <h1 style={{
            fontSize: '48px',
            fontWeight: '700',
            color: '#fff',
            margin: '0 0 20px 0',
            animation: isVisible ? 'slideDown 0.8s ease-out both' : 'none'
          }}>
            ERP & Enterprise Platforms
          </h1>
          <p style={{
            fontSize: '18px',
            color: '#e0e0e0',
            margin: 0,
            animation: isVisible ? 'fadeIn 0.8s ease-out 0.2s both' : 'none'
          }}>
            Oracle Partner for Business Transformation
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
                About Our ERP Services
              </h2>
              <p style={{
                fontSize: '16px',
                lineHeight: '1.8',
                color: '#4b5563',
                marginBottom: '20px'
              }}>
                Symprio is a trusted Oracle partner providing business transformation rollouts and implementations for Oracle R12 and Oracle Fusion Cloud. Our certified teams bring global experience in deploying enterprise systems that drive operational excellence and digital transformation.
              </p>
              <p style={{
                fontSize: '16px',
                lineHeight: '1.8',
                color: '#4b5563',
                marginBottom: '30px'
              }}>
                With deep expertise across all Oracle modules, APAC localization knowledge, and proven implementation methodologies, we ensure smooth deployments that maximize ROI and minimize business disruption.
              </p>
            </div>
          </div>
        </section>

        {/* Service Areas Section */}
        <section style={{ marginBottom: '80px' }}>
          <h2 style={{
            fontSize: '36px',
            fontWeight: '700',
            color: '#1f2937',
            marginBottom: '50px',
            textAlign: 'center'
          }}>
            Service Areas
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '30px'
          }}>
            {[
              {
                title: 'Implementations & Rollouts',
                description: 'Certified teams with extensive global rollout experience. We manage end-to-end implementations ensuring timely delivery and quality outcomes across multiple regions.'
              },
              {
                title: 'Functional Expertise',
                description: 'Deep knowledge across all Oracle modules including Finance, Supply Chain, HR, Manufacturing and more. APAC localization templates and BR100/MD050 documentation included.'
              },
              {
                title: 'Technical Expertise',
                description: 'Specialists in integrations, extensibility, PL/SQL development, workflows and database administration. We ensure robust, scalable and maintainable solutions.'
              },
              {
                title: 'Program & Change Management',
                description: 'Comprehensive tools, templates, cutover strategies and training programs. We ensure smooth transitions and organizational adoption of new systems.'
              },
              {
                title: 'Automation & Analytics',
                description: 'Integrate UiPath RPA and advanced analytics to enhance ERP capabilities. Automate manual processes and gain real-time insights into business operations.'
              },
              {
                title: 'Support & Enhancements',
                description: 'Ongoing Oracle Cloud or R12 application support, custom development services and DBA services. We ensure optimal system performance and continuous improvement.'
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

        {/* Benefits Section */}
        <section style={{ marginBottom: '80px' }}>
          <h2 style={{
            fontSize: '36px',
            fontWeight: '700',
            color: '#1f2937',
            marginBottom: '50px',
            textAlign: 'center'
          }}>
            Key Benefits
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
                title: 'Improved Financial Planning & Decision Making',
                description: 'Real-time visibility into financial data enabling better strategic planning and faster, more informed business decisions.'
              },
              {
                title: 'Faster Budgeting Cycles & Automated Reconciliations',
                description: 'Streamlined financial processes reducing close time from weeks to days, with automated reconciliation eliminating manual errors.'
              },
              {
                title: 'Regulatory Compliance & Multi-Currency Support',
                description: 'Built-in compliance with multi-currency transactions, IFRS reporting standards and localized regulatory requirements across regions.'
              }
            ].map((benefit, idx) => (
              <div
                key={idx}
                style={{
                  padding: '30px',
                  background: 'linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%)',
                  borderRadius: '12px',
                  boxShadow: '0 5px 15px rgba(0, 0, 0, 0.08)',
                  transition: 'all 0.4s ease',
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
                <h3 style={{
                  fontSize: '22px',
                  fontWeight: '700',
                  color: '#000000',
                  margin: '0 0 15px 0'
                }}>
                  {benefit.title}
                </h3>
                <p style={{
                  fontSize: '14px',
                  color: '#374151',
                  lineHeight: '1.7',
                  margin: 0
                }}>
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Client Success Section */}
        <section style={{ marginBottom: '80px' }}>
          <h2 style={{
            fontSize: '36px',
            fontWeight: '700',
            color: '#1f2937',
            marginBottom: '50px',
            textAlign: 'center'
          }}>
            Client Success Story
          </h2>
          <div style={{
            maxWidth: '800px',
            margin: '0 auto',
            padding: '40px',
            background: 'linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%)',
            borderRadius: '12px',
            boxShadow: '0 5px 15px rgba(0, 0, 0, 0.08)',
            animation: isVisible ? 'slideUp 0.8s ease-out 0.1s both' : 'none'
          }}>
            <h3 style={{
              fontSize: '24px',
              fontWeight: '700',
              color: '#0c4a6e',
              margin: '0 0 20px 0'
            }}>
              Financial Close Time Optimization
            </h3>
            <p style={{
              fontSize: '16px',
              lineHeight: '1.8',
              color: '#374151',
              margin: '0 0 20px 0'
            }}>
              A multinational manufacturing company struggled with a 15-day financial close cycle across multiple legal entities. Our Oracle ERP implementation delivered transformative results:
            </p>
            <ul style={{
              fontSize: '15px',
              lineHeight: '2',
              color: '#374151',
              margin: '0 0 20px 0',
              paddingLeft: '20px'
            }}>
              <li><strong>60% reduction</strong> in closing time from 15 days to 6 days</li>
              <li><strong>99.8% accuracy</strong> in automated reconciliations</li>
              <li><strong>Real-time reporting</strong> eliminating manual consolidation</li>
              <li><strong>$2.3M annual savings</strong> in operational efficiency gains</li>
            </ul>
            <p style={{
              fontSize: '14px',
              color: '#4b5563',
              fontStyle: 'italic',
              margin: 0
            }}>
              "Symprio's implementation not only reduced our close time but transformed our financial operations. The APAC localization support was invaluable for our multi-country rollout." - Global Finance Controller
            </p>
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
