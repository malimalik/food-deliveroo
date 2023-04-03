import React from "react";
const MealItemForm = (props) => {
  const { onSubmit } = props;
  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="quantity" className="quantity-label">
        Amount
      </label>
      <input type="number" id="quantity" min="0" />
      <div>
        <button>Add+</button>
      </div>
    </form>
  );
};

export default MealItemForm;
