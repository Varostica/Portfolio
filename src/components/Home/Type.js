import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Ingeniera Civil Informática",
          "Desarrolladora de Software",
          "Desarrolladora FullStack",
          "Artista, curiosa y creativa",
          "Entusiasta UX"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
