import React from 'react';
import styles from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = ({ ingredients }) => {
  // получаем массив из переданных ингредиентов
  let transformedIngredients = Object.keys(ingredients)
    .map( ingredient => {
      return [...Array(ingredients[ingredient])].map((_, i) => {
        return  <BurgerIngredient key={ingredient + i} type={ingredient}/>;
      });
    })
    .flat(); // делаем массив плоским!
    // .reduce((arr, el) => arr.concat(el), []);

  if(transformedIngredients.length === 0) {
    //если ингредиентов нет выводим сообщение!
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