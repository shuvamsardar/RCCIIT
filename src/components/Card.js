import React from 'react';
import "./Card.css"

const Card = (props) => {
  return (
    <div className='card'>

        <div className='up'>
            <div className='post'>{props.date}</div>
            <h4>{props.company}</h4>
            <h2>{props.role}</h2>
            <p>{props.message}</p>
        </div>

        <div className='down'>
            <h5>{props.place}</h5>
            <button className='btn btn-info'>Details</button>
        </div>
      
    </div>
  );
}

export default Card;
