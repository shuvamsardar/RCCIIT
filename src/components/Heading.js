import React from 'react';
import './Heading.css';
import image from "../assets/home.jpg";

const Heading = () => {
  return (
    <div className='heading'>
      
    <div className='context'> 
       <div className='looking'>
        <p>Looking for a job?</p>
      </div>

      <div className='content'>
        <h1>Find your <span>dream job</span> and secure your <span>future</span> </h1>
        <h3>Let's start joining us and get your job</h3>
        <h4>10,000 over jobs </h4>
      </div>

      <div className='btns'>
        <button className='bt btn-primary btn-lg login'>Login</button>
        <button className='bt btn-primary btn-lg register'>Register</button>
      </div>
    </div>

        <div className='heading-img'>
          <img src={image} />
        </div>

    </div>
  );
}

export default Heading;
