import React from 'react';
import INGREDIENT_PRICES from '../../../constants/ingridient-prices';
import Button from '../../UI/Button/Button';


const OrderSummary = (props) => {
  const ingredientsSummary = Object.entries(props.ingredients).map(([ingredient, value]) => {
    return (
      <li key={ingredient}>{ingredient}: {value} . . . . х . . . . {INGREDIENT_PRICES[ingredient]} </li>
    );
  });

  return (
    <>
      <h3>Your Order:</h3>
      <ul>
        {ingredientsSummary}
      </ul>
      <p>{props.price.toFixed(2)}</p>
      <p>Continue to checkout?</p>
      <Button buttonType={'Danger'} clicked={props.purchaseCancel}>Cancel</Button>
      <Button buttonType={'Success'} clicked={props.purchaseContinue}>Continue</Button>
    </>
  )
}

export default OrderSummary;