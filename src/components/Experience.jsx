import React from 'react';
import SectionHeading from './SectionHeading';
import { Icon } from '@iconify/react';

export default function Experience({ hardSkills, softSkills }) {
  const { sectionHeading: hardSkillsHeading, allExperience: hardSkillsExperience } = hardSkills || {};
  const { sectionHeading: softSkillsHeading, allExperience: softSkillsExperience } = softSkills || {};
  
  if (!hardSkills || !softSkills) {
    return <p>Dados não disponíveis</p>;
  }
  
  // Ícones para as diferentes categorias de habilidades
  const skillIcons = {
    'Backend': 'mdi:server-outline',
    'Back-End': 'mdi:server-outline',
    'Frontend': 'mdi:language-html5',
    'Front-End': 'mdi:language-html5',
    'DevOps': 'mdi:docker',
    'Dados': 'mdi:database-outline',
    'Cloud': 'mdi:cloud-outline',
    'Arquitetura': 'mdi:sitemap-outline',
    'Processos': 'mdi:chart-gantt',
    'Gestão': 'mdi:account-group-outline',
    'Liderança': 'mdi:account-group-outline',
    'Comunicação': 'mdi:message-text-outline',
    'Problem Solving': 'mdi:lightbulb-outline',
    'Adaptação': 'mdi:refresh',
    'Projetos': 'mdi:clipboard-check-outline',
    'Consultoria': 'mdi:chart-box-outline',
    'Empreender': 'mdi:rocket-launch-outline',
    'Integrações': 'mdi:connection'
  };

  // Cores para as diferentes categorias
  const skillColors = {
    // Hard Skills
    'Backend': '#3949ab',
    'Back-End': '#3949ab',
    'Frontend': '#43a047',
    'Front-End': '#43a047',
    'DevOps': '#e53935',
    'Dados': '#1e88e5',
    'Cloud': '#039be5',
    'Arquitetura': '#8e24aa',
    'Processos': '#546e7a',
    'Integrações': '#f9a825',
    // Soft Skills
    'Gestão': '#5e35b1',
    'Liderança': '#5e35b1',
    'Comunicação': '#00897b',
    'Problem Solving': '#d81b60',
    'Adaptação': '#00acc1',
    'Projetos': '#fb8c00',
    'Consultoria': '#6d4c41',
    'Empreender': '#f4511e'
  };

  return (
    <>
      <section 
        className="section" 
        style={{ 
          padding: '100px 0 60px',
          backgroundColor: '#f8fafc',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <div 
          className="tech-pattern"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: 'radial-gradient(#e2e8f0 1px, transparent 1px)',
            backgroundSize: '30px 30px',
            opacity: 0.3,
            zIndex: 0
          }}
        />
        
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {hardSkillsHeading && (
          <>
              <SectionHeading miniTitle={hardSkillsHeading.miniTitle} title={hardSkillsHeading.title} />
              
              <div className="skills-container mb-5">
              {hardSkillsExperience?.map((item, index) => (
                <div
                    className="skill-card"
                  key={index}
                  data-aos="fade-up"
                    data-aos-duration="800"
                  data-aos-delay={index * 100}
                >
                    <div 
                      className="skill-card-inner" 
                      style={{
                        background: '#fff',
                        borderRadius: '12px',
                        boxShadow: '0 5px 15px rgba(0,0,0,0.05)',
                        transition: 'all 0.3s ease',
                        padding: '30px',
                        marginBottom: '30px',
                        border: '1px solid #e2e8f0',
                        position: 'relative',
                        overflow: 'hidden'
                      }}
                    >
                      <div 
                        className="skill-icon-bg"
                        style={{
                          position: 'absolute',
                          top: '20px',
                          right: '20px',
                          width: '50px',
                          height: '50px',
                          borderRadius: '10px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          backgroundColor: skillColors[item.companyTitle] || '#3f51b5',
                          opacity: 0.1
                        }}
                      />
                      <div className="d-flex align-items-center mb-3">
                        <div 
                          className="skill-icon"
                          style={{
                            width: '42px',
                            height: '42px',
                            borderRadius: '8px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundColor: skillColors[item.companyTitle] || '#3f51b5',
                            marginRight: '15px',
                            color: 'white',
                            fontSize: '20px'
                          }}
                        >
                          <Icon icon={skillIcons[item.companyTitle] || 'mdi:code-braces'} />
                        </div>
                        <div className="skill-title-area">
                          <h4 
                            style={{
                              fontSize: '20px', 
                              fontWeight: '700',
                              marginBottom: '0',
                              color: '#1e293b'
                            }}
                          >
                            {item.designation}
                          </h4>
                          <div 
                            className="skill-category"
                            style={{
                              display: 'inline-block',
                              padding: '2px 10px',
                              backgroundColor: `${skillColors[item.companyTitle] || '#3f51b5'}15`,
                              color: skillColors[item.companyTitle] || '#3f51b5',
                              borderRadius: '20px',
                              fontSize: '12px',
                              fontWeight: '600',
                              marginTop: '5px'
                            }}
                          >
                            {item.companyTitle}
                          </div>
                    </div>
                  </div>
                      
                      <div className="skill-tech-list mb-3">
                        {item.jobType.split(', ').map((tech, techIndex) => (
                          <span 
                            key={techIndex}
                            style={{
                              display: 'inline-block',
                              padding: '4px 12px',
                              backgroundColor: '#f1f5f9',
                              color: '#64748b',
                              borderRadius: '20px',
                              fontSize: '13px',
                              fontWeight: '500',
                              margin: '0 5px 5px 0',
                              border: '1px solid #e2e8f0'
                            }}
                          >
                            {tech.trim()}
                          </span>
                        ))}
                      </div>
                      
                      {item.companyDescription && (
                        <p 
                          style={{
                            fontSize: '14px',
                            lineHeight: '1.6',
                            color: '#64748b',
                            marginBottom: '0'
                          }}
                        >
                          {item.companyDescription}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
                </div>
          </>
        )}
      </div>
      </section>
      
      <section 
        className="section" 
        style={{ 
          padding: '60px 0 100px',
          backgroundColor: '#fff',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          {softSkillsHeading && (
            <>
              <SectionHeading miniTitle={softSkillsHeading.miniTitle} title={softSkillsHeading.title} />

              <div className="skills-container">
                <div className="row gy-4">
                {softSkillsExperience?.map((item, index) => (
                  <div
                      className="col-lg-4 col-md-6"
                  key={index}
                  data-aos="fade-up"
                      data-aos-duration="800"
                  data-aos-delay={index * 100}
                >
                      <div 
                        className="soft-skill-card" 
                        style={{
                          background: '#fff',
                          borderRadius: '12px',
                          boxShadow: '0 5px 15px rgba(0,0,0,0.05)',
                          transition: 'all 0.3s ease',
                          padding: '30px',
                          height: '100%',
                          position: 'relative',
                          overflow: 'hidden',
                          border: `1px solid #e2e8f0`,
                          borderTop: `3px solid ${skillColors[item.companyTitle] || '#009688'}`
                        }}
                      >
                        <div 
                          className="skill-icon"
                          style={{
                            width: '50px',
                            height: '50px',
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundColor: `${skillColors[item.companyTitle] || '#009688'}15`,
                            marginBottom: '20px',
                            color: skillColors[item.companyTitle] || '#009688',
                            fontSize: '24px'
                          }}
                        >
                          <Icon icon={skillIcons[item.companyTitle] || 'mdi:account'} />
                        </div>
                        
                        <div className="soft-skill-content">
                          <h4 
                            style={{
                              fontSize: '18px', 
                              fontWeight: '700',
                              marginBottom: '10px',
                              color: '#1e293b'
                            }}
                          >
                            {item.designation}
                          </h4>
                          
                          <div 
                            className="soft-skill-tags mb-3" 
                            style={{
                              display: 'flex',
                              flexWrap: 'wrap',
                              gap: '5px',
                            }}
                          >
                            {item.jobType.split(', ').slice(0, 3).map((skill, skillIndex) => (
                              <span 
                                key={skillIndex}
                                style={{
                                  display: 'inline-block',
                                  padding: '3px 10px',
                                  backgroundColor: '#f1f5f9',
                                  color: '#64748b',
                                  borderRadius: '20px',
                                  fontSize: '12px',
                                  fontWeight: '500'
                                }}
                              >
                                {skill.trim()}
                              </span>
                            ))}
                            {item.jobType.split(', ').length > 3 && (
                              <span 
                                style={{
                                  display: 'inline-block',
                                  padding: '3px 10px',
                                  backgroundColor: '#f1f5f9',
                                  color: '#64748b',
                                  borderRadius: '20px',
                                  fontSize: '12px',
                                  fontWeight: '500'
                                }}
                              >
                                +{item.jobType.split(', ').length - 3}
                              </span>
                            )}
                          </div>
                          
                          {item.companyDescription && (
                            <p 
                              style={{
                                fontSize: '14px',
                                lineHeight: '1.6',
                                color: '#64748b',
                                marginBottom: '0'
                              }}
                            >
                              {item.companyDescription}
                            </p>
                          )}
                    </div>
                  </div>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>
      </section>
    </>
  );
}
