import React, { useEffect } from 'react';
import classes from './Modal.module.scss';

const Modal = props => {

  const ModalComponent = props => {

    useEffect(() => {
      toggleBackground(true);
      return () => {
        toggleBackground(false);
      }
    })

    const toggleBackground = isOn => {
      const body = document.querySelector('body');
      body.style.overflow = isOn ? 'hidden' : 'visible';
      body.style.top = '0';
    }

    const handleClose = event => {
      event.preventDefault();
      props.onClose();
    }

    const handleModalClick = event => {
      event.stopPropagation();
    }

    return (
      // <div>
        <div className={classes.Modal_overlay} onClick={handleClose}>
          <button className={classes.Modal__closeButton} onClick={handleClose} />
          <div className={classes.Modal} onClick={handleModalClick}>
            {props.children}
          </div>
        </div>
      // </div>
    );
  }

  return props.isOpen
    ? <ModalComponent {...{...props, children: props.children}} />
    : null;
}

export default Modal;

