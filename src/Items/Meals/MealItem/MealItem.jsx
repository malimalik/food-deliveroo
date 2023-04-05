import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
const MealItem = (props) => {
  const { name, description, price: p, id } = props;
  const price = `$${p.toFixed(2)}`;
  return (
    <li className={classes.meal}>
      <div>
        <h3>{name}</h3>
        <div className={classes.description}>{description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealItemForm onSubmit={() => {}} id={id} />
      </div>
    </li>
  );
};

export default MealItem;
