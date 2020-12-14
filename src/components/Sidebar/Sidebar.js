import React from 'react';
import Logo from '../Logo/Logo';
import NavItems from '../Nav/NavItems/NavItems';
import Backdrop from '../UI/Backdrop/Backdrop';
import styles from './Sidebar.module.css';
import Aux from '../../hoc/Aux'

const Sidebar = ({open, closed}) => {
  let classes = [styles.Sidebar, styles.Sidebar_isClosed];

  if(open) {
    classes = [styles.Sidebar, styles.Sidebar_isOpen];
  }

  return (
    <Aux>
      <Backdrop  show={open} clicked={closed} />
      <div className={classes.join(' ')}>
        <div className={styles.Sidebar__logo}>
          <Logo />
        </div>
        <nav>
          <NavItems column/>
        </nav>
      </div>
    </Aux>
  )
}

export default Sidebar;