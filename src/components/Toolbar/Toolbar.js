import React from 'react';
import styles from './Toolbar.module.css';

const Toolbar = () => {
  return (
    <header className={styles.Toolbar}>
      <div>MENU</div>
      <div>LOGO</div>
      <nav className={styles.Toolbar__nav}>...</nav>

    </header>
  )
}

export default Toolbar;