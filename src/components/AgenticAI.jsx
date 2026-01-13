import React, { useState, useEffect } from 'react';

export default function AgenticAI() {
  const [expandedUseCase, setExpandedUseCase] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [containerVisible, setContainerVisible] = useState(false);
  const [flowerScroll, setFlowerScroll] = useState(0);
  const [comparisonScroll, setComparisonScroll] = useState(0);
  const [whyMattersScroll, setWhyMattersScroll] = useState(0);
  const [capabilitiesScroll, setCapabilitiesScroll] = useState(0);
  const [introParaScroll, setIntroParaScroll] = useState(0);
  const [pageScroll, setPageScroll] = useState(0);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setPageScroll(window.scrollY);
      const element = document.getElementById('agentic-container');
      const flowerElement = document.getElementById('flower-circle');
      const comparisonElement = document.getElementById('comparison-section');
      const whyMattersElement = document.getElementById('why-matters-section');
      const capabilitiesElement = document.getElementById('capabilities-section');
      const introParaElement = document.getElementById('intro-para');
      
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
      if (capabilitiesElement) {
        const rect = capabilitiesElement.getBoundingClientRect();
        const progress = Math.max(0, Math.min(1, (window.innerHeight - rect.top) / (window.innerHeight + rect.height * 0.5)));
        setCapabilitiesScroll(progress);
      }
      if (introParaElement) {
        const rect = introParaElement.getBoundingClientRect();
        const progress = Math.max(0, Math.min(1, (window.innerHeight - rect.top) / (window.innerHeight + rect.height * 0.5)));
        setIntroParaScroll(progress);
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
          padding: '50px',
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
            <div id="capabilities-section">
              <p id="intro-para" style={{
                fontSize: '16px',
                color: '#4b5563',
                lineHeight: '1.9',
                margin: '0 0 25px 0',
                opacity: 1,
                transform: `translateY(${Math.max(0, (1 - Math.min(introParaScroll * 2, 1)) * 20)}px)`,
                transition: 'all 0.6s ease-out'
              }}>
                Agentic AI represents the next stage of AI evolution. While generative AI assists humans, agentic AI agents can reason, make decisions and execute tasks autonomously. They operate as digital team members, planning tasks, monitoring outcomes and adjusting strategies without constant human oversight.
              </p>

              <div style={{
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(219, 234, 254, 0.6) 100%)',
                padding: '20px',
                borderRadius: '12px',
                marginBottom: '20px',
                border: '2px solid #dbeafe',
                opacity: 1,
                transform: `translateX(${Math.max(0, (1 - Math.min(capabilitiesScroll * 2, 1)) * 40)}px)`,
                transition: 'all 0.6s ease-out',
                boxShadow: `0 10px 30px rgba(12, 74, 110, 0.08)`,
                position: 'relative',
                overflow: 'hidden'
              }}>
                <div style={{
                  position: 'relative',
                  zIndex: 1
                }}>
                  <p style={{
                    fontSize: '14px',
                    fontWeight: '700',
                    color: '#0c4a6e',
                    margin: '0 0 6px 0'
                  }}>
                    Key Capabilities
                  </p>
                  <p style={{
                    fontSize: '12px',
                    color: '#374151',
                    margin: 0,
                    lineHeight: '1.6'
                  }}>
                    Autonomous reasoning, real-time decision making, continuous learning, multi-task orchestration
                  </p>
                </div>
              </div>

              <div style={{
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(219, 234, 254, 0.6) 100%)',
                padding: '20px',
                borderRadius: '12px',
                border: '2px solid #dbeafe',
                opacity: 1,
                transform: `translateX(${Math.max(0, (1 - Math.min((capabilitiesScroll - 0.15) * 2.5, 1)) * 40)}px)`,
                transition: 'all 0.6s ease-out',
                boxShadow: `0 10px 30px rgba(12, 74, 110, 0.08)`,
                position: 'relative',
                overflow: 'hidden'
              }}>
                <div style={{
                  position: 'relative',
                  zIndex: 1
                }}>
                  <p style={{
                    fontSize: '14px',
                    fontWeight: '700',
                    color: '#0c4a6e',
                    margin: '0 0 6px 0'
                  }}>
                    Industry Outlook
                  </p>
                  <p style={{
                    fontSize: '12px',
                    color: '#374151',
                    margin: 0,
                    lineHeight: '1.6'
                  }}>
                    Analyst firms predict 40% of large enterprises will deploy autonomous AI agents by 2025
                  </p>
                </div>
              </div>
            </div>

            {/* Right Side - Visual */}
            <div id="flower-circle" style={{
              position: 'relative',
              height: '400px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <svg width="100%" height="100%" viewBox="0 0 400 400" style={{ maxWidth: '100%' }}>
                {/* Animated Rotating Rings Design */}
                
                {/* Outer Ring - Rotating */}
                <circle 
                  cx="200" 
                  cy="200" 
                  r="160" 
                  fill="none" 
                  stroke="#0c4a6e" 
                  strokeWidth="3"
                  opacity={Math.min(flowerScroll * 2, 1)}
                  style={{
                    strokeDasharray: '502',
                    strokeDashoffset: Math.min(flowerScroll * 200, 502),
                    transition: 'all 0.3s ease-out',
                    filter: `drop-shadow(0 0 ${Math.min(flowerScroll * 15, 8)}px rgba(12, 74, 110, 0.5))`
                  }}
                />

                {/* Middle Ring - Rotating Opposite */}
                <circle 
                  cx="200" 
                  cy="200" 
                  r="120" 
                  fill="none" 
                  stroke="#0891b2" 
                  strokeWidth="2"
                  opacity={Math.min((flowerScroll - 0.1) * 2.5, 1)}
                  style={{
                    strokeDasharray: '377',
                    strokeDashoffset: Math.min((flowerScroll - 0.1) * -150, 0),
                    transition: 'all 0.3s ease-out',
                    filter: `drop-shadow(0 0 ${Math.min((flowerScroll - 0.1) * 12, 6)}px rgba(8, 145, 178, 0.4))`
                  }}
                />

                {/* Inner Ring - Pulsing */}
                <circle 
                  cx="200" 
                  cy="200" 
                  r="80" 
                  fill="none" 
                  stroke="#66d9ff" 
                  strokeWidth="2"
                  opacity={Math.min((flowerScroll - 0.2) * 3, 1)}
                  style={{
                    filter: `drop-shadow(0 0 ${Math.min((flowerScroll - 0.2) * 10, 5)}px rgba(102, 217, 255, 0.6))`,
                    transition: 'all 0.3s ease-out'
                  }}
                />

                {/* Central Glowing Circle */}
                <circle 
                  cx="200" 
                  cy="200" 
                  r="45" 
                  fill="url(#gradientCenter)"
                  stroke="none"
                  opacity={Math.min(flowerScroll * 2, 1)}
                  style={{
                    transform: `scale(${0.6 + flowerScroll * 0.4})`,
                    transformOrigin: '200px 200px',
                    transition: 'all 0.3s ease-out',
                    filter: `drop-shadow(0 0 ${Math.min(flowerScroll * 20, 15)}px rgba(12, 74, 110, 0.4))`
                  }}
                />

                {/* Center Icon with Pulse */}
                <text 
                  x="200" 
                  y="210" 
                  textAnchor="middle" 
                  fontSize="32" 
                  fontWeight="bold" 
                  fill="#fff"
                  style={{
                    opacity: Math.min(flowerScroll * 2, 1),
                    transform: `scale(${0.6 + flowerScroll * 0.4})`,
                    transformOrigin: '200px 200px',
                    transition: 'all 0.3s ease-out'
                  }}
                >
                  🤖
                </text>

                {/* Decorative Dots around center - appearing one by one with labels */}
                {[
                  {angle: 0, label: 'Decision Making'},
                  {angle: 90, label: 'Reasoning'},
                  {angle: 180, label: 'Autonomy'},
                  {angle: 270, label: 'Execution'}
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
                      <circle cx={x} cy={y} r="12" fill="#0c4a6e" opacity="0.8" />
                      <circle cx={x} cy={y} r="12" fill="none" stroke="#66d9ff" strokeWidth="2" />
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

          {/* Comparison Table */}
          <div id="comparison-section" style={{
            marginTop: '60px',
            padding: '40px 20px',
            background: 'linear-gradient(135deg, #f0f9ff 0%, #f0f4f8 100%)',
            borderRadius: '12px',
            border: '2px solid #dbeafe',
            overflow: 'visible',
            position: 'relative',
            display: 'flex',
            flexDirection: 'column'
          }}>
            <h3 style={{
              fontSize: '24px',
              fontWeight: '700',
              color: '#1f2937',
              margin: '0 0 30px 0',
              textAlign: 'center',
              opacity: 1,
              transform: `translateY(${Math.max(0, (1 - Math.min(comparisonScroll * 2, 1)) * 10)}px)`,
              transition: 'all 0.4s ease-out'
            }}>
              Generative AI vs Agentic AI
            </h3>

            {/* Two Column Layout */}
            <div style={{
              display: 'flex',
              gap: '30px',
              position: 'relative',
              width: '100%',
              justifyContent: 'space-between',
              alignItems: 'stretch'
            }}>
              <div style={{ flex: '1', minWidth: 0 }}>
              </div>
              {/* Generative AI Column */}
              <div style={{
                padding: '30px',
                background: 'linear-gradient(135deg, rgba(245, 245, 245, 0.8) 0%, rgba(240, 240, 240, 0.6) 100%)',
                borderRadius: '8px',
                border: '1px solid #e0e0e0',
                boxShadow: '0 4px 16px rgba(0, 0, 0, 0.08)',
                position: 'relative',
                overflow: 'hidden'
              }}>
                  {/* Top accent bar */}
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '3px',
                    background: '#0078d4',
                  }}/>

                  <div style={{
                    fontSize: '18px',
                    fontWeight: '600',
                    color: '#000000',
                    marginBottom: '24px',
                    textAlign: 'center',
                    marginTop: '12px'
                  }}>
                    💬 Generative AI
                  </div>
                  
                  {[
                    { label: 'Autonomy', value: 'Requires human prompts' },
                    { label: 'Decision Making', value: 'Suggests options' },
                    { label: 'Persistence', value: 'Single task focus' },
                    { label: 'Learning', value: 'Static knowledge' },
                    { label: 'Integration', value: 'Output dependent' }
                  ].map((item, idx) => {
                    return (
                      <div key={idx} style={{
                        marginBottom: '16px',
                        paddingBottom: '16px',
                        borderBottom: idx < 4 ? '1px solid #e0e0e0' : 'none'
                      }}>
                        <div style={{
                          fontSize: '11px',
                          fontWeight: '700',
                          color: '#0078d4',
                          textTransform: 'uppercase',
                          letterSpacing: '0.5px',
                          marginBottom: '6px'
                        }}>
                          {item.label}
                        </div>
                        <div style={{
                          fontSize: '13px',
                          color: '#333333',
                          lineHeight: '1.5',
                          fontWeight: '400'
                        }}>
                          {item.value}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div style={{ flex: '1', minWidth: 0 }}>
              {/* Agentic AI Column */}
              <div style={{
                padding: '30px',
                background: 'linear-gradient(135deg, rgba(245, 245, 245, 0.8) 0%, rgba(240, 240, 240, 0.6) 100%)',
                borderRadius: '8px',
                border: '1px solid #e0e0e0',
                boxShadow: '0 4px 16px rgba(0, 0, 0, 0.08)',
                position: 'relative',
                overflow: 'hidden'
              }}>
                  {/* Top accent bar */}
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '3px',
                    background: '#107c10',
                  }}/>

                  <div style={{
                    fontSize: '18px',
                    fontWeight: '600',
                    color: '#000000',
                    marginBottom: '24px',
                    textAlign: 'center',
                    marginTop: '12px'
                  }}>
                    🤖 Agentic AI
                  </div>
                  
                  {[
                    { label: 'Autonomy', value: 'Self-directed execution' },
                    { label: 'Decision Making', value: 'Makes autonomous decisions' },
                    { label: 'Persistence', value: 'Multi-task orchestration' },
                    { label: 'Learning', value: 'Continuous improvement' },
                    { label: 'Integration', value: 'System-wide automation' }
                  ].map((item, idx) => {
                    return (
                      <div key={idx} style={{
                        marginBottom: '16px',
                        paddingBottom: '16px',
                        borderBottom: idx < 4 ? '1px solid #e0e0e0' : 'none'
                      }}>
                        <div style={{
                          fontSize: '11px',
                          fontWeight: '700',
                          color: '#107c10',
                          textTransform: 'uppercase',
                          letterSpacing: '0.5px',
                          marginBottom: '6px'
                        }}>
                          {item.label}
                        </div>
                        <div style={{
                          fontSize: '13px',
                          color: '#333333',
                          lineHeight: '1.5',
                          fontWeight: '400'
                        }}>
                          {item.value}
                        </div>
                      </div>
                    );
                  })}
                </div>
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
      <section id="why-matters-section" style={{
        maxWidth: '1100px',
        margin: '0 auto',
        padding: '80px 20px'
      }}>
        <h2 style={{
          fontSize: '42px',
          fontWeight: '700',
          color: '#1f2937',
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
                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(219, 234, 254, 0.7) 100%)',
                  borderRadius: '16px',
                  border: '2px solid #dbeafe',
                  textAlign: 'center',
                  transition: 'all 0.3s ease',
                  position: 'relative',
                  overflow: 'hidden',
                  boxShadow: '0 8px 20px rgba(12, 74, 110, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.8)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 25px 50px rgba(12, 74, 110, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.9)';
                  e.currentTarget.style.transform = 'translateY(-12px) scale(1.02)';
                  e.currentTarget.style.borderColor = '#0c4a6e';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '0 8px 20px rgba(12, 74, 110, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.8)';
                  e.currentTarget.style.transform = `translateY(0) scale(1)`;
                  e.currentTarget.style.borderColor = '#dbeafe';
                }}
              >
                {/* Shiny Light Overlay */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '50%',
                  background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.7) 0%, transparent 100%)',
                  pointerEvents: 'none',
                  borderRadius: '16px 16px 0 0'
                }}/>

                {/* Watermark Number */}
                <div style={{
                  position: 'absolute',
                  top: '15px',
                  right: '20px',
                  fontSize: '48px',
                  fontWeight: '700',
                  color: '#0c4a6e',
                  opacity: 0.1,
                  zIndex: 0
                }}>
                  {String(idx + 1).padStart(2, '0')}
                </div>

                {/* Icon Container */}
                <div style={{
                  fontSize: '70px',
                  marginBottom: '25px',
                  position: 'relative',
                  zIndex: 1
                }}>
                  {item.icon}
                </div>

                <h3 style={{
                  fontSize: '24px',
                  fontWeight: '700',
                  color: '#0c4a6e',
                  margin: '0 0 15px 0',
                  position: 'relative',
                  zIndex: 1
                }}>
                  {item.title}
                </h3>

                <p style={{
                  fontSize: '15px',
                  color: '#374151',
                  lineHeight: '1.7',
                  margin: '0',
                  position: 'relative',
                  zIndex: 1
                }}>
                  {item.description}
                </p>

                {/* Bottom Accent - Animated */}
                <div style={{
                  height: '2px',
                  background: 'linear-gradient(90deg, transparent, #0c4a6e, transparent)',
                  marginTop: '25px',
                  opacity: 0.6,
                  position: 'relative',
                  zIndex: 1
                }} />
              </div>
            );
          })}
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
          overflow: 'auto',
          paddingBottom: '20px'
        }}>
          {/* SVG Arrows Background */}
          <svg style={{
            position: 'absolute',
            top: '50%',
            left: '0',
            right: '0',
            height: '60px',
            pointerEvents: 'none',
            zIndex: 0,
            transform: 'translateY(-30px)'
          }} preserveAspectRatio="none" viewBox="0 0 100 60">
            <defs>
              <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                <polygon points="0 0, 10 3, 0 6" fill="#0c4a6e" opacity="0.3" />
              </marker>
            </defs>
            <line x1="0" y1="30" x2="100" y2="30" stroke="#0c4a6e" strokeWidth="2" opacity="0.2" markerEnd="url(#arrowhead)" strokeDasharray="5,5" />
          </svg>

          {/* Cards Container */}
          <div style={{
            display: 'flex',
            gap: '25px',
            overflowX: 'auto',
            paddingTop: '20px',
            paddingBottom: '10px',
            position: 'relative',
            zIndex: 1,
            scrollBehavior: 'smooth'
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
                    flex: '0 0 280px',
                    padding: '25px',
                    background: color.bg,
                    borderRadius: '14px',
                    border: `2px solid ${color.border}`,
                    cursor: 'pointer',
                    transition: 'all 0.4s ease',
                    boxShadow: '0 8px 20px rgba(12, 74, 110, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.8)',
                    overflow: 'hidden',
                    position: 'relative',
                    display: 'flex',
                    flexDirection: 'column',
                    minHeight: '320px'
                  }}
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
                        transform: expandedUseCase === idx ? 'rotate(90deg)' : 'rotate(0deg)'
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
