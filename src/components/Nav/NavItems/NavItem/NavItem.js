import React from 'react';
import styles from './NavItem.module.css';

const NavItem = (props) => {
  return (
    <li className={styles.NavItem}>
      <a
        className={[styles.NavItem__link, props.active? styles.NavItem__link_active : null].join(' ')}
        href={props.link}>
        {props.children}
      </a>
    </li>
  )
}

export default NavItem;