import React from 'react';
import parser from 'html-react-parser';

export default function SectionHeading({ miniTitle, title, variant }) {
  return (
    <div 
      className={`section-heading ${variant ? variant : ''}`}
      style={{ 
        marginBottom: '60px',
        position: 'relative'
      }}
    >
      <div 
        className="heading-tech-accent"
        style={{
          position: 'absolute',
          top: '-15px',
          left: variant === 'text-center' ? '50%' : '0',
          transform: variant === 'text-center' ? 'translateX(-50%)' : 'translateX(0)',
          width: '40px',
          height: '3px',
          background: 'linear-gradient(90deg, #3f51b5, rgba(63, 81, 181, 0.5))',
          borderRadius: '3px',
        }}
      />
      
      <h6
        data-aos={variant === 'text-center' ? 'fade-up' : 'fade-right'}
        data-aos-duration="800"
        data-aos-delay="100"
        style={{
          color: '#64748b',
          fontWeight: '600',
          fontSize: '14px',
          textTransform: 'uppercase',
          letterSpacing: '2px',
          marginBottom: '14px',
          position: 'relative',
          display: 'inline-block'
        }}
      >
        <span style={{
          position: 'relative',
          paddingBottom: '0'
        }}>{miniTitle}</span>
      </h6>
      
      <h2 
        style={{
          fontSize: '36px',
          fontWeight: '800',
          marginBottom: '16px',
          color: '#0f172a',
          lineHeight: '1.2',
          position: 'relative'
        }}
        data-aos={variant === 'text-center' ? 'fade-up' : 'fade-right'}
        data-aos-duration="800"
        data-aos-delay="200"
      >
        {parser(title)}
        <span 
          className="heading-decoration" 
          style={{
            position: 'relative',
            display: 'inline-block',
            width: '12px',
            height: '12px',
            backgroundColor: '#3f51b5',
            borderRadius: '50%',
            marginLeft: '6px',
            verticalAlign: 'middle'
          }}
        />
      </h2>
      
      <div 
        className="heading-divider"
        data-aos={variant === 'text-center' ? 'fade-up' : 'fade-right'}
        data-aos-duration="800"
        data-aos-delay="300"
        style={{
          display: 'flex',
          alignItems: 'center',
          marginTop: '25px'
        }}
      >
        <div style={{
          width: '60px',
          height: '2px',
          background: '#3f51b5',
          marginRight: '10px'
        }}></div>
        <div style={{
          width: '8px',
          height: '8px',
          borderRadius: '50%',
          background: '#3f51b5',
          marginRight: '10px'
        }}></div>
        <div style={{
          width: '6px',
          height: '6px',
          borderRadius: '50%',
          background: '#3f51b5',
          opacity: 0.7
        }}></div>
      </div>
    </div>
  );
}
