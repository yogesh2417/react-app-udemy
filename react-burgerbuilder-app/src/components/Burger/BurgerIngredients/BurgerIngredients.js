import React,{Component} from 'react';
import CssClasses from './BurgerIngredients.css';
import PropTypes from 'prop-types';

class BurgerIngredients extends Component{
    render(){
        let ingredients=null;

    switch(this.props.type){
        case ('bread-bottom'):
            ingredients = <div className={CssClasses.BreadBottom}></div>;
            break;
        case ('bread-top'):
            ingredients=(
                <div className={CssClasses.BreadTop}>
                    <div className={CssClasses.Seeds1}></div>
                    <div className={CssClasses.Seeds2}></div>
                </div>
            );
            break;
        case ('meat'):
            ingredients=<div className={CssClasses.Meat}></div>
            break;
        case ('cheese'):
            ingredients=<div className={CssClasses.Cheese}></div>
            break;
        case ('bacon'):
            ingredients=<div className={CssClasses.Bacon}></div>
            break;
        case ('salad'):
            ingredients=<div className={CssClasses.Salad}></div>
            break; 
        default:
            ingredients=null;                          
    }
    return ingredients;
}
}
BurgerIngredients.propTypes={
    type:PropTypes.string.isRequired
};

export default BurgerIngredients;