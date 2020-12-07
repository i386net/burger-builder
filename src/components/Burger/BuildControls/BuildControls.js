import React from 'react';
import styles from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';
import CONTROLS from '../../../constants/controls';

const BuildControls = (props) => {
  return (
    <div className={styles.BuildControls}>
      {CONTROLS.map(({label, type}) => {
        return (
            <BuildControl
              key={label}
              label={label}
              added={() => props.ingredientAdded(type)}
              removed={() => props.ingredientRemoved(type)}
              disabled={props.disabled[type]}
            />);
        }
      )}
      {/* вывод цены + 2 знака после запятой*/}
      <p className={styles.Title}>
        Current Price: <span className={styles.Price}>{props.price.toFixed(2)}</span>
      </p>
      <button
        className={styles.OrderButton}
        disabled={!props.purchasable}
      onClick={props.ordered}>
        Checkout
      </button>
    </div>
  )
}

export default BuildControls;