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
                Chatbots
              </h2>
              <p style={{
                fontSize: '16px',
                lineHeight: '1.8',
                color: '#4b5563',
                marginBottom: '20px'
              }}>
                SaaS based Conversational AI platform allowing you to define conversations using multiple languages and trigger automation flows through Artificial Intelligence.
              </p>
              <p style={{
                fontSize: '16px',
                lineHeight: '1.8',
                color: '#4b5563',
                marginBottom: '30px'
              }}>
                A successful AI chatbot is more than just technology. Our experienced team can help you design effective, crisp and easy-to-understand conversational AI-driven flows
              </p>
              <ul style={{
                fontSize: '16px',
                lineHeight: '2',
                color: '#4b5563',
                listStyle: 'none',
                padding: 0,
                margin: 0
              }}>
                <li style={{ marginBottom: '12px' }}>★ Guided Chat Responses</li>
                <li style={{ marginBottom: '12px' }}>★ Conversational AI Enabled</li>
                <li style={{ marginBottom: '12px' }}>★ Live Chat with your agents</li>
                <li style={{ marginBottom: '12px' }}>★ Audit logging & Dashboards</li>
                <li style={{ marginBottom: '12px' }}>★ Customizable Integrations</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Integrations Section */}
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
