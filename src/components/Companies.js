import React from 'react';
import "./Companies.css";
import accenture from "../assets/asset9.webp";
import wipro from "../assets/asset7.png";
import coal from "../assets/asset13.jpg";
import kpmg from "../assets/asset11.jpg";
import oil from "../assets/asset12.jpg";
import bhel from "../assets/asset14.png";


const Companies = () => {
  return (

    <div className='company'>
      <div className='tag'>
      <h1>Trusted by job holders from</h1>
      </div>

      <div className='companies'>

        <div className='companyImg'>
          <img src={accenture} />
          <h3>Accenture</h3>
        </div>
        <div className='companyImg'>
          <img src={kpmg} />
          <h3>KPMG</h3>
        </div>
        <div className='companyImg'>
          <img src={wipro} />
          <h3>Wipro</h3>
        </div>
        <div className='companyImg'>
          <img src={oil} />
          <h3>Indian Oil</h3>
        </div>
        <div className='companyImg'>
          <img src={coal} />
          <h3>Coal India Ltd</h3>
        </div>
        <div className='companyImg'>
          <img src={bhel} />
          <h3>BHEL</h3>
        </div>

      </div>
    </div>

  );
}

export default Companies;
