import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Meal = ({ meal, ordered, setOrdered }) => {
  return (
    <div
      className="mealCard"
      onClick={() => {
        if (ordered.indexOf(meal) === -1) {
          const newOrdered = [...ordered];
          meal.quantity = 1;
          newOrdered.push(meal);
          setOrdered(newOrdered);
        } else {
          const newOrdered = [...ordered];
          meal.quantity++;
          setOrdered(newOrdered);
        }
      }}
    >
      <div className="mealText">
        <h3>{meal.title}</h3>
        {meal.description && <p>{meal.description}</p>}
        <div className="mealPrice">
          <span className="price">{meal.price} €</span>
          {meal.popular && (
            <span className="popularity">
              <FontAwesomeIcon icon="star" /> Populaire
            </span>
          )}
        </div>
      </div>
      {meal.picture && <img src={meal.picture} alt="meal" />}
    </div>
  );
};

export default Meal;
