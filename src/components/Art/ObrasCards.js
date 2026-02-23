import React from "react";
import Card from "react-bootstrap/Card";

/**
 * ObraCard
 * Card visual para galería:
 * - Sin botones
 * - Imagen ocupa casi todo (full-bleed)
 * - Título + bajada opcional sobre la imagen
 *
 * Props:
 * - imgPath: string
 * - title: string
 * - subtitle?: string
 * - format?: "horizontal" | "vertical" | "square"
 */
function ObraCard({ imgPath, title, subtitle, format = "vertical" }) {
  return (
    <Card className={`obra-card obra-card--${format}`}>
      <div className="obra-media">
        <img className="obra-img" src={imgPath} alt={title || "Obra"} loading="lazy" />

        {(title || subtitle) && (
          <div className="obra-overlay">
            {title && <div className="obra-title">{title}</div>}
            {subtitle && <div className="obra-subtitle">{subtitle}</div>}
          </div>
        )}
      </div>
    </Card>
  );
}

export default ObraCard;