import React from 'react';
import Auxiliary from '../../../hoc/Auxiliary';
import Button from '../../UI/Button/Button';

const orderSummary =(props)=>{
    const ingredientSummary= Object.keys(props.ingredients)
    .map(igkey=>{
        return (
            <li key={igkey}>
                <span style={{textTransform:'capitalize'}}>{igkey}:{props.ingredients[igkey]}</span>
            </li>
        )
    });
    
    return (
        <Auxiliary>
            <h3>Your Order</h3>
            <p>A delicious burger with following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p><strong>Total Price: {props.price.toFixed(2)}</strong></p>
            <p>Continue to Checkout?</p>
            <Button btnType="Danger" clicked={props.cancelClicked}>CANCEL</Button>
            <Button btnType="Success" clicked={props.continueClicked}>CONTINUE</Button>
        </Auxiliary>
        
    );
};

export default orderSummary;