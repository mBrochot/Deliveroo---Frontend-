import React from "react";

const Increment = ({ index, ordered, setOrdered }) => {
  return (
    <div className="btnBox">
      <button
        className="incrementBtn"
        onClick={() => {
          const newOrdered = [...ordered];
          newOrdered[index].quantity++;
          setOrdered(newOrdered);
        }}
      >
        +
      </button>
    </div>
  );
};

export default Increment;
//
