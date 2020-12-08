import React from 'react';
import BurgerLogo from '../../assets/images/burger-logo.png';
import styles from './Logo.module.css';

const Logo = () => {
  return (
    <div className={styles.Logo}>
      <img src={BurgerLogo} alt="Burger Logo" className={styles.Logo__image}/>
    </div>
  )
}

export default Logo;