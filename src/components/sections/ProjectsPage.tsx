import '../../styles/projetos.css';

const ProjectsPage = () => {
  return (
    <section className="projetos-section">
      <div className="projetos-wrapper">
        <div className="projetos-container">
          {/* Header centralizado */}
          <div className="projetos-header">
            <h2 className="projetos-title">
              Projetos
            </h2>
            
            <p className="projetos-description">
              Projetos desenvolvidos
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsPage;