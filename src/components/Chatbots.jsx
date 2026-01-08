import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Chatbots() {
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
            <span>Chatbots</span>
          </div>
          <h1 style={{
            fontSize: '48px',
            fontWeight: '700',
            color: '#fff',
            margin: '0 0 20px 0',
            animation: isVisible ? 'slideDown 0.8s ease-out both' : 'none'
          }}>
            Chatbots
          </h1>
          <p style={{
            fontSize: '18px',
            color: '#e0e0e0',
            margin: 0,
            animation: isVisible ? 'fadeIn 0.8s ease-out 0.2s both' : 'none'
          }}>
            SaaS based Conversational AI Platform
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
                About Our Chatbots
              </h2>
              <p style={{
                fontSize: '16px',
                lineHeight: '1.8',
                color: '#4b5563',
                marginBottom: '20px'
              }}>
                Symprio's chatbots are more than basic scripts; they are conversational AI platforms that support multiple languages, guided responses, live chat and automation triggers. Our SaaS-based solution empowers you to design intelligent conversations that drive efficiency and customer satisfaction.
              </p>
              <p style={{
                fontSize: '16px',
                lineHeight: '1.8',
                color: '#4b5563',
                marginBottom: '30px'
              }}>
                A successful AI chatbot is more than just technology. Our experienced team can help you design effective, crisp and easy-to-understand conversational AI-driven flows that deliver real business value.
              </p>
            </div>
          </div>
        </section>

        {/* Key Features Section */}
        <section style={{ marginBottom: '80px' }}>
          <h2 style={{
            fontSize: '36px',
            fontWeight: '700',
            color: '#1f2937',
            marginBottom: '50px',
            textAlign: 'center'
          }}>
            Key Features
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '30px'
          }}>
            {[
              {
                title: 'Guided & Conversational Flows',
                description: 'Design easy-to-understand dialogues. Embed natural pauses, conditional responses and variations to create truly engaging conversations.'
              },
              {
                title: 'AI & NLP Training',
                description: 'Train the bot with domain-specific utterances and continuously improve its accuracy through machine learning and natural language processing.'
              },
              {
                title: 'Automation Triggers',
                description: 'Capture data, trigger integrations, send emails and launch RPA bots as part of the conversation to automate complex workflows.'
              },
              {
                title: 'Analytics & Dashboard',
                description: 'Real-time analytics, dashboards and audit logging for compliance. Track conversations, user behavior and performance metrics.'
              },
              {
                title: 'Integration with Popular Tools',
                description: 'Connect to CRM, ticketing, ERP and messaging platforms for seamless workflows and unified customer experiences.'
              },
              {
                title: 'Multi-Language Support',
                description: 'Deploy chatbots in multiple languages to serve global audiences and break down communication barriers.'
              }
            ].map((feature, idx) => (
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
                  {feature.title}
                </h3>
                <p style={{
                  fontSize: '14px',
                  color: '#374151',
                  lineHeight: '1.7',
                  margin: 0
                }}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Use Cases Section */}
        <section style={{ marginBottom: '80px' }}>
          <h2 style={{
            fontSize: '36px',
            fontWeight: '700',
            color: '#1f2937',
            marginBottom: '50px',
            textAlign: 'center'
          }}>
            Use Cases
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '25px',
            maxWidth: '1000px',
            margin: '0 auto'
          }}>
            {[
              {
                title: 'Customer Support',
                description: 'FAQ resolution, order status tracking, and troubleshooting support available 24/7 to reduce response times and improve satisfaction.'
              },
              {
                title: 'HR & Internal Services',
                description: 'IT helpdesk, HR queries, benefits information, and policy lookups delivered instantly to employees.'
              },
              {
                title: 'Lead Generation & Qualification',
                description: 'Engage website visitors, qualify leads automatically, and route them to the right sales team members.'
              },
              {
                title: 'Self-Service Onboarding',
                description: 'Streamline new employee or customer onboarding with guided workflows and instant access to resources.'
              }
            ].map((useCase, idx) => (
              <div
                key={idx}
                style={{
                  padding: '25px',
                  border: '2px solid #dbeafe',
                  borderRadius: '8px',
                  background: '#f0f9ff',
                  transition: 'all 0.3s ease',
                  animation: isVisible ? `slideUp 0.8s ease-out ${idx * 0.1}s both` : 'none'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#0284c7';
                  e.currentTarget.style.background = '#e0f2fe';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#dbeafe';
                  e.currentTarget.style.background = '#f0f9ff';
                }}
              >
                <h4 style={{
                  fontSize: '18px',
                  fontWeight: '700',
                  color: '#0c4a6e',
                  margin: '0 0 10px 0'
                }}>
                  {useCase.title}
                </h4>
                <p style={{
                  fontSize: '14px',
                  color: '#374151',
                  lineHeight: '1.6',
                  margin: 0
                }}>
                  {useCase.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Implementation Journey Section */}
        <section style={{ marginBottom: '80px' }}>
          <h2 style={{
            fontSize: '36px',
            fontWeight: '700',
            color: '#1f2937',
            marginBottom: '50px',
            textAlign: 'center'
          }}>
            Implementation Journey
          </h2>
          <div style={{
            maxWidth: '900px',
            margin: '0 auto'
          }}>
            <div style={{
              display: 'grid',
              gap: '20px'
            }}>
              {[
                { step: 'Discovery', description: 'Understand your business goals, customer pain points, and define chatbot objectives.' },
                { step: 'Design', description: 'Create conversation flows, design user journeys, and map out automation triggers.' },
                { step: 'Development', description: 'Build the chatbot using our platform, configure integrations, and set up automation workflows.' },
                { step: 'Testing', description: 'Rigorous testing across different scenarios, languages, and platforms to ensure quality.' },
                { step: 'Training', description: 'Train the AI model with domain-specific data to improve accuracy and response quality.' },
                { step: 'Launch', description: 'Deploy to production across selected channels (web, WhatsApp, Teams, etc.).' },
                { step: 'Continuous Improvement', description: 'Monitor performance, gather feedback, and optimize conversations based on analytics.' }
              ].map((item, idx) => (
                <div
                  key={idx}
                  style={{
                    display: 'flex',
                    gap: '20px',
                    animation: isVisible ? `slideUp 0.8s ease-out ${idx * 0.05}s both` : 'none'
                  }}
                >
                  <div style={{
                    minWidth: '40px',
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: '700',
                    color: '#0c4a6e',
                    fontSize: '16px'
                  }}>
                    {idx + 1}
                  </div>
                  <div style={{ flex: 1, paddingTop: '5px' }}>
                    <h4 style={{
                      fontSize: '18px',
                      fontWeight: '700',
                      color: '#1f2937',
                      margin: '0 0 8px 0'
                    }}>
                      {item.step}
                    </h4>
                    <p style={{
                      fontSize: '14px',
                      color: '#4b5563',
                      margin: 0,
                      lineHeight: '1.6'
                    }}>
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Success Story Section */}
        <section style={{ marginBottom: '80px' }}>
          <h2 style={{
            fontSize: '36px',
            fontWeight: '700',
            color: '#1f2937',
            marginBottom: '50px',
            textAlign: 'center'
          }}>
            Success Story
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
              Customer Support Cost Reduction
            </h3>
            <p style={{
              fontSize: '16px',
              lineHeight: '1.8',
              color: '#374151',
              margin: '0 0 20px 0'
            }}>
              A leading telecommunications company deployed our chatbot solution to handle customer support inquiries across 8 languages. The results were transformative:
            </p>
            <ul style={{
              fontSize: '15px',
              lineHeight: '2',
              color: '#374151',
              margin: '0 0 20px 0',
              paddingLeft: '20px'
            }}>
              <li><strong>45% reduction</strong> in support tickets routed to human agents</li>
              <li><strong>92% customer satisfaction</strong> rate for chatbot-handled queries</li>
              <li><strong>30% cost savings</strong> in annual customer support operations</li>
              <li><strong>24/7 availability</strong> with instant response times across all channels</li>
            </ul>
            <p style={{
              fontSize: '14px',
              color: '#4b5563',
              fontStyle: 'italic',
              margin: 0
            }}>
              "Symprio's chatbot implementation not only reduced our support costs but significantly improved customer satisfaction. The guided flows and AI training capabilities made it easy to handle complex inquiries." - Director of Customer Experience
            </p>
          </div>
        </section>
        <section style={{ marginBottom: '80px' }}>
          <h2 style={{
            fontSize: '36px',
            fontWeight: '700',
            color: '#1f2937',
            marginBottom: '50px',
            textAlign: 'center'
          }}>
            Popular Integrations
          </h2>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '40px',
            padding: '40px 20px',
            background: '#f9fafb',
            borderRadius: '8px',
            border: '1px solid #e5e7eb',
            flexWrap: 'wrap'
          }}>
            {[
              { name: 'WhatsApp', image: '/chatbots/whatsapp.png' },
              { name: 'Microsoft Teams', image: '/chatbots/teams.png' },
              { name: 'Google Workspace', image: '/chatbots/workspace.png' },
              { name: 'Messenger', image: '/chatbots/messenger.png' }
            ].map((integration, idx) => (
              <div
                key={idx}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '20px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  animation: isVisible ? `slideUp 0.8s ease-out ${idx * 0.1}s both` : 'none'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                }}
              >
                <img
                  src={integration.image}
                  alt={integration.name}
                  style={{
                    height: '80px',
                    width: 'auto',
                    objectFit: 'contain',
                    marginBottom: '12px'
                  }}
                />
                <p style={{
                  fontSize: '14px',
                  fontWeight: '600',
                  color: '#374151',
                  margin: 0,
                  textAlign: 'center'
                }}>
                  {integration.name}
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
