import React from 'react';

export default function CurvedDivider({ 
  topColor = '#0f172a', 
  bottomColor = '#ffffff',
  height = 150,
  curve = 'smooth',
  solidColor = null,
  useGradient = false
}) {
  const curves = {
    normal: 'M0,80 Q160,20 320,50 Q480,80 640,20 L640,150 L0,150 Z',
    wave: 'M0,100 Q160,30 320,60 Q480,100 640,30 L640,150 L0,150 Z',
    smooth: 'M0,90 Q160,30 320,60 Q480,90 640,30 L640,150 L0,150 Z',
    bold: 'M0,110 Q160,20 320,50 Q480,110 640,20 L640,150 L0,150 Z',
    gentle: 'M0,80 Q160,40 320,70 Q480,90 640,40 L640,150 L0,150 Z',
    inverted: 'M0,30 Q160,80 320,40 Q480,30 640,80 Q480,120 320,110 Q160,120 0,70 Z'
  };

  return (
    <svg
      width="100%"
      height={height}
      viewBox={`0 0 640 ${height}`}
      preserveAspectRatio="none"
      style={{
        display: 'block',
        position: 'relative',
        zIndex: 10,
        marginTop: '-120px'
      }}
    >
      <defs>
        {(useGradient || !solidColor) && (
          <linearGradient id="gradientDivider" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor={topColor} />
            <stop offset="100%" stopColor={bottomColor} />
          </linearGradient>
        )}
      </defs>
      <path
        d={curves[curve] || curves.smooth}
        fill={solidColor ? (useGradient ? "url(#gradientDivider)" : solidColor) : "url(#gradientDivider)"}
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}
