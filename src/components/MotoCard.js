import React from 'react';
import "./MotivationCard.css"

const MotoCard = (props) => {
  return (
    <div className='motocard'>
      <div className='moto-img'>
      <iframe  src={props.image} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
    </div>
  );
}

export default MotoCard;
