import React, { useState, useEffect } from 'react';

export default function Events() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    fetchEvents();
    const interval = setInterval(fetchEvents, 2000);
    return () => clearInterval(interval);
  }, []);

  const fetchEvents = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/events');
      if (response.ok) {
        const data = await response.json();
        setEvents(data);
        console.log('Events fetched:', data);
      }
    } catch (error) {
      console.error('Failed to fetch events:', error);
    } finally {
      setLoading(false);
    }
  };

  const defaultEvents = [
    {
      id: 0,
      title: 'RPA Summit 2024',
      date: 'Dec 15, 2024',
      location: 'Virtual Event',
      description: 'Join industry leaders discussing the future of automation',
      type: 'Featured'
    },
    {
      id: -1,
      title: 'Automation Workshop',
      date: 'Dec 20, 2024',
      location: 'New York, USA',
      description: 'Hands-on training for RPA best practices',
      type: 'Live'
    },
    {
      id: -2,
      title: 'AI & Automation Conference',
      date: 'Jan 10, 2025',
      location: 'San Francisco, USA',
      description: 'Explore the latest in AI-powered automation',
      type: 'Featured'
    },
    {
      id: -3,
      title: 'RPA Best Practices Webinar',
      date: 'Jan 15, 2025',
      location: 'Virtual Event',
      description: 'Learn industry best practices from our experts',
      type: 'Live'
    }
  ];

  const displayEvents = events.length > 0 ? events : defaultEvents;
  const eventsPerPage = 2;
  const totalPages = Math.ceil(displayEvents.length / eventsPerPage);
  const startIdx = currentPage * eventsPerPage;
  const currentEvents = displayEvents.slice(startIdx, startIdx + eventsPerPage);

  const handlePrev = () => {
    setCurrentPage((prev) => (prev > 0 ? prev - 1 : totalPages - 1));
  };

  const handleNext = () => {
    setCurrentPage((prev) => (prev < totalPages - 1 ? prev + 1 : 0));
  };

  return (
    <div style={{
      position: 'relative',
      zIndex: 1,
      maxWidth: '1200px',
      margin: '60px auto 0',
      padding: '60px 20px',
      background: 'linear-gradient(135deg, #38bdf8, #22c55e)',
      borderRadius: '20px',
      border: '1.5px solid rgba(0, 212, 255, 0.3)',
      boxShadow: '0 20px 60px rgba(0, 212, 255, 0.15)'
    }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '80px',
        alignItems: 'start'
      }}>
        {/* Left Side - Events */}
        <div>
        <div style={{ marginBottom: '40px' }}>
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
              background: '#10b981'
            }}></div>
            <span style={{
              fontSize: '12px',
              fontWeight: '600',
              color: '#059669',
              textTransform: 'uppercase',
              letterSpacing: '0.5px'
            }}>Upcoming Events</span>
          </div>
          <h2 style={{
            fontSize: '44px',
            fontWeight: '800',
            color: '#ffffff',
            margin: '0 0 8px 0'
          }}>
            Events & Webinars
          </h2>
          <p style={{
            fontSize: '15px',
            color: '#e5e7eb',
            margin: '0',
            maxWidth: '500px',
            lineHeight: '1.6'
          }}>
            Join our upcoming events and network with industry leaders in automation and digital transformation.
          </p>
        </div>

        {loading ? (
          <div style={{ textAlign: 'center', padding: '40px 20px' }}>
            <p style={{ color: '#6b7280', fontSize: '14px' }}>Loading events...</p>
          </div>
        ) : (
          <>
            {/* Events Grid - 2 per row */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '20px',
              marginBottom: '30px',
              minHeight: '380px'
            }}>
              {currentEvents.map((event) => (
                <div key={event.id} style={{
                  background: 'rgba(255, 255, 255, 0.95)',
                  border: '1.5px solid rgba(0, 212, 255, 0.15)',
                  borderRadius: '12px',
                  padding: '24px',
                  cursor: 'pointer',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 12px 24px rgba(0, 212, 255, 0.1)';
                  e.currentTarget.style.borderColor = 'rgba(0, 212, 255, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.08)';
                  e.currentTarget.style.borderColor = 'rgba(0, 212, 255, 0.15)';
                }}>
                  <div style={{
                    display: 'inline-block',
                    padding: '6px 12px',
                    borderRadius: '6px',
                    fontSize: '11px',
                    fontWeight: '700',
                    marginBottom: '12px',
                    background: event.type === 'Featured' 
                      ? 'rgba(251, 191, 36, 0.15)'
                      : event.type === 'Live'
                      ? 'rgba(239, 68, 68, 0.15)'
                      : 'rgba(0, 212, 255, 0.15)',
                    color: event.type === 'Featured' 
                      ? '#b45309'
                      : event.type === 'Live'
                      ? '#dc2626'
                      : '#0891b2',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px'
                  }}>
                    {event.type}
                  </div>

                  <h3 style={{
                    fontSize: '18px',
                    fontWeight: '800',
                    color: '#0f172a',
                    margin: '0 0 10px 0',
                    lineHeight: '1.3'
                  }}>
                    {event.title}
                  </h3>

                  {event.description && (
                    <p style={{
                      fontSize: '13px',
                      color: '#6b7280',
                      margin: '0 0 14px 0',
                      lineHeight: '1.5'
                    }}>
                      {event.description}
                    </p>
                  )}

                  <div style={{
                    fontSize: '13px',
                    color: '#6b7280',
                    marginBottom: '16px'
                  }}>
                    <div style={{ marginBottom: '6px' }}>📅 {event.date}</div>
                    <div>📍 {event.location}</div>
                  </div>

                  <button style={{
                    width: '100%',
                    padding: '10px 16px',
                    background: 'linear-gradient(135deg, #00d4ff, #0891b2)',
                    color: '#ffffff',
                    border: 'none',
                    borderRadius: '8px',
                    fontSize: '13px',
                    fontWeight: '600',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = '0 8px 16px rgba(0, 212, 255, 0.25)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = 'none';
                  }}>
                    Register →
                  </button>
                </div>
              ))}
            </div>

            {/* Navigation Arrows */}
            {totalPages > 1 && (
              <div style={{
                display: 'flex',
                gap: '12px',
                alignItems: 'center'
              }}>
                <button 
                  onClick={handlePrev}
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '8px',
                    border: '1.5px solid rgba(0, 212, 255, 0.3)',
                    background: 'rgba(0, 212, 255, 0.08)',
                    color: '#0891b2',
                    fontSize: '20px',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'all 0.3s ease',
                    fontWeight: '600'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'linear-gradient(135deg, #00d4ff, #0891b2)';
                    e.currentTarget.style.color = '#ffffff';
                    e.currentTarget.style.boxShadow = '0 8px 16px rgba(0, 212, 255, 0.25)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(0, 212, 255, 0.08)';
                    e.currentTarget.style.color = '#0891b2';
                    e.currentTarget.style.boxShadow = 'none';
                  }}>
                  ←
                </button>
                
                <span style={{
                  fontSize: '13px',
                  fontWeight: '600',
                  color: '#6b7280',
                  minWidth: '80px',
                  textAlign: 'center'
                }}>
                  {currentPage + 1} of {totalPages}
                </span>
                
                <button 
                  onClick={handleNext}
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '8px',
                    border: '1.5px solid rgba(0, 212, 255, 0.3)',
                    background: 'rgba(0, 212, 255, 0.08)',
                    color: '#0891b2',
                    fontSize: '20px',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'all 0.3s ease',
                    fontWeight: '600'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'linear-gradient(135deg, #00d4ff, #0891b2)';
                    e.currentTarget.style.color = '#ffffff';
                    e.currentTarget.style.boxShadow = '0 8px 16px rgba(0, 212, 255, 0.25)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(0, 212, 255, 0.08)';
                    e.currentTarget.style.color = '#0891b2';
                    e.currentTarget.style.boxShadow = 'none';
                  }}>
                  →
                </button>
              </div>
            )}
          </>
        )}
      </div>

      {/* Right Side - Logo */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '600px',
        position: 'relative'
      }}>
        <div style={{
          position: 'absolute',
          width: '280px',
          height: '280px',
          background: 'radial-gradient(circle, rgba(0, 212, 255, 0.15), transparent)',
          borderRadius: '50%',
          filter: 'blur(40px)',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: 1
        }}></div>
        
        <div style={{
          position: 'relative',
          zIndex: 2,
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <img 
            src="https://www.symprio.com/wp-content/uploads/2024/06/AIAD.png" 
            alt="Events Logo"
            style={{
              width: '220px',
              height: '220px',
              objectFit: 'contain',
              marginBottom: '32px',
              filter: 'drop-shadow(0 8px 16px rgba(0, 212, 255, 0.3))',
              display: 'block'
            }}
          />
          <h3 style={{
            fontSize: '24px',
            fontWeight: '800',
            color: '#ffffff',
            margin: '0 0 12px 0'
          }}>
            Join Our Community
          </h3>
          <p style={{
            fontSize: '14px',
            color: '#e5e7eb',
            margin: '0',
            maxWidth: '280px',
            lineHeight: '1.6'
          }}>
            Connect with automation experts, learn best practices, and grow your RPA knowledge.
          </p>
        </div>
      </div>
    </div>
    </div>
  );
}
