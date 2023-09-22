import React from 'react';
import "./Story.css";
import acheive from "../assets/acheive.jpg"

const Story = () => {
  return (
    <div className='story'>

        <div className='story-img'>
          <img src={acheive} />
        </div>

        <div className='story-text'>
          <h1>Trusted by thousands<br></br>  of happy employee.</h1>
          <h3>Empowering veterans to build careers<br></br> they love </h3>
        </div>
    </div>
  );
}

export default Story;
