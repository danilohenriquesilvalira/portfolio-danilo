import { CSSProperties, useEffect, useState } from 'react';

const TechExpertise = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Carrega a fonte Montserrat
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, []);

  // Array com todas as tecnologias reorganizado para melhor distribuição
  const technologies = [
    { name: "TIA Portal", src: "/portfolio-danilo/techExpertise/Tia_portal.svg", color: "#0066cc" },
    { name: "Rockwell", src: "/portfolio-danilo/techExpertise/Rockewell.svg", color: "#ff6b35" },
    { name: "CODESYS", src: "/portfolio-danilo/techExpertise/codasystem.svg", color: "#00a86b" },
    { name: "React", src: "/portfolio-danilo/techExpertise/react.svg", color: "#61dafb" },
    { name: "TypeScript", src: "/portfolio-danilo/techExpertise/typescript.svg", color: "#3178c6" },
    { name: "JavaScript", src: "/portfolio-danilo/techExpertise/javascript.svg", color: "#f7df1e" },
    { name: "Python", src: "/portfolio-danilo/techExpertise/python.svg", color: "#3776ab" },
    { name: "Figma", src: "/portfolio-danilo/techExpertise/Figma.svg", color: "#f24e1e" },
    { name: "PostgreSQL", src: "/portfolio-danilo/techExpertise/postgresql.svg", color: "#336791" },
    { name: "MySQL", src: "/portfolio-danilo/techExpertise/Mysql.svg", color: "#4479a1" },
    { name: "Go", src: "/portfolio-danilo/techExpertise/go.svg", color: "#00add8" },
    { name: "Node-RED", src: "/portfolio-danilo/techExpertise/node-red.svg", color: "#8f0000" },
    { name: "VS Code", src: "/portfolio-danilo/techExpertise/vsclde.svg", color: "#007acc" },
    { name: "GitHub", src: "/portfolio-danilo/techExpertise/github.svg", color: "#ffffff" }
  ];

  const styles: { [key: string]: CSSProperties } = {
    section: {
      backgroundColor: '#191919',
      padding: '4rem 0',
      fontFamily: "'Poppins', sans-serif"
    },
    container: {
      maxWidth: '1400px',
      margin: '0 auto',
      padding: '0 2rem'
    },
    header: {
      textAlign: 'center' as const,
      marginBottom: '4rem'
    },
    title: {
      fontSize: '3rem',
      fontWeight: '700',
      background: 'linear-gradient(135deg, #ffffff 0%, #e5e5e5 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
      margin: '0 0 1rem 0',
      letterSpacing: '-0.03em',
      textShadow: '0 4px 20px rgba(255,255,255,0.1)'
    },
    subtitle: {
      fontSize: '1.1rem',
      color: '#9ca3af',
      margin: 0,
      fontWeight: '400',
      letterSpacing: '0.5px'
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(7, 1fr)',
      gap: '3rem 2rem',
      justifyItems: 'center',
      alignItems: 'start'
    },
    techItem: {
      display: 'flex',
      flexDirection: 'column' as const,
      justifyContent: 'center',
      alignItems: 'center',
      transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
      gap: '1.2rem',
      cursor: 'pointer',
      position: 'relative'
    },
    techItemHover: {
      transform: 'translateY(-10px) scale(1.05)'
    },
    techIcon: {
      width: '70px',
      height: '70px',
      transition: 'all 0.4s ease',
      objectFit: 'contain' as const,
      filter: 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.2))',
      zIndex: 2
    },
    techIconHover: {
      transform: 'scale(1.1)',
      filter: 'drop-shadow(0 8px 16px rgba(0, 0, 0, 0.3)) brightness(1.1)'
    },
    techName: {
      fontFamily: "'Montserrat', 'Inter', 'Segoe UI', sans-serif",
      fontWeight: '600',
      fontSize: '0.9rem',
      color: '#ffffff',
      textAlign: 'center' as const,
      margin: 0,
      lineHeight: '1.3',
      letterSpacing: '0.5px',
      transition: 'all 0.3s ease',
      zIndex: 2
    },
    glowEffect: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      width: '120%',
      height: '120%',
      borderRadius: '50%',
      transform: 'translate(-50%, -50%)',
      opacity: 0,
      transition: 'opacity 0.4s ease',
      zIndex: 1,
      pointerEvents: 'none'
    }
  };

  // Responsividade melhorada
  const getGridColumns = () => {
    if (typeof window !== 'undefined') {
      const width = window.innerWidth;
      if (width <= 480) return 'repeat(2, 1fr)';
      if (width <= 768) return 'repeat(3, 1fr)';
      if (width <= 1024) return 'repeat(4, 1fr)';
      if (width <= 1200) return 'repeat(5, 1fr)';
      if (width <= 1440) return 'repeat(6, 1fr)';
    }
    return 'repeat(7, 1fr)';
  };

  const getIconSize = () => {
    if (typeof window !== 'undefined') {
      const width = window.innerWidth;
      if (width <= 480) return { width: '50px', height: '50px' };
      if (width <= 768) return { width: '60px', height: '60px' };
      if (width <= 1024) return { width: '70px', height: '70px' };
      if (width <= 1440) return { width: '80px', height: '80px' };
      if (width <= 1920) return { width: '90px', height: '90px' };
      if (width <= 2560) return { width: '110px', height: '110px' }; // 2K
      if (width <= 3840) return { width: '130px', height: '130px' }; // 4K
      return { width: '150px', height: '150px' }; // 5K+
    }
    return { width: '70px', height: '70px' };
  };

  const getGap = () => {
    if (typeof window !== 'undefined') {
      const width = window.innerWidth;
      if (width <= 480) return '2rem 1rem';
      if (width <= 768) return '2.5rem 1.5rem';
      if (width <= 1440) return '3rem 2rem';
      if (width <= 1920) return '3.5rem 2.5rem';  // Full HD
      if (width <= 2560) return '4rem 3rem';      // 2K
      if (width <= 3840) return '4.5rem 3.5rem';  // 4K
      return '5rem 4rem';                          // 5K+
    }
    return '3rem 2rem';
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
          gridTemplateColumns: getGridColumns(),
          gap: getGap()
        }}>
          {technologies.map((tech, index) => (
            <div
              key={index}
              style={{
                ...styles.techItem,
                ...(hoveredIndex === index ? styles.techItemHover : {})
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Efeito de brilho */}
              <div
                style={{
                  ...styles.glowEffect,
                  background: `radial-gradient(circle, ${tech.color}40 0%, ${tech.color}20 30%, transparent 70%)`,
                  opacity: hoveredIndex === index ? 0.6 : 0
                }}
              ></div>

              <img
                src={tech.src}
                alt={tech.name}
                style={{
                  ...styles.techIcon,
                  ...getIconSize(),
                  ...(hoveredIndex === index ? styles.techIconHover : {})
                }}
              />
              <p style={{
                ...styles.techName,
                color: hoveredIndex === index ? tech.color : '#ffffff'
              }}>
                {tech.name}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TechExpertise;