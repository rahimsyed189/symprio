import React from 'react';

export default function SymprioFooter() {
  return (
    <footer style={{
      background: '#1f2937',
      color: '#e5e7eb',
      padding: '60px 20px 30px',
      borderTop: '1px solid #374151'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '40px',
          marginBottom: '50px'
        }}>
          {/* Column 1 */}
          <div>
            <h5 style={{
              fontSize: '16px',
              fontWeight: '700',
              color: '#fff',
              marginBottom: '20px',
              margin: '0 0 20px 0'
            }}>
              Technology Idea
            </h5>
            <p style={{
              fontSize: '14px',
              lineHeight: '1.8',
              margin: '0 0 20px 0'
            }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
              Quick Links
            </h5>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {['About', 'Services', 'Contact', 'Portfolio', 'Team', 'Blog'].map((link, idx) => (
                <li key={idx} style={{ marginBottom: '10px' }}>
                  <a href="#" style={{
                    color: '#d1d5db',
                    textDecoration: 'none',
                    fontSize: '14px',
                    transition: 'color 0.3s ease'
                  }}
                  onMouseEnter={(e) => e.target.style.color = '#3b82f6'}
                  onMouseLeave={(e) => e.target.style.color = '#d1d5db'}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Recent Posts */}
          <div>
            <h5 style={{
              fontSize: '16px',
              fontWeight: '700',
              color: '#fff',
              margin: '0 0 20px 0'
            }}>
              Recent Post
            </h5>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {[
                { title: 'If you find yourself constantly bookmarking', date: 'September 08, 2020' },
                { title: 'The well known health website has', date: 'September 08, 2020' },
                { title: 'Building A Component Library With React', date: 'September 08, 2020' }
              ].map((post, idx) => (
                <li key={idx} style={{ marginBottom: '15px', fontSize: '13px' }}>
                  <a href="#" style={{
                    color: '#d1d5db',
                    textDecoration: 'none',
                    display: 'block',
                    marginBottom: '5px',
                    transition: 'color 0.3s ease'
                  }}
                  onMouseEnter={(e) => e.target.style.color = '#3b82f6'}
                  onMouseLeave={(e) => e.target.style.color = '#d1d5db'}
                  >
                    {post.title}
                  </a>
                  <span style={{ color: '#9ca3af', fontSize: '12px' }}>{post.date}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 - Newsletter */}
          <div>
            <h5 style={{
              fontSize: '16px',
              fontWeight: '700',
              color: '#fff',
              margin: '0 0 20px 0'
            }}>
              Subscribe
            </h5>
            <p style={{
              fontSize: '14px',
              marginBottom: '20px',
              margin: '0 0 20px 0'
            }}>
              Subscribe to our newsletter for the latest updates.
            </p>
            <div style={{ display: 'flex', gap: '10px' }}>
              <input type="email" placeholder="Your email" style={{
                flex: 1,
                padding: '10px 15px',
                background: '#374151',
                border: '1px solid #4b5563',
                borderRadius: '4px',
                color: '#fff',
                fontSize: '14px',
                outline: 'none'
              }}
              onFocus={(e) => e.target.style.borderColor = '#3b82f6'}
              onBlur={(e) => e.target.style.borderColor = '#4b5563'}
              />
              <button style={{
                background: '#3b82f6',
                color: '#fff',
                border: 'none',
                padding: '10px 20px',
                borderRadius: '4px',
                cursor: 'pointer',
                fontWeight: '600',
                fontSize: '13px',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => e.target.style.background = '#2563eb'}
              onMouseLeave={(e) => e.target.style.background = '#3b82f6'}
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div style={{
          borderTop: '1px solid #374151',
          paddingTop: '30px',
          textAlign: 'center'
        }}>
          <p style={{
            fontSize: '14px',
            color: '#9ca3af',
            margin: 0
          }}>
            Copyright © 2025 Symprio. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}


