const MealItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;
  return (
    <li>
      <div>
        <h3>{props}</h3>
        <div>{description}</div>
        <div>{price}</div>
      </div>
      <div></div>
    </li>
  );
};

export default MealItem;
