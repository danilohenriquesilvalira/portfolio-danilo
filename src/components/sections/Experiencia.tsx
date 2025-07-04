import { FaBuilding, FaMapMarkerAlt, FaCalendarAlt, FaGraduationCap } from 'react-icons/fa';
import '../../styles/experiencia.css';

const Experiencia = () => {
  // Dados da experiência profissional
  const experienciaProfissional = [
    {
      cargo: "Especialista em Automação Industrial & Desenvolvedor Full-Stack",
      empresa: "R15 Automação Industrial",
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

  return (
    <section className="experiencia-section" id="experiencia">
      <div className="experiencia-wrapper">
        <div className="experiencia-container">
          
          {/* Experiência Profissional */}
          <div className="experiencia-profissional">
            <h2 className="section-title">Experiência Profissional</h2>
            
            <div className="timeline">
              {experienciaProfissional.map((exp, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-content">
                    <div className="job-header">
                      <h3 className="job-title">{exp.cargo}</h3>
                      <span className={`job-type ${exp.tipoColor}`}>
                        {exp.tipo}
                      </span>
                    </div>
                    
                    <div className="job-details">
                      <div className="job-company">
                        <FaBuilding className="company-icon" />
                        <span>{exp.empresa}</span>
                      </div>
                      <div className="job-meta">
                        <div className="job-location">
                          <FaMapMarkerAlt className="location-icon" />
                          <span>{exp.localizacao}</span>
                        </div>
                        <div className="job-period">
                          <FaCalendarAlt className="period-icon" />
                          <span>{exp.periodo}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="timeline-line"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Formação Acadêmica */}
          <div className="formacao-academica">
            <h2 className="section-title">Formação Acadêmica</h2>
            
            <div className="timeline">
              {formacaoAcademica.map((edu, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-content">
                    <div className="job-header">
                      <h3 className="job-title">{edu.curso}</h3>
                      <span className={`job-type ${edu.tipoColor}`}>
                        {edu.tipo}
                      </span>
                    </div>
                    
                    <div className="job-details">
                      <div className="job-company">
                        <FaGraduationCap className="company-icon" />
                        <span>{edu.instituicao}</span>
                      </div>
                      <div className="job-meta">
                        <div className="job-location">
                          <FaMapMarkerAlt className="location-icon" />
                          <span>{edu.localizacao}</span>
                        </div>
                        <div className="job-period">
                          <FaCalendarAlt className="period-icon" />
                          <span>{edu.periodo}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="timeline-line"></div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Experiencia;