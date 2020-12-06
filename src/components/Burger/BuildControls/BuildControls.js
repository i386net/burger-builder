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
    </div>
  )
}

export default BuildControls;