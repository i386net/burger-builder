import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import INGREDIENT_PRICES from '../../constants/ingridient-prices';

// const INGREDIENT_PRICES = {
//   salad: 0.5,
//   bacon: 0.7,
//   meat: 1.5,
//   cheese: 0.5,
// };

export default class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      meat: 0,
      cheese: 0,
    },
    totalPrice: 4,
  }

  addIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount + 1;
    const updatedIngredients = {...this.state.ingredients};
    updatedIngredients[type] = updatedCount;
    const priceAddition = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAddition;
    this.setState({
      ingredients: updatedIngredients,
      totalPrice: newPrice,
    })
  }

  removeIngredientHandler = (type) => {

  }

  render() {
    const { ingredients } = this.state;
    return (
      <Aux>
        <Burger ingredients={ingredients}/>
        <BuildControls ingredientAdded = {this.addIngredientHandler}/>
      </Aux>
    )
  }
}