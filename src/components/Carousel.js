import React from "react";
import "../Styles/carousel.css"; // Arquivo de estilos

const Carousel = ({ title, items }) => {
  return (
    <div className="carousel-container">
      <h2 className="carousel-title">{title}</h2>
      <div className="carousel-fixed">
        {items.map((item, index) => (
          <div key={index} className="carousel-item">
            <img src={item.image} alt={item.title} className="carousel-image" />
            <div className="carousel-overlay">
              <p>{item.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
