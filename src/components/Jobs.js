import React from 'react';
import "./Jobs.css";
import Card from './Card';
import Info from "./Cardinfo";

const Jobs = () => {
  return (
    <div className='jobs'>
      
    <div className='featured'>
        <h1>Latest featured jobs </h1>
        <p>Loren ipsum</p>
        <p>Loren ipsum</p>
    </div>

    <div className='cards'>

      {
        Info.map((item,index)=>
        
           (
              <Card 
              key={index}
              date={item.date}
              company={item.company}
              role={item.role}
              message={item.message}
              place={item.place}
            />
            ) 
        )
      }

    </div>

    <button className='btn btn-lg btn-primary'>View all jobs</button>

    </div>
  );
}

export default Jobs;
