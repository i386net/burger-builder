import React from 'react';
import styles from './Toolbar.module.css';
import Logo from '../Logo/Logo';
import NavItems from '../Nav/NavItems/NavItems';

const Toolbar = () => {
  return (
    <header className={styles.Toolbar}>
      <Logo />
      <div>MENU</div>
      <nav className={styles.Toolbar__nav}>
        <NavItems />
      </nav>
    </header>
  )
}

export default Toolbar;