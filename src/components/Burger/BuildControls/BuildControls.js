import React from 'react';
import styles from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';

//ингредиенты для списка
const labels = [
  {label: 'Salad', type: 'salad'},
  {label: 'Meat', type: 'meat'},
  {label: 'Bacon', type: 'bacon'},
  {label: 'Cheese', type: 'cheese'},
];
const controls = labels.map(({label}) => <BuildControl key={label} label={label}/>)
const BuildControls = () => {
  return (
    <div className={styles.BuildControls}>
      {controls}
    </div>
  )
}

export default BuildControls;