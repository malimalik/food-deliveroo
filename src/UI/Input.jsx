import classes from "./Input.module.css";
const Input = (props) => {
const {label} = props;
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{label}</label>
      <input id={props.input.id} {...props.input} />
    </div>
  );
};

export default Input;
