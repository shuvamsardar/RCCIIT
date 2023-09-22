import React from 'react';
import './Easy.css'
import { FaHandshakeSimple } from "react-icons/fa6";
import { PiHandbagFill } from "react-icons/pi";
import { SiHelpdesk } from "react-icons/si";

const Easy = () => {
  return (
    <div className='easy'>
        <h1>More easier to find job with our platform</h1>
        <h4>The following features make our service easier to help you find suitable jobs from various companies </h4>

      <div className='ft-section'>
            <div className='feature'>
                <FaHandshakeSimple size={60} />
                <h2>Easy Applying</h2>
                <p>The process of applying a job is easier and faster</p>
            </div>
            <div className='feature'>
                <PiHandbagFill size={60} />
                <h2>Many Vacancies</h2>
                <p>There are many job vacancies from various companies</p>
            </div>
            <div className='feature'>
                <SiHelpdesk size={60} />
                <h2>Best Support</h2>
                <p>We provide full support to job seekers for better results</p>
            </div>
      </div>
    </div>
  );
}

export default Easy;
