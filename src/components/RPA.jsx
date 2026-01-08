import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function RPA() {
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
            <span>RPA</span>
          </div>
          <h1 style={{
            fontSize: '48px',
            fontWeight: '700',
            color: '#fff',
            margin: '0 0 20px 0',
            animation: isVisible ? 'slideDown 0.8s ease-out both' : 'none'
          }}>
            Robotic Process Automation
          </h1>
          <p style={{
            fontSize: '18px',
            color: '#e0e0e0',
            margin: 0,
            animation: isVisible ? 'fadeIn 0.8s ease-out 0.2s both' : 'none'
          }}>
            Automate Repetitive Tasks, Boost Accuracy & Compliance
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
                About RPA
              </h2>
              <p style={{
                fontSize: '16px',
                lineHeight: '1.8',
                color: '#4b5563',
                marginBottom: '20px'
              }}>
                Robotic Process Automation (RPA) is the automation of repetitive, rules-based tasks across departments to boost accuracy, speed and compliance. By deploying intelligent software robots, organizations can eliminate manual work, reduce errors, and free up employees to focus on high-value strategic activities.
              </p>
              <p style={{
                fontSize: '16px',
                lineHeight: '1.8',
                color: '#4b5563',
                marginBottom: '30px'
              }}>
                Symprio provides end-to-end RPA services from assessment through delivery, including ongoing support, training, and establishment of an RPA Center of Excellence. Our experienced architects and developers leverage leading platforms like UiPath and Microsoft Power Automate to deliver enterprise-grade automation solutions.
              </p>
            </div>
          </div>
        </section>

        {/* Services & Capabilities Section */}
        <section style={{ marginBottom: '80px' }}>
          <h2 style={{
            fontSize: '36px',
            fontWeight: '700',
            color: '#1f2937',
            marginBottom: '50px',
            textAlign: 'center'
          }}>
            Services & Capabilities
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '30px'
          }}>
            {[
              {
                title: 'RPA Assessment',
                description: 'Evaluate current processes and identify automation opportunities. Conduct detailed opportunity analysis to prioritize high-impact processes for automation.'
              },
              {
                title: 'RPA Development & Deployment',
                description: 'Build intelligent bots using UiPath, Microsoft Power Automate and other leading platforms. Ensure robust error handling, security controls and scalability.'
              },
              {
                title: 'Center of Excellence',
                description: 'Establish governance frameworks, templates, best practices and change management processes. Build internal capability for sustainable automation.'
              },
              {
                title: 'Bot Monitoring & Support',
                description: 'Provide ongoing 24/7 monitoring, performance tuning and incident management. Ensure optimal bot performance and quick resolution of issues.'
              },
              {
                title: 'Training & Enablement',
                description: 'Offer comprehensive training programs for citizen developers and power users. Build internal expertise for long-term automation success.'
              },
              {
                title: 'Integrated Solutions',
                description: 'Combine RPA with AI/ML, chatbots and custom development. Create intelligent automation workflows that adapt and improve over time.'
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
            gap: '40px',
            maxWidth: '1000px',
            margin: '0 auto'
          }}>
            {[
              {
                title: '24/7 Execution & Accuracy',
                description: 'RPA bots work around the clock without fatigue or errors. Achieve unprecedented accuracy, faster throughput, and consistent compliance with regulations.',
                stats: ['99.9% Accuracy', '24/7 Operation', 'Faster Processing']
              },
              {
                title: 'Employee Empowerment & ROI',
                description: 'Free up employees from repetitive tasks to focus on strategic, high-value work. Accelerate return on investment through improved productivity and quality.',
                stats: ['45% Cost Reduction', 'Fast ROI', 'Higher Satisfaction']
              }
            ].map((benefit, idx) => (
              <div
                key={idx}
                style={{
                  padding: '35px',
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
                  margin: '0 0 20px 0'
                }}>
                  {benefit.description}
                </p>
                <div style={{
                  display: 'flex',
                  gap: '12px',
                  flexWrap: 'wrap'
                }}>
                  {benefit.stats.map((stat, i) => (
                    <span
                      key={i}
                      style={{
                        fontSize: '12px',
                        fontWeight: '700',
                        color: '#0c4a6e',
                        background: 'rgba(12, 74, 110, 0.1)',
                        padding: '6px 12px',
                        borderRadius: '20px'
                      }}
                    >
                      {stat}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Industry Use Cases Section */}
        <section style={{ marginBottom: '80px' }}>
          <h2 style={{
            fontSize: '36px',
            fontWeight: '700',
            color: '#1f2937',
            marginBottom: '50px',
            textAlign: 'center'
          }}>
            Industry Use Cases
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
                industry: 'Finance & Accounting',
                examples: ['Invoice processing & reconciliation', 'Accounts payable automation', 'Financial statement generation'],
                icon: '💰'
              },
              {
                industry: 'Human Resources',
                examples: ['Employee onboarding workflows', 'Payroll processing', 'Benefits administration'],
                icon: '👥'
              },
              {
                industry: 'Supply Chain',
                examples: ['Order processing automation', 'Inventory management', 'Vendor management'],
                icon: '📦'
              },
              {
                industry: 'Regulatory & Compliance',
                examples: ['Audit report generation', 'Compliance monitoring', 'Regulatory data collection'],
                icon: '⚖️'
              }
            ].map((useCase, idx) => (
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
                  {useCase.icon}
                </div>
                <h4 style={{
                  fontSize: '18px',
                  fontWeight: '700',
                  color: '#0c4a6e',
                  margin: '0 0 15px 0'
                }}>
                  {useCase.industry}
                </h4>
                <ul style={{
                  fontSize: '14px',
                  color: '#374151',
                  lineHeight: '1.8',
                  margin: 0,
                  paddingLeft: '20px'
                }}>
                  {useCase.examples.map((example, i) => (
                    <li key={i}>{example}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Metrics & Proof Section */}
        <section style={{ marginBottom: '80px' }}>
          <h2 style={{
            fontSize: '36px',
            fontWeight: '700',
            color: '#1f2937',
            marginBottom: '50px',
            textAlign: 'center'
          }}>
            Our Track Record
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '35px',
            maxWidth: '900px',
            margin: '0 auto'
          }}>
            {[
              {
                number: '400+',
                label: 'Robots Deployed',
                description: 'Successfully deployed over 400 intelligent automation solutions across various industries and use cases.'
              },
              {
                number: '45+',
                label: 'Customers Served',
                description: 'Trusted by 45+ leading organizations including Fortune 500 companies and emerging enterprises.'
              },
              {
                number: '15',
                label: 'Countries',
                description: 'Global presence with successful implementations across 15 countries spanning multiple regions.'
              }
            ].map((metric, idx) => (
              <div
                key={idx}
                style={{
                  padding: '35px',
                  background: 'linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%)',
                  borderRadius: '12px',
                  textAlign: 'center',
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
                <div style={{
                  fontSize: '48px',
                  fontWeight: '800',
                  color: '#0c4a6e',
                  margin: '0 0 10px 0'
                }}>
                  {metric.number}
                </div>
                <h4 style={{
                  fontSize: '18px',
                  fontWeight: '700',
                  color: '#000000',
                  margin: '0 0 12px 0'
                }}>
                  {metric.label}
                </h4>
                <p style={{
                  fontSize: '13px',
                  color: '#374151',
                  lineHeight: '1.6',
                  margin: 0
                }}>
                  {metric.description}
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
