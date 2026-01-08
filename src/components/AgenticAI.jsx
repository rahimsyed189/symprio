import React, { useState, useEffect } from 'react';

export default function AgenticAI() {
  const [expandedUseCase, setExpandedUseCase] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [containerVisible, setContainerVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('agentic-container');
      if (element) {
        const rect = element.getBoundingClientRect();
        const isInView = rect.top < window.innerHeight * 0.75;
        if (isInView) {
          setContainerVisible(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
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
      fontFamily: "'Poppins', sans-serif"
    }}>
      {/* Hero Section */}
      <section style={{
        background: 'url("/agentic-ai-banner.jpg") center/cover no-repeat',
        color: '#fff',
        padding: '80px 20px',
        textAlign: 'left'
      }}>
        <div style={{ maxWidth: '100%', margin: '0', paddingLeft: '40px', paddingTop: '10px' }}>
          <h1 style={{
            fontSize: '56px',
            fontWeight: '700',
            margin: '-20px 0 20px 0',
            lineHeight: '1.2',
            color: '#ffffff',
            animation: isVisible ? 'slideInLeft 0.8s ease-out 0.1s both' : 'none'
          }}>
            Agentic AI Solutions
          </h1>
          <p style={{
            fontSize: '20px',
            color: '#e5e7eb',
            lineHeight: '1.8',
            margin: '0',
            animation: isVisible ? 'slideInLeft 0.8s ease-out 0.2s both' : 'none'
          }}>
            The next evolution of AI: autonomous digital agents that reason, decide and execute
          </p>
        </div>
      </section>

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
          borderRadius: '12px',
          padding: '50px',
          boxShadow: '0 10px 40px rgba(0, 0, 0, 0.15)',
          border: '2px solid #e5e7eb',
          animation: containerVisible ? 'slideUp 0.8s ease-out both' : 'none',
          position: 'relative',
          zIndex: 10
        }}>
          <h2 style={{
            fontSize: '42px',
            fontWeight: '700',
            color: '#1f2937',
            margin: '0 0 60px 0',
            textAlign: 'center'
          }}>
            What is Agentic AI?
          </h2>

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
              }}>
                Agentic AI represents the next stage of AI evolution. While generative AI assists humans, agentic AI agents can reason, make decisions and execute tasks autonomously. They operate as digital team members, planning tasks, monitoring outcomes and adjusting strategies without constant human oversight.
              </p>

              <div style={{
                background: 'linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%)',
                padding: '30px',
                borderRadius: '12px',
                marginBottom: '25px',
                borderLeft: '4px solid #0c4a6e'
              }}>
                <div style={{
                  fontSize: '24px',
                  marginBottom: '12px'
                }}>
                  🎯
                </div>
                <p style={{
                  fontSize: '16px',
                  fontWeight: '600',
                  color: '#0c4a6e',
                  margin: '0 0 8px 0'
                }}>
                  Key Capabilities
                </p>
                <p style={{
                  fontSize: '14px',
                  color: '#374151',
                  margin: 0,
                  lineHeight: '1.7'
                }}>
                  Autonomous reasoning, real-time decision making, continuous learning, multi-task orchestration, and seamless integration with existing systems
                </p>
              </div>

              <div style={{
                background: 'linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%)',
                padding: '30px',
                borderRadius: '12px',
                borderLeft: '4px solid #0c4a6e'
              }}>
                <div style={{
                  fontSize: '24px',
                  marginBottom: '12px'
                }}>
                  📈
                </div>
                <p style={{
                  fontSize: '16px',
                  fontWeight: '600',
                  color: '#0c4a6e',
                  margin: '0 0 8px 0'
                }}>
                  Industry Outlook
                </p>
                <p style={{
                  fontSize: '14px',
                  color: '#374151',
                  margin: 0,
                  lineHeight: '1.7'
                }}>
                  Analyst firms predict over 40% of large enterprises will deploy autonomous AI agents by 2025, representing a $500B+ market opportunity
                </p>
              </div>
            </div>

            {/* Right Side - Visual */}
            <div style={{
              position: 'relative',
              height: '400px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <svg width="100%" height="100%" viewBox="0 0 400 400" style={{ maxWidth: '100%' }}>
                {/* Central Agent Node */}
                <circle cx="200" cy="200" r="50" fill="url(#gradientCenter)" stroke="#0c4a6e" strokeWidth="3" />
                <text x="200" y="210" textAnchor="middle" fontSize="32" fontWeight="bold" fill="#fff">
                  🤖
                </text>

                {/* Orbital rings */}
                <circle cx="200" cy="200" r="120" fill="none" stroke="#dbeafe" strokeWidth="2" strokeDasharray="5,5" opacity="0.5" />
                <circle cx="200" cy="200" r="160" fill="none" stroke="#bfdbfe" strokeWidth="2" strokeDasharray="5,5" opacity="0.5" />

                {/* Top - Reasoning */}
                <circle cx="200" cy="60" r="35" fill="linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%)" stroke="#0c4a6e" strokeWidth="2" />
                <text x="200" y="72" textAnchor="middle" fontSize="24">🧠</text>
                <line x1="200" y1="95" x2="200" y2="150" stroke="#0c4a6e" strokeWidth="2" strokeDasharray="3,3" />
                <text x="200" y="50" textAnchor="middle" fontSize="12" fontWeight="700" fill="#0c4a6e">Reasoning</text>

                {/* Right - Decision Making */}
                <circle cx="310" cy="130" r="35" fill="linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%)" stroke="#0c4a6e" strokeWidth="2" />
                <text x="310" y="142" textAnchor="middle" fontSize="24">⚡</text>
                <line x1="265" y1="155" x2="230" y2="175" stroke="#0c4a6e" strokeWidth="2" strokeDasharray="3,3" />
                <text x="330" y="135" textAnchor="start" fontSize="12" fontWeight="700" fill="#0c4a6e">Decision</text>
                <text x="330" y="150" textAnchor="start" fontSize="12" fontWeight="700" fill="#0c4a6e">Making</text>

                {/* Bottom Right - Learning */}
                <circle cx="310" cy="270" r="35" fill="linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%)" stroke="#0c4a6e" strokeWidth="2" />
                <text x="310" y="282" textAnchor="middle" fontSize="24">📚</text>
                <line x1="265" y1="245" x2="230" y2="225" stroke="#0c4a6e" strokeWidth="2" strokeDasharray="3,3" />
                <text x="330" y="270" textAnchor="start" fontSize="12" fontWeight="700" fill="#0c4a6e">Learning</text>

                {/* Bottom - Execution */}
                <circle cx="200" cy="340" r="35" fill="linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%)" stroke="#0c4a6e" strokeWidth="2" />
                <text x="200" y="352" textAnchor="middle" fontSize="24">✅</text>
                <line x1="200" y1="305" x2="200" y2="250" stroke="#0c4a6e" strokeWidth="2" strokeDasharray="3,3" />
                <text x="200" y="385" textAnchor="middle" fontSize="12" fontWeight="700" fill="#0c4a6e">Execution</text>

                {/* Left - Planning */}
                <circle cx="90" cy="270" r="35" fill="linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%)" stroke="#0c4a6e" strokeWidth="2" />
                <text x="90" y="282" textAnchor="middle" fontSize="24">📋</text>
                <line x1="135" y1="245" x2="170" y2="225" stroke="#0c4a6e" strokeWidth="2" strokeDasharray="3,3" />
                <text x="70" y="310" textAnchor="middle" fontSize="12" fontWeight="700" fill="#0c4a6e">Planning</text>

                {/* Top Left - Autonomy */}
                <circle cx="90" cy="130" r="35" fill="linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%)" stroke="#0c4a6e" strokeWidth="2" />
                <text x="90" y="142" textAnchor="middle" fontSize="24">🎯</text>
                <line x1="135" y1="155" x2="170" y2="175" stroke="#0c4a6e" strokeWidth="2" strokeDasharray="3,3" />
                <text x="70" y="115" textAnchor="middle" fontSize="12" fontWeight="700" fill="#0c4a6e">Autonomy</text>

                <defs>
                  <linearGradient id="gradientCenter" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{stopColor: '#0c4a6e', stopOpacity: 1}} />
                    <stop offset="100%" style={{stopColor: '#0891b2', stopOpacity: 1}} />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>

          {/* Comparison Table */}
          <div style={{
            marginTop: '60px',
            padding: '40px',
            background: 'linear-gradient(135deg, #f0f9ff 0%, #f0f4f8 100%)',
            borderRadius: '12px',
            border: '2px solid #dbeafe'
          }}>
            <h3 style={{
              fontSize: '24px',
              fontWeight: '700',
              color: '#1f2937',
              margin: '0 0 30px 0',
              textAlign: 'center'
            }}>
              Generative AI vs Agentic AI
            </h3>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '20px'
            }}>
              {/* Header */}
              <div style={{
                fontWeight: '700',
                color: '#1f2937',
                fontSize: '14px',
                paddingBottom: '15px',
                borderBottom: '2px solid #0c4a6e'
              }}>
                Aspect
              </div>
              <div style={{
                fontWeight: '700',
                color: '#1f2937',
                fontSize: '14px',
                paddingBottom: '15px',
                borderBottom: '2px solid #0c4a6e'
              }}>
                Generative AI
              </div>
              <div style={{
                fontWeight: '700',
                color: '#1f2937',
                fontSize: '14px',
                paddingBottom: '15px',
                borderBottom: '2px solid #0c4a6e'
              }}>
                Agentic AI
              </div>

              {/* Rows */}
              {[
                { aspect: 'Autonomy', gen: 'Requires human prompts', agent: 'Self-directed execution' },
                { aspect: 'Decision Making', gen: 'Suggests options', agent: 'Makes autonomous decisions' },
                { aspect: 'Persistence', gen: 'Single task focus', agent: 'Multi-task orchestration' },
                { aspect: 'Learning', gen: 'Static knowledge', agent: 'Continuous improvement' },
                { aspect: 'Integration', gen: 'Output dependent', agent: 'System-wide automation' }
              ].map((row, idx) => (
                <div key={idx} style={{ display: 'contents' }}>
                  <div style={{
                    fontSize: '14px',
                    fontWeight: '600',
                    color: '#0c4a6e',
                    paddingTop: '15px'
                  }}>
                    {row.aspect}
                  </div>
                  <div style={{
                    fontSize: '14px',
                    color: '#374151',
                    paddingTop: '15px',
                    lineHeight: '1.5'
                  }}>
                    {row.gen}
                  </div>
                  <div style={{
                    fontSize: '14px',
                    color: '#374151',
                    paddingTop: '15px',
                    lineHeight: '1.5',
                    background: 'rgba(12, 74, 110, 0.05)',
                    padding: '15px',
                    borderRadius: '6px'
                  }}>
                    {row.agent}
                  </div>
                </div>
              ))}
            </div>
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
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '30px'
        }}>
          {whyMatters.map((item, idx) => (
            <div
              key={idx}
              style={{
                padding: '40px',
                background: 'linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%)',
                borderRadius: '12px',
                border: '2px solid #7dd3fc',
                textAlign: 'center',
                transition: 'all 0.4s ease',
                position: 'relative',
                overflow: 'hidden'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(12, 74, 110, 0.2)';
                e.currentTarget.style.transform = 'translateY(-12px) scale(1.02)';
                e.currentTarget.style.borderColor = '#0c4a6e';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 5px 15px rgba(12, 74, 110, 0.1)';
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.borderColor = '#7dd3fc';
              }}
            >
              {/* Watermark Number */}
              <div style={{
                position: 'absolute',
                top: '15px',
                right: '20px',
                fontSize: '48px',
                fontWeight: '700',
                color: '#0c4a6e',
                opacity: 0.1
              }}>
                {String(idx + 1).padStart(2, '0')}
              </div>

              {/* Icon Container */}
              <div style={{
                fontSize: '60px',
                marginBottom: '25px'
              }}>
                {item.icon}
              </div>

              <h3 style={{
                fontSize: '22px',
                fontWeight: '700',
                color: '#0c4a6e',
                margin: '0 0 15px 0'
              }}>
                {item.title}
              </h3>

              <p style={{
                fontSize: '15px',
                color: '#374151',
                lineHeight: '1.7',
                margin: '0'
              }}>
                {item.description}
              </p>

              {/* Bottom Accent */}
              <div style={{
                height: '3px',
                background: 'linear-gradient(90deg, transparent, #0c4a6e, transparent)',
                marginTop: '25px',
                opacity: 0.6
              }} />
            </div>
          ))}
        </div>
      </section>

      {/* Enterprise Use Cases Section */}
      <section style={{
        width: '100%',
        padding: '60px 10px',
        backgroundColor: '#ffffff'
      }}>
        <h2 style={{
          fontSize: '42px',
          fontWeight: '700',
          color: '#1f2937',
          margin: '0 0 50px 0',
          textAlign: 'center'
        }}>
          Enterprise Use Cases
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '20px',
          padding: '0 10px'
        }}>
          {useCases.map((useCase, idx) => {
            const colors = [
              { bg: 'linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%)', icon: '📞', accent: '#0c4a6e' },
              { bg: 'linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%)', icon: '💼', accent: '#0c4a6e' },
              { bg: 'linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%)', icon: '📦', accent: '#0c4a6e' },
              { bg: 'linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%)', icon: '💰', accent: '#0c4a6e' },
              { bg: 'linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%)', icon: '👥', accent: '#0c4a6e' }
            ];
            const color = colors[idx];
            
            return (
              <div
                key={idx}
                style={{
                  padding: '0',
                  background: color.bg,
                  borderRadius: '10px',
                  cursor: 'pointer',
                  transition: 'all 0.4s ease',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
                  overflow: 'hidden',
                  position: 'relative',
                  minHeight: expandedUseCase === idx ? 'auto' : '260px',
                  display: 'flex',
                  flexDirection: 'column'
                }}
                onClick={() => setExpandedUseCase(expandedUseCase === idx ? null : idx)}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.12)';
                  e.currentTarget.style.transform = 'translateY(-6px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.08)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                {/* Header with Icon and Number */}
                <div style={{
                  padding: '20px 20px 15px',
                  display: 'flex',
                  alignItems: 'flex-start',
                  justifyContent: 'space-between'
                }}>
                  <div>
                    <div style={{
                      fontSize: '32px',
                      marginBottom: '8px'
                    }}>
                      {color.icon}
                    </div>
                    <h3 style={{
                      fontSize: '17px',
                      fontWeight: '700',
                      color: '#000000',
                      margin: '0 0 8px 0',
                      lineHeight: '1.3'
                    }}>
                      {useCase.title}
                    </h3>
                  </div>
                  <div style={{
                    fontSize: '24px',
                    fontWeight: '700',
                    color: color.accent,
                    opacity: 0.2
                  }}>
                    {useCase.number}
                  </div>
                </div>

                {/* Overview Text */}
                <p style={{
                  fontSize: '13px',
                  color: '#374151',
                  margin: '0 20px 18px',
                  lineHeight: '1.5',
                  flex: 1
                }}>
                  {useCase.overview}
                </p>

                {/* Expand Arrow/Button with Animation */}
                <div style={{
                  padding: '0 20px 18px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  color: color.accent,
                  fontSize: '13px',
                  fontWeight: '600',
                  cursor: 'pointer'
                }}>
                  <span style={{
                    display: 'inline-block',
                    transition: 'transform 0.3s ease',
                    transform: expandedUseCase === idx ? 'rotate(90deg)' : 'rotate(0deg)'
                  }}>
                    →
                  </span>
                  <span>{expandedUseCase === idx ? 'Hide Details' : 'View Details'}</span>
                </div>

                {/* Expanded Details */}
                {expandedUseCase === idx && (
                  <div style={{
                    padding: '0 20px 20px',
                    borderTop: '2px solid rgba(12, 74, 110, 0.2)',
                    marginTop: '12px'
                  }}>
                    <h4 style={{
                      fontSize: '12px',
                      fontWeight: '700',
                      color: color.accent,
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px',
                      margin: '0 0 12px 0'
                    }}>
                      Key Benefits:
                    </h4>
                    <ul style={{
                      margin: '0',
                      padding: '0',
                      listStyle: 'none'
                    }}>
                      {useCase.benefits.map((benefit, bIdx) => (
                        <li key={bIdx} style={{
                          fontSize: '12px',
                          color: '#374151',
                          marginBottom: '10px',
                          paddingLeft: '18px',
                          position: 'relative',
                          lineHeight: '1.5'
                        }}>
                          <span style={{
                            position: 'absolute',
                            left: '0',
                            color: color.accent,
                            fontWeight: '700'
                          }}>
                            •
                          </span>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
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
        }}>
          Our Implementation Approach
        </h2>

        <div style={{
          position: 'relative',
          width: '100%',
          marginBottom: '50px',
          display: 'flex',
          justifyContent: 'center'
        }}>
          {/* SVG Flow Diagram */}
          <svg
            width="100%"
            height="600"
            viewBox="0 0 1200 600"
            style={{
              minHeight: '600px',
              background: 'linear-gradient(135deg, #f0f9ff 0%, #f0f4f8 100%)',
              borderRadius: '10px',
              border: '2px solid #e0e7ff',
              maxWidth: '100%',
              padding: '0 10px'
            }}
          >
            {/* Dotted connecting lines */}
            <defs>
              <style>{`
                .dotted-line {
                  stroke: #3b82f6;
                  stroke-width: 2;
                  stroke-dasharray: 5, 5;
                  fill: none;
                }
                .target-circle {
                  fill: #dbeafe;
                  stroke: #3b82f6;
                  stroke-width: 3;
                }
                .target-dot {
                  fill: #3b82f6;
                }
              `}</style>
              <marker
                id="arrowhead"
                markerWidth="10"
                markerHeight="10"
                refX="9"
                refY="3"
                orient="auto"
              >
                <polygon points="0 0, 10 3, 0 6" fill="#3b82f6" />
              </marker>
            </defs>

            {/* Stage 1 to 2 */}
            <path
              d="M 220 150 L 540 150"
              className="dotted-line"
              markerEnd="url(#arrowhead)"
            />
            
            {/* Stage 2 to 3 */}
            <path
              d="M 540 150 L 860 150"
              className="dotted-line"
              markerEnd="url(#arrowhead)"
            />

            {/* Stage 3 to 4 - downward straight */}
            <path
              d="M 860 150 L 920 400"
              className="dotted-line"
              markerEnd="url(#arrowhead)"
            />

            {/* Stage 4 to 5 - leftward straight */}
            <path
              d="M 920 400 L 360 400"
              className="dotted-line"
              markerEnd="url(#arrowhead)"
            />

            {/* Stage 1 */}
            <circle cx="220" cy="150" r="40" className="target-circle" />
            <circle cx="220" cy="150" r="10" className="target-dot" />
            <text x="220" y="260" textAnchor="middle" fontSize="18" fontWeight="700" fill="#1f2937">
              Assessment
            </text>
            <text x="220" y="285" textAnchor="middle" fontSize="14" fill="#6b7280">
              Evaluate automation
            </text>
            <text x="220" y="305" textAnchor="middle" fontSize="14" fill="#6b7280">
              maturity & AI readiness
            </text>
            <text x="220" y="345" textAnchor="middle" fontSize="13" fontWeight="600" fill="#3b82f6" style={{backgroundColor: '#dbeafe', padding: '4px 8px'}}>
              Week 1-2
            </text>

            {/* Stage 2 */}
            <circle cx="540" cy="150" r="40" className="target-circle" />
            <circle cx="540" cy="150" r="10" className="target-dot" />
            <text x="540" y="260" textAnchor="middle" fontSize="18" fontWeight="700" fill="#1f2937">
              Use Case
            </text>
            <text x="540" y="282" textAnchor="middle" fontSize="18" fontWeight="700" fill="#1f2937">
              Prioritisation
            </text>
            <text x="540" y="305" textAnchor="middle" fontSize="14" fill="#6b7280">
              Identify high-impact
            </text>
            <text x="540" y="325" textAnchor="middle" fontSize="14" fill="#6b7280">
              processes & metrics
            </text>
            <text x="540" y="360" textAnchor="middle" fontSize="13" fontWeight="600" fill="#3b82f6" style={{backgroundColor: '#dbeafe', padding: '4px 8px'}}>
              Week 2-3
            </text>

            {/* Stage 3 */}
            <circle cx="860" cy="150" r="40" className="target-circle" />
            <circle cx="860" cy="150" r="10" className="target-dot" />
            <text x="860" y="260" textAnchor="middle" fontSize="18" fontWeight="700" fill="#1f2937">
              Pilot &
            </text>
            <text x="860" y="282" textAnchor="middle" fontSize="18" fontWeight="700" fill="#1f2937">
              Validation
            </text>
            <text x="860" y="305" textAnchor="middle" fontSize="14" fill="#6b7280">
              Develop PoC, validate
            </text>
            <text x="860" y="325" textAnchor="middle" fontSize="14" fill="#6b7280">
              ROI & compliance
            </text>
            <text x="860" y="360" textAnchor="middle" fontSize="13" fontWeight="600" fill="#3b82f6" style={{backgroundColor: '#dbeafe', padding: '4px 8px'}}>
              Week 4-6
            </text>

            {/* Stage 4 */}
            <circle cx="920" cy="400" r="40" className="target-circle" />
            <circle cx="920" cy="400" r="10" className="target-dot" />
            <text x="920" y="480" textAnchor="middle" fontSize="18" fontWeight="700" fill="#1f2937">
              Deployment &
            </text>
            <text x="920" y="502" textAnchor="middle" fontSize="18" fontWeight="700" fill="#1f2937">
              Scaling
            </text>
            <text x="920" y="525" textAnchor="middle" fontSize="14" fill="#6b7280">
              Integrate agents into
            </text>
            <text x="920" y="545" textAnchor="middle" fontSize="14" fill="#6b7280">
              production systems
            </text>
            <text x="920" y="575" textAnchor="middle" fontSize="13" fontWeight="600" fill="#3b82f6" style={{backgroundColor: '#dbeafe', padding: '4px 8px'}}>
              Week 7-10
            </text>

            {/* Stage 5 */}
            <circle cx="360" cy="400" r="40" className="target-circle" />
            <circle cx="360" cy="400" r="10" className="target-dot" />
            <text x="360" y="475" textAnchor="middle" fontSize="18" fontWeight="700" fill="#1f2937">
              Monitoring &
            </text>
            <text x="360" y="497" textAnchor="middle" fontSize="18" fontWeight="700" fill="#1f2937">
              Improvement
            </text>
            <text x="360" y="520" textAnchor="middle" fontSize="14" fill="#6b7280">
              Monitor performance,
            </text>
            <text x="360" y="540" textAnchor="middle" fontSize="14" fill="#6b7280">
              gather feedback & iterate
            </text>
            <text x="360" y="575" textAnchor="middle" fontSize="13" fontWeight="600" fill="#3b82f6" style={{backgroundColor: '#dbeafe', padding: '4px 8px'}}>
              Ongoing
            </text>
          </svg>
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
