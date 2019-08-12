import React from 'react';
import CssClasses from './Burger.css';
import BurgerIngredients from '../Burger/BurgerIngredients/BurgerIngredients';

const burger = (props) =>{

    const transformedIngredients = Object.keys(props.ingredients)
    .map(igkey =>{
        return [...Array(props.ingredients[igkey])]
        .map((_,i)=>{
            return <BurgerIngredients type={igkey} key={igkey+i}/>
        });
    });



return(
    <div className={CssClasses.Burger}>
        <BurgerIngredients type="bread-top"/>
        {transformedIngredients}
        <BurgerIngredients type="bread-bottom"/>
    </div>
);
};

export default burger;