import React from "react";
import "./Card.css";

const Card = ({
  title,
  subtitle,
  children,
  image,
  bordered = true,
  onClick,
  className = "",
}) => {
  return (
    <div
      className={`card ${bordered ? "bordered" : ""} ${
        onClick ? "clickable" : ""
      } ${className}`}
      onClick={onClick}
    >
      {image && <img src={image} alt={title} className="card-img" />}
      <div className="card-content">
        {title && <h3 className="card-title">{title}</h3>}
        {subtitle && <p className="card-subtitle">{subtitle}</p>}
        <div className="card-body">{children}</div>
      </div>
    </div>
  );
};

export default Card;
