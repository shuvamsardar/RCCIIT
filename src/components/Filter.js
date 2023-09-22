import React from 'react';
import "./Filter.css"

const Filter = () => {
  return (
    <div className='filter'>
      <button className='filter-btn btn-primary btn-sm'>All jobs</button>
      <button className='filter-btn btn-primary btn-sm'>Recommended jobs</button>
      <button className='filter-btn btn-primary btn-sm'>By Skills</button>
    </div>
  );
}

export default Filter;
