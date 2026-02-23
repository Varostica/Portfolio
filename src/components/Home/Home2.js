import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
  AiOutlineYoutube,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              DEJA QUE ME  <span className="purple"> PRESENTE </span>
            </h1>
            <p className="home-about-body">
              Me apasiona aprender y también la tecnología; me inspira a transformar ideas y sueños en realidad. 💻✨
              <br />
              <br />Disfruto de 
              <i>
                <b className="purple"> trabajar en equipo</b>, <b className="purple"> desarrollar software</b> 
                &nbsp;</i>, y<i> <b className="purple"> sumar creatividad </b>en cada proyecto.
              </i>
              <br />
              <br />
              Fuera de la pantalla me encontrarás  <b className="purple">cocinando</b>, 
              <b className="purple"> pintando </b>con acrílico, <b className="purple">entrenando</b> en el gym, jugando <b className="purple">voleibol</b> o <b className="purple">pádel</b>,
              o explorando nuevas 
              <b className="purple"> experiencias culturales</b> y <b className="purple">sociales</b>.  🌱
            </p>
              <br />            
              <br />
            <h1 style={{ fontSize: "2.6em" }}>
              ¿Qué hay en este <span className="purple"> SITIO WEB</span>?
            </h1>
            <p className="home-about-body">
              Aquí encontrarás más sobre mí, sobre mis proyectos,
              trabajos que he hecho, certificados y reconocimientos, mis obras de arte, 
              mi currículum vitae e incluso podrás contactarme. ¡Disfruta explorando!
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>ENCUÉNTRAME EN</h1>
            <p>
              siénte libre de  <span className="purple">conectar </span>conmigo
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Varostica"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.youtube.com/@varostica"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineYoutube />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/valentina-arostica/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/varostica"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
