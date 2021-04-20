import React from 'react';
import classes from './BuildControl.module.css'

const buildControl = (props) => {
    return (
        <div className = {classes.BuildControl}>
            <div className = {classes.IngredientLabel}>{props.ingredientLabel}</div>
            <button className = {classes.Less}>LESS</button>
            <button className = {classes.More}>MORE</button>
        </div>
    )
}

export default buildControl;