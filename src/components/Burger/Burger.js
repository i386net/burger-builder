import React from 'react';
import styles from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = ({ ingredients }) => {
  // получаем массив из переданных ингредиентов
  let transformedIngredients = Object.keys(ingredients)
    .map( igKey => {
      return [...Array(ingredients[igKey])].map((_, i) => {
       return  <BurgerIngredient key={igKey + i} type={igKey}/>;
      });
    })
    .flat(); // делаем массив плоским!
    // .reduce((arr, el) => arr.concat(el), []);
  console.log(transformedIngredients)
  if(transformedIngredients.length === 0) {
    transformedIngredients = <p>Please start adding ingredients!</p>
  }
  return (
    <div className={styles.Burger}>
      <BurgerIngredient type={'bread-top'} />
      {transformedIngredients}
      <BurgerIngredient type={'bread-bottom'} />
    </div>
  )
}

export default burger;