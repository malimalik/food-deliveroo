import classes from "./CartCheckout.module.css";

const CartCheckout = (props) => {
  return (
    <form onSubmit={props.handleSubmit} className={classes.form}>
      <div className={classes.form}>
        <label htmlFor="first-name">First name</label>
        <input
          type="text"
          id="name"
          name="first-name"
          required
          onChange={props.handleChange}
        />
      </div>
      <div>
        <label htmlFor="last-name">Last name</label>
        <input
          type="text"
          id="last-name"
          name="last-name"
          required
          onChange={props.handleChange}
        />
      </div>
      <div>
        <label htmlFor="address">Address</label>
        <input
          type="text"
          id="address"
          name="address"
          required
          onChange={props.handleChange}
        />
      </div>

      <div>
        <button type="submit">Confirm</button>
        <button type="button" onClick={props.onCancel}>Cancel</button>
      </div>
    </form>
  );
};

export default CartCheckout;
