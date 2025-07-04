import React from "react";

const Card = (props) => {
  const {
    image,
    name,
    priceRange,
    description,
    rating,
    cuisine,
    location,
    isOpen,
    deliveryTime,
    reviewsCount,
  } = props;
  return (
    <div className="card-container">
      {isOpen && <div className="circle"> Open</div>}
      <img src={image} alt={name} />
      <div className="information">
        <h3>{name}</h3>
        <h5>{description}</h5>
        <div className="info">Cuisine: {cuisine}</div>
        <div className="info">Address: {location}</div>
        <div className="info">Time to deliver: {deliveryTime}</div>
        <div className="info">{`${rating}-star(${reviewsCount}reviews) `}</div>
      </div>
    </div>
  );
};

export default Card;
