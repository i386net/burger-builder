import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import Spinner from '../../components/UI/Spinner/Spinner';
import INGREDIENT_PRICES from '../../constants/ingridient-prices';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import dbInstance from '../../utility/axios';

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
    loading: false, // spinner state
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

  purchaseCancelHandler = () => {
    this.setState({purchasing: false});
  }

  purchaseContinueHandler = () => {
    this.setState({
      loading: true,
    });
    const order = {
      ingredients: this.state.ingredients,
      total: this.state.totalPrice,
      customer: {
        name: 'John Dow',
        address: {
          city: 'Test City',
          street: 'Test Street',
          postCode: '0123456789',
        },
        email: 'test@example.com',
      },
      delivery: 'fastest',
    }
    // добавляем эндпоинт для Firebase c расширением json!
    dbInstance.post('/orders.json', order)
      .then(res => {
        this.setState({
          loading: false,
          purchasing: false,
        });
        console.log(res);
      })
      .catch(err => {
        this.setState({
          loading: false,
          purchasing: false,
        });
        console.log(err);
      });
  }

  render() {
    const { ingredients, totalPrice, purchasable } = this.state;
    const disabledInfo = { ...ingredients }; // copy object

    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0; // если ингредиентов 0 или меньше false
    }

    let orderSummary = <OrderSummary
      ingredients={ingredients}
      price={totalPrice}
      purchaseCancel={this.purchaseCancelHandler}
      purchaseContinue={this.purchaseContinueHandler}/>;

    orderSummary = this.state.loading? <Spinner />: orderSummary;

    return (
      <Aux>
        <Modal show={this.state.purchasing} modalClosed={this.purchaseHandler}>
          {orderSummary}
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