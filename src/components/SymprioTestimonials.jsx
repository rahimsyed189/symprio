import React, { useState } from 'react';

export default function SymprioTestimonials() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Mr. Masud Mia',
      position: 'Founder, Tonalia',
      text: 'Lorem ipsum dolor sit amet there are many in, coningctetur adipisicing elit, sed do it on eiusmod tempor incididunt me ut labore et dolore cater.',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop'
    },
    {
      id: 2,
      name: 'Mr. Halim Dawn',
      position: 'Founder, TrashTheme',
      text: 'Lorem ipsum dolor sit amet there are many in, coningctetur adipisicing elit, sed do it on eiusmod tempor incididunt me ut labore et dolore cater.',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop'
    },
    {
      id: 3,
      name: 'Mr. Salim Rana',
      position: 'Founder, BasicTheme',
      text: 'Lorem ipsum dolor sit amet there are many in, coningctetur adipisicing elit, sed do it on eiusmod tempor incididunt me ut labore et dolore cater.',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section style={{
      padding: '80px 20px',
      background: '#fff'
    }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h6 style={{
            fontSize: '12px',
            fontWeight: '700',
            color: '#3b82f6',
            letterSpacing: '1.5px',
            textTransform: 'uppercase',
            margin: '0 0 10px 0'
          }}>
            REVIEW
          </h6>
          <h2 style={{
            fontSize: '42px',
            fontWeight: '700',
            color: '#1f2937',
            margin: '0'
          }}>
            Clients Say.
          </h2>
        </div>

        <div style={{
          background: '#f9fafb',
          border: '1px solid #e5e7eb',
          borderRadius: '12px',
          padding: '50px 40px',
          position: 'relative',
          minHeight: '300px'
        }}>
          {testimonials.map((testimonial, idx) => (
            <div key={testimonial.id} style={{
              display: idx === currentSlide ? 'block' : 'none',
              textAlign: 'center',
              animation: idx === currentSlide ? 'fadeIn 0.5s' : 'none'
            }}>
              <div style={{ marginBottom: '30px' }}>
                <div style={{
                  fontSize: '40px',
                  color: '#3b82f6',
                  marginBottom: '15px'
                }}>
                  ★★★★★
                </div>
              </div>
              <p style={{
                fontSize: '16px',
                color: '#4b5563',
                lineHeight: '1.8',
                marginBottom: '30px',
                fontStyle: 'italic'
              }}>
                "{testimonial.text}"
              </p>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '15px'
              }}>
                <img src={testimonial.avatar} alt={testimonial.name} style={{
                  width: '60px',
                  height: '60px',
                  borderRadius: '50%',
                  objectFit: 'cover'
                }} />
                <div style={{ textAlign: 'left' }}>
                  <h5 style={{
                    fontSize: '16px',
                    fontWeight: '700',
                    color: '#1f2937',
                    margin: '0 0 5px 0'
                  }}>
                    {testimonial.name}
                  </h5>
                  <p style={{
                    fontSize: '12px',
                    color: '#6b7280',
                    margin: 0
                  }}>
                    {testimonial.position}
                  </p>
                </div>
              </div>
            </div>
          ))}

          <div style={{
            position: 'absolute',
            bottom: '20px',
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            gap: '10px'
          }}>
            <button onClick={prevSlide} style={{
              background: '#e5e7eb',
              border: 'none',
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              cursor: 'pointer',
              fontSize: '18px',
              fontWeight: 'bold',
              color: '#1f2937',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.target.style.background = '#3b82f6';
              e.target.style.color = '#fff';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = '#e5e7eb';
              e.target.style.color = '#1f2937';
            }}
            >
              ←
            </button>
            {testimonials.map((_, idx) => (
              <button key={idx} onClick={() => setCurrentSlide(idx)} style={{
                width: '10px',
                height: '10px',
                borderRadius: '50%',
                border: 'none',
                background: idx === currentSlide ? '#3b82f6' : '#d1d5db',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                if (idx !== currentSlide) e.target.style.background = '#9ca3af';
              }}
              onMouseLeave={(e) => {
                if (idx !== currentSlide) e.target.style.background = '#d1d5db';
              }}
              />
            ))}
            <button onClick={nextSlide} style={{
              background: '#e5e7eb',
              border: 'none',
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              cursor: 'pointer',
              fontSize: '18px',
              fontWeight: 'bold',
              color: '#1f2937',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.target.style.background = '#3b82f6';
              e.target.style.color = '#fff';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = '#e5e7eb';
              e.target.style.color = '#1f2937';
            }}
            >
              →
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </section>
  );
}


