import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ReadyToStartCTA from './ReadyToStartCTA';

export default function AgenticAI() {
  const [expandedUseCase, setExpandedUseCase] = useState(null);
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

  const whyMatters = [
    {
      icon: '⚡',
      title: 'Autonomy & Efficiency',
      description: 'Unlike rule‑based RPA scripts, agentic AI handles complex, semi‑structured workflows, reason about goals and adapt in real time.'
    },
    {
      icon: '🔗',
      title: 'Scalability & Collaboration',
      description: 'Multiple AI agents can collaborate, negotiate and collectively solve multi‑step problems.'
    },
    {
      icon: '👥',
      title: 'Augmentation of Human Roles',
      description: 'Agentic AI frees people from repetitive tasks, allowing them to focus on innovation, strategy and relationships.'
    }
  ];

  const useCases = [
    {
      number: '01',
      title: 'Autonomous Customer Support Agents',
      overview: 'Provide 24/7 support across voice and digital channels with intelligent resolution',
      benefits: [
        'Provide 24/7 support across voice and digital channels. These agents interpret intent, adapt to tone and resolve complex issues without human involvement.',
        'They maintain context across channels, offering seamless multichannel engagement.',
        'Case outcomes: faster resolution times, reduced call centre overhead and improved customer satisfaction scores.'
      ]
    },
    {
      number: '02',
      title: 'AI‑Powered Sales & Marketing Agents',
      overview: 'Autonomous lead qualification, personalization, and dynamic pricing',
      benefits: [
        'Lead Qualification & Nurturing: Agents autonomously score leads, monitor engagement and send personalised follow‑ups.',
        'Personalised Campaigns: They analyse behavioural signals and demographic data to craft hyper‑personalised outreach.',
        'Dynamic Pricing: AI agents optimise pricing and offers based on demand fluctuations, competitor movements and customer intent.'
      ]
    },
    {
      number: '03',
      title: 'Procurement & Supply Chain Agents',
      overview: 'Autonomous negotiation, demand planning, and logistics optimization',
      benefits: [
        'Autonomous Negotiation: Agents negotiate prices, delivery terms and contract clauses within set parameters.',
        'Predictive Demand Planning: They combine internal and external data to forecast demand and adapt continuously.',
        'Smart Logistics: AI reconfigures routes, balances loads and optimises shipping based on real‑time data.'
      ]
    },
    {
      number: '04',
      title: 'Financial & Compliance Agents',
      overview: 'Automated auditing, compliance monitoring, and financial forecasting',
      benefits: [
        'Automated Auditing & Fraud Detection: Agents monitor transactions, detect anomalies and trigger corrective actions.',
        'Compliance Monitoring: They scan operations for regulatory breaches and generate audit‑ready documentation.',
        'Real‑Time Financial Forecasting: Agents integrate ERP data, market indicators and external signals to produce continuous forecasts.'
      ]
    },
    {
      number: '05',
      title: 'HR & Talent Agents',
      overview: 'Autonomous recruitment, employee analytics, and talent management',
      benefits: [
        'Agents automate candidate sourcing, screening and onboarding.',
        'They analyse employee sentiment, predict turnover and recommend retention initiatives.',
        'Additional domains include risk management, product innovation, legal & governance and sustainability reporting.'
      ]
    }
  ];

  const implementationSteps = [
    {
      step: '01',
      title: 'Assessment & Readiness',
      description: 'Evaluate current automation maturity, data quality and AI readiness.'
    },
    {
      step: '02',
      title: 'Use Case Prioritisation',
      description: 'Identify high‑impact processes and define success metrics.'
    },
    {
      step: '03',
      title: 'Pilot & Validation',
      description: 'Develop a proof of concept, validate ROI and ensure ethical & regulatory compliance.'
    },
    {
      step: '04',
      title: 'Deployment & Scaling',
      description: 'Integrate agents into production systems with secure access controls.'
    },
    {
      step: '05',
      title: 'Monitoring & Improvement',
      description: 'Monitor agent performance, gather feedback and iterate.'
    }
  ];

  return (
    <div style={{
      background: '#fff',
      color: '#1f2937',
      fontFamily: "'Poppins', sans-serif",
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Animated Background Elements - REMOVED for performance */}

      {/* Content Wrapper */}
      <div style={{ position: 'relative', zIndex: 1 }}>
      {/* Hero Section */}
      <section style={{
        backgroundImage: `linear-gradient(135deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, 0.15) 100%), url('/agentic-ai-banner.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        color: '#fff',
        padding: '100px 20px 140px',
        textAlign: 'center',
        position: 'relative',
        minHeight: '500px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <div style={{ position: 'relative', zIndex: 2, maxWidth: '800px' }}>
          <h1 style={{
            fontSize: '64px',
            fontWeight: '800',
            margin: '0 0 20px 0',
            lineHeight: '1.2',
            color: '#ffffff',
            letterSpacing: '-2px'
          }}
          data-aos="fade-up"
          data-aos-duration="800">
            Agentic AI Solutions
          </h1>
          <p style={{
            fontSize: '22px',
            color: '#e0e0e0',
            lineHeight: '1.8',
            margin: '0',
            fontWeight: '300'
          }}
          data-aos="fade-up"
          data-aos-delay="100"
          data-aos-duration="800">
            The next evolution of AI: autonomous digital agents that reason, decide and execute
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

        {/* Introduction Section */}
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
            <h2
              style={{
                fontSize: '48px',
                fontWeight: '800',
                background: 'linear-gradient(135deg, #0f172a 0%, #0891b2 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                margin: '0 0 20px 0',
                lineHeight: '1.3'
              }}
            >
              Agentic AI Solutions
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
              margin: '0'
            }}>
              The next evolution of AI: autonomous digital agents that reason, decide and execute. Our agentic AI solutions enable organizations to automate complex workflows, improve decision-making, and drive intelligent business outcomes.
            </p>
          </div>
        </section>
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

      {/* What is Agentic AI Container - Overlapping Banner */}
      <div 
        id="agentic-container"
        style={{
          display: 'none',
          position: 'relative',
          marginTop: '-60px',
          marginBottom: '80px',
          maxWidth: '1200px',
          margin: '-60px auto 80px',
          padding: '0 20px',
          zIndex: 10
        }}>
        <div style={{
          background: '#ffffff',
          padding: '50px',
          position: 'relative',
          zIndex: 10
        }}
        data-aos="fade-up"
        data-aos-once="false">
          <h2 style={{
            fontSize: '42px',
            fontWeight: '700',
            color: '#1f2937',
            margin: '0 0 15px 0',
            textAlign: 'center'
          }}
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-once="false">
            What is Agentic AI?
          </h2>

          <div style={{
            textAlign: 'center',
            fontSize: '16px',
            color: '#6b7280',
            marginBottom: '60px',
            maxWidth: '700px',
            margin: '0 auto 60px'
          }}
          data-aos="fade-up"
          data-aos-delay="100"
          data-aos-duration="800"
          data-aos-once="false">
            The next generation of artificial intelligence that reasons, decides, and executes autonomously
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '60px',
            alignItems: 'center',
            marginBottom: '80px'
          }}>
            {/* Left Side - Content */}
            <div>
              <p style={{
                fontSize: '16px',
                color: '#4b5563',
                lineHeight: '1.9',
                margin: '0 0 25px 0'
              }}
              data-aos="fade-up"
              data-aos-delay="100">
                Agentic AI represents the next stage of AI evolution. While generative AI assists humans, agentic AI agents can reason, make decisions and execute tasks autonomously. They operate as digital team members, planning tasks, monitoring outcomes and adjusting strategies without constant human oversight.
              </p>

              <div style={{
                background: 'linear-gradient(135deg, #19b5fe, #0f8cc8)',
                padding: '20px',
                borderRadius: '12px',
                marginBottom: '20px',
                border: 'none',
                boxShadow: 'none',
                position: 'relative',
                overflow: 'hidden'
              }}
              data-aos="fade-right"
              data-aos-delay="200">
                <div style={{
                  position: 'relative',
                  zIndex: 1
                }}>
                  <p style={{
                    fontSize: '14px',
                    fontWeight: '700',
                    color: '#ffffff',
                    margin: '0 0 6px 0'
                  }}>
                    Key Capabilities
                  </p>
                  <p style={{
                    fontSize: '12px',
                    color: '#ffffff',
                    margin: 0,
                    lineHeight: '1.6',
                    opacity: 0.9
                  }}>
                    Autonomous reasoning, real-time decision making, continuous learning, multi-task orchestration
                  </p>
                </div>
              </div>

              <div style={{
                background: 'linear-gradient(135deg, #19b5fe, #0f8cc8)',
                padding: '20px',
                borderRadius: '12px',
                border: 'none',
                boxShadow: 'none',
                position: 'relative',
                overflow: 'hidden'
              }}
              data-aos="fade-left"
              data-aos-delay="300">
                <div style={{
                  position: 'relative',
                  zIndex: 1
                }}>
                  <p style={{
                    fontSize: '14px',
                    fontWeight: '700',
                    color: '#ffffff',
                    margin: '0 0 6px 0'
                  }}>
                    Industry Outlook
                  </p>
                  <p style={{
                    fontSize: '12px',
                    color: '#ffffff',
                    margin: 0,
                    lineHeight: '1.6',
                    opacity: 0.9
                  }}>
                    Analyst firms predict 40% of large enterprises will deploy autonomous AI agents by 2025
                  </p>
                </div>
              </div>
            </div>

            {/* Right Side - Visual - Hidden due to performance */}
            <div style={{
              position: 'relative',
              height: '400px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'linear-gradient(135deg, #0c4a6e 0%, #0891b2 100%)',
              borderRadius: '12px'
            }}
            data-aos="zoom-in"
            data-aos-delay="100">
              <div style={{
                textAlign: 'center',
                color: '#ffffff',
                fontSize: '48px'
              }}>
                🧠
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Comparison Table */}
      <div id="comparison-section" style={{
            marginTop: '20px',
            padding: '60px 20px',
            position: 'relative'
          }}>
            {/* Animated Title Section */}
            <div style={{
              textAlign: 'center',
              marginBottom: '60px'
            }}>
              <h2 style={{
                fontSize: '42px',
                fontWeight: '800',
                color: '#1f2937',
                margin: '0 0 15px 0',
                lineHeight: '1.3'
              }}
              data-aos="fade-up">
                Generative AI vs Agentic AI
              </h2>
              <div style={{
                width: '80px',
                height: '5px',
                background: 'linear-gradient(90deg, #0078d4, #19b5fe)',
                margin: '20px auto 30px',
                borderRadius: '3px',
                transformOrigin: 'center'
              }}
              data-aos="fade-up"
              data-aos-delay="100" />
              <p style={{
                fontSize: '18px',
                color: '#6b7280',
                maxWidth: '700px',
                margin: '0 auto',
                lineHeight: '1.6'
              }}
              data-aos="fade-up"
              data-aos-delay="200">
                Understand the key differences between Generative AI and Agentic AI to make informed decisions about implementing the right solution for your business needs.
              </p>
            </div>

            {/* Comparison Table */}
            <div style={{
              maxWidth: '900px',
              margin: '0 auto',
              overflow: 'auto'
            }}
            data-aos="fade-up"
            data-aos-delay="300">
              <table style={{
                width: '100%',
                borderCollapse: 'collapse',
                fontSize: '15px',
                textAlign: 'left'
              }}>
                <thead>
                  <tr style={{
                    background: '#f5f5f5',
                    borderBottom: '2px solid #e0e0e0'
                  }}>
                    <th style={{
                      padding: '12px',
                      fontWeight: '700',
                      color: '#1f2937',
                      textAlign: 'center',
                      fontSize: '16px'
                    }}>Agentic AI</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{
                    borderBottom: '1px solid #e0e0e0'
                  }}>
                    <td style={{
                      padding: '12px',
                      fontWeight: '600',
                      color: '#1f2937',
                      textAlign: 'center',
                      background: '#f9f9f9'
                    }}>Autonomy</td>
                    <td style={{
                      padding: '12px',
                      color: '#666666',
                      textAlign: 'center'
                    }}>Requires human prompts & limited independent action</td>
                    <td style={{
                      padding: '12px',
                      color: '#666666',
                      textAlign: 'center'
                    }}>Self-directed execution with minimal intervention</td>
                  </tr>
                  <tr style={{
                    borderBottom: '1px solid #e0e0e0'
                  }}>
                    <td style={{
                      padding: '12px',
                      fontWeight: '600',
                      color: '#1f2937',
                      textAlign: 'center',
                      background: '#f9f9f9'
                    }}>Decision Making</td>
                    <td style={{
                      padding: '12px',
                      color: '#666666',
                      textAlign: 'center'
                    }}>Suggests options for human approval</td>
                    <td style={{
                      padding: '12px',
                      color: '#666666',
                      textAlign: 'center'
                    }}>Makes autonomous decisions & executes</td>
                  </tr>
                  <tr style={{
                    borderBottom: '1px solid #e0e0e0'
                  }}>
                    <td style={{
                      padding: '12px',
                      fontWeight: '600',
                      color: '#1f2937',
                      textAlign: 'center',
                      background: '#f9f9f9'
                    }}>Control</td>
                    <td style={{
                      padding: '12px',
                      color: '#666666',
                      textAlign: 'center'
                    }}>User-driven operations & manual control</td>
                    <td style={{
                      padding: '12px',
                      color: '#666666',
                      textAlign: 'center'
                    }}>Goal-oriented with continuous learning</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Info Line Below Table */}
            <div style={{
              maxWidth: '900px',
              margin: '30px auto 0',
              padding: '20px',
              textAlign: 'center',
              opacity: 1,
              transform: 'translateY(0px)',
              transition: 'all 0.4s ease-out'
            }}>
              <p style={{
                fontSize: '16px',
                color: '#666666',
                lineHeight: '1.6',
                margin: '0'
              }}>
                <span style={{ fontWeight: '600', color: '#1f2937' }}>Generative AI</span> focuses on content creation and suggestions, requiring human guidance for every action. <span style={{ fontWeight: '600', color: '#1f2937' }}>Agentic AI</span> independently executes tasks and makes decisions with minimal human oversight, delivering faster results and higher efficiency.
              </p>
            </div>
          </div>
      </div>

      {/* Introduction Section - Hidden */}
      <section style={{
        display: 'none',
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '80px 20px',
        backgroundColor: '#ffffff'
      }}>
      </section>

      {/* Why Agentic AI Matters - Value Pillars */}
      <section id="why-matters-section" style={{
        width: '100%',
        margin: '0',
        padding: '80px 20px',
        position: 'relative',
        background: '#f8fafc',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'relative',
          zIndex: 2,
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          <h2 style={{
            fontSize: '44px',
            fontWeight: '800',
            color: '#1f2937',
            margin: '0 0 15px 0',
            textAlign: 'center'
          }}>
            Why Agentic AI Matters
          </h2>
          <p style={{
            fontSize: '16px',
            color: '#6b7280',
            textAlign: 'center',
            maxWidth: '700px',
            margin: '0 auto 60px',
            lineHeight: '1.6'
          }} data-aos="fade-up">
            Three fundamental reasons why autonomous AI agents are reshaping enterprise automation.
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '40px'
          }}>
            {whyMatters.map((item, idx) => (
              <div
                key={idx}
                data-aos="fade-up"
                data-aos-delay={idx * 100}
                style={{
                  padding: '40px',
                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(219, 234, 254, 0.3) 100%)',
                  border: '2px solid #dbeafe',
                  borderRadius: '12px',
                  transition: 'all 0.4s ease',
                  cursor: 'pointer',
                  position: 'relative',
                  overflow: 'hidden'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-12px)';
                  e.currentTarget.style.boxShadow = '0 20px 50px rgba(8, 145, 178, 0.2)';
                  e.currentTarget.style.borderColor = '#0891b2';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.08)';
                  e.currentTarget.style.borderColor = '#dbeafe';
                }}
              >
                <div style={{
                  fontSize: '48px',
                  marginBottom: '20px'
                }}>
                  {item.icon}
                </div>
                <h3 style={{
                  fontSize: '22px',
                  fontWeight: '800',
                  color: '#0c4a6e',
                  margin: '0 0 15px 0'
                }}>
                  {item.title}
                </h3>
                <p style={{
                  fontSize: '14px',
                  color: '#4b5563',
                  lineHeight: '1.7',
                  margin: '0'
                }}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise Use Cases - Detailed Scenarios */}
      <section style={{
        width: '100%',
        padding: '80px 20px',
        backgroundColor: '#ffffff'
      }}>
        <h2 style={{
          fontSize: '44px',
          fontWeight: '800',
          color: '#1f2937',
          margin: '0 0 15px 0',
          textAlign: 'center'
        }} data-aos="fade-up">
          Enterprise Use Cases
        </h2>
        <p style={{
          fontSize: '16px',
          color: '#6b7280',
          textAlign: 'center',
          maxWidth: '700px',
          margin: '0 auto 60px',
          lineHeight: '1.6'
        }} data-aos="fade-up">
          Five transformative scenarios where agentic AI delivers measurable business impact.
        </p>

        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'grid',
          gap: '30px'
        }}>
          {useCases.map((useCase, idx) => {
            const colors = [
              { color: '#0891b2', bgColor: '#dbeafe', icon: '📞' },
              { color: '#10b981', bgColor: '#dcfce7', icon: '💼' },
              { color: '#f59e0b', bgColor: '#fef3c7', icon: '📦' },
              { color: '#8b5cf6', bgColor: '#f3e8ff', icon: '💰' },
              { color: '#ec4899', bgColor: '#ffe4e6', icon: '👥' }
            ];
            const colorScheme = colors[idx];
            
            return (
              <div
                key={idx}
                data-aos={idx % 2 === 0 ? 'fade-right' : 'fade-left'}
                data-aos-delay={idx * 100}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '40px',
                  alignItems: 'center',
                  padding: '40px',
                  background: colorScheme.bgColor,
                  border: `3px solid ${colorScheme.color}`,
                  borderRadius: '12px',
                  transition: 'all 0.4s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = `0 20px 50px ${colorScheme.color}33`;
                  e.currentTarget.style.transform = 'translateY(-8px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                {idx % 2 === 0 ? (
                  <>
                    <div>
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '15px',
                        marginBottom: '20px'
                      }}>
                        <div style={{
                          fontSize: '40px',
                          fontWeight: '800',
                          color: colorScheme.color
                        }}>
                          {useCase.number}
                        </div>
                        <div>
                          <div style={{ fontSize: '24px' }}>{colorScheme.icon}</div>
                        </div>
                      </div>
                      <h3 style={{
                        fontSize: '24px',
                        fontWeight: '800',
                        color: '#1f2937',
                        margin: '0 0 12px 0'
                      }}>
                        {useCase.title}
                      </h3>
                      <p style={{
                        fontSize: '15px',
                        color: '#6b7280',
                        margin: '0 0 20px 0',
                        lineHeight: '1.6',
                        fontWeight: '600'
                      }}>
                        {useCase.overview}
                      </p>
                      <div>
                        <p style={{
                          fontSize: '12px',
                          fontWeight: '700',
                          color: colorScheme.color,
                          margin: '0 0 12px 0',
                          textTransform: 'uppercase',
                          letterSpacing: '1px'
                        }}>
                          Key Benefits
                        </p>
                        <ul style={{
                          margin: 0,
                          paddingLeft: '20px',
                          fontSize: '13px',
                          color: '#4b5563',
                          lineHeight: '1.8'
                        }}>
                          {useCase.benefits.map((benefit, i) => (
                            <li key={i}>{benefit}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div style={{
                      padding: '30px',
                      background: 'rgba(255, 255, 255, 0.7)',
                      borderRadius: '8px',
                      border: `2px solid ${colorScheme.color}33`,
                      textAlign: 'center'
                    }}>
                      <div style={{
                        fontSize: '56px',
                        fontWeight: '800',
                        color: colorScheme.color,
                        marginBottom: '10px'
                      }}>
                        {colorScheme.icon}
                      </div>
                      <p style={{
                        fontSize: '13px',
                        color: '#6b7280',
                        fontWeight: '600',
                        margin: 0
                      }}>
                        {useCase.overview}
                      </p>
                    </div>
                  </>
                ) : (
                  <>
                    <div style={{
                      padding: '30px',
                      background: 'rgba(255, 255, 255, 0.7)',
                      borderRadius: '8px',
                      border: `2px solid ${colorScheme.color}33`,
                      textAlign: 'center'
                    }}>
                      <div style={{
                        fontSize: '56px',
                        fontWeight: '800',
                        color: colorScheme.color,
                        marginBottom: '10px'
                      }}>
                        {colorScheme.icon}
                      </div>
                      <p style={{
                        fontSize: '13px',
                        color: '#6b7280',
                        fontWeight: '600',
                        margin: 0
                      }}>
                        {useCase.overview}
                      </p>
                    </div>
                    <div>
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '15px',
                        marginBottom: '20px'
                      }}>
                        <div style={{
                          fontSize: '40px',
                          fontWeight: '800',
                          color: colorScheme.color
                        }}>
                          {useCase.number}
                        </div>
                        <div>
                          <div style={{ fontSize: '24px' }}>{colorScheme.icon}</div>
                        </div>
                      </div>
                      <h3 style={{
                        fontSize: '24px',
                        fontWeight: '800',
                        color: '#1f2937',
                        margin: '0 0 12px 0'
                      }}>
                        {useCase.title}
                      </h3>
                      <p style={{
                        fontSize: '15px',
                        color: '#6b7280',
                        margin: '0 0 20px 0',
                        lineHeight: '1.6',
                        fontWeight: '600'
                      }}>
                        {useCase.overview}
                      </p>
                      <div>
                        <p style={{
                          fontSize: '12px',
                          fontWeight: '700',
                          color: colorScheme.color,
                          margin: '0 0 12px 0',
                          textTransform: 'uppercase',
                          letterSpacing: '1px'
                        }}>
                          Key Benefits
                        </p>
                        <ul style={{
                          margin: 0,
                          paddingLeft: '20px',
                          fontSize: '13px',
                          color: '#4b5563',
                          lineHeight: '1.8'
                        }}>
                          {useCase.benefits.map((benefit, i) => (
                            <li key={i}>{benefit}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Technology & Platforms Section */}
      <section style={{
        maxWidth: '1100px',
        margin: '0 auto',
        padding: '80px 20px'
      }}>
        <h2 style={{
          fontSize: '42px',
          fontWeight: '700',
          color: '#1f2937',
          margin: '0 0 60px 0',
          textAlign: 'center'
        }}
        data-aos="fade-up">
          Technology & Platforms
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '40px'
        }}>
          <div style={{
            padding: '40px',
            background: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)',
            borderRadius: '8px',
            border: '1px solid #bfdbfe'
          }}
          data-aos="fade-right"
          data-aos-delay="100">
            <h3 style={{
              fontSize: '20px',
              fontWeight: '600',
              color: '#3b82f6',
              margin: '0 0 15px 0'
            }}>
              Leading Partnerships
            </h3>
            <p style={{
              fontSize: '15px',
              color: '#1f2937',
              lineHeight: '1.6',
              margin: '0'
            }}>
              Symprio partners with leading agentic AI platforms, including custom LLMs and workflow orchestration tools. We emphasise integration with your existing ERP, CRM and HR systems.
            </p>
          </div>

          <div style={{
            padding: '40px',
            background: 'linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)',
            borderRadius: '8px',
            border: '1px solid #fcd34d'
          }}
          data-aos="fade-left"
          data-aos-delay="200">
            <h3 style={{
              fontSize: '20px',
              fontWeight: '600',
              color: '#b45309',
              margin: '0 0 15px 0'
            }}>
              Customization & Governance
            </h3>
            <p style={{
              fontSize: '15px',
              color: '#1f2937',
              lineHeight: '1.6',
              margin: '0'
            }}>
              We tailor agentic AI agents to your processes and governance frameworks, ensuring security, compliance and alignment with your business objectives.
            </p>
          </div>
        </div>
      </section>

      {/* Implementation Approach Section */}
      <section style={{
        width: '100%',
        padding: '60px 10px',
        backgroundColor: '#f9fafb'
      }}>
        <h2 style={{
          fontSize: '42px',
          fontWeight: '700',
          color: '#1f2937',
          margin: '0 0 50px 0',
          textAlign: 'center'
        }}
        data-aos="fade-up">
          Our Implementation Approach
        </h2>

        <div style={{
          maxWidth: '1000px',
          margin: '0 auto'
        }}>
          {/* Step 1 */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '40px',
            alignItems: 'center',
            marginBottom: '60px'
          }}>
            <div data-aos="fade-right" data-aos-delay="0">
              <div style={{ fontSize: '14px', fontWeight: '700', color: '#3b82f6', marginBottom: '10px' }}>
                Week 1-2
              </div>
              <h3 style={{ fontSize: '24px', fontWeight: '700', color: '#1f2937', margin: '0 0 15px 0' }}>
                Assessment & Readiness
              </h3>
              <p style={{ fontSize: '15px', color: '#6b7280', lineHeight: '1.6', margin: '0' }}>
                Evaluate current automation maturity, data quality and AI readiness. Understand your organization's digital infrastructure and capability gaps.
              </p>
            </div>
            <div data-aos="zoom-in" data-aos-delay="100" style={{
              background: 'linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%)',
              padding: '30px',
              borderRadius: '12px',
              border: '2px solid #3b82f6',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '48px', fontWeight: '700', color: '#3b82f6' }}>01</div>
              <div style={{ fontSize: '13px', color: '#3b82f6', fontWeight: '600', marginTop: '10px' }}>ASSESSMENT</div>
            </div>
          </div>

          {/* Connector Line */}
          <div style={{ textAlign: 'center', marginBottom: '60px' }} data-aos="fade-up" data-aos-delay="150">
            <div style={{ fontSize: '24px', color: '#3b82f6' }}>↓</div>
          </div>

          {/* Step 2 */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '40px',
            alignItems: 'center',
            marginBottom: '60px'
          }}>
            <div data-aos="zoom-in" data-aos-delay="200" style={{
              background: 'linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%)',
              padding: '30px',
              borderRadius: '12px',
              border: '2px solid #3b82f6',
              textAlign: 'center',
              order: -1
            }}>
              <div style={{ fontSize: '48px', fontWeight: '700', color: '#3b82f6' }}>02</div>
              <div style={{ fontSize: '13px', color: '#3b82f6', fontWeight: '600', marginTop: '10px' }}>PRIORITISATION</div>
            </div>
            <div data-aos="fade-left" data-aos-delay="250">
              <div style={{ fontSize: '14px', fontWeight: '700', color: '#3b82f6', marginBottom: '10px' }}>
                Week 2-3
              </div>
              <h3 style={{ fontSize: '24px', fontWeight: '700', color: '#1f2937', margin: '0 0 15px 0' }}>
                Use Case Prioritisation
              </h3>
              <p style={{ fontSize: '15px', color: '#6b7280', lineHeight: '1.6', margin: '0' }}>
                Identify high-impact processes and define success metrics. Prioritize use cases based on business value and implementation feasibility.
              </p>
            </div>
          </div>

          {/* Connector Line */}
          <div style={{ textAlign: 'center', marginBottom: '60px' }} data-aos="fade-up" data-aos-delay="300">
            <div style={{ fontSize: '24px', color: '#3b82f6' }}>↓</div>
          </div>

          {/* Step 3 */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '40px',
            alignItems: 'center',
            marginBottom: '60px'
          }}>
            <div data-aos="fade-right" data-aos-delay="350">
              <div style={{ fontSize: '14px', fontWeight: '700', color: '#3b82f6', marginBottom: '10px' }}>
                Week 4-6
              </div>
              <h3 style={{ fontSize: '24px', fontWeight: '700', color: '#1f2937', margin: '0 0 15px 0' }}>
                Pilot & Validation
              </h3>
              <p style={{ fontSize: '15px', color: '#6b7280', lineHeight: '1.6', margin: '0' }}>
                Develop proof of concept, validate ROI and ensure ethical & regulatory compliance. Test agent performance in controlled environment.
              </p>
            </div>
            <div data-aos="zoom-in" data-aos-delay="400" style={{
              background: 'linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%)',
              padding: '30px',
              borderRadius: '12px',
              border: '2px solid #3b82f6',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '48px', fontWeight: '700', color: '#3b82f6' }}>03</div>
              <div style={{ fontSize: '13px', color: '#3b82f6', fontWeight: '600', marginTop: '10px' }}>PILOT</div>
            </div>
          </div>

          {/* Connector Line */}
          <div style={{ textAlign: 'center', marginBottom: '60px' }} data-aos="fade-up" data-aos-delay="450">
            <div style={{ fontSize: '24px', color: '#3b82f6' }}>↓</div>
          </div>

          {/* Step 4 */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '40px',
            alignItems: 'center',
            marginBottom: '60px'
          }}>
            <div data-aos="zoom-in" data-aos-delay="500" style={{
              background: 'linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%)',
              padding: '30px',
              borderRadius: '12px',
              border: '2px solid #3b82f6',
              textAlign: 'center',
              order: -1
            }}>
              <div style={{ fontSize: '48px', fontWeight: '700', color: '#3b82f6' }}>04</div>
              <div style={{ fontSize: '13px', color: '#3b82f6', fontWeight: '600', marginTop: '10px' }}>DEPLOYMENT</div>
            </div>
            <div data-aos="fade-left" data-aos-delay="550">
              <div style={{ fontSize: '14px', fontWeight: '700', color: '#3b82f6', marginBottom: '10px' }}>
                Week 7-10
              </div>
              <h3 style={{ fontSize: '24px', fontWeight: '700', color: '#1f2937', margin: '0 0 15px 0' }}>
                Deployment & Scaling
              </h3>
              <p style={{ fontSize: '15px', color: '#6b7280', lineHeight: '1.6', margin: '0' }}>
                Integrate agents into production systems with secure access controls. Deploy with proper monitoring and rollback capabilities.
              </p>
            </div>
          </div>

          {/* Connector Line */}
          <div style={{ textAlign: 'center', marginBottom: '60px' }} data-aos="fade-up" data-aos-delay="600">
            <div style={{ fontSize: '24px', color: '#3b82f6' }}>↓</div>
          </div>

          {/* Step 5 */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '40px',
            alignItems: 'center',
            marginBottom: '60px'
          }}>
            <div data-aos="fade-right" data-aos-delay="650">
              <div style={{ fontSize: '14px', fontWeight: '700', color: '#3b82f6', marginBottom: '10px' }}>
                Ongoing
              </div>
              <h3 style={{ fontSize: '24px', fontWeight: '700', color: '#1f2937', margin: '0 0 15px 0' }}>
                Monitoring & Improvement
              </h3>
              <p style={{ fontSize: '15px', color: '#6b7280', lineHeight: '1.6', margin: '0' }}>
                Monitor agent performance, gather user feedback and continuously iterate. Optimize processes based on real-world data and outcomes.
              </p>
            </div>
            <div data-aos="zoom-in" data-aos-delay="700" style={{
              background: 'linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%)',
              padding: '30px',
              borderRadius: '12px',
              border: '2px solid #3b82f6',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '48px', fontWeight: '700', color: '#3b82f6' }}>05</div>
              <div style={{ fontSize: '13px', color: '#3b82f6', fontWeight: '600', marginTop: '10px' }}>MONITOR</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <ReadyToStartCTA />
    </div>
  );
}
