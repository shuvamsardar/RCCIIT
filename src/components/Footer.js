import React from 'react';
import "./Footer.css";
import { BiCopyright } from "react-icons/bi";

const Footer = () => {
  return (

    <div className='footer'>
      <div className='foot'>

        <div className='section'>
          <h3>APP Name</h3>
          <p>ourapp@gmail.com</p>
          <p>1-800-523-2568</p>
        </div>

        <div className='section'>
          <h4>Take a tour</h4>
          <a href='#'>Features</a>
          <a href='#'>Pricing</a>
          <a href='#'>Product</a>
          <a href='#'>Support</a>
        </div>

        <div className='section'>
          <h4>Our company</h4>
          <a href='#'>About us</a>
          <a href='#'>Blog</a>
          <a href='#'>Media</a>
          <a href='#'>Contact us</a>
        </div>

        <div className='section'>
          <h4>Resources</h4>
          <a href='#'>Privacy</a>
          <a href='#'>Terms of use</a>
          <a href='#'>Help center</a>
          <a href='#'>Jobs</a>

        </div>

      </div>
      <h4><BiCopyright size={20}/> Copyright 2023</h4>
    </div>
  );
}

export default Footer;
