import React from "react";
import Card from "./Card";
import PropTypes from "prop-types";

const Day1 = () => {
  const restaurantMenu = [
    {
      id: 1,
      name: "Spice Symphony",
      image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092",
      priceRange: "$$",
      description: "Traditional Indian flavors with a modern twist.",
      rating: 4.5,
      cuisine: "Indian",
      location: "New York, NY",
      isOpen: true,
      deliveryTime: "30-40 min",
      reviewsCount: 128,
    },
    {
      id: 2,
      name: "La Pasta Bella",
      priceRange: "$$$",
      description: "Authentic handmade pasta and wood-fired pizzas.",
      rating: 4.7,
      cuisine: "Italian",
      location: "Los Angeles, CA",
      isOpen: false,
      deliveryTime: "45-55 min",
      reviewsCount: 98,
    },
    {
      id: 3,
      name: "Sushi Zen",
      priceRange: "$$$",
      description: "Fresh sushi and sashimi from master chefs.",
      rating: 4.9,
      cuisine: "Japanese",
      location: "San Francisco, CA",
      isOpen: true,
      deliveryTime: "20-30 min",
      reviewsCount: 203,
    },
    {
      id: 4,
      name: "Burger Barn",
      image: "https://images.unsplash.com/photo-1550547660-d9450f859349",
      priceRange: "$",
      description: "Juicy burgers, crispy fries and cold shakes.",
      rating: 4.2,
      cuisine: "American",
      location: "Austin, TX",
      isOpen: true,
      deliveryTime: "25-35 min",
      reviewsCount: 342,
    },
    {
      id: 5,
      name: "Taco Loco",
      priceRange: "$$",
      description: "Bold and spicy street-style tacos.",
      rating: 4.4,
      cuisine: "Mexican",
      location: "San Diego, CA",
      isOpen: false,
      deliveryTime: "30-40 min",
      reviewsCount: 215,
    },
    {
      id: 6,
      name: "Green Garden",
      priceRange: "$$",
      description: "Delicious and creative vegan meals.",
      rating: 4.6,
      cuisine: "Vegan",
      location: "Portland, OR",
      isOpen: true,
      deliveryTime: "20-30 min",
      reviewsCount: 180,
    },
    {
      id: 7,
      name: "Dragon Wok",
      priceRange: "$",
      description: "Classic Chinese dishes made to order.",
      rating: 4.3,
      cuisine: "Chinese",
      location: "Seattle, WA",
      isOpen: true,
      deliveryTime: "25-35 min",
      reviewsCount: 147,
    },
    {
      id: 8,
      name: "The Kebab House",
      priceRange: "$$",
      description: "Succulent kebabs and fluffy rice platters.",
      rating: 4.5,
      cuisine: "Middle Eastern",
      location: "Chicago, IL",
      isOpen: false,
      deliveryTime: "30-45 min",
      reviewsCount: 189,
    },
    {
      id: 9,
      name: "The French Table",
      image: "https://images.unsplash.com/photo-1553621042-f6e147245754",
      priceRange: "$$$$",
      description: "Elegant French dining experience.",
      rating: 4.8,
      cuisine: "French",
      location: "Boston, MA",
      isOpen: true,
      deliveryTime: "45-60 min",
      reviewsCount: 76,
    },
    {
      id: 10,
      name: "Waffle & Brew",
      image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092",
      priceRange: "$",
      description: "Breakfast favorites served all day.",
      rating: 4.1,
      cuisine: "Cafe",
      location: "Denver, CO",
      isOpen: true,
      deliveryTime: "15-25 min",
      reviewsCount: 234,
    },
  ];

  return (
    <div className="container">
      <h2> Topic - Build a Profile Card (Props, defaultProps, PropTypes) </h2>
      <div className="restaurant-menu">
        <div className="title">Annapurna Restaurant</div>
        <div className="card-section">
          {restaurantMenu?.map((item) => (
            <Card
              key={item?.id}
              name={item?.name}
              image={item?.image}
              priceRange={item?.priceRange}
              description={item?.description}
              rating={item?.rating}
              cuisine={item?.cuisine}
              location={item?.location}
              isOpen={item?.isOpen}
              deliveryTime={item?.deliveryTime}
              reviewsCount={item?.reviewsCount}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

Card.prototype = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string,
  priceRange: PropTypes.string,
  description: PropTypes.string,
  rating: PropTypes.string,
  cuisine: PropTypes.string,
  location: PropTypes.string,
  isOpen: PropTypes.bool,
  deliveryTime: PropTypes.string,
  reviewsCount: PropTypes.string,
};
Card.defaultProps = {
  image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092",
  rating: "4.5",
};

export default Day1;
