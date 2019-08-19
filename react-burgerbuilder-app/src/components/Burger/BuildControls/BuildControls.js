import React from 'react';
import CssClasses from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';


const controls = [
    {label:'Salad', type:'salad'},
    {label:'Bacon', type:'bacon'},
    {label:'Cheese', type:'cheese'},
    {label:'Meat', type:'meat'}
];

const buildControls =(props) =>(
    <div className={CssClasses.BuildControls}>
        <p>Total Price: <strong>{props.price.toFixed(2)}</strong></p>
        {controls.map(ctrl=>(
            <BuildControl 
            key={ctrl.label} 
            label={ctrl.label}
            added={()=>props.addIngredient(ctrl.type)}
            removed={()=>props.removeIngredient(ctrl.type)}
            disabled={props.disable[ctrl.type]}
            />
        ))}
        <button disabled={!props.purchaseState} onClick={props.showModal} className={CssClasses.OrderButton}>ORDER NOW</button>
    </div>
);

export default buildControls;