import React from 'react'
import { useState } from 'react';
import Multiselect from 'multiselect-react-dropdown';
import "./Signup.css";
export default function Signup() {
  const [val, setVal] = useState({ firstname: "", lastname: "", email: "", gender: "", number: "", pass2: "", pass: "", uid: "", disability: "", solutions: "", institute: "", degree: "", skills: ["IT","Backoffice","Data Analyst","Hardware","Developer","Transcription","Counselling","Art and Creativity"]});
  function changeHandler(event) {
    setVal((prev) => ({
      ...prev, [event.target.name]: event.target.value
    }))
  }

  function nextInfo(event) {
    event.preventDefault();
    console.log(val);
  }
  function otphandler() {

  }

  return (
    <div>
      <div className="contained555">
        <div className="title555">User Sign Up</div>
        <div className="titles555">Personal Information</div>
        <div className="content555">
          <form>
            <div className="user-details555">
              <div className="input-box555">
                <span className="details555">Full Name</span>
                <input type="text" placeholder="Enter your name" required name="firstname" value={val.firstname} onChange={changeHandler}/>
              </div>
              <div className="input-box555">
                <span className="details555">Username</span>
                <input type="text" placeholder="Enter your username" required name="lastname" value={val.lastname} onChange={changeHandler}/>
              </div>
              <div className="input-box555">
                <span className="details555">Email</span>
                <input type="text" placeholder="Enter your email" required name="email" value={val.email} onChange={changeHandler}/>
                <span onClick={otphandler} style={{ cursor: "pointer", color: "blue" }}>Get OTP</span>
              </div>
              <div className="input-box555">
                <span className="details555">Phone Number</span>
                <input type="text" placeholder="Enter your number" required name="number" value={val.number} onChange={changeHandler}/>
              </div>
              <div className="input-box555">
                <span className="details555">Password</span>
                <input type="text" placeholder="Enter your password" required name="pass" value={val.pass} onChange={changeHandler}/>
              </div>
              <div className="input-box555">
                <span className="details555">Confirm Password</span>
                <input type="text" placeholder="Confirm your password" required name="pass2" value={val.pass2} onChange={changeHandler}/>
              </div>
              <div className="input-box555">
                <span className="details555">UDID Number</span>
                <input type="text" placeholder="Enter your number" required name="uid" value={val.uid} onChange={changeHandler}/>
              </div>
              <div className="input-box555">
                <span className="details555">Disability :</span>
                <select classNameName='each2555' name="disability" id="disability" value={val.disability} onChange={changeHandler}>
                  <option value="Visual">Visual</option>
                  <option value="Hearing">Hearing</option>
                  <option value="Mobility">Mobility</option>
                  <option value="Cognitive">Cognitive</option>
                </select>
              </div>
              <div className="input-box555">
                <span className="details555">Solutions Required</span>
                <select classNameName="each2555" name="solutions" id="solutions"  onChange={changeHandler} value={val.solutions}>
                  <option value="WheelChair">WheelChair</option>
                  <option value="ScreenReader">ScreenReader</option>
                </select>
              </div>
              <div className="input-box555">
                <span className="details555">Name of Institution</span>
                <input type="text" placeholder="Institute Name" required name="institute" value={val.institute} onChange={changeHandler}/>
              </div>
              <div className="input-box555">
                <span className="details555">Highest Level of Education</span>
                <input type="text" placeholder="Highest Education Level" required name="degree" value={val.degree} onChange={changeHandler}/>
              </div>
              <br />
              <div className="input-box555">
              <span className="details555">Skills :</span>
              <Multiselect isObject={false} options={val.skills} showCheckbox value={val.skills} name="skills" onChange={changeHandler}/>
              {/* <select classNameName="each2" name="skills" id="skills" value={val.skills} onChange={changeHandler}>
                <option value="Multilingual">Multilingual</option>
                <option value="Typist">Typist</option>
                <option value="Typist">Hardware</option>
                <option value="Typist">Data Entry</option>
                <option value="Tech Support">Tech Support</option>
                <option value="Counselling">Counselling</option>
                <option value="Back Office">Back Office</option>
                <option value="IT">IT</option>
              </select> */}
              </div>
              
            </div>
            <div className="gender-details555">
              <input type="radio" name="gender" id="dot-1" />
              <input type="radio" name="gender" id="dot-2" />
              <input type="radio" name="gender" id="dot-3" />
              <span className="gender-title555">Gender</span>
              <div className="category555">
                <label for="dot-1">
                  <span className="dot555 one555" name="gender" value={val.gender} onChange={changeHandler} ></span>
                  <span className="gender555" >Male</span>
                </label>
                <label for="dot-2">
                  <span className="dot555 two555"></span>
                  <span className="gender555" >Female</span>
                </label>
                <label for="dot-3">
                  <span className="dot555 three555"></span>
                  <span className="gender555">Prefer not to say</span>
                </label>
              </div>
            </div>
            <div className="button555">
              <input type="submit" value="Register" onClick={nextInfo}/>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}


{/* //  < classNameName='containers'>
//         <div classNameName="header">
//           <p classNameName='text'>Sign Up as User</p>
//         </div>

//         <div classNameName='sec1'>Personal Information</div>

// <div classNameName="signup_input">
//   <div classNameName='sec1'>Personal Information</div>
//   <div classNameName="signup_inputs_personalinfo">
//     <div classNameName='name_filed'>
//       <label htmlFor="your_name">Your Name:</label>
//       <input classNameName='each1' type="text" required onChange={changeHandler} placeholder="Fist Name" name="firstname" value={val.firstname} />
//       <input classNameName='each2' type="text" required onChange={changeHandler} placeholder="Last Name" name="lastname" value={val.lastname} />
//     </div>
//     <br />
//     <label htmlFor="gender">Gender :</label>
//     {/* select tag for dropdown menu */}
{/* //     <select classNameName='each2' name="gender" id="gender" value={val.gender} onChange={changeHandler}>
//       <option value="Male">Male</option>
//       <option value="Female">Female</option>
//       <option value="Others">Others</option>
//     </select>
//     <br />
//     <br />

//     <div classNameName='names'>
//       <label htmlFor="phone">Mobile Number : </label>
//       <input classNameName='each2' type="tel" onChange={changeHandler} placeholder="Mobile Number" name="number" value={val.number} />
//     </div>
//     <br />
//     <div classNameName="names">
//       <label htmlFor="byemail">Are you above 18?</label>


//       <input type="checkbox" onChange={changeHandler} placeholder="yes" name="yes" checked={val.yes} id="yes" />
//       <label htmlFor="comment">yes</label>

//       <input type="checkbox" onChange={changeHandler} placeholder="no" name="no" checked={val.no} id="no" />
//       <label htmlFor="candidates">No</label>

//     </div>
//     <div classNameName='names'>
//       <label htmlFor="password">Set Password : </label>
//       <input classNameName='each2' type="password" onChange={changeHandler} placeholder="Your Password" name="pass" value={val.pass} />
//     </div>
//     <br />
//     <div classNameName='names'>
//       <label htmlFor="email">Email : </label>
//       <input classNameName='each2' type="email" onChange={changeHandler} placeholder="Email" name="email" value={val.email} />
//       <button classNameName="button" style={{ marginRight: "600px" }} onClick={otphandler}> Get OTP</button>
//     </div>
//     <br />
//     <label htmlFor="guardian_phone">Mobile Number of Guardian :</label>
//     <input classNameName="each2" type="tel" onChange={changeHandler} placeholder="Mobile Number" name="gnumber" value={val.gnumber} />
//     <br />
//     <br />
//     <label htmlFor="guardian_mail">Email of guardian :</label>
//     <input classNameName="each2" type="email" onChange={changeHandler} placeholder="Email" name="gemail" value={val.gemail} />
//     <br />
//     <br />
//     <div classNameName='sec1'>Disability Information</div>
//     <div classNameName="signup_inputs_personalinfo">
//       <div classNameName='names'>
//         <label htmlFor="udid">UDID Number : </label>
//         <input classNameName='each2' type="text" onChange={changeHandler} placeholder="UDID Number" name="uid" value={val.uid} />
//       </div>
//       <br />
//       <label htmlFor="disability">Disability :</label>
//       {/* select tag for dropdown menu */}
{/* //       <select classNameName='each2' name="disability" id="disability" value={val.disability} onChange={changeHandler}>
//         <option value="Visual">Visual</option>
//         <option value="Hearing">Hearing</option>
//         <option value="Mobility">Mobility</option>
//         <option value="Cognitive">Cognitive</option>
//       </select>
//       <br />
//       <br />

//       <label htmlFor="assistive_requirements">Solutions Required</label>
//       <select classNameName="each2" name="solutions" id="solutions" value="solutions" onChange={changeHandler}>
//         <option value="WheelChair">WheelChair</option>
//         <option value="ScreenReader">ScreenReader</option>
//       </select>
//       <br />
//       <br />
//       <div classNameName='sec1'>Educational Background </div>
//       <div classNameName="signup_input_education">
//         <label htmlFor="institute_name">Name of Educational Institute :</label>
//         <input classNameName="each3" type="text" onChange={changeHandler} placeholder="Institute Name" name="institute" value={val.institute} />
//         <br />
//         <br />
//         <label htmlFor="degree">Highest Level of Education :</label>
//         <input classNameName="each3" type="text" onChange={changeHandler} placeholder="Educational Degree" name="degree" value={val.degree} />
//         <br />
//         <br />
//         <label htmlFor="skills">Skills :</label>
//         <select classNameName="each2" name="skills" id="skills" value={val.skills} onChange={changeHandler}>
//           <option value="Multilingual">Multilingual</option>
//           <option value="Typist">Typist</option>
//           <option value="Typist">Hardware</option>
//           <option value="Typist">Data Entry</option>
//           <option value="Tech Support">Tech Support</option>
//           <option value="Counselling">Counselling</option>
//           <option value="Back Office">Back Office</option>
//           <option value="IT">IT</option>
//         </select>
//         <br />
//       </div>
//     </div> */}

//     <br />
//     <button type="button" classNameName="buttons" onClick={nextInfo}>Next</button>

//   </div>
// </div>
