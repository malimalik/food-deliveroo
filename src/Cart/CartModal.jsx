import classes from "./CartModal.module.css";
import { Fragment } from "react";
import ReactDOM  from "react-dom";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.dismiss}></div>;
};

const ModalOverlay = (props) => {
  return <div className={classes.modal}>{props.children}</div>;
};


const portalElement = document.getElementById('overlays');

const CartModal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop dismiss={props.dismiss} />, portalElement)}
      {ReactDOM.createPortal(<ModalOverlay>
        {props.children}
      </ModalOverlay>, portalElement
      )}
    </Fragment>
  );
};

export default CartModal;
