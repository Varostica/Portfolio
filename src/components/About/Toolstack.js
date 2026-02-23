import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiGit, DiLinux } from "react-icons/di";
import { FaFigma } from "react-icons/fa";
import {
  SiVisualstudiocode,
  SiPostman,
  SiLatex,
  SiWindows,
  SiVisualstudio,
  SiAzuredevops,
  SiMicrosoftoffice,
  SiPowerbi,
  SiMicrosoftazure,
  SiCanva,
  SiAzurefunctions,
  SiAnaconda,
  SiGooglecolab,
} from "react-icons/si";
import { TbNotebook } from "react-icons/tb";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiWindows />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiLinux />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudio />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAzuredevops />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiLatex/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMicrosoftoffice/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMicrosoftazure/>
      </Col>
      
      <Col xs={4} md={2} className="tech-icons">
        <SiAzurefunctions />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCanva />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaFigma />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <TbNotebook />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAnaconda />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGooglecolab />
      </Col>
    </Row>
  );
}

export default Toolstack;
