import React from 'react';
import './Card.css';

const card = (props) => {
    return(
        <div className = 'Card' 
        style={props.stylingColor === props.article.color ? {border: `1px solid ${props.article.color}`, boxShadow: `8px 8px 5px ${props.article.color}`} : null}>
            <h2>{props.article.title}</h2>
            <p>{props.article.content}</p>
            <button 
                style = {{backgroundColor:props.article.color}}
                onClick = {() => {
                    props.colorChangeHandler(props.article.color);
                }}>
                Set {props.article.color}</button>
        </div>
    )
}

export default card;