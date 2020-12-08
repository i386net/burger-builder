import React from 'react';
import styles from './Button.module.css'
const Button = (props) => {
  return (
    // styles[props.buttonType] get style for this Button
    <button onClick={props.clicked} className={[styles.Button, styles[props.buttonType]].join(' ')}>
      {props.children}
    </button>
)
}

export default Button;