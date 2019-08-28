import React, {Component} from 'react';
import Auxiliary from '../../hoc/Auxiliary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

const INGREDIENT_PRICES = {
    salad:0.5,
    cheese:0.4,
    meat:1.3,
    bacon:0.7
}


class BurgerBuilder extends Component {
    state={
        ingredients:{
            salad:0,
            bacon:0,
            cheese:0,
            meat:0
        },
        totalPrice:4,
        purchasable:false,
        showModal:false
    }

    updatePurchaseState(ingredients){
        const sum = Object.keys(ingredients)
        .map(igkeys =>{
            return ingredients[igkeys];
        }).reduce((sum,el)=>{
            return sum + el;
        },0)

        this.setState({purchasable:sum>0});
    }

    addIngredientHandler = (type) =>{
        const oldCount = this.state.ingredients[type];
        const updateCount= oldCount + 1;
        const updatedIngredient = {
            ...this.state.ingredients
        };
        updatedIngredient[type] = updateCount;
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        this.setState({totalPrice:newPrice,ingredients:updatedIngredient});
        this.updatePurchaseState(updatedIngredient);
    }

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        if (oldCount <=0){
            return;
        }
        const updateCount= oldCount - 1;
        const updatedIngredient = {
            ...this.state.ingredients
        };
        updatedIngredient[type] = updateCount;
        const priceDeduction = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceDeduction;
        this.setState({totalPrice:newPrice,ingredients:updatedIngredient});
        this.updatePurchaseState(updatedIngredient);
    }

    showModal =() =>{
        this.setState({showModal:true});       
    }

    removeBackdropHandler=()=>{
        this.setState({showModal:false});
    }

    cancelSummaryHandler=()=>{
        this.setState({showModal:false});
    }

    continueSummaryHandler=()=>{
        alert("You continued!");
    }


    render(){
        const disableInfo ={
            ...this.state.ingredients
        }
        for (let key in disableInfo){
            disableInfo[key]= disableInfo[key] <=0;
        }

        return(
            <Auxiliary>
            <Modal show={this.state.showModal} backdropShow={this.removeBackdropHandler}>
                <OrderSummary price={this.state.totalPrice} ingredients={this.state.ingredients} cancelClicked={this.cancelSummaryHandler} continueClicked={this.continueSummaryHandler}/>
            </Modal>
            <Burger ingredients={this.state.ingredients}/>
            <BuildControls addIngredient={this.addIngredientHandler} 
            removeIngredient={this.removeIngredientHandler}
            disable={disableInfo}
            price={this.state.totalPrice}
            purchaseState={this.state.purchasable}
            showModal={this.showModal}/>
            </Auxiliary>
        )
    }
}

export default BurgerBuilder;