import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
import { useContext } from "react";
import CartContext from "../../../store/cart-context";
const MealItem = (props) => {

  const cartCtx = useContext(CartContext);
  const { name, description, price: p, id } = props;
  const price = parseFloat(p.toFixed(2));

  const addToCartHandler = amount => {
    cartCtx.addItem({
      id: id, 
      name: name, 
      amount: amount,
      price: p,
    })
  }

  return (
    <li className={classes.meal}>
      <div>
        <h3>{name}</h3>
        <div className={classes.description}>{description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealItemForm onAddtoCart={addToCartHandler} id={id} />
      </div>
    </li>
  );
};

export default MealItem;
