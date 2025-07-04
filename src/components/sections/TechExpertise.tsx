import '../../styles/techexpertise.css';

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

  return (
    <section className="tech-expertise-section">
      <div className="tech-expertise-wrapper">
        <div className="tech-expertise-container">
          {/* Texto centralizado no topo */}
          <div className="tech-header">
            <h2 className="tech-expertise-title">
              Minha Stack Tecnológica
            </h2>
            
            <p className="tech-expertise-description">
              Tecnologias que venho utilizando ultimamente
            </p>
          </div>

          {/* Grid de Tecnologias - 2 fileiras de 6 */}
          <div className="tech-grid">
            {technologies.map((tech, index) => (
              <div key={index} className="tech-item">
                <img
                  src={tech.src}
                  alt={tech.name}
                  className="tech-icon"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechExpertise;