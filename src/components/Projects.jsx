import { Icon } from '@iconify/react';
import React, { useState, useEffect } from 'react';
import SectionHeading from './SectionHeading';
import Modal from './Modal';

export default function Projects({ data }) {
  const [modal, setModal] = useState(false);
  const [modalType, setModalType] = useState('image');
  const [modalData, setModalData] = useState({});
  const { sectionHeading, allProjects } = data;
  
  // Responsividade do modal
  const [modalSize, setModalSize] = useState({
    imageMaxWidth: '1200px',
    detailsMaxWidth: '800px',
    padding: '30px',
    isMobile: false
  });
  
  // Paginação
  const [currentPage, setCurrentPage] = useState(1);
  const [projectsPerPage, setProjectsPerPage] = useState(8);
  const [totalPages, setTotalPages] = useState(1);

  // Determinar número de projetos por página e tamanho do modal baseado no tamanho da tela
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 576) {
        setProjectsPerPage(4);
        setModalSize({
          imageMaxWidth: '95%',
          detailsMaxWidth: '95%',
          padding: '15px',
          isMobile: true
        });
      } else if (width < 992) {
        setProjectsPerPage(6);
        setModalSize({
          imageMaxWidth: '90%',
          detailsMaxWidth: '90%',
          padding: '20px',
          isMobile: false
        });
      } else {
        setProjectsPerPage(8);
        setModalSize({
          imageMaxWidth: '1200px',
          detailsMaxWidth: '800px',
          padding: '30px',
          isMobile: false
        });
      }
    };

    // Inicializar
    handleResize();

    // Adicionar event listener
    window.addEventListener('resize', handleResize);

    // Limpar event listener
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Calcular total de páginas sempre que projectsPerPage mudar
  useEffect(() => {
    if (allProjects) {
      setTotalPages(Math.ceil(allProjects.length / projectsPerPage));
    }
  }, [allProjects, projectsPerPage]);

  // Efeito para bloquear/desbloquear scroll quando o modal estiver aberto
  // e adicionar suporte para fechar com a tecla Esc
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && modal) {
        setModal(false);
      }
    };
    
    if (modal) {
      document.body.style.overflow = 'hidden';
      document.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [modal]);

  // Obter projetos da página atual
  const getCurrentProjects = () => {
    const indexOfLastProject = currentPage * projectsPerPage;
    const indexOfFirstProject = indexOfLastProject - projectsPerPage;
    return allProjects.slice(indexOfFirstProject, indexOfLastProject);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    // Scroll para o início da seção
    document.getElementById('project').scrollIntoView({ behavior: 'smooth' });
  };
  
  const handleProjectDetails = (item, itemType) => {
    setModalData(item);
    setModalType(itemType);
    setModal(!modal);
  };

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
    <>
      <section 
        className="project-section section" 
        id="project" 
        style={{
          backgroundColor: '#fcfcfc',
          padding: '100px 0',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <div 
          className="tech-pattern"
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            bottom: 0,
            width: '30%',
            opacity: 0.03,
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%233f51b5\' fill-opacity=\'0.4\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
            zIndex: 0
          }}
        />
        
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <SectionHeading
            miniTitle={sectionHeading.miniTitle}
            title={sectionHeading.title}
          />
          
          <div className="row g-4">
            {getCurrentProjects().map((item, index) => (
              <div 
                className="col-lg-3 col-md-4 col-sm-6" 
                key={index}
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay={index * 100}
              >
                <div 
                  className="project-card" 
                  style={{
                    backgroundColor: '#fff',
                    borderRadius: '12px',
                    overflow: 'hidden',
                    boxShadow: '0 5px 15px rgba(0,0,0,0.05)',
                    transition: 'all 0.3s ease',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    position: 'relative',
                    cursor: 'pointer'
                  }}
                  onClick={() => handleProjectDetails(item, 'details')}
                >
                  <div 
                    className="project-image" 
                    style={{ 
                      position: 'relative',
                      overflow: 'hidden'
                    }}
                  >
                    <img 
                      src={item.thumbUrl} 
                      alt={item.title} 
                      style={{ 
                        width: '100%',
                        height: '220px',
                        objectFit: 'cover',
                        objectPosition: 'top',
                        transition: 'transform 0.5s ease'
                      }} 
          />
          <div
                      className="project-overlay" 
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: 'rgba(15, 23, 42, 0.7)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        opacity: 0,
                        transition: 'opacity 0.3s ease'
                      }}
                    >
                      <button 
                        className="view-details-btn"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleProjectDetails(item, 'image');
                        }}
                        style={{
                          width: '50px',
                          height: '50px',
                          borderRadius: '50%',
                          backgroundColor: '#3f51b5',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: 'white',
                          fontSize: '24px',
                          border: 'none',
                          cursor: 'pointer'
                        }}
                      >
                        <Icon icon="bi:eye" />
                      </button>
                    </div>
                      </div>
                  
                  <div 
                    className="project-content" 
                    style={{ 
                      padding: '25px',
                      flex: 1,
                      display: 'flex',
                      flexDirection: 'column'
                    }}
                  >
                    <h4 
                      style={{ 
                        fontSize: '18px', 
                        fontWeight: '700',
                        marginBottom: '10px',
                        color: '#1e293b'
                      }}
                    >
                      {item.title}
                    </h4>
                    
                    <p 
                      style={{ 
                        fontSize: '14px',
                        color: '#64748b',
                        marginBottom: '16px',
                        flex: '1'
                      }}
                    >
                      {item.subTitle}
                    </p>
                    
                    {item.details?.langages && (
                      <div className="tech-stack" style={{ marginTop: 'auto' }}>
                        <div 
                          className="tech-stack-icons" 
                          style={{ 
                            display: 'flex',
                            flexWrap: 'wrap',
                            gap: '8px'
                          }}
                        >
                          {item.details.langages.split(', ').map((tech, techIndex) => {
                            const iconName = techIcons[tech.trim()];
                            return (
                              <div 
                                key={techIndex}
                                className="tech-icon"
                                style={{
                                  width: '30px',
                                  height: '30px',
                                  borderRadius: '6px',
                                  backgroundColor: '#f1f5f9',
                                  display: 'flex',
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                  color: '#64748b',
                                  fontSize: '16px'
                                }}
                              >
                                <Icon icon={iconName || 'mdi:code-tags'} />
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    )}
                    
                    <div 
                      className="project-footer"
                      style={{ 
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginTop: '20px',
                        paddingTop: '15px',
                        borderTop: '1px solid #f1f5f9'
                      }}
                    >
                      <span 
                        style={{ 
                          display: 'inline-block',
                          padding: '5px 12px',
                          backgroundColor: `rgba(63, 81, 181, 0.1)`,
                          color: '#3f51b5',
                          borderRadius: '20px',
                          fontSize: '12px',
                          fontWeight: '600'
                        }}
                      >
                        {item.details?.platform || 'Web'}
                      </span>
                      
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          handleProjectDetails(item, 'image');
                        }}
                        style={{
                          color: '#3f51b5',
                          display: 'flex',
                          alignItems: 'center',
                          textDecoration: 'none',
                          fontSize: '13px',
                          fontWeight: '600',
                          background: 'none',
                          border: 'none',
                          cursor: 'pointer'
                        }}
                      >
                        <span style={{ marginRight: '4px' }}>Ver Detalhes</span>
                        <Icon icon="bi:eye" />
                      </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>

          {/* Paginação */}
          {totalPages > 1 && (
            <div 
              className="pagination"
              style={{
                display: 'flex',
                justifyContent: 'center',
                marginTop: '50px',
                gap: '8px'
              }}
            >
              {/* Botão anterior */}
              <button
                onClick={() => currentPage > 1 && handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '8px',
                  border: 'none',
                  backgroundColor: currentPage === 1 ? '#e2e8f0' : '#f1f5f9',
                  color: currentPage === 1 ? '#94a3b8' : '#64748b',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: currentPage === 1 ? 'default' : 'pointer',
                  transition: 'all 0.2s ease'
                }}
              >
                <Icon icon="mdi:chevron-left" />
              </button>

              {/* Números das páginas */}
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => handlePageChange(page)}
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '8px',
                    border: 'none',
                    backgroundColor: currentPage === page ? '#3f51b5' : '#f1f5f9',
                    color: currentPage === page ? '#fff' : '#64748b',
                    fontWeight: currentPage === page ? '600' : '500',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                >
                  {page}
                </button>
              ))}

              {/* Botão próximo */}
              <button
                onClick={() => currentPage < totalPages && handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '8px',
                  border: 'none',
                  backgroundColor: currentPage === totalPages ? '#e2e8f0' : '#f1f5f9',
                  color: currentPage === totalPages ? '#94a3b8' : '#64748b',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: currentPage === totalPages ? 'default' : 'pointer',
                  transition: 'all 0.2s ease'
                }}
              >
                <Icon icon="mdi:chevron-right" />
              </button>
            </div>
          )}
        </div>
      </section>
      
      {modal && (
        <div 
          className="modal-overlay"
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 9999,
            backgroundColor: 'rgba(15, 23, 42, 0.9)',
            display: 'flex',
            alignItems: modalSize.isMobile ? 'flex-start' : 'center',
            justifyContent: 'center',
            padding: '20px',
            paddingTop: modalSize.isMobile ? '50px' : '20px'
          }}
          onClick={() => setModal(false)}
        >
          <div 
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
            style={{
              backgroundColor: '#fff',
              borderRadius: '12px',
              width: '90%',
              maxWidth: modalType === 'image' ? modalSize.imageMaxWidth : modalSize.detailsMaxWidth,
              maxHeight: modalSize.isMobile ? '75vh' : '85vh',
              overflow: 'auto',
              position: 'relative',
              margin: '0 auto',
              animation: 'modalFadeIn 0.3s ease'
            }}
          >
              <button
                type="button"
              className={`modal-close ${modalType === 'image' ? 'modal-close-image' : ''}`}
              onClick={() => setModal(false)}
              style={{
                position: 'absolute',
                top: '15px',
                right: '15px',
                backgroundColor: '#3f51b5',
                color: '#ffffff',
                border: 'none',
                width: '46px',
                height: '46px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                fontSize: '24px',
                zIndex: 10,
                boxShadow: '0 2px 10px rgba(0,0,0,0.2)'
              }}
            >
              <Icon icon="mdi:close" width="28" height="28" />
              </button>
            
              {modalType === 'image' ? (
              <img 
                src={modalData.thumbUrl} 
                alt={modalData.title} 
                style={{
                  width: '100%',
                  height: 'auto',
                  maxHeight: '80vh',
                  objectFit: 'contain',
                  borderRadius: '12px',
                  display: 'block'
                }}
              />
              ) : (
                <div style={{ padding: modalSize.padding }}>
                  <Modal modalData={modalData} />
                </div>
              )}
          </div>
        </div>
      )}
      
      <style jsx="true">{`
        .project-card:hover .project-image img {
          transform: scale(1.05);
        }
        .project-card:hover .project-overlay {
          opacity: 1;
        }
        
        .modal-close {
          transition: all 0.2s ease-in-out;
        }
        
        .modal-close:hover {
          transform: rotate(90deg);
          background-color: #f44336 !important;
        }
        
        .modal-close-image {
          border: 2px solid white !important;
          box-shadow: 0 2px 10px rgba(0,0,0,0.5) !important;
        }
        
        @keyframes modalFadeIn {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
}
