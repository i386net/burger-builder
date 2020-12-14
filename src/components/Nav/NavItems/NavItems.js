import React from 'react';
import styles from './NavItems.module.css'
import NavItem from './NavItem/NavItem';

const NavItems = ({ column }) => {
  return (
    <ul className={column? [styles.NavItems, styles.NavItems_column].join(' '):styles.NavItems}>
      <NavItem link='#' active>Burger Builder</NavItem>
      <NavItem link='#'>Checkout</NavItem>
    </ul>
  )
}

export default NavItems;