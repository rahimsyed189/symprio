import React, { useState, useEffect } from 'react';

const DocumentUnderstanding = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section style={{
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '80px 20px',
      backgroundColor: '#f9fafb'
    }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '60px',
        alignItems: 'center'
      }}>
        {/* Left side - Image */}
        <div style={{
          textAlign: 'center',
          animation: isVisible ? 'fadeInLeft 0.8s ease-out' : 'none',
          order: 2
        }}>
          <img 
            src="https://www.symprio.com/wp-content/uploads/2025/07/DU-removebg-preview.png"
            alt="Document Understanding"
            style={{
              maxWidth: '100%',
              height: 'auto',
              borderRadius: '8px',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.05)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
            }}
          />
        </div>

        {/* Right side - Content */}
        <div style={{
          animation: isVisible ? 'fadeInRight 0.8s ease-out' : 'none',
          order: 1
        }}>
          <h2 style={{
            fontSize: '42px',
            fontWeight: '700',
            color: '#1f2937',
            margin: '0 0 20px 0',
            lineHeight: '1.2'
          }}>
            Document Understanding
          </h2>
          <p style={{
            fontSize: '16px',
            color: '#6b7280',
            lineHeight: '1.8',
            margin: '0 0 20px 0'
          }}>
            Leveraging RPA for Efficient Document Understanding: A Case Study on Forms 940 and 1040 using UiPath
          </p>

          <p style={{
            fontSize: '14px',
            color: '#6b7280',
            lineHeight: '1.8',
            margin: '0 0 30px 0',
            fontStyle: 'italic'
          }}>
            Process consultants with a care to identify the root cause and determined to deliver efficient solutions.
          </p>
          
          <div style={{
            display: 'flex',
            gap: '20px',
            marginTop: '40px'
          }}>
            <button style={{
              padding: '12px 32px',
              backgroundColor: '#3b82f6',
              color: '#ffffff',
              border: 'none',
              borderRadius: '6px',
              fontSize: '14px',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#1e40af';
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 8px 16px rgba(59, 130, 246, 0.3)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#3b82f6';
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
            onClick={() => window.open('https://www.symprio.com/document-understanding/', '_blank')}
            >
              Learn More
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @media (max-width: 768px) {
          [style*="gridTemplateColumns: 1fr 1fr"] {
            grid-template-columns: 1fr !important;
          }
          
          [style*="order: 2"] {
            order: 2 !important;
          }
          
          [style*="order: 1"] {
            order: 1 !important;
          }
        }
      `}</style>
    </section>
  );
};

export default DocumentUnderstanding;
