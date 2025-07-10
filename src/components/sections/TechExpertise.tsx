import { CSSProperties } from 'react';

const TechExpertise = () => {
  // Array com todas as tecnologias
  const technologies = [
    { name: "TIA Portal", src: "/portfolio-danilo/techExpertise/Tia_portal.svg" },
    { name: "Rockwell", src: "/portfolio-danilo/techExpertise/Rockewell.svg" },
    { name: "CODESYS", src: "/portfolio-danilo/techExpertise/codasystem.svg" },
    { name: "React", src: "/portfolio-danilo/techExpertise/react.svg" },
    { name: "TypeScript", src: "/portfolio-danilo/techExpertise/typescript.svg" },
    { name: "JavaScript", src: "/portfolio-danilo/techExpertise/javascript.svg" },
    { name: "Python", src: "/portfolio-danilo/techExpertise/python.svg" },
    { name: "PostgreSQL", src: "/portfolio-danilo/techExpertise/postgresql.svg" },
    { name: "Go", src: "/portfolio-danilo/techExpertise/go.svg" },
    { name: "Node-RED", src: "/portfolio-danilo/techExpertise/node-red.svg" },
    { name: "VS Code", src: "/portfolio-danilo/techExpertise/vsclde.svg" },
    { name: "GitHub", src: "/portfolio-danilo/techExpertise/github.svg" }
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
      padding: '0 1.5rem'
    },
    header: {
      textAlign: 'center' as const,
      marginBottom: '2.5rem'
    },
    title: {
      fontSize: '2.2rem',
      fontWeight: '700',
      color: '#ffffff',
      margin: '0 0 0.8rem 0',
      letterSpacing: '-0.02em',
      textShadow: '0 2px 4px rgba(0,0,0,0.3)'
    },
    description: {
      fontSize: '0.9rem',
      color: '#9ca3af',
      margin: 0,
      fontWeight: '400'
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(6, 1fr)',
      gap: '3rem 2rem',
      justifyItems: 'center',
      alignItems: 'center'
    },
    techItem: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      transition: 'transform 0.3s ease'
    },
    techIcon: {
      width: '80px',
      height: '80px',
      transition: 'all 0.3s ease',
      objectFit: 'contain' as const,
      cursor: 'pointer'
    }
  };

  // Responsividade simples
  const getGridColumns = () => {
    if (typeof window !== 'undefined') {
      const width = window.innerWidth;
      if (width <= 768) return 'repeat(4, 1fr)';
      if (width <= 480) return 'repeat(3, 1fr)';
    }
    return 'repeat(6, 1fr)';
  };

  const getIconSize = () => {
    if (typeof window !== 'undefined') {
      const width = window.innerWidth;
      if (width <= 768) return { width: '70px', height: '70px' };
      if (width <= 480) return { width: '60px', height: '60px' };
    }
    return { width: '80px', height: '80px' };
  };

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        
        {/* Header */}
        <div style={styles.header}>
          <h2 style={styles.title}>
            Tech Stack
          </h2>
        </div>

        {/* Grid de Tecnologias */}
        <div style={{
          ...styles.grid,
          gridTemplateColumns: getGridColumns()
        }}>
          {technologies.map((tech, index) => (
            <div 
              key={index} 
              style={styles.techItem}
            >
              <img
                src={tech.src}
                alt={tech.name}
                style={{
                  ...styles.techIcon,
                  ...getIconSize()
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.15)';
                  e.currentTarget.style.filter = 'brightness(1.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                  e.currentTarget.style.filter = 'brightness(1)';
                }}
              />
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default TechExpertise;