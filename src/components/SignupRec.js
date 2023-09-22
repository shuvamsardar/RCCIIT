import React from 'react'
import { useState } from 'react';
import "./SignupRec.css";
export default function SignupRec() {
  const [val, setVal] = useState({ businessmail: "",loc:"" ,pass: "", pass2: "", companyname: "", companyweb: "", govweb: "", type: "" });
  function changeHandler(event) {
    setVal((prev) => ({
      ...prev, [event.target.name]: event.target.value
    }))
  }

  function saveHandler(event) {
    event.preventDefault();
    console.log(val);
    // navigate("/signupuser3");
  }

  function otphandler() {

  }

  return (
    <div>
      <div className="containers555">
        <div className="title555">Recruiter Sign Up</div>
        <div className="titles555">Company Information</div>
        <div className="content555">
          <form>
            <div className="user-details555">
              <div className="input-box555">
                <span className="details555">Company Name</span>
                <input type="text" placeholder="Your Company Name Here" required name="companyname" value={val.companyname} onChange={changeHandler} />
              </div>
              <div className="input-box555">
                <span className="details555">Location</span>
                <input type="text" placeholder="Enter Company Location" required name="loc" value={val.loc} onChange={changeHandler} />
              </div>
              <div className="input-box555">
                <span className="details555">Business Email</span>
                <input type="text" placeholder="Enter your email" required name="businessmail" value={val.businessmail} onChange={changeHandler} />
                <span onClick={otphandler} style={{ cursor: "pointer", color: "blue" }}>Get OTP</span>
              </div>
              <div className="input-box555">
                <span className="details555">Organization Type</span>
                <select className='each2555' name="type" id="type" value={val.type} onChange={changeHandler}>
                  <option value="Private">Private</option>
                  <option value="Government">Government</option>
                </select>
              </div>
              <div className="input-box555">
                <span className="details555">Password</span>
                <input type="text" placeholder="Enter your password" required name="pass" value={val.pass} onChange={changeHandler} />
              </div>
              <div className="input-box555">
                <span className="details555">Confirm Password</span>
                <input type="text" placeholder="Confirm your password" required name="pass2" value={val.pass2} onChange={changeHandler} />
              </div>
              <div className="input-box555">
                <span className="details555">Company Website</span>
                <input type="url" placeholder="Enter Website URL" required name="companyweb" value={val.companyweb} onChange={changeHandler} />
              </div>
              <div className="input-box555">
                <span className="details555">Government Website</span>
                <input type="url" placeholder="Enter Website URL" required name="govweb" value={val.govweb} onChange={changeHandler} />
              </div>
            </div>
            <div className="button555">
                <input type="submit" value="Register" onClick={saveHandler} />
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}


{/* <div className="container">
<div className="header">
    <p className='text'>Sign Up as Recruiter</p>
  </div>

  <div className="signup_input">
    <div className='sec1'>Company Information</div>
    <div className="signup_inputs_personalinfo">
      <label htmlFor="businessmail" >Business Email :</label>
      <br />
      <input className="each2" type="email" onChange={changeHandler} placeholder="Business Email" name="businessmail" value={val.businessmail} />
      <br />
      <br />
      <label htmlFor="email">Password :</label>
      <br />
      <input className="each2" type="password" onChange={changeHandler} placeholder="Password" name="pass" value={val.pass} />
      <br />
      <br />
      <label htmlFor="company Name">Name of Company :</label>
      <br />
      <input className="each3" type="text" onChange={changeHandler} placeholder="Company Name" name="companyname" value={val.companyname} />
      <br />
      <br />
      <label htmlFor="company website">Company Website :</label>
      <br />
      <input className="each3" type="url" onChange={changeHandler} placeholder="Comapany Website" name="companyweb" value={val.companyweb} />
      <br />
      <br />
    </div>
    {/* <button type="button" className="buttons" onClick={saveHandler} style={{marginRight:"90px"}}>Submit</button> */}
{/* //     <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={saveHandler} style={{width:"100px",marginLeft:"160px"}}>
//         Submit
//       </button>
// </div> */}
// </div> */}