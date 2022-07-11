import React from 'react';
import './card.css'

const Card = (props) => {
  return (
    <div className="card">
      <img src={props.details.image} alt={props.details.title} className="card-image"/>
      <h1 className="card-title">{props.details.title} </h1>
    </div>
  );
}

export default Card;
