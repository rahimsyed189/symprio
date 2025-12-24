import React, { useState, useEffect } from 'react';

export default function SymprioTeam() {
  const [team] = useState([
    {
      id: 1,
      name: 'Philimia D. Darwin',
      position: 'UX DESIGNER',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=400&fit=crop'
    },
    {
      id: 2,
      name: 'Hekim D. Rswana',
      position: 'WEB DEVELOPER',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop'
    },
    {
      id: 3,
      name: 'Tarana Halim',
      position: 'MARKETING',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=400&fit=crop'
    },
    {
      id: 4,
      name: 'Phumdon H. Norman',
      position: 'MARKETING',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop'
    },
    {
      id: 5,
      name: 'Salim Rana',
      position: 'DEVELOPER',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=400&fit=crop'
    },
    {
      id: 6,
      name: 'Romada G. WIlliam',
      position: 'MARKETING',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=400&fit=crop'
    }
  ]);

  return (
    <section style={{
      padding: '80px 20px',
      background: '#f9fafb'
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
            MEMBERS
          </h6>
          <h2 style={{
            fontSize: '42px',
            fontWeight: '700',
            color: '#1f2937',
            margin: '0 0 20px 0'
          }}>
            Team Members.
          </h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '30px'
        }}>
          {team.map((member) => (
            <div key={member.id} style={{
              textAlign: 'center',
              transition: 'all 0.3s ease',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-10px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
            }}
            >
              <div style={{
                width: '100%',
                height: '300px',
                borderRadius: '8px',
                overflow: 'hidden',
                marginBottom: '20px',
                background: `url('${member.image}')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }} />
              <h4 style={{
                fontSize: '18px',
                fontWeight: '700',
                color: '#1f2937',
                margin: '0 0 8px 0'
              }}>
                {member.name}
              </h4>
              <p style={{
                fontSize: '12px',
                fontWeight: '600',
                color: '#3b82f6',
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
                margin: 0
              }}>
                {member.position}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


