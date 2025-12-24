import React from 'react';

export default function SympriBrands() {
  const brands = [
    'https://images.unsplash.com/photo-1599305445671-ace2b8d4c2e6?w=200&h=100&fit=crop',
    'https://images.unsplash.com/photo-1611262588024-d12430b98920?w=200&h=100&fit=crop',
    'https://images.unsplash.com/photo-1599305445671-ace2b8d4c2e6?w=200&h=100&fit=crop',
    'https://images.unsplash.com/photo-1611262588024-d12430b98920?w=200&h=100&fit=crop',
    'https://images.unsplash.com/photo-1599305445671-ace2b8d4c2e6?w=200&h=100&fit=crop',
    'https://images.unsplash.com/photo-1611262588024-d12430b98920?w=200&h=100&fit=crop',
    'https://images.unsplash.com/photo-1599305445671-ace2b8d4c2e6?w=200&h=100&fit=crop',
    'https://images.unsplash.com/photo-1611262588024-d12430b98920?w=200&h=100&fit=crop',
  ];

  return (
    <section style={{
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
            SPONSORS
          </h6>
          <h2 style={{
            fontSize: '42px',
            fontWeight: '700',
            color: '#1f2937',
            margin: '0'
          }}>
            Popular Brand.
          </h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
          gap: '30px',
          alignItems: 'center'
        }}>
          {brands.map((brand, idx) => (
            <div key={idx} style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: '100px',
              background: '#f9fafb',
              borderRadius: '8px',
              border: '1px solid #e5e7eb',
              transition: 'all 0.3s ease',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#f3f4f6';
              e.currentTarget.style.borderColor = '#3b82f6';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#f9fafb';
              e.currentTarget.style.borderColor = '#e5e7eb';
            }}
            >
              <img src={brand} alt={`Brand ${idx + 1}`} style={{
                maxWidth: '80%',
                maxHeight: '80%',
                objectFit: 'contain',
                filter: 'grayscale(100%)',
                transition: 'filter 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => e.target.style.filter = 'grayscale(0%)'}
              onMouseLeave={(e) => e.target.style.filter = 'grayscale(100%)'}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


