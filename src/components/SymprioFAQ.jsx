import React, { useState } from 'react';

export default function SymprioFAQ() {
  const [expandedIdx, setExpandedIdx] = useState(0);

  const faqs = [
    {
      question: 'How can we help your business?',
      answer: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
    },
    {
      question: 'What are the advantages of bearl?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      question: "Let's find an office near you?",
      answer: 'Ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.'
    },
    {
      question: 'Powerfully flexible WordPress theme for business?',
      answer: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.'
    },
    {
      question: 'Related organizations, institutes and businesses?',
      answer: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores.'
    }
  ];

  return (
    <section style={{
      padding: '80px 20px',
      background: '#f9fafb'
    }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h6 style={{
            fontSize: '12px',
            fontWeight: '700',
            color: '#3b82f6',
            letterSpacing: '1.5px',
            textTransform: 'uppercase',
            margin: '0 0 10px 0'
          }}>
            FAQ
          </h6>
          <h2 style={{
            fontSize: '42px',
            fontWeight: '700',
            color: '#1f2937',
            margin: '0 0 20px 0'
          }}>
            Get Every Single Answers There..
          </h2>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          {faqs.map((faq, idx) => (
            <div key={idx} style={{
              border: '1px solid #e5e7eb',
              borderRadius: '8px',
              overflow: 'hidden',
              background: '#fff'
            }}>
              <button onClick={() => setExpandedIdx(expandedIdx === idx ? -1 : idx)} style={{
                width: '100%',
                padding: '20px 30px',
                background: expandedIdx === idx ? '#f3f4f6' : '#fff',
                border: 'none',
                cursor: 'pointer',
                textAlign: 'left',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                if (expandedIdx !== idx) e.currentTarget.style.background = '#f9fafb';
              }}
              onMouseLeave={(e) => {
                if (expandedIdx !== idx) e.currentTarget.style.background = '#fff';
              }}
              >
                <h5 style={{
                  fontSize: '16px',
                  fontWeight: '600',
                  color: '#1f2937',
                  margin: 0
                }}>
                  {expandedIdx === idx ? '- ' : '+ '}{faq.question}
                </h5>
              </button>
              {expandedIdx === idx && (
                <div style={{
                  padding: '20px 30px',
                  background: '#f9fafb',
                  borderTop: '1px solid #e5e7eb'
                }}>
                  <p style={{
                    fontSize: '14px',
                    color: '#6b7280',
                    lineHeight: '1.8',
                    margin: 0
                  }}>
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


