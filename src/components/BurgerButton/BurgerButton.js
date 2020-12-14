import React from 'react';
import styles from './BurgerButton.module.css';

const BurgerButton = ({open}) => {
  const buttonHandler = () => {
    open();
  };

  return (
    <div className={styles.BurgerButton} onClick={buttonHandler}>X</div>
  )
}

export default BurgerButton;