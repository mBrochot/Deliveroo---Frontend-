import React from "react";

const Decrement = ({ index, ordered, setOrdered }) => {
  return (
    <div className="btnBox">
      <button
        className="decrementBtn"
        onClick={() => {
          if (ordered[index].quantity !== 1) {
            const newOrdered = [...ordered];
            newOrdered[index].quantity--;
            setOrdered(newOrdered);
          } else {
            const newOrdered = [...ordered];
            newOrdered.splice(index, index + 1);
            setOrdered(newOrdered);
          }
        }}
      >
        -
      </button>
    </div>
  );
};

export default Decrement;
