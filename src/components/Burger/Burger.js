import React from 'react';
import styles from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = ({ ingredients }) => {
  // получаем массив из переданных ингредиентов
  const transformedIngredients = Object.keys(ingredients)
    .map( igKey => {
      return [...Array(ingredients[igKey])].map((_, i) => {
       return  <BurgerIngredient key={igKey + i} type={igKey}/>;
      });
    });

  return (
    <div className={styles.Burger}>
      <BurgerIngredient type={'bread-top'} />
      {transformedIngredients}
      <BurgerIngredient type={'bread-bottom'} />
    </div>
  )
}

export default burger;