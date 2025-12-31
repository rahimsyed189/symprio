import React from 'react';

export default function SymprioFooter() {
  return (
    <>
      {/* Top Section with CTA */}
      <section style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '60px 20px',
        textAlign: 'center'
      }}>
        <h3 style={{
          fontSize: '24px',
          fontWeight: '700',
          color: '#1f2937',
          marginBottom: '15px'
        }}>
          Looking For RPA, AI, ML, ERP Or Any Custom Development Solutions?
        </h3>
        <p style={{
          fontSize: '14px',
          color: '#6b7280',
          marginBottom: '30px'
        }}>
          Process consultants with a care to identify the root cause and determined to deliver efficient solutions.
        </p>
      </section>

      {/* Footer */}
      <footer style={{
        background: '#1f2937',
        color: '#e5e7eb',
        padding: '60px 20px 30px'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '40px',
            marginBottom: '50px'
          }}>
            {/* Column 1 - About Company */}
            <div>
              <h5 style={{
                fontSize: '16px',
                fontWeight: '700',
                color: '#fff',
                margin: '0 0 20px 0'
              }}>
                ABOUT COMPANY
              </h5>
              <p style={{
                fontSize: '14px',
                lineHeight: '1.8',
                margin: '0',
                color: '#d1d5db'
              }}>
                We at Symprio understand that every customer, every business problem, and every solution is unique. That's why we help organizations identify the root cause of a problem whether this be related to people, process or technology and then to define and deliver optimal solutions considering culture, cost and capability. AI enabled Automation: Chatbots, RPA, Integration and Orchestration, Process and ERP consulting With offices in Silicon Valley and in the fast -growing economies in Indo-Pacific region including Singapore, Malaysia and India, we bring the latest innovations to our clients.
              </p>
            </div>

            {/* Column 2 - Quick Links */}
            <div>
              <h5 style={{
                fontSize: '16px',
                fontWeight: '700',
                color: '#fff',
                margin: '0 0 20px 0'
              }}>
                QUICK LINKS
              </h5>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {[
                  { name: 'Latest Blogs', url: 'https://symprioideas.medium.com/' },
                  { name: 'Careers', url: 'https://www.symprio.com/careers/' },
                  { name: 'Privacy Policy', url: 'https://www.symprio.com/privacy-policy/' }
                ].map((link, idx) => (
                  <li key={idx} style={{ marginBottom: '10px' }}>
                    <a href={link.url} target="_blank" rel="noopener noreferrer" style={{
                      color: '#d1d5db',
                      textDecoration: 'none',
                      fontSize: '14px',
                      transition: 'color 0.3s ease'
                    }}
                    onMouseEnter={(e) => e.target.style.color = '#3b82f6'}
                    onMouseLeave={(e) => e.target.style.color = '#d1d5db'}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3 - Services */}
            <div>
              <h5 style={{
                fontSize: '16px',
                fontWeight: '700',
                color: '#fff',
                margin: '0 0 20px 0'
              }}>
                SERVICES
              </h5>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {[
                  { name: 'Digital Transformation', url: 'https://www.symprio.com/digital-transformation/' },
                  { name: 'Robotic Process Automation', url: 'https://www.symprio.com/robotic-process-automation/' },
                  { name: 'ERP Practice (Oracle)', url: 'https://www.symprio.com/erp-practice-oracle/' },
                  { name: 'Chatbots', url: 'https://www.symprio.com/chatbots/' },
                  { name: 'Custom Development', url: 'https://www.symprio.com/custom-development/' },
                  { name: 'Digital Workforce', url: 'https://www.symprio.com/digital-workforce/' }
                ].map((service, idx) => (
                  <li key={idx} style={{ marginBottom: '10px' }}>
                    <a href={service.url} target="_blank" rel="noopener noreferrer" style={{
                      color: '#d1d5db',
                      textDecoration: 'none',
                      fontSize: '14px',
                      transition: 'color 0.3s ease'
                    }}
                    onMouseEnter={(e) => e.target.style.color = '#3b82f6'}
                    onMouseLeave={(e) => e.target.style.color = '#d1d5db'}
                    >
                      {service.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom - Copyright */}
          <div style={{
            borderTop: '1px solid #374151',
            paddingTop: '30px',
            textAlign: 'center'
          }}>
            <p style={{
              fontSize: '14px',
              color: '#9ca3af',
              margin: '0'
            }}>
              Copyright © 2024 <a href="https://www.symprio.com" target="_blank" rel="noopener noreferrer" style={{ color: '#3b82f6', textDecoration: 'none' }}>Symprio</a>. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}


