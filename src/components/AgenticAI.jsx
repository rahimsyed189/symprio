import React, { useState } from 'react';

export default function AgenticAI() {
  const [expandedUseCase, setExpandedUseCase] = useState(null);

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
      fontFamily: "'Poppins', sans-serif"
    }}>
      {/* Hero Section */}
      <section style={{
        background: 'linear-gradient(135deg, #1e5eb8 0%, #3b82f6 100%)',
        color: '#fff',
        padding: '100px 20px',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h1 style={{
            fontSize: '56px',
            fontWeight: '700',
            margin: '0 0 20px 0',
            lineHeight: '1.2'
          }}>
            Agentic AI Solutions
          </h1>
          <p style={{
            fontSize: '20px',
            color: '#e5e7eb',
            lineHeight: '1.8',
            margin: '0'
          }}>
            The next evolution of AI: autonomous digital agents that reason, decide and execute
          </p>
        </div>
      </section>

      {/* Introduction Section */}
      <section style={{
        maxWidth: '1100px',
        margin: '0 auto',
        padding: '80px 20px',
        backgroundColor: '#f9fafb'
      }}>
        <div style={{
          maxWidth: '900px',
          margin: '0 auto'
        }}>
          <h2 style={{
            fontSize: '42px',
            fontWeight: '700',
            color: '#1f2937',
            margin: '0 0 40px 0',
            textAlign: 'center'
          }}>
            What is Agentic AI?
          </h2>

          <div style={{
            background: '#ffffff',
            padding: '40px',
            borderRadius: '8px',
            border: 'left-solid 4px #3b82f6',
            borderLeft: '4px solid #3b82f6',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
          }}>
            <p style={{
              fontSize: '16px',
              color: '#4b5563',
              lineHeight: '1.8',
              margin: '0 0 20px 0'
            }}>
              Agentic AI represents the next stage of AI evolution. While generative AI assists humans, agentic AI agents can reason, make decisions and execute tasks autonomously. They operate as digital team members, planning tasks, monitoring outcomes and adjusting strategies without constant human oversight.
            </p>

            <div style={{
              background: '#3b82f6',
              color: '#fff',
              padding: '20px',
              borderRadius: '6px',
              marginTop: '20px'
            }}>
              <p style={{
                fontSize: '16px',
                fontWeight: '600',
                margin: '0'
              }}>
                📊 Industry Outlook: Analyst firms predict over 40% of large enterprises will deploy autonomous AI agents by 2025.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why It Matters Section */}
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
        }}>
          Why Agentic AI Matters
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '40px'
        }}>
          {whyMatters.map((item, idx) => (
            <div
              key={idx}
              style={{
                padding: '40px 30px',
                background: '#f9fafb',
                borderRadius: '8px',
                border: '1px solid #e5e7eb',
                textAlign: 'center',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 12px 24px rgba(59, 130, 246, 0.15)';
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.borderColor = '#3b82f6';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = '#e5e7eb';
              }}
            >
              <div style={{
                fontSize: '48px',
                marginBottom: '20px'
              }}>
                {item.icon}
              </div>
              <h3 style={{
                fontSize: '20px',
                fontWeight: '600',
                color: '#1f2937',
                margin: '0 0 15px 0'
              }}>
                {item.title}
              </h3>
              <p style={{
                fontSize: '15px',
                color: '#6b7280',
                lineHeight: '1.6',
                margin: '0'
              }}>
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Enterprise Use Cases Section */}
      <section style={{
        maxWidth: '1100px',
        margin: '0 auto',
        padding: '80px 20px',
        backgroundColor: '#f9fafb'
      }}>
        <h2 style={{
          fontSize: '42px',
          fontWeight: '700',
          color: '#1f2937',
          margin: '0 0 60px 0',
          textAlign: 'center'
        }}>
          Enterprise Use Cases
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '30px'
        }}>
          {useCases.map((useCase, idx) => (
            <div
              key={idx}
              style={{
                padding: '30px',
                background: '#ffffff',
                borderRadius: '8px',
                border: '1px solid #e5e7eb',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
              }}
              onClick={() => setExpandedUseCase(expandedUseCase === idx ? null : idx)}
              onMouseEnter={(e) => {
                if (expandedUseCase !== idx) {
                  e.currentTarget.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.15)';
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.borderColor = '#3b82f6';
                }
              }}
              onMouseLeave={(e) => {
                if (expandedUseCase !== idx) {
                  e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.1)';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = '#e5e7eb';
                }
              }}
            >
              <div style={{
                fontSize: '28px',
                fontWeight: '700',
                color: '#3b82f6',
                marginBottom: '12px'
              }}>
                {useCase.number}
              </div>
              <h3 style={{
                fontSize: '18px',
                fontWeight: '600',
                color: '#1f2937',
                margin: '0 0 10px 0'
              }}>
                {useCase.title}
              </h3>
              <p style={{
                fontSize: '14px',
                color: '#6b7280',
                margin: '0 0 15px 0',
                lineHeight: '1.5'
              }}>
                {useCase.overview}
              </p>

              {expandedUseCase === idx && (
                <div style={{
                  marginTop: '20px',
                  paddingTop: '20px',
                  borderTop: '1px solid #e5e7eb'
                }}>
                  <h4 style={{
                    fontSize: '12px',
                    fontWeight: '700',
                    color: '#3b82f6',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px',
                    margin: '0 0 12px 0'
                  }}>
                    Key Details:
                  </h4>
                  <ul style={{
                    margin: '0',
                    padding: '0',
                    listStyle: 'none'
                  }}>
                    {useCase.benefits.map((benefit, bIdx) => (
                      <li key={bIdx} style={{
                        fontSize: '13px',
                        color: '#6b7280',
                        marginBottom: '10px',
                        paddingLeft: '18px',
                        position: 'relative',
                        lineHeight: '1.5'
                      }}>
                        <span style={{
                          position: 'absolute',
                          left: '0',
                          color: '#3b82f6',
                          fontWeight: '700'
                        }}>•</span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div style={{
                marginTop: '15px',
                color: '#3b82f6',
                fontWeight: '600',
                fontSize: '14px',
                cursor: 'pointer'
              }}>
                {expandedUseCase === idx ? '▼ Show Less' : '▶ Learn More'}
              </div>
            </div>
          ))}
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
        }}>
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
          }}>
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
          }}>
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
        maxWidth: '1100px',
        margin: '0 auto',
        padding: '80px 20px',
        backgroundColor: '#f9fafb'
      }}>
        <h2 style={{
          fontSize: '42px',
          fontWeight: '700',
          color: '#1f2937',
          margin: '0 0 60px 0',
          textAlign: 'center'
        }}>
          Our Implementation Approach
        </h2>

        <div style={{
          position: 'relative',
          paddingTop: '40px'
        }}>
          {/* Timeline Line */}
          <div style={{
            position: 'absolute',
            top: '60px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '2px',
            height: 'calc(100% - 80px)',
            background: 'linear-gradient(180deg, #3b82f6, #8b5cf6)',
            display: 'none'
          }} />

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '30px'
          }}>
            {implementationSteps.map((item, idx) => (
              <div
                key={idx}
                style={{
                  padding: '30px',
                  background: '#ffffff',
                  borderRadius: '8px',
                  border: '2px solid #e5e7eb',
                  position: 'relative',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 8px 16px rgba(59, 130, 246, 0.15)';
                  e.currentTarget.style.borderColor = '#3b82f6';
                  e.currentTarget.style.transform = 'translateY(-4px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.borderColor = '#e5e7eb';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                {/* Step Number Badge */}
                <div style={{
                  position: 'absolute',
                  top: '-15px',
                  left: '20px',
                  background: 'linear-gradient(135deg, #3b82f6, #2563eb)',
                  color: '#fff',
                  width: '45px',
                  height: '45px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: '700',
                  fontSize: '16px'
                }}>
                  {item.step}
                </div>

                <h3 style={{
                  fontSize: '18px',
                  fontWeight: '600',
                  color: '#1f2937',
                  margin: '15px 0 12px 0'
                }}>
                  {item.title}
                </h3>
                <p style={{
                  fontSize: '14px',
                  color: '#6b7280',
                  lineHeight: '1.6',
                  margin: '0'
                }}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Getting Started CTA Section */}
      <section style={{
        background: 'linear-gradient(135deg, #1e40af 0%, #3b82f6 100%)',
        padding: '100px 20px',
        textAlign: 'center',
        color: '#fff'
      }}>
        <div style={{
          maxWidth: '800px',
          margin: '0 auto'
        }}>
          <h2 style={{
            fontSize: '44px',
            fontWeight: '700',
            margin: '0 0 20px 0',
            lineHeight: '1.3'
          }}>
            Ready to Transform with Agentic AI?
          </h2>

          <p style={{
            fontSize: '18px',
            color: '#e5e7eb',
            lineHeight: '1.8',
            margin: '0 0 40px 0'
          }}>
            Schedule an Agentic AI Strategy Session with our experts to explore how autonomous agents can revolutionize your operations.
          </p>

          <div style={{
            display: 'flex',
            gap: '20px',
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'wrap'
          }}>
            <button style={{
              background: '#fff',
              color: '#3b82f6',
              border: 'none',
              padding: '16px 48px',
              fontSize: '16px',
              fontWeight: '600',
              borderRadius: '4px',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              textTransform: 'uppercase',
              letterSpacing: '0.5px',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)'
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-3px)';
              e.target.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.2)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
            }}
            >
              Schedule Strategy Session
            </button>
            
            <button style={{
              background: 'transparent',
              color: '#fff',
              border: '2px solid #fff',
              padding: '14px 46px',
              fontSize: '16px',
              fontWeight: '600',
              borderRadius: '4px',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              textTransform: 'uppercase',
              letterSpacing: '0.5px'
            }}
            onMouseEnter={(e) => {
              e.target.style.background = '#fff';
              e.target.style.color = '#3b82f6';
              e.target.style.transform = 'translateY(-3px)';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = 'transparent';
              e.target.style.color = '#fff';
              e.target.style.transform = 'translateY(0)';
            }}
            >
              Contact an AI Consultant
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
