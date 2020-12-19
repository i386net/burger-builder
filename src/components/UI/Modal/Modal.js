import React, {memo} from 'react';
import styles from './Modal.module.css'
import Backdrop from '../Backdrop/Backdrop';

const Modal = ({show, modalClosed, children}) => {
  return (
    <>
      <Backdrop  show={show} clicked={modalClosed}/>
      <div
        className={styles.Modal}
        style={{
          transform: show ? 'translateY(0)' : 'translateY(-100vh)',
          opacity: show ? '1' : '0',
        }}
      >
        {children}
      </div>
    </>
  )
}
// убираем рендер закрытого модального окна и показываем спиннер!
const areEqual = (prevProps, nextProps) => {
  return prevProps.show === nextProps.show && prevProps.children === nextProps.children;
};

export default memo(Modal, areEqual);