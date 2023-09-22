import React from 'react';
import "./Courses.css"
import Course from './Course';
import Info from "./Courseinfo";

const Courses = () => {
  return (
    <div className='full-courses'>
      <h1>Training and courses offered by our various institutions</h1>
      <h4>Develop your skills and get trained from this resources</h4>

      <div className='courses'>

        {
        Info.map((item,index)=>
        
           (
              <Course 
              key={index}
              image={item.image}
              platform={item.platform}
              url={item.url}
              message={item.message}
            />
            ) 
        )
      }

      </div>
      <button className='btn-lg btn-primary btn'> See more</button>

    </div>
  );
}

export default Courses;
