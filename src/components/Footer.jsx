import React from 'react';

const Footer = () => {
  return (
    <footer style={{
      background: 'linear-gradient(135deg, rgba(248, 250, 252, 0.95), rgba(240, 244, 248, 0.98))',
      borderTop: '1.5px solid rgba(0, 212, 255, 0.15)',
      padding: '80px 16px 30px',
      marginTop: '60px'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '50px', marginBottom: '50px' }}>
          <div>
            <h3 style={{ fontSize: '20px', fontWeight: '800', marginBottom: '16px', color: '#0f172a' }}>Symprio</h3>
            <p style={{ color: '#64748b', fontSize: '14px', lineHeight: '1.6', margin: '0' }}>Leading RPA solutions provider trusted by enterprises worldwide. Transforming businesses through intelligent automation.</p>
          </div>
          <div>
            <h4 style={{ fontSize: '16px', fontWeight: '700', marginBottom: '16px', color: '#0f172a' }}>Services</h4>
            <ul style={{ listStyle: 'none', padding: '0', margin: '0' }}>
              <li style={{ marginBottom: '12px' }}><a href="#services" style={{ color: '#64748b', textDecoration: 'none', fontSize: '14px', transition: 'color 0.3s', cursor: 'pointer' }} onMouseEnter={(e) => e.target.style.color = '#0891b2'} onMouseLeave={(e) => e.target.style.color = '#64748b'}>RPA Implementation</a></li>
              <li style={{ marginBottom: '12px' }}><a href="#industries" style={{ color: '#64748b', textDecoration: 'none', fontSize: '14px', transition: 'color 0.3s', cursor: 'pointer' }} onMouseEnter={(e) => e.target.style.color = '#0891b2'} onMouseLeave={(e) => e.target.style.color = '#64748b'}>Process Discovery</a></li>
              <li><a href="#services" style={{ color: '#64748b', textDecoration: 'none', fontSize: '14px', transition: 'color 0.3s', cursor: 'pointer' }} onMouseEnter={(e) => e.target.style.color = '#0891b2'} onMouseLeave={(e) => e.target.style.color = '#64748b'}>Training & Support</a></li>
            </ul>
          </div>
          <div>
            <h4 style={{ fontSize: '16px', fontWeight: '700', marginBottom: '16px', color: '#0f172a' }}>Company</h4>
            <ul style={{ listStyle: 'none', padding: '0', margin: '0' }}>
              <li style={{ marginBottom: '12px' }}><a href="#" style={{ color: '#64748b', textDecoration: 'none', fontSize: '14px', transition: 'color 0.3s', cursor: 'pointer' }} onMouseEnter={(e) => e.target.style.color = '#0891b2'} onMouseLeave={(e) => e.target.style.color = '#64748b'}>About Us</a></li>
              <li style={{ marginBottom: '12px' }}><a href="#" style={{ color: '#64748b', textDecoration: 'none', fontSize: '14px', transition: 'color 0.3s', cursor: 'pointer' }} onMouseEnter={(e) => e.target.style.color = '#0891b2'} onMouseLeave={(e) => e.target.style.color = '#64748b'}>Careers</a></li>
              <li><a href="#contact" style={{ color: '#64748b', textDecoration: 'none', fontSize: '14px', transition: 'color 0.3s', cursor: 'pointer' }} onMouseEnter={(e) => e.target.style.color = '#0891b2'} onMouseLeave={(e) => e.target.style.color = '#64748b'}>Contact</a></li>
            </ul>
          </div>
        </div>

        <div style={{ borderTop: '1.5px solid rgba(0, 212, 255, 0.15)', paddingTop: '30px', textAlign: 'center' }}>
          <p style={{ color: '#64748b', fontSize: '14px', margin: '0' }}>
            © 2025 Symprio. All rights reserved. | Privacy Policy | Terms of Service
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;




