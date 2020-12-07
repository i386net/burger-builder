import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import INGREDIENT_PRICES from '../../constants/ingridient-prices';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

export default class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      meat: 0,
      cheese: 0,
    },
    totalPrice: 4,
    purchasable: false, // активация кнопки
    purchasing: false, // активация модального окна!
  }

  updatePurchaseState = (ingredients) => {
    // const ingredients = { ...this.state.ingredients };
    const sum = Object.values(ingredients).reduce((sum, el) => sum + el, 0);
    this.setState({purchasable: sum > 0});
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
    });
    this.updatePurchaseState(updatedIngredients);
  }

  removeIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    if(oldCount <= 0) {
      return; // если ингредиентов нет
    }
    const updatedCount = oldCount - 1;
    const updatedIngredients = {...this.state.ingredients};
    updatedIngredients[type] = updatedCount;
    const priceDeduction = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice - priceDeduction;
    this.setState({
      ingredients: updatedIngredients,
      totalPrice: newPrice,
    });
    this.updatePurchaseState(updatedIngredients);
  }

  purchaseHandler = () => {
    this.setState({
      purchasing: !this.state.purchasing, // todo: или сделать true?
    })
  }

  render() {
    const { ingredients, totalPrice, purchasable } = this.state;
    const disabledInfo = { ...ingredients }; // copy object

    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0; // если ингредиентов 0 или меньше false
    }

    return (
      <Aux>
        <Modal show={this.state.purchasing}>
          <OrderSummary ingredients={ingredients} price={totalPrice}/>
        </Modal>
        <Burger ingredients={ingredients}/>
        <BuildControls
          ingredientAdded = {this.addIngredientHandler}
          ingredientRemoved = {this.removeIngredientHandler}
          disabled = {disabledInfo}
          price = {totalPrice}
          purchasable={purchasable}
          ordered={this.purchaseHandler}
        />
      </Aux>
    )
  }
}