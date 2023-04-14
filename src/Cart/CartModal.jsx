import classes from "./CartModal.module.css";
import { Fragment } from "react";
import { ReactDOM } from "react";

const Backdrop = (props) => {
  return <div className={classes.backdrop}></div>;
};

const ModalOverlay = (props) => {
  return <div className={classes.content}>{props.children}</div>;
};


const portalElement = document.getElementById('overlays');

const CartModal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop />, portalElement)}
      {ReactDOM.createPortal(<ModalOverlay>
        {props.children}
      </ModalOverlay>, portalElement
      )}
    </Fragment>
  );
};

export default CartModal;
