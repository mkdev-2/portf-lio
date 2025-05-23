import { Icon } from '@iconify/react';
import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { Link as ScrollLink } from 'react-scroll';
import SocialBtns from './SocialBtns';

export default function Hero({ data, socialData }) {
  const { imgUrl, name, heading, typingText, description, btnText, btnUrl } = data;
  
  return (
    <section 
      className="home-section" 
      id="home" 
      data-scroll-index={0}
      style={{
        backgroundImage: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
        color: '#f8fafc',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Elementos de background - visual tech */}
      <div 
        className="tech-grid"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at 25px 25px, rgba(255, 255, 255, 0.1) 2%, transparent 0%)',
          backgroundSize: '50px 50px',
          opacity: 0.4,
          zIndex: 0
        }}
      />
      <div 
        className="floating-particles"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 0
        }}
      >
        {[...Array(10)].map((_, i) => (
          <div 
            key={i}
            style={{
              position: 'absolute',
              width: '6px',
              height: '6px',
              borderRadius: '50%',
              background: '#3f51b5',
              boxShadow: '0 0 10px 2px rgba(99, 102, 241, 0.6)',
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.7 + 0.3,
              animation: `float-${i} ${Math.random() * 10 + 15}s ease-in-out infinite`,
            }}
          />
        ))}
      </div>
      
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="row align-items-center">
          <div className="col-lg-7">
            <div 
              className="hs-text-box"
              style={{
                padding: '30px 0'
              }}
            >
              <h6 
                data-aos="fade-up" 
                data-aos-duration="800"
                style={{
                  color: '#94a3b8',
                  fontWeight: '500',
                  letterSpacing: '1.5px',
                  marginBottom: '8px',
                  display: 'inline-block',
                  padding: '6px 16px',
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  borderRadius: '4px',
                  borderLeft: '3px solid #3f51b5'
                }}
              >
                <span>{name}</span>
              </h6>

              <h1
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="100"
                style={{
                  fontSize: '3rem',
                  fontWeight: '700',
                  marginBottom: '8px',
                  background: 'linear-gradient(90deg, #fff, #94a3b8)',
                  backgroundClip: 'text',
                  textFillColor: 'transparent',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                {heading}
              </h1>
              <h2
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="200"
                style={{
                  fontSize: '2rem',
                  fontWeight: '600',
                  color: '#3f51b5',
                  marginBottom: '20px',
                  minHeight: '60px'
                }}
              >
                <TypeAnimation
                  sequence={typingText}
                  speed={0}
                  repeat={Infinity}
                />
              </h2>
              <p
                className="text"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="300"
                style={{
                  fontSize: '1.1rem',
                  lineHeight: '1.8',
                  color: '#cbd5e1',
                  maxWidth: '600px',
                  marginBottom: '30px'
                }}
              >
                {description}
              </p>
              
              <div
                className="hero-cta d-flex flex-wrap align-items-center gap-3"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="400"
                style={{
                  marginBottom: '20px'
                }}
              >
                <ScrollLink
                  to={btnUrl}
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                  className="primary-btn"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    backgroundColor: '#3f51b5',
                    color: 'white',
                    padding: '12px 28px',
                    borderRadius: '30px',
                    fontWeight: '600',
                    fontSize: '16px',
                    transition: 'all 0.3s ease',
                    border: 'none',
                    cursor: 'pointer',
                    boxShadow: '0 4px 12px rgba(63, 81, 181, 0.3)',
                  }}
                >
                  <span style={{ marginRight: '10px' }}>{btnText}</span>
                  <Icon icon="bi:arrow-right" style={{ fontSize: '18px' }} />
                </ScrollLink>
                
              </div>
              
              <div className="hero-tech-stack" style={{ marginTop: '30px' }}>
                <h6 style={{ color: '#94a3b8', fontSize: '14px', marginBottom: '12px' }}>
                  Tecnologias principais:
                </h6>
                <div className="tech-badges d-flex flex-wrap gap-2">
                  {['React', 'Laravel', 'FastAPI', 'TypeScript', 'DevOps'].map((tech, index) => (
                    <span 
                      key={index}
                      style={{
                        display: 'inline-block',
                        padding: '6px 14px',
                        backgroundColor: 'rgba(255, 255, 255, 0.05)',
                        color: '#e2e8f0',
                        borderRadius: '20px',
                        fontSize: '14px',
                        fontWeight: '500',
                        marginRight: '6px',
                        marginBottom: '6px',
                        border: '1px solid rgba(255,255,255,0.1)'
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div
                className="social-section"
                style={{
                  marginTop: '30px',
                  borderTop: '1px solid rgba(255,255,255,0.1)',
                  paddingTop: '20px'
                }}
              >
                <SocialBtns
                  socialBtns={socialData}
                  variant="d-flex gap-3"
                />
              </div>
            </div>
          </div>
          <div className="col-lg-5 d-none d-lg-block">
            <div 
              className="hs-banner"
              style={{
                position: 'relative',
                padding: '20px'
              }}
            >
              <div 
                className="tech-frame"
                style={{
                  position: 'absolute',
                  top: '0',
                  bottom: '0',
                  left: '0',
                  right: '0',
                  border: '2px solid rgba(63, 81, 181, 0.3)',
                  borderRadius: '10px',
                  transform: 'rotate(-2deg) scale(1.05)',
                  zIndex: 1
                }}
              />
              <img 
                src={imgUrl} 
                alt={name}
                style={{
                  borderRadius: '10px',
                  width: '100%',
                  height: 'auto',
                  objectFit: 'cover',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
                  position: 'relative',
                  zIndex: 2
                }}
              />
              <div 
                className="tech-dots" 
                style={{
                  position: 'absolute',
                  bottom: '-20px',
                  right: '-20px',
                  width: '100px',
                  height: '100px',
                  backgroundImage: 'radial-gradient(circle, #3f51b5 20%, transparent 20%)',
                  backgroundSize: '12px 12px',
                  zIndex: 1,
                  opacity: 0.7
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
