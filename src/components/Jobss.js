import React from 'react';
import Card from './Card';
import Info from './Cardinfo';
import './Jobss.css'

const Jobss = () => {
  return (
    <div className='jobss'>

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
  );
}

export default Jobss;
