import React from 'react';
import { Icon } from '@iconify/react';

export default function ContactInfo({ contactInfoData }) {
  return (
    <div 
      className="contact-info"
      style={{
        marginBottom: '32px',
      }}
    >
      {contactInfoData.map((item, index) => (
        <div
          className="contact-info-item"
          key={index}
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay={index * 100}
          style={{
            display: 'flex',
            alignItems: 'flex-start',
            marginBottom: '24px',
            backgroundColor: '#fff',
            padding: '16px',
            borderRadius: '8px',
            boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
            transition: 'all 0.3s cubic-bezier(.25,.8,.25,1)'
          }}
        >
          <div 
            className="contact-icon"
            style={{
              backgroundColor: '#3f51b5',
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: '16px',
              flexShrink: 0
            }}
          >
            <Icon 
              icon={item.email ? 'mdi:email-outline' : 'mdi:phone-outline'} 
              style={{
                color: '#fff',
                fontSize: '20px'
              }}
            />
          </div>
          <div className="contact-details">
            <label 
              style={{
                display: 'block',
                fontSize: '14px',
                fontWeight: '500',
                color: '#757575',
                marginBottom: '4px',
              }}
            >
              {item.title}
            </label>
            {item.email && (
              <a 
                href={`mailto:${item.email}`}
                style={{
                  display: 'block',
                  color: '#212121',
                  fontSize: '16px',
                  fontWeight: '500',
                  textDecoration: 'none',
                  transition: 'color 0.2s ease'
                }}
                onMouseOver={(e) => e.target.style.color = '#3f51b5'}
                onMouseOut={(e) => e.target.style.color = '#212121'}
              >
                {item.email}
              </a>
            )}
            {item.tel && (
              <a 
                href={`tel:${item.tel}`}
                style={{
                  display: 'block',
                  color: '#212121',
                  fontSize: '16px',
                  fontWeight: '500',
                  textDecoration: 'none',
                  transition: 'color 0.2s ease'
                }}
                onMouseOver={(e) => e.target.style.color = '#3f51b5'}
                onMouseOut={(e) => e.target.style.color = '#212121'}
              >
                {item.tel}
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
