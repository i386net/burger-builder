import React, {memo} from 'react';
import styles from './Modal.module.css'
import Backdrop from '../Backdrop/Backdrop';

const Modal = (props) => {
  return (
    <>
      <Backdrop  show={props.show} clicked={props.modalClosed}/>
      <div
        className={styles.Modal}
        style={{
          transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
          opacity: props.show ? '1' : '0',
        }}
      >
        {props.children}
      </div>
    </>
  )
}
// убираем рендер закрытого модального окна и показываем спиннер!
const areEqual = (prevProps, nextProps) => {
  return prevProps.show === nextProps.show && prevProps.children === nextProps.children;
};

export default memo(Modal, areEqual);