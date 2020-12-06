import React from 'react';
import styles from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';
import CONTROLS from '../../../constants/controls';

//ингредиенты для списка
// const controls = [
//   {label: 'Salad', type: 'salad'},
//   {label: 'Meat', type: 'meat'},
//   {label: 'Bacon', type: 'bacon'},
//   {label: 'Cheese', type: 'cheese'},
// ];

const BuildControls = (props) => {
  return (
    <div className={styles.BuildControls}>
      {CONTROLS.map(({label, type}) => (
        <BuildControl
          key={label}
          label={label}
          added={() => props.ingredientAdded(type)}
        />))}
    </div>
  )
}

export default BuildControls;