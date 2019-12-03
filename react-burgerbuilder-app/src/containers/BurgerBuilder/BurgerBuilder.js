import React, {Component} from 'react';
import Auxiliary from '../../hoc/Auxiliary/Auxiliary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import axios from '../../axios-orders';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

const INGREDIENT_PRICES = {
    salad:0.5,
    cheese:0.4,
    meat:1.3,
    bacon:0.7
}


class BurgerBuilder extends Component {
    state={
        ingredients:null,
        totalPrice:4,
        purchasable:false,
        showModal:false,
        loading:false,
        error:false
    }


    componentDidMount(){
        axios.get("/ingredients.json")
        .then(response=>{
            this.setState({ingredients:response.data});
        })
        .catch(error=>{
            this.setState({error:true});
        })
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
        // this.setState({loading:true});
        // const order={
        //     ingredients:this.state.ingredients,
        //     price:this.state.totalPrice,
        //     customer:{
        //         name:"Yogesh",
        //         address:{
        //             street:"testStreet",
        //             zipCode:"123456",
        //             country:"india"
        //         },
        //         email:"test@test.com"
        //     },
        //     deliveryMethod:"fastest"
        // }
        // axios.post("/orders.json",order)
        // .then(response=>{
        //     this.setState({loading:false,showModal:false})
        // })
        // .catch(error=>{
        // this.setState({loading:false,showModal:false})
        // })   

        const queryParams=[];
        for(let i in this.state.ingredients){
            queryParams.push(encodeURIComponent(i)+'='+encodeURIComponent(this.state.ingredients[i]));
        }
        queryParams.push('price=' + this.state.totalPrice);
        const queryString=queryParams.join('&');
        this.props.history.push({
            pathname:'/checkout',
            search:'?'+queryString
        });
    }


    render(){
        const disableInfo ={
            ...this.state.ingredients
        }
        for (let key in disableInfo){
            disableInfo[key]= disableInfo[key] <=0;
        }


        let orderSummary = null;

        let burger =this.state.error?<p>Ingredients can't be loaded!!!</p>:<Spinner/>;

        if(this.state.ingredients){
            burger = (
                <Auxiliary>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls addIngredient={this.addIngredientHandler} 
                removeIngredient={this.removeIngredientHandler}
                disable={disableInfo}
                price={this.state.totalPrice}
                purchaseState={this.state.purchasable}
                showModal={this.showModal}/>
                </Auxiliary>
            );
            orderSummary =<OrderSummary price={this.state.totalPrice} 
            ingredients={this.state.ingredients} 
            cancelClicked={this.cancelSummaryHandler} 
            continueClicked={this.continueSummaryHandler}/>;
        }
        



        if (this.state.loading){
            orderSummary = <Spinner/>;
        }

        return(
            <Auxiliary>
            <Modal show={this.state.showModal} backdropShow={this.removeBackdropHandler}>
                {orderSummary}
            </Modal>
            {burger}
            </Auxiliary>
        )
    }
}

export default withErrorHandler(BurgerBuilder,axios);