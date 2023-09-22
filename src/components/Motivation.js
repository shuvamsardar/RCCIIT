import React from 'react';
import MotivationInfo from './MotivationInfo'
import MotoCard from './MotoCard';
import "./Motivation.css"


const Motivation = () => {
  return (
    <div className='motivation'>
      <h1>Get yourself motivated and focussed</h1>
      <h4>It is always possible to acheive your goals</h4>
        <div className='moto'>

        {
        MotivationInfo.map((item,index)=>
        
           (
              <MotoCard 
              key={index}
              image={item.image}
            />
            ) 
        )
      }
        </div>
    </div>
  );
}

export default Motivation;
