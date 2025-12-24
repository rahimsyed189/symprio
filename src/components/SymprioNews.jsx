import React, { useState, useEffect } from 'react';

export default function SymprioNews() {
  const [news, setNews] = useState([
    {
      id: 1,
      title: 'If you find yourself to constantly health.',
      excerpt: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
      category: 'BRANDING',
      author: 'SYMPRIO',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=250&fit=crop'
    },
    {
      id: 2,
      title: 'The well known health website has quite .',
      excerpt: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
      category: 'BRANDING',
      author: 'SYMPRIO',
      image: 'https://images.unsplash.com/photo-1611262588024-d12430b98920?w=400&h=250&fit=crop'
    },
    {
      id: 3,
      title: 'Using Mobx As A State Manager React JS.',
      excerpt: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
      category: 'TECHNOLOGY',
      author: 'SYMPRIO',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f70e504b3?w=400&h=250&fit=crop'
    },
  ]);

  return (
    <section style={{
      padding: '80px 20px',
      background: '#f9fafb'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h6 style={{
            fontSize: '12px',
            fontWeight: '700',
            color: '#3b82f6',
            letterSpacing: '1.5px',
            textTransform: 'uppercase',
            margin: '0 0 10px 0'
          }}>
            NEWS FEED
          </h6>
          <h2 style={{
            fontSize: '42px',
            fontWeight: '700',
            color: '#1f2937',
            margin: '0 0 20px 0'
          }}>
            News Updates.
          </h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '30px'
        }}>
          {news.map((article) => (
            <div key={article.id} style={{
              background: '#fff',
              borderRadius: '8px',
              overflow: 'hidden',
              transition: 'all 0.3s ease',
              cursor: 'pointer',
              border: '1px solid #e5e7eb'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px)';
              e.currentTarget.style.borderColor = '#3b82f6';
              e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 191, 255, 0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.borderColor = '#e5e7eb';
              e.currentTarget.style.boxShadow = 'none';
            }}
            >
              <div style={{
                width: '100%',
                height: '220px',
                background: `url('${article.image}')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }} />
              <div style={{ padding: '25px' }}>
                <div style={{
                  display: 'flex',
                  gap: '10px',
                  marginBottom: '15px',
                  fontSize: '11px',
                  fontWeight: '600',
                  textTransform: 'uppercase'
                }}>
                  <span style={{ color: '#3b82f6' }}>{article.author}</span>
                  <span style={{ color: '#6b7280' }}>•</span>
                  <span style={{ color: '#3b82f6' }}>{article.category}</span>
                </div>
                <h4 style={{
                  fontSize: '18px',
                  fontWeight: '700',
                  color: '#1f2937',
                  margin: '0 0 12px 0',
                  lineHeight: '1.4'
                }}>
                  {article.title}
                </h4>
                <p style={{
                  fontSize: '14px',
                  color: '#6b7280',
                  lineHeight: '1.6',
                  margin: 0
                }}>
                  {article.excerpt}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


