import React, { useState, useEffect } from 'react';

const Trainings = () => {
  const [trainings, setTrainings] = useState([]);
  const [loading, setLoading] = useState(true);

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

  useEffect(() => {
    fetchTrainings();
    // Poll for new trainings every 2 seconds for real-time updates
    const interval = setInterval(fetchTrainings, 2000);
    return () => clearInterval(interval);
  }, []);

  const defaultTrainings = [
    {
      id: 1,
      title: 'RPA Fundamentals',
      description: 'Learn the basics of Robotic Process Automation',
      instructor: 'John Smith',
      date: 'Dec 20, 2024',
      duration: '4 weeks'
    },
    {
      id: 2,
      title: 'Advanced Automation',
      description: 'Master advanced automation techniques',
      instructor: 'Jane Doe',
      date: 'Jan 5, 2025',
      duration: '6 weeks'
    },
    {
      id: 3,
      title: 'AI & ML for Automation',
      description: 'Integrate AI and Machine Learning with RPA',
      instructor: 'Mike Johnson',
      date: 'Jan 15, 2025',
      duration: '8 weeks'
    }
  ];

  const displayTrainings = trainings.length > 0 ? trainings : defaultTrainings;

  return (
    <section id="trainings" style={{
      padding: '80px 20px',
      background: '#fff'
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
            PROFESSIONAL TRAINING
          </h6>
          <h2 style={{
            fontSize: '42px',
            fontWeight: '700',
            color: '#1f2937',
            margin: '0'
          }}>
            Trainings & Certifications.
          </h2>
        </div>


        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '30px'
        }}>
          {displayTrainings.map((training) => (
            <div key={training.id} style={{
              background: '#fff',
              border: '1px solid #e5e7eb',
              borderRadius: '8px',
              overflow: 'hidden',
              transition: 'all 0.3s ease',
              cursor: 'pointer'
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
            }}>
              <div style={{
                background: 'linear-gradient(135deg, #3b82f6, #2563eb)',
                padding: '20px'
              }}>
                <h3 style={{
                  margin: '0',
                  fontSize: '18px',
                  fontWeight: '700',
                  color: '#fff'
                }}>
                  {training.title}
                </h3>
              </div>

              <div style={{ padding: '25px' }}>
                <p style={{
                  color: '#6b7280',
                  fontSize: '14px',
                  lineHeight: '1.6',
                  margin: '0 0 20px 0'
                }}>
                  {training.description}
                </p>

                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '10px',
                  fontSize: '14px',
                  marginBottom: '20px',
                  paddingBottom: '20px',
                  borderBottom: '1px solid #e5e7eb'
                }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    color: '#374151'
                  }}>
                    <span>👨‍🏫</span>
                    <span>{training.instructor}</span>
                  </div>
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
                </div>

                <button style={{
                  width: '100%',
                  background: '#3b82f6',
                  color: '#fff',
                  border: 'none',
                  padding: '10px 16px',
                  borderRadius: '4px',
                  fontWeight: '600',
                  fontSize: '14px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#2563eb';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = '#3b82f6';
                }}>
                  Enroll →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trainings;




