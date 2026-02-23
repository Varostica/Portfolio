import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
//import Particle from "../Particle";
import web from "../../Assets/Projects/PaginaWeb.png";
import mindguardian from "../../Assets/Projects/MindGuardian.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          Mis <strong className="purple">proyectos </strong>
        </h1>
        <p>
          Aquí hay algunos de los proyectos en los que he trabajado recientemente.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={web}
              isBlog={false}
              title="Mi Página Web"
              description="¡Es esta página web! Una especie de portafolio de mis proyectos personales y un poco sobre mí. Créditos a soumyajit4419, de quién tomé la plantilla React para este desarrollo :)"
              ghLink="https://github.com/Varostica/Portfolio"
              refs="https://github.com/soumyajit4419/Portfolio"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mindguardian}
              isBlog={false}
              title="MindGuardIAn"
              description="Un juego para niños entre 6 a 12 años, el cual recoge patrones y los analiza con inteligencia artificial para detectar patrones de alerta, respaldado por psicologos infantiles, para que puedan ser abordados a tiempo. Desarrollado para la 31° Feria del Software USM."
              web="https://mindguardian.feriasoftware.cl/index.html"
              refs="https://usm.cl/noticias/app-creada-por-sansanos-detecta-problemas-de-salud-mental-en-ninos/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
