import './Navbar.css'
import React from 'react';
import { BiUserCircle } from "react-icons/bi";
import logo from '../assets/logo.jpg'


const Navbar = (props) => {

  const isLoggedIn=props.isLoggedIn;

  
  return (
    <div className='navbar'>

      <div className='nav-logo'>
        <img src={logo}/>
      </div>

      <div className='nav-links'>
        <a href='#' className='links' >Home</a>
        <a href='#' className='links' >Jobs</a>
        <a href='#' className='links' >Training & Support</a>
        <a href='#' className='links' >Notifications</a>
        <a href='#' className='links' >About us</a>
        <a href='#' className='links' >Contact</a>
        {
          isLoggedIn &&
           <button className='profile'> <BiUserCircle size={40}/></button> 
        } 
      </div>


    </div>
  );
}

export default Navbar;
