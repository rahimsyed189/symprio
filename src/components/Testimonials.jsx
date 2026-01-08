import React from 'react';

export default function Testimonials() {
  const testimonials = [
    {
      quote: "Symprio transformed our digital operations. Their RPA solution reduced our processing time by 60% and freed our team to focus on strategic initiatives.",
      author: "CEO, Financial Services",
      company: "Fortune 500 Bank"
    },
    {
      quote: "Working with Symprio was seamless. Their agentic AI solution enhanced our customer support capabilities and improved satisfaction scores significantly.",
      author: "Head of Operations",
      company: "Global Telecom Company"
    },
    {
      quote: "Symprio's Oracle expertise and change management approach made our ERP implementation smooth. Their team understood our local requirements perfectly.",
      author: "CIO",
      company: "Regional Enterprise"
    }
  ];

  const partners = [
    { name: 'UiPath', logo: '/uipath-logo.png' },
    { name: 'Microsoft', logo: '/microsoft-logo.png' },
    { name: 'Oracle', logo: '/oracle-logo.png' },
    { name: 'Salesforce', logo: '/salesforce-logo.png' }
  ];

  return (
    <section style={{
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '80px 20px',
      backgroundColor: '#f9fafb'
    }}>
      {/* Testimonials */}
      <div style={{ marginBottom: '80px' }}>
        <h2 style={{
          fontSize: '36px',
          fontWeight: '700',
          color: '#1f2937',
          textAlign: 'center',
          margin: '0 0 60px 0'
        }}>
          What Our Clients Say
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '30px'
        }}>
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              style={{
                background: '#fff',
                padding: '30px',
                borderRadius: '8px',
                border: '1px solid #e5e7eb',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 8px 16px rgba(59, 130, 246, 0.15)';
                e.currentTarget.style.transform = 'translateY(-4px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.1)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <div style={{
                color: '#fbbf24',
                fontSize: '18px',
                marginBottom: '15px'
              }}>
                ★★★★★
              </div>
              
              <p style={{
                fontSize: '14px',
                color: '#6b7280',
                lineHeight: '1.8',
                margin: '0 0 20px 0',
                fontStyle: 'italic'
              }}>
                "{testimonial.quote}"
              </p>

              <div style={{
                borderTop: '1px solid #e5e7eb',
                paddingTop: '20px'
              }}>
                <p style={{
                  fontSize: '14px',
                  fontWeight: '600',
                  color: '#1f2937',
                  margin: '0'
                }}>
                  {testimonial.author}
                </p>
                <p style={{
                  fontSize: '13px',
                  color: '#9ca3af',
                  margin: '5px 0 0 0'
                }}>
                  {testimonial.company}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Partners/Logos */}
      <div>
        <h3 style={{
          fontSize: '24px',
          fontWeight: '700',
          color: '#1f2937',
          textAlign: 'center',
          margin: '0 0 50px 0'
        }}>
          Trusted by Industry Leaders
        </h3>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
          gap: '40px',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          {partners.map((partner, idx) => (
            <div
              key={idx}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '20px',
                backgroundColor: 'transparent',
                borderRadius: '8px',
                border: 'none',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                height: '100px'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              <img src={partner.logo} alt={partner.name} style={{ 
                height: '100px', 
                objectFit: 'contain',
                maxWidth: '100%'
              }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
