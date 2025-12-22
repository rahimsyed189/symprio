import React, { useState, useEffect } from 'react';

const Trainings = () => {
  const [trainings, setTrainings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTrainings();
    // Poll for new trainings every 2 seconds for real-time updates
    const interval = setInterval(fetchTrainings, 2000);
    return () => clearInterval(interval);
  }, []);

  const fetchTrainings = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/trainings');
      if (response.ok) {
        const data = await response.json();
        setTrainings(data);
      }
    } catch (error) {
      console.error('Failed to fetch trainings:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="trainings" style={{
      padding: '40px 20px',
      background: 'transparent',
      maxWidth: '1200px',
      margin: '0 auto',
      position: 'relative',
      zIndex: 1
    }}>
      <div style={{ marginBottom: '30px' }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          marginBottom: '8px'
        }}>
          <div style={{
            width: '6px',
            height: '6px',
            borderRadius: '50%',
            background: '#a855f7'
          }}></div>
          <span style={{
            fontSize: '12px',
            fontWeight: '600',
            color: '#a855f7',
            textTransform: 'uppercase',
            letterSpacing: '0.5px'
          }}>Professional Training</span>
        </div>
        <h2 style={{
          fontSize: '28px',
          fontWeight: '700',
          color: '#1f2937',
          margin: '0 0 8px 0'
        }}>
          Trainings & Certifications
        </h2>
        <p style={{
          fontSize: '14px',
          color: '#6b7280',
          margin: 0
        }}>
          Upskill with expert-led programs
        </p>
      </div>

      {loading ? (
        <div style={{ textAlign: 'center', padding: '20px' }}>
          <p style={{ color: '#6b7280', fontSize: '14px' }}>Loading trainings...</p>
        </div>
      ) : trainings.length === 0 ? (
        <div style={{
          background: 'rgba(168, 85, 247, 0.05)',
          border: '1px dashed rgba(168, 85, 247, 0.3)',
          borderRadius: '10px',
          padding: '30px',
          textAlign: 'center'
        }}>
          <p style={{ fontSize: '14px', color: '#6b7280', margin: 0 }}>
            No trainings scheduled yet. Check back soon!
          </p>
        </div>
      ) : (
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 260px))',
          gap: '16px',
          justifyContent: 'start'
        }}>
          {trainings.map((training) => (
            <div
              key={training.id}
              style={{
                background: 'rgba(255, 255, 255, 0.8)',
                borderRadius: '10px',
                overflow: 'hidden',
                border: '1px solid rgba(168, 85, 247, 0.2)',
                cursor: 'pointer'
              }}
            >
              {/* Header */}
              <div style={{
                background: 'linear-gradient(135deg, #a855f7, #9333ea)',
                padding: '14px',
                color: 'white'
              }}>
                <h3 style={{
                  margin: '0 0 4px 0',
                  fontSize: '15px',
                  fontWeight: '700'
                }}>
                  {training.title}
                </h3>
                <p style={{
                  margin: 0,
                  fontSize: '12px',
                  opacity: 0.9
                }}>
                  👨‍🏫 {training.instructor}
                </p>
              </div>

              {/* Body */}
              <div style={{ padding: '14px' }}>
                <p style={{
                  color: '#6b7280',
                  fontSize: '12px',
                  lineHeight: '1.4',
                  margin: '0 0 10px 0'
                }}>
                  {training.description}
                </p>

                {/* Details */}
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '6px',
                  fontSize: '12px',
                  marginBottom: '10px',
                  paddingBottom: '10px',
                  borderBottom: '1px solid rgba(0, 0, 0, 0.05)'
                }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    color: '#374151'
                  }}>
                    <span>📅</span>
                    <span>{training.date}</span>
                  </div>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    color: '#374151'
                  }}>
                    <span>⏱️</span>
                    <span>{training.duration}</span>
                  </div>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    color: '#374151'
                  }}>
                    <span>👥</span>
                    <span>Capacity: {training.capacity}</span>
                  </div>
                </div>

                {/* CTA Button */}
                <button style={{
                  width: '100%',
                  background: 'linear-gradient(135deg, #a855f7, #9333ea)',
                  color: 'white',
                  border: 'none',
                  padding: '8px',
                  borderRadius: '6px',
                  fontWeight: '600',
                  fontSize: '12px',
                  cursor: 'pointer'
                }}>
                  Enroll →
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Trainings;


