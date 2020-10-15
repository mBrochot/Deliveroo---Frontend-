import React from "react";

const Restaurants = ({ data }) => {
  return (
    <div className="restaurant">
      <div className="restaurantInfo">
        <div>
          <h1>{data.restaurant.name}</h1>
          <p>{data.restaurant.description}</p>
        </div>
        <img src={data.restaurant.picture} alt="restaurant" />
      </div>
    </div>
  );
};

export default Restaurants;
