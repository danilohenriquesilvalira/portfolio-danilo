import { FaBuilding, FaMapMarkerAlt, FaCalendarAlt, FaGraduationCap, FaClock, FaBriefcase } from 'react-icons/fa';
import { CSSProperties } from 'react';

const Experiencia = () => {
  // Dados da experiência profissional
  const experienciaProfissional = [
    {
      cargo: "Especialista em Automação Industrial & Desenvolvedor Full-Stack",
      empresa: "RLS Automação Industrial",
      localizacao: "Lisboa, Portugal",
      periodo: "jun de 2024 - o momento ( 1 ano )",
      tipo: "Full Time",
      tipoColor: "green"
    },
    {
      cargo: "Técnico de Manutenção Elétrica & Automação Industrial",
      empresa: "Central de Cervejas (Sagres)",
      localizacao: "Vialonga, Portugal",
      periodo: "dez de 2023 - jun de 2024 (7 meses)",
      tipo: "Full Time",
      tipoColor: "green"
    },
    {
      cargo: "Técnico de Automação Industrial",
      empresa: "Font Salem (Grupo Damm)",
      localizacao: "Santarém, Portugal",
      periodo: "jul de 2023 - dez de 2023 (6 meses)",
      tipo: "Full Time",
      tipoColor: "green"
    },
    {
      cargo: "Especialista em Automação de Sistemas Cervejeiros",
      empresa: "Tecnale Automação de Sistemas",
      localizacao: "São Paulo, Brasil",
      periodo: "fev de 2023 - mar de 2023 (2 meses)",
      tipo: "Temporary",
      tipoColor: "yellow"
    },
    {
      cargo: "Técnico de Automação Sênior & Desenvolvedor Full-Stack",
      empresa: "AB InBev",
      localizacao: "Pernambuco, Brasil",
      periodo: "fev de 2014 - jan de 2023 (9 anos)",
      tipo: "Full Time",
      tipoColor: "green"
    }
  ];

  // Dados da formação acadêmica
  const formacaoAcademica = [
    {
      curso: "Tecnologia da Informação/Sistemas da Informação",
      instituicao: "Estácio",
      localizacao: "Pernambuco, Brasil",
      periodo: "abr de 2021 - dez de 2023",
      tipo: "Full Time",
      tipoColor: "green"
    },
    {
      curso: "Tecnologia da Informação/Sistemas da Informação",
      instituicao: "SENAI Pernambuco",
      localizacao: "Pernambuco, Brasil",
      periodo: "fev de 2012 - dez de 2014",
      tipo: "Full Time",
      tipoColor: "green"
    }
  ];

  const styles: { [key: string]: CSSProperties } = {
    section: {
      backgroundColor: '#191919',
      padding: '2rem 0',
      fontFamily: "'Poppins', sans-serif"
    },
    container: {
      maxWidth: '1000px',
      margin: '0 auto',
      padding: '0 1rem'
    },
    title: {
      fontSize: '1.8rem',
      fontWeight: 'bold',
      color: 'white',
      textAlign: 'center' as const,
      marginBottom: '1.5rem'
    },
    timelineItem: {
      padding: '0.7rem 0',
      borderBottom: '1px solid #d1d5db',
      transition: 'transform 0.2s ease'
    },
    jobHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      gap: '1rem',
      marginBottom: '0.4rem'
    },
    jobTitle: {
      fontSize: '0.95rem',
      fontWeight: '600',
      color: 'white',
      margin: 0,
      lineHeight: '1.3',
      flex: 1
    },
    badge: {
      fontSize: '0.65rem',
      fontWeight: '600',
      padding: '0.4rem 0.8rem',
      borderRadius: '20px',
      textTransform: 'uppercase' as const,
      letterSpacing: '0.08em',
      position: 'relative' as const,
      transition: 'all 0.3s ease',
      cursor: 'default',
      backdropFilter: 'blur(10px)',
      boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    badgeGreen: {
      background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.25) 0%, rgba(5, 150, 105, 0.35) 100%)',
      color: '#10b981',
      border: '1px solid rgba(16, 185, 129, 0.4)',
      textShadow: '0 1px 2px rgba(0,0,0,0.3)'
    },
    badgeYellow: {
      background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.25) 0%, rgba(217, 119, 6, 0.35) 100%)',
      color: '#f59e0b',
      border: '1px solid rgba(245, 158, 11, 0.4)',
      textShadow: '0 1px 2px rgba(0,0,0,0.3)'
    },
    company: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.4rem',
      fontSize: '0.85rem',
      fontWeight: '500',
      color: '#e5e7eb',
      marginBottom: '0.3rem'
    },
    meta: {
      display: 'flex',
      gap: '1.2rem',
      fontSize: '0.75rem',
      color: '#9ca3af'
    },
    metaItem: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.3rem'
    },
    icon: {
      fontSize: '0.7rem'
    },
    separator: {
      borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
      paddingBottom: '1.5rem',
      marginBottom: '2rem'
    }
  };

  return (
    <section style={styles.section} id="experiencia">
      <div style={styles.container}>
        
        {/* Experiência Profissional */}
        <div style={styles.separator}>
          <h2 style={styles.title}>Experiência Profissional</h2>
          
          <div>
            {experienciaProfissional.map((exp, index) => (
              <div key={index} style={styles.timelineItem}>
                <div style={styles.jobHeader}>
                  <h3 style={styles.jobTitle}>{exp.cargo}</h3>
                  <span 
                    style={{
                      ...styles.badge,
                      ...(exp.tipoColor === 'green' ? styles.badgeGreen : styles.badgeYellow)
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-1px) scale(1.05)';
                      e.currentTarget.style.boxShadow = exp.tipoColor === 'green' 
                        ? '0 4px 15px rgba(16, 185, 129, 0.4)' 
                        : '0 4px 15px rgba(245, 158, 11, 0.4)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0) scale(1)';
                      e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.15)';
                    }}
                  >
                    {exp.tipoColor === 'green' ? (
                      <>
                        <FaBriefcase style={{ fontSize: '0.5rem', marginRight: '0.3rem' }} />
                        {exp.tipo}
                      </>
                    ) : (
                      <>
                        <FaClock style={{ fontSize: '0.5rem', marginRight: '0.3rem' }} />
                        {exp.tipo}
                      </>
                    )}
                  </span>
                </div>
                
                <div style={styles.company}>
                  <FaBuilding style={{...styles.icon, color: '#d1d5db'}} />
                  <span>{exp.empresa}</span>
                </div>
                
                <div style={styles.meta}>
                  <div style={styles.metaItem}>
                    <FaMapMarkerAlt style={{...styles.icon, color: '#6b7280'}} />
                    <span>{exp.localizacao}</span>
                  </div>
                  <div style={styles.metaItem}>
                    <FaCalendarAlt style={{...styles.icon, color: '#6b7280'}} />
                    <span>{exp.periodo}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Formação Acadêmica */}
        <div>
          <h2 style={styles.title}>Formação Acadêmica</h2>
          
          <div>
            {formacaoAcademica.map((edu, index) => (
              <div key={index} style={styles.timelineItem}>
                <div style={styles.jobHeader}>
                  <h3 style={styles.jobTitle}>{edu.curso}</h3>
                  <span 
                    style={{
                      ...styles.badge,
                      ...(edu.tipoColor === 'green' ? styles.badgeGreen : styles.badgeYellow)
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-1px) scale(1.05)';
                      e.currentTarget.style.boxShadow = edu.tipoColor === 'green' 
                        ? '0 4px 15px rgba(16, 185, 129, 0.4)' 
                        : '0 4px 15px rgba(245, 158, 11, 0.4)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0) scale(1)';
                      e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.15)';
                    }}
                  >
                    {edu.tipoColor === 'green' ? (
                      <>
                        <FaBriefcase style={{ fontSize: '0.5rem', marginRight: '0.3rem' }} />
                        {edu.tipo}
                      </>
                    ) : (
                      <>
                        <FaClock style={{ fontSize: '0.5rem', marginRight: '0.3rem' }} />
                        {edu.tipo}
                      </>
                    )}
                  </span>
                </div>
                
                <div style={styles.company}>
                  <FaGraduationCap style={{...styles.icon, color: '#d1d5db'}} />
                  <span>{edu.instituicao}</span>
                </div>
                
                <div style={styles.meta}>
                  <div style={styles.metaItem}>
                    <FaMapMarkerAlt style={{...styles.icon, color: '#6b7280'}} />
                    <span>{edu.localizacao}</span>
                  </div>
                  <div style={styles.metaItem}>
                    <FaCalendarAlt style={{...styles.icon, color: '#6b7280'}} />
                    <span>{edu.periodo}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Experiencia;