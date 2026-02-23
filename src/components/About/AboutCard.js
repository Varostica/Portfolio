import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hola, mi nombre es <span className="purple">Valentina Aróstica</span>,
            pero mis amigos me dice <span className="purple">Varo, Varóstica o Varito</span>.
             Soy de <span className="purple"> Santiago de Chile.</span>
            <br />
            Actualmente trabajo como desarrolladora de Software Full-Satck en Softland.
            <br />
            <br />
            Además de desarrollar código, realizo varias actividades en mi tiempo libre:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Pintar cuadros con acrílico. 🎨🖌
            </li>
            <li className="about-activity">
              <ImPointRight /> Aprender idiomas. 💬🌎
            </li>
            <li className="about-activity">
              <ImPointRight /> Cocinar. 🍰🥗
            </li>
            <li className="about-activity">
              <ImPointRight /> Entrenar y practicar deportes. 💪🎾🏐
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Me inspira resolver problemas y crear cosas que dejen huella, con la mente en la tecnología y el corazón en las personas."{" "}
          </p>
          <footer className="blockquote-footer">Varostica</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
