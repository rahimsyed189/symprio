import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function AgenticAI() {
  const [expandedUseCase, setExpandedUseCase] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [pageScroll, setPageScroll] = useState(0);
  const [containerVisible, setContainerVisible] = useState(false);
  const [flowerScroll, setFlowerScroll] = useState(0);
  const [comparisonScroll, setComparisonScroll] = useState(0);
  const [whyMattersScroll, setWhyMattersScroll] = useState(0);

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

  useEffect(() => {
    const handleScroll = () => {
      setPageScroll(window.scrollY);
      const element = document.getElementById('agentic-container');
      const flowerElement = document.querySelector('[data-aos="zoom-in"]');
      const comparisonElement = document.getElementById('comparison-section');
      const whyMattersElement = document.getElementById('why-matters-section');
      
      if (element) {
        const rect = element.getBoundingClientRect();
        const isInView = rect.top < window.innerHeight * 0.75;
        if (isInView) {
          setContainerVisible(true);
        }
      }
      
      if (flowerElement) {
        const rect = flowerElement.getBoundingClientRect();
        const progress = Math.max(0, Math.min(1, (window.innerHeight - rect.top) / (window.innerHeight + rect.height * 0.5)));
        setFlowerScroll(progress);
      }

      if (comparisonElement) {
        const rect = comparisonElement.getBoundingClientRect();
        const progress = Math.max(0, Math.min(1, (window.innerHeight - rect.top) / (window.innerHeight + rect.height * 0.5)));
        setComparisonScroll(progress);
      }

      if (whyMattersElement) {
        const rect = whyMattersElement.getBoundingClientRect();
        const progress = Math.max(0, Math.min(1, (window.innerHeight - rect.top) / (window.innerHeight + rect.height * 0.5)));
        setWhyMattersScroll(progress);
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
      fontFamily: "'Poppins', sans-serif",
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Animated Background Elements */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 0,
        pointerEvents: 'none',
        overflow: 'hidden'
      }}>
        {/* Floating Orb 1 */}
        <div style={{
          position: 'absolute',
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(12, 74, 110, 0.15) 0%, transparent 70%)',
          borderRadius: '50%',
          top: `${-100 + (pageScroll * 0.1) % 300}px`,
          left: `${-150 + (pageScroll * 0.05) % 200}px`,
          filter: 'blur(60px)'
        }}/>
        
        {/* Floating Orb 2 */}
        <div style={{
          position: 'absolute',
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(8, 145, 178, 0.1) 0%, transparent 70%)',
          borderRadius: '50%',
          bottom: `${-200 + (pageScroll * 0.08) % 300}px`,
          right: `${-250 + (pageScroll * 0.06) % 250}px`,
          filter: 'blur(80px)'
        }}/>
        
        {/* Floating Orb 3 */}
        <div style={{
          position: 'absolute',
          width: '350px',
          height: '350px',
          background: 'radial-gradient(circle, rgba(102, 217, 255, 0.08) 0%, transparent 70%)',
          borderRadius: '50%',
          top: `${50 + (pageScroll * 0.12) % 200}px`,
          right: `${100 + (pageScroll * 0.04) % 150}px`,
          filter: 'blur(70px)'
        }}/>
      </div>

      {/* Content Wrapper */}
      <div style={{ position: 'relative', zIndex: 1 }}>
      {/* Hero Section */}
      <section style={{
        background: 'url("/agentic-ai-banner.png") center/cover no-repeat',
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
            color: '#ffffff'
          }}
          data-aos="fade-left"
          data-aos-duration="800"
          data-aos-once="false">
            Agentic AI Solutions
          </h1>
          <p style={{
            fontSize: '20px',
            color: '#e5e7eb',
            lineHeight: '1.8',
            margin: '0'
          }}
          data-aos="fade-left"
          data-aos-delay="100"
          data-aos-duration="800"
          data-aos-once="false">
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

            {/* Right Side - Visual */}
            <div style={{
              position: 'relative',
              height: '400px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
            data-aos="zoom-in"
            data-aos-delay="100">
              <svg width="100%" height="100%" viewBox="0 0 400 400" style={{ maxWidth: '100%' }}>
                {/* Animated Rotating Rings Design */}
                
                {/* Outer Ring - Rotating */}
                <circle 
                  cx="200" 
                  cy="200" 
                  r="190" 
                  fill="none" 
                  stroke="#0c4a6e" 
                  strokeWidth="3"
                  opacity={Math.min(flowerScroll * 2, 1)}
                  style={{
                    strokeDasharray: '502',
                    strokeDashoffset: Math.min(flowerScroll * 200, 502),
                    transition: 'all 0.3s ease-out'
                  }}
                />

                {/* Middle Ring - Rotating Opposite */}
                <circle 
                  cx="200" 
                  cy="200" 
                  r="145" 
                  fill="none" 
                  stroke="#0891b2" 
                  strokeWidth="2"
                  opacity={Math.min((flowerScroll - 0.1) * 2.5, 1)}
                  style={{
                    strokeDasharray: '377',
                    strokeDashoffset: Math.min((flowerScroll - 0.1) * -150, 0),
                    transition: 'all 0.3s ease-out'
                  }}
                />

                {/* Inner Ring - Pulsing */}
                <circle 
                  cx="200" 
                  cy="200" 
                  r="100" 
                  fill="none" 
                  stroke="#66d9ff" 
                  strokeWidth="2"
                  opacity={Math.min((flowerScroll - 0.2) * 3, 1)}
                  style={{
                    transition: 'all 0.3s ease-out'
                  }}
                />

                {/* Central Glowing Circle */}
                <circle 
                  cx="200" 
                  cy="200" 
                  r="55" 
                  fill="url(#gradientCenter)"
                  stroke="none"
                  opacity={Math.min(flowerScroll * 2, 1)}
                  style={{
                    transform: `scale(${0.6 + flowerScroll * 0.4})`,
                    transformOrigin: '200px 200px',
                    transition: 'all 0.3s ease-out'
                  }}
                />

                {/* Center Icon with Pulse */}
                <text 
                  x="200" 
                  y="210" 
                  textAnchor="middle" 
                  fontSize="32" 
                  fontWeight="bold" 
                  fill="#ffffff"
                  style={{
                    opacity: Math.min(flowerScroll * 2, 1),
                    transform: `scale(${0.6 + flowerScroll * 0.4})`,
                    transformOrigin: '200px 200px',
                    transition: 'all 0.3s ease-out',
                    filter: 'grayscale(100%)'
                  }}
                >
                  🧠
                </text>

                {/* Decorative Dots around center - appearing one by one with labels */}
                {[
                  {angle: 0, label: 'Decision Making', icon: '🎯'},
                  {angle: 90, label: 'Reasoning', icon: '🧠'},
                  {angle: 180, label: 'Autonomy', icon: '⚡'},
                  {angle: 270, label: 'Execution', icon: '✓'}
                ].map((item, idx) => {
                  const dotTrigger = 0.15 + idx * 0.1;
                  const dotProgress = Math.max(0, Math.min(1, (flowerScroll - dotTrigger) * 3));
                  const rad = (item.angle * Math.PI) / 180;
                  const x = 200 + 110 * Math.cos(rad);
                  const y = 200 + 110 * Math.sin(rad);
                  const labelX = 200 + 155 * Math.cos(rad);
                  const labelY = 200 + 155 * Math.sin(rad);
                  
                  return (
                    <g key={idx} style={{
                      opacity: dotProgress,
                      transform: `scale(${0.5 + dotProgress * 0.5})`,
                      transformOrigin: `${x}px ${y}px`,
                      transition: 'all 0.4s ease-out'
                    }}>
                      <circle cx={x} cy={y} r="16" fill="#0c4a6e" opacity="0.8" />
                      <circle cx={x} cy={y} r="16" fill="none" stroke="#ffffff" strokeWidth="2" />
                      <text 
                        x={x} 
                        y={y + 4} 
                        textAnchor="middle" 
                        fontSize="12" 
                        fontWeight="600" 
                        fill="#ffffff"
                        style={{
                          letterSpacing: '0.5px'
                        }}
                      >
                        {item.icon}
                      </text>
                      <text 
                        x={labelX} 
                        y={labelY + 4} 
                        textAnchor="middle" 
                        fontSize="11" 
                        fontWeight="600" 
                        fill="#0891b2"
                        style={{
                          letterSpacing: '0.5px'
                        }}
                      >
                        {item.label}
                      </text>
                    </g>
                  );
                })}

                <defs>
                  <linearGradient id="gradientCenter" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{stopColor: '#0c4a6e', stopOpacity: 1}} />
                    <stop offset="100%" style={{stopColor: '#0891b2', stopOpacity: 1}} />
                  </linearGradient>
                </defs>
              </svg>
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
              opacity: 0.4 + comparisonScroll * 0.6,
              transform: `translateY(${-15 + comparisonScroll * 15}px)`,
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

      {/* Why It Matters Section */}
      <section id="why-matters-section" style={{
        width: '100%',
        margin: '0',
        padding: '0 20px',
        position: 'relative',
        background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
        borderRadius: '0px',
        overflow: 'hidden'
      }}>
        {/* Overlay */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'transparent',
          zIndex: 1
        }}></div>

        <div style={{
          position: 'relative',
          zIndex: 2,
          padding: '80px 20px'
        }}>
          <h2 style={{
            fontSize: '42px',
            fontWeight: '700',
            color: '#ffffff',
            margin: '0 0 60px 0',
            textAlign: 'center',
            opacity: 1,
            transform: `translateY(${Math.max(0, (1 - Math.min(whyMattersScroll * 2, 1)) * 10)}px)`,
            transition: 'all 0.4s ease-out'
          }}>
            Why Agentic AI Matters
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '30px'
          }}>
            {whyMatters.map((item, idx) => {
              return (
                <div
                  key={idx}
                  style={{
                    padding: '40px',
                    background: '#ffffff',
                    backdropFilter: 'none',
                    borderRadius: '16px',
                    border: '1px solid #e5e7eb',
                    textAlign: 'center',
                    position: 'relative',
                    overflow: 'hidden',
                    boxShadow: 'none'
                  }}
                data-aos="fade-up"
                data-aos-delay={idx * 100}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.1)';
                  e.currentTarget.style.transform = 'translateY(-8px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                {/* Watermark Number */}
                <div style={{
                  position: 'absolute',
                  top: '15px',
                  right: '20px',
                  fontSize: '48px',
                  fontWeight: '700',
                  color: '#0f172a',
                  opacity: 0.05,
                  zIndex: 0
                }}>
                  {String(idx + 1).padStart(2, '0')}
                </div>

                {/* Icon Container */}
                <div style={{
                  fontSize: '70px',
                  marginBottom: '25px',
                  position: 'relative',
                  zIndex: 1,
                  color: '#1f2937',
                  filter: 'grayscale(0%) brightness(1)',
                  opacity: 1
                }}>
                  {item.icon}
                </div>

                <h3 style={{
                  fontSize: '24px',
                  fontWeight: '700',
                  color: '#1f2937',
                  margin: '0 0 15px 0',
                  position: 'relative',
                  zIndex: 1
                }}>
                  {item.title}
                </h3>

                <p style={{
                  fontSize: '15px',
                  color: '#666666',
                  lineHeight: '1.7',
                  margin: '0',
                  position: 'relative',
                  zIndex: 1,
                  opacity: 0.9
                }}>
                  {item.description}
                </p>

                {/* Bottom Accent - Clean line */}
                <div style={{
                  height: '2px',
                  background: 'rgba(255, 255, 255, 0.2)',
                  marginTop: '25px',
                  position: 'relative',
                  zIndex: 1
                }} />
              </div>
            );
          })}
        </div>
        </div>
      </section>

      {/* Enterprise Use Cases Section */}
      <section style={{
        width: '100%',
        padding: '80px 20px',
        backgroundColor: '#f8fafc'
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

        {/* Horizontal Flow Container */}
        <div style={{
          maxWidth: '1400px',
          margin: '0 auto',
          position: 'relative',
          paddingBottom: '20px'
        }}>
          {/* Cards Container - Grid Layout */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(5, 1fr)',
            gap: '15px',
            paddingTop: '20px',
            paddingBottom: '10px',
            position: 'relative',
            zIndex: 1
          }}>
            {useCases.map((useCase, idx) => {
              const colors = [
                { bg: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(219, 234, 254, 0.6) 100%)', icon: '📞', accent: '#0c4a6e', border: '#dbeafe' },
                { bg: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(219, 234, 254, 0.6) 100%)', icon: '💼', accent: '#0c4a6e', border: '#dbeafe' },
                { bg: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(219, 234, 254, 0.6) 100%)', icon: '📦', accent: '#0c4a6e', border: '#dbeafe' },
                { bg: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(219, 234, 254, 0.6) 100%)', icon: '💰', accent: '#0c4a6e', border: '#dbeafe' },
                { bg: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(219, 234, 254, 0.6) 100%)', icon: '👥', accent: '#0c4a6e', border: '#dbeafe' }
              ];
              const color = colors[idx];
              
              return (
                <div
                  key={idx}
                  style={{
                    padding: '18px',
                    background: color.bg,
                    borderRadius: '12px',
                    border: `2px solid ${color.border}`,
                    cursor: 'pointer',
                    transition: 'all 0.4s ease',
                    boxShadow: '0 8px 20px rgba(12, 74, 110, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.8)',
                    overflow: 'hidden',
                    position: 'relative',
                    display: 'flex',
                    flexDirection: 'column',
                    minHeight: 'auto'
                  }}
                  data-aos="fade-left"
                  data-aos-duration="700"
                  data-aos-delay={idx * 120}
                  data-aos-once="false"
                  onClick={() => setExpandedUseCase(expandedUseCase === idx ? null : idx)}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = '0 15px 35px rgba(12, 74, 110, 0.18), inset 0 1px 0 rgba(255, 255, 255, 0.9)';
                    e.currentTarget.style.transform = 'translateY(-8px)';
                    e.currentTarget.style.borderColor = color.accent;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = '0 8px 20px rgba(12, 74, 110, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.8)';
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.borderColor = color.border;
                  }}
                >
                  {/* Shiny Overlay */}
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '40%',
                    background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.6) 0%, transparent 100%)',
                    pointerEvents: 'none',
                    borderRadius: '14px 14px 0 0'
                  }}/>

                  {/* Corner Number Watermark */}
                  <div style={{
                    position: 'absolute',
                    top: '12px',
                    right: '16px',
                    fontSize: '40px',
                    fontWeight: '700',
                    color: color.accent,
                    opacity: 0.1,
                    zIndex: 0
                  }}>
                    {useCase.number}
                  </div>

                  {/* Content */}
                  <div style={{ position: 'relative', zIndex: 1 }}>
                    {/* Icon and Header */}
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      marginBottom: '15px'
                    }}>
                      <div style={{ fontSize: '36px' }}>
                        {color.icon}
                      </div>
                      <h3 style={{
                        fontSize: '16px',
                        fontWeight: '700',
                        color: '#1f2937',
                        margin: 0,
                        lineHeight: '1.3'
                      }}>
                        {useCase.title}
                      </h3>
                    </div>

                    {/* Overview */}
                    <p style={{
                      fontSize: '13px',
                      color: '#4b5563',
                      margin: '0 0 18px 0',
                      lineHeight: '1.5',
                      flex: 1
                    }}>
                      {useCase.overview}
                    </p>

                    {/* View Details Button */}
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      color: color.accent,
                      fontSize: '12px',
                      fontWeight: '700',
                      cursor: 'pointer',
                      marginTop: 'auto'
                    }}>
                      <span style={{
                        display: 'inline-block',
                        transition: 'transform 0.3s ease',
                        transform: expandedUseCase === idx ? 'rotate(90deg)' : 'rotate(0deg)',
                        fontSize: '28px',
                        letterSpacing: '2px'
                      }}>
                        →
                      </span>
                      <span>{expandedUseCase === idx ? 'Hide Details' : 'View Details'}</span>
                    </div>
                  </div>

                  {/* Expanded Details */}
                  {expandedUseCase === idx && (
                    <div style={{
                      marginTop: '15px',
                      paddingTop: '15px',
                      borderTop: `2px solid ${color.border}`,
                      position: 'relative',
                      zIndex: 1
                    }}>
                      <h4 style={{
                        fontSize: '11px',
                        fontWeight: '700',
                        color: color.accent,
                        textTransform: 'uppercase',
                        letterSpacing: '0.5px',
                        margin: '0 0 10px 0'
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
                            fontSize: '11px',
                            color: '#4b5563',
                            marginBottom: '8px',
                            paddingLeft: '16px',
                            position: 'relative',
                            lineHeight: '1.4'
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
          }}
          data-aos="fade-up">
            Ready to Transform with Agentic AI?
          </h2>

          <p style={{
            fontSize: '18px',
            color: '#e5e7eb',
            lineHeight: '1.8',
            margin: '0 0 40px 0'
          }}
          data-aos="fade-up"
          data-aos-delay="100">
            Schedule an Agentic AI Strategy Session with our experts to explore how autonomous agents can revolutionize your operations.
          </p>

          <div style={{
            display: 'flex',
            gap: '20px',
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'wrap'
          }}
          data-aos="zoom-in"
          data-aos-delay="200">
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
