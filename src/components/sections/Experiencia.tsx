import { FaCalendarAlt, FaGraduationCap, FaBriefcase, FaTrophy } from 'react-icons/fa';
import { CSSProperties, useEffect, useState } from 'react'; // Importar useState

const Experiencia = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Define o estado isMobile
    };

    const handleTouchDetect = () => {
      // Verifica se o navegador suporta eventos de toque
      setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize);
      // Adiciona um listener para detectar o primeiro toque e definir isTouchDevice
      window.addEventListener('touchstart', handleTouchDetect, { once: true });
      handleResize(); // Executa na montagem inicial
      handleTouchDetect(); // Executa na montagem inicial
    }

    return () => {
      document.head.removeChild(link);
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', handleResize);
        window.removeEventListener('touchstart', handleTouchDetect);
      }
    };
  }, []);

  const getContentPadding = () => {
    if (typeof window !== 'undefined') {
      const width = window.innerWidth;
      if (width <= 480) return '1.5rem';
      if (width <= 768) return '2rem';
      return '2.5rem';
    }
    return '2.5rem';
  };

  const getGridColumns = () => {
    return isMobile ? '1fr' : '1fr 1fr'; // Usa o estado isMobile
  };

  const getResponsiveFontSize = (desktopSize: number, mobileFactor: number = 0.8) => {
    return isMobile ? `${desktopSize * mobileFactor}rem` : `${desktopSize}rem`;
  };

  // Funções para os estilos de hover, agora condicionais
  const getExperienceItemHoverStyles = () => (
    isTouchDevice ? {} : { // Se for um dispositivo de toque, retorna um objeto vazio para desativar o hover
      borderLeft: '3px solid #3b82f6',
      paddingLeft: '1rem',
      transform: 'translateX(5px)',
    }
  );

  const getExperienceItemLeaveStyles = () => (
    isTouchDevice ? {} : { // Se for um dispositivo de toque, retorna um objeto vazio
      borderLeft: 'none',
      paddingLeft: '0',
      transform: 'translateX(0)',
    }
  );

  const getEducationItemHoverStyles = () => (
    isTouchDevice ? {} : { // Se for um dispositivo de toque, retorna um objeto vazio para desativar o hover
      borderLeft: '3px solid #10b981',
      paddingLeft: '1rem',
      transform: 'translateX(5px)',
    }
  );

  const getEducationItemLeaveStyles = () => (
    isTouchDevice ? {} : { // Se for um dispositivo de toque, retorna um objeto vazio
      borderLeft: 'none',
      paddingLeft: '0',
      transform: 'translateX(0)',
    }
  );

  const styles: { [key: string]: CSSProperties } = {
    section: {
      backgroundColor: '#191919',
      padding: '4rem 0',
      fontFamily: "'Poppins', sans-serif"
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 2rem'
    },
    sectionTitle: {
      fontSize: getResponsiveFontSize(3, 0.7), // Ajustado para mobile
      fontWeight: '700',
      color: '#ffffff',
      textAlign: 'center' as const,
      marginBottom: '3rem',
      fontFamily: "'Montserrat', sans-serif",
      letterSpacing: '-0.025em'
    },
    mainCard: {
      position: 'relative' as const,
      maxWidth: '1000px',
      margin: '0 auto',
      padding: '1rem'
    },
    blackCard: {
      background: 'linear-gradient(135deg, #1a1a1a 0%, #0f0f0f 100%)',
      borderTopLeftRadius: '20px',
      borderBottomRightRadius: '20px',
      borderTopRightRadius: '50px',
      borderBottomLeftRadius: '50px',
      padding: getContentPadding(),
      boxShadow: '0 25px 50px rgba(0, 0, 0, 0.6)',
      position: 'relative' as const,
      zIndex: 10
    },
    whiteCard: {
      position: 'absolute' as const,
      bottom: '-20px',
      right: '-20px',
      width: '60%',
      height: '80%',
      background: '#ffffff',
      borderTopLeftRadius: '20px',
      borderBottomRightRadius: '20px',
      borderTopRightRadius: '50px',
      borderBottomLeftRadius: '50px',
      zIndex: 1,
      display: isMobile ? 'none' : 'block', // Oculta em mobile
    },
    backgroundCard: {
      position: 'absolute' as const,
      bottom: '-30px',
      right: '-30px',
      width: '65%',
      height: '85%',
      background: '#6b7280',
      borderTopLeftRadius: '20px',
      borderBottomRightRadius: '20px',
      borderTopRightRadius: '50px',
      borderBottomLeftRadius: '50px',
      zIndex: 0,
      display: isMobile ? 'none' : 'block', // Oculta em mobile
    },
    contentGrid: {
      display: 'grid',
      gridTemplateColumns: getGridColumns(),
      gap: isMobile ? '1.5rem' : '2rem', // Reduz o gap no mobile
      alignItems: 'start'
    },
    leftColumn: {
      display: 'flex',
      flexDirection: 'column' as const,
      gap: isMobile ? '1rem' : '1.5rem', // Reduz o gap no mobile
      height: '100%'
    },
    rightColumn: {
      display: 'flex',
      flexDirection: 'column' as const,
      gap: isMobile ? '1rem' : '1.5rem', // Reduz o gap no mobile
      height: '100%'
    },
    sectionHeader: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.8rem',
      marginBottom: '1rem'
    },
    sectionTitleInCard: {
      fontSize: getResponsiveFontSize(1.3, 0.9), // Ajustado para mobile
      fontWeight: '600',
      color: '#ffffff',
      fontFamily: "'Montserrat', sans-serif"
    },
    experienceList: {
      display: 'flex',
      flexDirection: 'column' as const,
      gap: isMobile ? '0.8rem' : '1rem', // Reduz o gap no mobile
      flex: 1
    },
    experienceItem: {
      background: 'transparent',
      borderRadius: '0px',
      padding: '1rem 0',
      border: 'none',
      borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
      transition: isTouchDevice ? 'none' : 'all 0.3s ease' // Desativa transição em toque
    },
    jobTitle: {
      fontSize: getResponsiveFontSize(1, 0.9), // Ajustado para mobile
      fontWeight: '600',
      color: '#ffffff',
      marginBottom: '0.4rem',
      lineHeight: '1.3'
    },
    company: {
      fontSize: getResponsiveFontSize(0.85, 0.9), // Ajustado para mobile
      color: '#e2e8f0',
      marginBottom: '0.4rem',
      fontWeight: '400'
    },
    period: {
      fontSize: getResponsiveFontSize(0.75, 0.9), // Ajustado para mobile
      color: '#cbd5e1',
      display: 'flex',
      alignItems: 'center',
      gap: '0.4rem'
    },
    summaryBox: {
      background: 'rgba(255, 255, 255, 0.08)',
      borderRadius: '12px',
      padding: isMobile ? '1rem' : '1.5rem', // Reduz padding no mobile
      border: '1px solid rgba(255, 255, 255, 0.15)'
    },
    summaryText: {
      fontSize: getResponsiveFontSize(0.85, 0.9), // Ajustado para mobile
      color: '#d1d5db',
      lineHeight: '1.6',
      marginBottom: '1.5rem'
    },
    statsRow: {
      display: 'flex',
      justifyContent: 'space-around',
      paddingTop: '1rem',
      borderTop: '1px solid rgba(255, 255, 255, 0.15)'
    },
    statItem: {
      textAlign: 'center' as const
    },
    statNumber: {
      fontSize: getResponsiveFontSize(1.4, 0.9), // Ajustado para mobile
      fontWeight: '700',
      color: '#ffffff',
      display: 'block'
    },
    statLabel: {
      fontSize: getResponsiveFontSize(0.75, 0.9), // Ajustado para mobile
      color: '#e2e8f0',
      marginTop: '0.3rem'
    },
    icon: {
      fontSize: getResponsiveFontSize(1.2, 0.9), // Ajustado para mobile
      opacity: 0.9
    }
  };

  return (
    <section style={styles.section} id="experiencia">
      <div style={styles.container}>

        <h2 style={styles.sectionTitle}>
          Experiência & Formação
        </h2>

        <div style={styles.mainCard}>

          {/* Card Branco Decorativo - Oculto em mobile */}
          <div style={styles.whiteCard} />

          {/* Card Preto Principal (frente) */}
          <div style={styles.blackCard}>

            <div style={styles.contentGrid}>

              {/* Coluna Esquerda - Experiências */}
              <div style={styles.leftColumn}>
                <div style={styles.sectionHeader}>
                  <FaBriefcase style={{ ...styles.icon, color: '#3b82f6' }} />
                  <h3 style={styles.sectionTitleInCard}>
                    Experiência Profissional
                  </h3>
                </div>
                <div style={styles.experienceList}>
                  <div
                    style={styles.experienceItem}
                    onMouseEnter={(e) => {
                      if (!isTouchDevice) {
                        Object.assign(e.currentTarget.style, getExperienceItemHoverStyles());
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isTouchDevice) {
                        Object.assign(e.currentTarget.style, getExperienceItemLeaveStyles());
                      }
                    }}
                  >
                    <div style={styles.jobTitle}>Especialista em Automação Industrial & Full-Stack</div>
                    <div style={styles.company}>RLS Automação Industrial • Lisboa, Portugal</div>
                    <div style={styles.period}>
                      <FaCalendarAlt style={{ fontSize: getResponsiveFontSize(0.65, 0.9), opacity: 0.7 }} />
                      jun 2024 - presente (1 ano)
                    </div>
                  </div>

                  <div
                    style={styles.experienceItem}
                    onMouseEnter={(e) => {
                      if (!isTouchDevice) {
                        Object.assign(e.currentTarget.style, getExperienceItemHoverStyles());
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isTouchDevice) {
                        Object.assign(e.currentTarget.style, getExperienceItemLeaveStyles());
                      }
                    }}
                  >
                    <div style={styles.jobTitle}>Técnico de Manutenção Elétrica & Automação</div>
                    <div style={styles.company}>Central de Cervejas (Sagres) • Vialonga, Portugal</div>
                    <div style={styles.period}>
                      <FaCalendarAlt style={{ fontSize: getResponsiveFontSize(0.65, 0.9), opacity: 0.7 }} />
                      dez 2023 - jun 2024 (7 meses)
                    </div>
                  </div>

                  <div
                    style={styles.experienceItem}
                    onMouseEnter={(e) => {
                      if (!isTouchDevice) {
                        Object.assign(e.currentTarget.style, getExperienceItemHoverStyles());
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isTouchDevice) {
                        Object.assign(e.currentTarget.style, getExperienceItemLeaveStyles());
                      }
                    }}
                  >
                    <div style={styles.jobTitle}>Técnico de Automação Industrial</div>
                    <div style={styles.company}>Font Salem (Grupo Damm) • Santarém, Portugal</div>
                    <div style={styles.period}>
                      <FaCalendarAlt style={{ fontSize: getResponsiveFontSize(0.65, 0.9), opacity: 0.7 }} />
                      jul 2023 - dez 2023 (6 meses)
                    </div>
                  </div>

                  <div
                    style={styles.experienceItem}
                    onMouseEnter={(e) => {
                      if (!isTouchDevice) {
                        Object.assign(e.currentTarget.style, getExperienceItemHoverStyles());
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isTouchDevice) {
                        Object.assign(e.currentTarget.style, getExperienceItemLeaveStyles());
                      }
                    }}
                  >
                    <div style={styles.jobTitle}>Técnico de Automação Sênior & Full-Stack</div>
                    <div style={styles.company}>AB InBev • Pernambuco, Brasil</div>
                    <div style={styles.period}>
                      <FaCalendarAlt style={{ fontSize: getResponsiveFontSize(0.65, 0.9), opacity: 0.7 }} />
                      fev 2014 - jan 2023 (9 anos)
                    </div>
                  </div>
                </div>
              </div>

              {/* Coluna Direita - Formação & Resumo */}
              <div style={styles.rightColumn}>

                {/* Formação */}
                <div>
                  <div style={styles.sectionHeader}>
                    <FaGraduationCap style={{ ...styles.icon, color: '#10b981' }} />
                    <h4 style={styles.sectionTitleInCard}>
                      Formação Acadêmica
                    </h4>
                  </div>

                  <div style={styles.experienceList}>
                    <div
                      style={styles.experienceItem}
                      onMouseEnter={(e) => {
                        if (!isTouchDevice) {
                          Object.assign(e.currentTarget.style, getEducationItemHoverStyles());
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (!isTouchDevice) {
                          Object.assign(e.currentTarget.style, getEducationItemLeaveStyles());
                        }
                      }}
                    >
                      <div style={styles.jobTitle}>Tecnologia da Informação/Sistemas da Informação</div>
                      <div style={styles.company}>Estácio • Pernambuco, Brasil</div>
                      <div style={styles.period}>
                        <FaCalendarAlt style={{ fontSize: getResponsiveFontSize(0.65, 0.9), opacity: 0.7 }} />
                        abr 2021 - dez 2023
                      </div>
                    </div>

                    <div
                      style={styles.experienceItem}
                      onMouseEnter={(e) => {
                        if (!isTouchDevice) {
                          Object.assign(e.currentTarget.style, getEducationItemHoverStyles());
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (!isTouchDevice) {
                          Object.assign(e.currentTarget.style, getEducationItemLeaveStyles());
                        }
                      }}
                    >
                      <div style={styles.jobTitle}>Tecnologia da Informação/Sistemas da Informação</div>
                      <div style={styles.company}>SENAI Pernambuco • Pernambuco, Brasil</div>
                      <div style={styles.period}>
                        <FaCalendarAlt style={{ fontSize: getResponsiveFontSize(0.65, 0.9), opacity: 0.7 }} />
                        fev 2012 - dez 2014
                      </div>
                    </div>
                  </div>
                </div>

                {/* Resumo */}
                <div style={styles.summaryBox}>
                  <div style={styles.sectionHeader}>
                    <FaTrophy style={{ ...styles.icon, color: '#f59e0b' }} />
                    <h4 style={styles.sectionTitleInCard}>
                      Resumo
                    </h4>
                  </div>

                  <p style={styles.summaryText}>
                    Especialista em Automação Industrial e Desenvolvedor Full-Stack com 10+ anos de experiência em projetos industriais complexos. Atuação consolidada em grandes cervejarias como AB InBev, Sagres e Font Salem.
                  </p>

                  <div style={styles.statsRow}>
                    <div style={styles.statItem}>
                      <span style={styles.statNumber}>10+</span>
                      <span style={styles.statLabel}>Anos</span>
                    </div>
                    <div style={styles.statItem}>
                      <span style={styles.statNumber}>5</span>
                      <span style={styles.statLabel}>Empresas</span>
                    </div>
                    <div style={styles.statItem}>
                      <span style={styles.statNumber}>2</span>
                      <span style={styles.statLabel}>Países</span>
                    </div>
                  </div>
                </div>

              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Experiencia;