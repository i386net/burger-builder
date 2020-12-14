import React from 'react';
import styles from './Toolbar.module.css';
import Logo from '../Logo/Logo';
import NavItems from '../Nav/NavItems/NavItems';

const Toolbar = () => {
  return (
    <header className={styles.Toolbar}>

      <div className={styles.Toolbar__logo}>
        <Logo />
      </div>
      <div>MENU</div>
      <nav className={[styles.Toolbar__nav, styles.Toolbar__nav_desktop].join(' ')}>
        <NavItems />
      </nav>
    </header>
  )
}

export default Toolbar;