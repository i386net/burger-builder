import React from 'react';
import Aux from '../../../hoc/Aux';
import INGREDIENT_PRICES from '../../../constants/ingridient-prices';

const OrderSummary = (props) => {
  const ingredientsSummary = Object.entries(props.ingredients).map(([ingredient, value]) => {
    return (
      <li key={ingredient}>{ingredient}: {value} . . . . х . . . . {INGREDIENT_PRICES[ingredient]} </li>
    );
  });

  return (
    <Aux>
      <h3>Your Order:</h3>
      <ul>
        {ingredientsSummary}
      </ul>
      <p>{props.price.toFixed(2)}</p>
      <p>Continue to checkout?</p>
    </Aux>
  )
}

export default OrderSummary;