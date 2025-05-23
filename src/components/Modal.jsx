import React from 'react';
import parser from 'html-react-parser';
import { Icon } from '@iconify/react';

export default function Modal({ modalData }) {
  const { thumbUrl, details } = modalData;
  const { title, description, type, langages, platform, country, url } = details;
  
  // Tech stack icons mapping
  const techIcons = {
    'HTML': 'mdi:language-html5',
    'CSS': 'mdi:language-css3',
    'JS': 'mdi:language-javascript',
    'JavaScript': 'mdi:language-javascript',
    'TypeScript': 'mdi:language-typescript',
    'React': 'mdi:react',
    'Vue.js': 'mdi:vuejs',
    'PHP': 'mdi:language-php',
    'Laravel': 'mdi:laravel',
    'Next.js': 'mdi:nextjs',
    'Node.js': 'mdi:nodejs',
    'Supabase': 'simple-icons:supabase',
    'TailwindCSS': 'mdi:tailwind',
    'API': 'mdi:api',
  };

  return (
    <div className="project-modal" style={{ padding: '30px' }}>
      <div className="project-details">
        <div className="row g-4">
          <div className="col-lg-6">
            <div 
              className="project-image-container"
              style={{
                borderRadius: '10px',
                overflow: 'hidden',
                boxShadow: '0 5px 15px rgba(0,0,0,0.08)'
              }}
            >
              <img 
                src={thumbUrl} 
                alt={title} 
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block'
                }}
              />
            </div>
          </div>
          
          <div className="col-lg-6">
            <div className="project-info">
              {title && (
                <h3 
                  style={{
                    fontSize: '24px',
                    fontWeight: '700',
                    color: '#0f172a',
                    marginBottom: '20px',
                    position: 'relative',
                    paddingBottom: '15px',
                    borderBottom: '2px solid #f1f5f9'
                  }}
                >
                  {parser(title)}
                </h3>
              )}
              
              {description && (
                <div className="description mb-4">
                  <p style={{ fontSize: '15px', lineHeight: '1.7', color: '#475569' }}>
                    {parser(description)}
                  </p>
                </div>
              )}
              
              <div 
                className="project-metadata"
                style={{
                  backgroundColor: '#f8fafc',
                  padding: '20px',
                  borderRadius: '10px',
                  marginTop: '20px'
                }}
              >
                <h5 
                  style={{
                    fontSize: '16px',
                    fontWeight: '700',
                    marginBottom: '15px',
                    color: '#1e293b',
                    display: 'flex',
                    alignItems: 'center'
                  }}
                >
                  <Icon icon="mdi:information-outline" style={{ marginRight: '8px' }} />
                  Detalhes do Projeto
                </h5>
                
                <ul
                  style={{
                    padding: 0,
                    margin: 0,
                    listStyle: 'none'
                  }}
                >
                {type && (
                    <li 
                      className="d-flex align-items-center"
                      style={{
                        marginBottom: '12px',
                        padding: '8px 0',
                        borderBottom: '1px solid #e2e8f0'
                      }}
                    >
                      <span 
                        style={{
                          width: '120px',
                          fontSize: '14px',
                          fontWeight: '600',
                          color: '#64748b'
                        }}
                      >
                        Tipo:
                      </span>
                      <span 
                        style={{
                          fontSize: '14px',
                          color: '#1e293b',
                          flex: '1'
                        }}
                      >
                        {type}
                      </span>
                  </li>
                )}
                  
                  {platform && (
                    <li 
                      className="d-flex align-items-center"
                      style={{
                        marginBottom: '12px',
                        padding: '8px 0',
                        borderBottom: '1px solid #e2e8f0'
                      }}
                    >
                      <span 
                        style={{
                          width: '120px',
                          fontSize: '14px',
                          fontWeight: '600',
                          color: '#64748b'
                        }}
                      >
                        Plataforma:
                      </span>
                      <span 
                        style={{
                          fontSize: '14px',
                          color: '#1e293b',
                          flex: '1'
                        }}
                      >
                        {platform}
                      </span>
                  </li>
                )}
                  
                  {country && (
                    <li 
                      className="d-flex align-items-center"
                      style={{
                        marginBottom: '12px',
                        padding: '8px 0',
                        borderBottom: '1px solid #e2e8f0'
                      }}
                    >
                      <span 
                        style={{
                          width: '120px',
                          fontSize: '14px',
                          fontWeight: '600',
                          color: '#64748b'
                        }}
                      >
                        País:
                      </span>
                      <span 
                        style={{
                          fontSize: '14px',
                          color: '#1e293b',
                          flex: '1'
                        }}
                      >
                        {country}
                      </span>
                  </li>
                )}
                  
                 
                </ul>
              </div>
              
              {langages && (
                <div 
                  className="tech-stack-section"
                  style={{
                    marginTop: '25px',
                    background: '#f8fafc',
                    padding: '20px',
                    borderRadius: '10px'
                  }}
                >
                  <h5 
                    style={{
                      fontSize: '16px',
                      fontWeight: '700',
                      marginBottom: '15px',
                      color: '#1e293b',
                      display: 'flex',
                      alignItems: 'center'
                    }}
                  >
                    <Icon icon="mdi:code-tags" style={{ marginRight: '8px' }} />
                    Stack do Projeto
                  </h5>
                  
                  <div 
                    className="tech-stack"
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '10px'
                    }}
                  >
                    {langages.split(', ').map((tech, index) => (
                      <div 
                        key={index}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          backgroundColor: '#fff',
                          padding: '8px 16px',
                          borderRadius: '30px',
                          boxShadow: '0 2px 5px rgba(0,0,0,0.05)',
                          border: '1px solid #e2e8f0'
                        }}
                      >
                        <Icon 
                          icon={techIcons[tech.trim()] || 'mdi:code-tags'} 
                          style={{
                            marginRight: '8px',
                            color: '#3f51b5',
                            fontSize: '18px'
                          }}
                        />
                        <span style={{ fontSize: '14px', color: '#0f172a', fontWeight: '500' }}>
                          {tech.trim()}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
