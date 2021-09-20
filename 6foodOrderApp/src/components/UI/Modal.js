import React from 'react';
import ReactDOM from 'react-dom';
import classes from './Modal.module.css';

const Backdrop = (props) => {

  return <div className={classes.backdrop} onClick={props.onClose}></div>
}

const ModalOverLay = props => {
  return <div className={classes.modal}>
    <div className={classes.content}>
      {props.children}
    </div>
  </div>
}

const portalElement = document.querySelector('#overlays');

const Modal = (props) => {

  console.log(props);
  return <React.Fragment>
    {ReactDOM.createPortal(<Backdrop onClose={props.onClose} />, portalElement)}
    {ReactDOM.createPortal(
      <ModalOverLay>{props.children}</ModalOverLay>,
      portalElement
    )}
  </React.Fragment>
}

export default Modal;