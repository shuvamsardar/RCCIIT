import React from 'react';
import {Link} from 'react-router-dom'
import "./Course.css";

const Course = (props) => {
  return (
    <div className='course'>

      <div className='course-img'>
        <img src={props.image} />
      </div>

      <div className='course-content'>
        <Link target="_blank" className='link' to={props.url}>{props.platform}</Link>
        <p>{props.message}</p>
      </div>

    </div>
  );
}

export default Course;
