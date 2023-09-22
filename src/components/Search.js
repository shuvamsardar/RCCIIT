import React from 'react';
import "./Search.css"

const Search = () => {
  return (
    <div className='search'>
        <div className='text'>
            <h2>Let's find you your dream job</h2>
            <h4>Search millions of jobs,the largest community of jobs all around the world</h4>
        </div>
        <div className='searching'>
            <input type='text' placeholder='Search job title' className='searchbar'></input>
            <button className='search-btn btn-lg'>Search</button>
        </div>
      
    </div>
  );
}

export default Search;
