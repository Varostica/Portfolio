import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ObraCard from "./ObrasCards";

// Ejemplos: cambia estas imágenes por tus obras reales
import alpaca from "../../Assets/Pinturas/Alpaca.png";
import araucaria from "../../Assets/Pinturas/Araucania.png";
import medusa from "../../Assets/Pinturas/Medusita.png";
import totoro from "../../Assets/Pinturas/Totoro.png";
import retrato from "../../Assets/Pinturas/VaroRetrato.png";
import xekelo from "../../Assets/Pinturas/Xekelou.png";

function Obras() {
  // Define tus obras acá (es más cómodo que repetir <Col> a mano)
  const obras = [
    {
      title: "No drama llama",
      imgPath: alpaca,
      format: "vertical",
      col: { xs: 10, md: 5, lg: 6 },
    },
    {
      title: "Medusa",
      imgPath: medusa,
      format: "square",
      col: { xs: 10, md: 6, lg: 6 },
    },
    {
      title: "Araucanía",
      subtitle: "Hecho con amor para Naty Green",
      imgPath: araucaria,
      format: "vertical",
      col: { xs: 12, md: 4, lg: 4 },
    },
    {
      title: "Totoro",
      subtitle: "Hecho con amor para Diego",
      imgPath: totoro,
      format: "vertical",
      col: { xs: 12, md: 4, lg: 6 },
    },
    {
      title: "Varostica",
      subtitle: "Autoretrato cubista con influencia de la cultura pop",
      imgPath: retrato,
      format: "vertical",
      col: { xs: 12, md: 6, lg: 6 },
    },
    {
      title: "Xekelou",
      subtitle: "Retrato cubista con influencia de la cultura pop",
      imgPath: xekelo,
      format: "vertical",
      col: { xs: 8, md: 4, lg: 4 },
    },
  ];

  return (
    <Container fluid className="gallery-section">
      <Container>
        <h1 className="gallery-heading">
          Mi Galería de <strong className="purple">Arte</strong>
        </h1>

        <p className="gallery-subtitle">
          Aquí pueden ver algunas de las pinturas en acrílico que he hecho en mi tiempo libre.
        </p>

        {/* g-4 = separación bonita entre cards */}
        <Row className="g-4" style={{ justifyContent: "center" }}>
          {obras.map((obra, idx) => (
            <Col key={idx} {...obra.col}>
              <ObraCard
                imgPath={obra.imgPath}
                title={obra.title}
                subtitle={obra.subtitle}
                format={obra.format}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Obras;