import React from 'react';
import TestInfo from './TestInfo'
import TestCard from './TestCard';
import "./Tests.css"

const Tests = () => {
  return (
    <div className='tests'>
      <h1>Give Tests and get hired</h1>
        <div className='test-part'>

        {
        TestInfo.map((item,index)=>
        
           (
              <TestCard 
              key={index}
              image={item.image}
              url={item.url}
              heading={item.heading}
            />
            ) 
        )
      }
        </div>
    </div>
  );
}

export default Tests;
