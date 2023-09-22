import React from 'react';
import "./TestCard.css";
import {Link} from "react-router-dom"

const TestCard = (props) => {
  return (
    <div className='testcard'>
      <div className='test-img'>
            <img src={props.image} />
      </div>
      <Link target="_blank" className='link' to={props.url}>{props.heading}</Link>
    </div>
  );
}

export default TestCard;

