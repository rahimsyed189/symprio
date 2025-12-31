import React, { useState, useEffect } from 'react';

export default function SymprioHero() {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [fadeIn, setFadeIn] = useState(true);

  const titles = [
    {
      title: "Unlock Your Business's Full Potential",
      description: "Transform your operations with strategic solutions designed to maximize efficiency and drive sustainable growth.",
      banner: "/banner-1.jpg"
    },
    {
      title: "Make The Easiest Solution For You",
      description: "Experience seamless automation and integration tailored to your unique business needs.",
      banner: "/banner-2.jpg"
    },
    {
      title: "Experience Unparalleled Enterprise Performance",
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
      backgroundColor: '#000',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px 20px 80px',
      textAlign: 'center',
      overflow: 'hidden'
    }}>
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('${currentTitle.banner}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        transition: 'opacity 0.8s ease-in-out',
        opacity: fadeIn ? 1 : 0
      }}></div>
      
      <div style={{
        maxWidth: '800px', 
        color: '#fff',
        position: 'relative',
        zIndex: 10
      }}>
        <h6 style={{
          fontSize: '14px',
          fontWeight: '600',
          color: '#3b82f6',
          letterSpacing: '1.5px',
          textTransform: 'uppercase',
          marginBottom: '20px',
          margin: '0 0 20px 0',
          opacity: fadeIn ? 1 : 0,
          transform: fadeIn ? 'translateY(0)' : 'translateY(-20px)',
          transition: 'all 0.6s ease-in-out'
        }}>
          Transform Your Business
        </h6>
        
        <div style={{
          minHeight: '140px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          opacity: fadeIn ? 1 : 0,
          transform: fadeIn ? 'translateY(0)' : 'translateY(30px)',
          transition: 'all 0.8s ease-in-out'
        }}>
          <h1 style={{
            fontSize: '56px',
            fontWeight: '700',
            lineHeight: '1.3',
            marginBottom: '20px',
            margin: '0 0 20px 0',
            color: '#fff'
          }}>
            {currentTitle.title}
          </h1>
        </div>
        
        <p style={{
          fontSize: '16px',
          color: '#e5e7eb',
          lineHeight: '1.6',
          marginBottom: '30px',
          margin: '0 0 30px 0',
          opacity: fadeIn ? 1 : 0,
          transform: fadeIn ? 'translateY(0)' : 'translateY(40px)',
          transition: 'all 1s ease-in-out'
        }}>
          {currentTitle.description}
        </p>
        
        <div style={{
          display: 'flex',
          gap: '20px',
          justifyContent: 'center',
          alignItems: 'center',
          flexWrap: 'wrap',
          opacity: fadeIn ? 1 : 0,
          transform: fadeIn ? 'translateY(0)' : 'translateY(50px)',
          transition: 'all 1.2s ease-in-out'
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
          onMouseEnter={(e) => {
            e.target.style.background = '#2563eb';
            e.target.style.transform = 'translateY(-3px)';
            e.target.style.boxShadow = '0 10px 20px rgba(59, 130, 246, 0.3)';
          }}
          onMouseLeave={(e) => {
            e.target.style.background = '#3b82f6';
            e.target.style.transform = 'translateY(0)';
            e.target.style.boxShadow = 'none';
          }}
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
          onMouseEnter={(e) => {
            e.currentTarget.style.color = '#3b82f6';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = '#fff';
          }}
          >
            <span style={{
              width: '50px',
              height: '50px',
              background: 'rgba(255, 255, 255, 0.2)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '2px solid #3b82f6',
              transition: 'all 0.3s ease'
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

