import React, { useState, useEffect } from 'react';

export default function SymprioHero() {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [fadeIn, setFadeIn] = useState(true);

  const titles = [
    {
      main: "Unlock your business's",
      sub: "full potential",
      description: "Transform your operations with strategic solutions designed to maximize efficiency and drive sustainable growth.",
      banner: "/banner-1.jpg"
    },
    {
      main: "Make The Easiest",
      sub: "Solution For You",
      description: "Experience seamless automation and integration tailored to your unique business needs.",
      banner: "/banner-2.jpg"
    },
    {
      main: "Experience unparalleled",
      sub: "enterprise performance",
      description: "Leverage cutting-edge RPA and AI-powered solutions to optimize your business processes.",
      banner: "/banner-3.jpg"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeIn(false);
      setTimeout(() => {
        setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
        setFadeIn(true);
      }, 500);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const currentTitle = titles[currentTitleIndex];
  
  return (
    <div style={{
      position: 'relative',
      width: '100%',
      minHeight: '420px',
      background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('${currentTitle.banner}')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px 20px 80px',
      textAlign: 'center',
      transition: 'background-image 0.5s ease-in-out'
    }}>
      <div style={{ maxWidth: '800px', color: '#fff' }}>
        <h6 style={{
          fontSize: '14px',
          fontWeight: '600',
          color: '#3b82f6',
          letterSpacing: '1.5px',
          textTransform: 'uppercase',
          marginBottom: '20px',
          margin: '0 0 20px 0'
        }}>
          Transform Your Business
        </h6>
        <div style={{
          minHeight: '140px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          opacity: fadeIn ? 1 : 0,
          transition: 'opacity 0.5s ease-in-out'
        }}>
          <h1 style={{
            fontSize: '32px',
            fontWeight: '600',
            lineHeight: '1.2',
            marginBottom: '10px',
            margin: '0 0 10px 0',
            color: '#3b82f6'
          }}>
            {currentTitle.main}
          </h1>
          <h1 style={{
            fontSize: '56px',
            fontWeight: '700',
            lineHeight: '1.2',
            marginBottom: '20px',
            margin: '0 0 20px 0',
            color: '#fff'
          }}>
            {currentTitle.sub}
          </h1>
        </div>
        <p style={{
          fontSize: '16px',
          color: '#e5e7eb',
          lineHeight: '1.6',
          marginBottom: '30px',
          margin: '0 0 30px 0',
          opacity: fadeIn ? 1 : 0,
          transition: 'opacity 0.5s ease-in-out'
        }}>
          {currentTitle.description}
        </p>
        <div style={{
          display: 'flex',
          gap: '20px',
          justifyContent: 'center',
          alignItems: 'center',
          flexWrap: 'wrap'
        }}>
          <button style={{
            background: '#3b82f6',
            color: '#fff',
            border: 'none',
            padding: '12px 30px',
            fontSize: '14px',
            fontWeight: '600',
            borderRadius: '4px',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            textTransform: 'uppercase',
            letterSpacing: '0.5px'
          }}
          onMouseEnter={(e) => e.target.style.background = '#2563eb'}
          onMouseLeave={(e) => e.target.style.background = '#3b82f6'}
          >
            Make Appointment
          </button>
          <a href="https://www.youtube.com/watch?v=4lnpcpZY5PI" style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '10px',
            color: '#fff',
            textDecoration: 'none',
            fontSize: '14px',
            fontWeight: '600',
            cursor: 'pointer',
            transition: 'color 0.3s ease'
          }}
          onMouseEnter={(e) => e.target.style.color = '#3b82f6'}
          onMouseLeave={(e) => e.target.style.color = '#fff'}
          >
            <span style={{
              width: '50px',
              height: '50px',
              background: 'rgba(255, 255, 255, 0.2)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '2px solid #3b82f6'
            }}>
              ▶
            </span>
            Watch Video
          </a>
        </div>
      </div>
    </div>
  );
}

