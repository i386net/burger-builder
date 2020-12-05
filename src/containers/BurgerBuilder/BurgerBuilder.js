import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

export default class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      meat: 0,
      cheese: 0,
    }
  }

  // ingredientsHandler = (ingredients) => {
  //   if(Object.values(ingredients).every(ingredient => ingredient === 0)) {
  //     return <p>Add some ingredients!</p>
  //   }
  //   return <Burger ingredients={ingredients}/>;
  // }

  render() {
    const { ingredients } = this.state;
    return (
      <Aux>
        <Burger ingredients={ingredients}/>
        <BuildControls />
      </Aux>
    )
  }
}