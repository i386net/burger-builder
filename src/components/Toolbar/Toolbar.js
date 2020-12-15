import React from 'react';
import styles from './Toolbar.module.css';
import Logo from '../Logo/Logo';
import NavItems from '../Nav/NavItems/NavItems';
import BurgerButton from '../BurgerButton/BurgerButton';

const Toolbar = ({open}) => {
  return (
    <header className={styles.Toolbar}>

      <div className={styles.Toolbar__logo}>
        <Logo />
      </div>
      {/*<div>MENU</div>*/}
      <BurgerButton open={open}/>
      <nav className={[styles.Toolbar__nav, styles.Toolbar__nav_desktop].join(' ')}>
        <NavItems />
      </nav>
    </header>
  )
}

export default Toolbar;