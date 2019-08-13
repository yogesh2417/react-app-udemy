import React from 'react';
import CssClasses from './Burger.css';
import BurgerIngredients from '../Burger/BurgerIngredients/BurgerIngredients';

const burger = (props) =>{

    let transformedIngredients = Object.keys(props.ingredients)
    .map(igkey =>{
        return [...Array(props.ingredients[igkey])]
        .map((_,i)=>{
            return <BurgerIngredients type={igkey} key={igkey+i}/>
        });
    }).reduce((arr,el)=>{
        return arr.concat(el);
    },[]);

    if (transformedIngredients.length === 0){
        transformedIngredients=<p>Please Start Adding Ingredients!</p>;
    }


return(
    <div className={CssClasses.Burger}>
        <BurgerIngredients type="bread-top"/>
        {transformedIngredients}
        <BurgerIngredients type="bread-bottom"/>
    </div>
);
};

export default burger;