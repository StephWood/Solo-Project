import React from 'react';

const RestaurantCard = (info) => {
  const { name, city } = info;

  return (
    <article className="charCard">
      <div>
        <h2 className="restaurantName">{name}</h2>
        <p className="cityName">{city}</p>
      </div>
    </article>
  );
};

export default RestaurantCard;
