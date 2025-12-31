import React, { useState, useEffect } from 'react';

const TeamMembers = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const team = [
    {
      name: 'Vilhelm Bjermeland',
      position: 'COO, USA',
      image: '/vilhelm.png',
      color: '#3b82f6',
      id: 1,
      linkedin: 'https://www.linkedin.com/in/get2vil/'
    },
    {
      name: 'Prabin Vijay',
      position: 'Practice Lead, APAC',
      image: '/prabin.png',
      color: '#8b5cf6',
      id: 2,
      linkedin: 'https://www.linkedin.com/in/prabin-vijay-89a2758/'
    },
    {
      name: 'Vivek Krishna',
      position: 'Director - Automation Services, APAC',
      image: '/vivek.png',
      color: '#ec4899',
      id: 3,
      linkedin: 'https://www.linkedin.com/in/vivekkkrishna/'
    },
    {
      name: 'Ramalingam Dushyanth',
      position: 'Practice Head - Automation',
      image: '/dushy.jpg',
      color: '#f59e0b',
      id: 4,
      linkedin: 'https://www.linkedin.com/in/ddr-dushy/'
    }
  ];

  return (
    <section style={{
      maxWidth: '1300px',
      margin: '0 auto',
      padding: '100px 20px',
      backgroundColor: '#f8fafc',
      borderRadius: '20px'
    }}>
      {/* Header */}
      <div style={{
        textAlign: 'center',
        marginBottom: '80px'
      }}>
        <span style={{
          fontSize: '14px',
          fontWeight: '700',
          color: '#3b82f6',
          letterSpacing: '2px',
          textTransform: 'uppercase',
          marginBottom: '15px',
          display: 'block'
        }}>
          Our Team
        </span>
        <h2 style={{
          fontSize: '48px',
          fontWeight: '800',
          color: '#1f2937',
          margin: '0 0 15px 0',
          lineHeight: '1.2'
        }}>
          Meet The Visionaries
        </h2>
        <div
          style={{
            width: '60px',
            height: '5px',
            background: 'linear-gradient(90deg, #3b82f6, #8b5cf6)',
            margin: '20px auto 20px',
            borderRadius: '3px'
          }}
        />
        <p style={{
          fontSize: '16px',
          color: '#6b7280',
          margin: '0',
          maxWidth: '500px',
          margin: '0 auto'
        }}>
          Exceptional talent driving innovation and excellence
        </p>
      </div>

      {/* Cards Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '30px',
        maxWidth: '100%',
        margin: '0 auto'
      }}>
        {team.map((member, idx) => (
          <div
            key={member.id}
            style={{
              textAlign: 'center',
              animation: isVisible ? `fadeInUp 0.8s ease-out ${idx * 0.15}s both` : 'none'
            }}
          >
            {/* Circular Image Container */}
            <div
              style={{
                position: 'relative',
                marginBottom: '25px',
                cursor: 'default',
                transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              {/* Circle Image */}
              <div
                style={{
                  width: '240px',
                  height: '240px',
                  margin: '0 auto',
                  borderRadius: '50%',
                  overflow: 'hidden',
                  position: 'relative',
                  boxShadow: `0 20px 40px ${member.color}30`,
                  backgroundColor: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: `2px solid ${member.color}40`
                }}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                    objectPosition: 'center',
                    backgroundColor: '#ffffff',
                    transition: 'transform 0.5s ease',
                    animation: isVisible ? `zoomIn 0.8s ease-out ${idx * 0.15}s both` : 'none'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                />
              </div>

              {/* Gradient Ring */}
              <div
                style={{
                  position: 'absolute',
                  width: '260px',
                  height: '260px',
                  border: `3px solid ${member.color}`,
                  borderRadius: '50%',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  opacity: '0.2',
                  pointerEvents: 'none'
                }}
              />
            </div>

            {/* Info Card */}
            <div
              style={{
                backgroundColor: '#ffffff',
                padding: '20px 15px',
                borderRadius: '12px',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
                border: `2px solid ${member.color}20`,
                transition: 'all 0.4s ease',
                cursor: 'pointer',
                animation: isVisible ? `slideUp 0.8s ease-out ${idx * 0.15 + 0.1}s both` : 'none'
              }}
              onClick={() => window.open(member.linkedin, '_blank')}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = `0 12px 24px ${member.color}30`;
                e.currentTarget.style.borderColor = `${member.color}40`;
                e.currentTarget.style.transform = 'translateY(-8px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.08)';
                e.currentTarget.style.borderColor = `${member.color}20`;
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <h3
                style={{
                  fontSize: '18px',
                  fontWeight: '700',
                  color: '#1f2937',
                  margin: '0 0 6px 0',
                  backgroundImage: `linear-gradient(135deg, ${member.color}, #1f2937)`,
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}
              >
                {member.name}
              </h3>
              <div
                style={{
                  width: '30px',
                  height: '3px',
                  background: member.color,
                  margin: '8px auto',
                  borderRadius: '2px'
                }}
              />
              <p
                style={{
                  fontSize: '13px',
                  color: '#6b7280',
                  margin: '0',
                  fontWeight: '500'
                }}
              >
                {member.position}
              </p>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes zoomIn {
          from {
            transform: scale(0.9);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }
      `}</style>
    </section>
  );
};

export default TeamMembers;
