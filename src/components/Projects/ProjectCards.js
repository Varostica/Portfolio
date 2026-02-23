import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import { TbWorld } from "react-icons/tb";


function ProjectCards({
  imgPath,
  title,
  description,
  ghLink,
  demoLink,
  refs,
  web,
  ghLabel = "GitHub",
  demoLabel = "Demo",
  refsLabel = "Referencias",
  webLabel = "Página Web",
}) {
  return (
    <Card className="project-card-view h-100">
      <Card.Img variant="top" src={imgPath} alt={title ? `${title} cover` : "project cover"} />

      {/* Flex column para poder "pegar" botones abajo */}
      <Card.Body className="d-flex flex-column">
        <Card.Title>{title}</Card.Title>

        <Card.Text style={{ textAlign: "justify" }}>
          {description}
        </Card.Text>

        {/* Botones al fondo y centrados */}
        <div
          className="project-card-buttons"
          style={{
            marginTop: "auto",
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "10px",
          }}
        >
          {ghLink && (
            <Button variant="primary" href={ghLink} target="_blank" rel="noreferrer">
              <BsGithub /> &nbsp;{ghLabel}
            </Button>
          )}

          {demoLink && (
            <Button variant="primary" href={demoLink} target="_blank" rel="noreferrer">
              <CgWebsite /> &nbsp;{demoLabel}
            </Button>
          )}

          {web && (
            <Button variant="primary" href={web} target="_blank" rel="noreferrer">
              <TbWorld /> &nbsp;{webLabel}
            </Button>
          )}

          {refs && (
            <Button variant="primary" href={refs} target="_blank" rel="noreferrer">
              <CgWebsite /> &nbsp;{refsLabel}
            </Button>
          )}

        </div>
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;