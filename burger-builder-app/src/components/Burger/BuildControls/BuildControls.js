import React from 'react';
import classes from "./BuildControls.module.css";
import BuildControl from "./BuildControl/BuildControl";

const controls = [
    {label : 'Salad' , type : 'salad'},
    {label : 'Cheese' , type : 'cheese'},
    {label : 'Meat' , type : 'meat'},
    {label : 'Bacon' , type : 'bacon'},
]

const buildControls = () => {
    return (
        <div className = {classes.BuildControls}>
        {controls.map((ctrl) => {
            return <BuildControl key = {ctrl.label} ingredientLabel = {ctrl.label}/>
        })}
        </div>
    )
}

export default buildControls;