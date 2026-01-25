import React, { useEffect, useRef, useState } from 'react';

export default function SymprioHero() {
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const [showAnimation, setShowAnimation] = useState(false);
  const heroContent = {
    title: "Empowering Enterprises with Intelligent Automation & AI‑Driven Innovation",
    description: "Reduce costs, accelerate growth and free your teams to focus on what matters with Symprio's digital transformation, AI and automation solutions.",
    banner: "/banner-1.jpg"
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowAnimation(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    if (titleRef.current) {
      observer.observe(titleRef.current);
    }

    return () => {
      if (titleRef.current) {
        observer.unobserve(titleRef.current);
      }
    };
  }, []);
  
  return (
    <div style={{
      position: 'relative',
      width: '100%',
      minHeight: '420px',
      backgroundColor: '#0f172a',
      background: 'linear-gradient(135deg, #0f172a 0%, #0891b2 100%)',
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
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('${heroContent.banner}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}></div>
      
      <div style={{
        maxWidth: '800px', 
        color: '#fff',
        position: 'relative',
        zIndex: 10
      }}>
        <h1 style={{
          fontSize: '56px',
          fontWeight: '700',
          lineHeight: '1.3',
          marginBottom: '30px',
          margin: '0 0 30px 0',
          color: '#fff',
          animation: showAnimation ? 'bannerSlideIn 1.2s cubic-bezier(0.13, 0.53, 0.13, 0.96) 0s both' : 'none'
        }}
        ref={titleRef}>
          {heroContent.title}
        </h1>
        
        <p style={{
          fontSize: '16px',
          color: '#e5e7eb',
          lineHeight: '1.6',
          marginBottom: '40px',
          margin: '0 0 40px 0',
          animation: showAnimation ? 'bannerSlideIn 1.2s cubic-bezier(0.13, 0.53, 0.13, 0.96) 0.4s both' : 'none'
        }}
        ref={descRef}>
          {heroContent.description}
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
            Talk to an Expert
          </button>
        </div>
      </div>

      <style>{`
        @keyframes bannerSlideIn {
          0% {
            opacity: 0;
            transform: translateX(-80px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
}

