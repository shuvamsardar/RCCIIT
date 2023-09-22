import React from 'react'
import { useState } from 'react';
import { BsFillTrash3Fill } from "react-icons/bs";
import "./Editprofile.css";
export default function Editprofile() {
    const [val, setVal] = useState({ firstname: "", lastname: "", email: "", number: "", pass: "", pass2: "" });
    function changeHandler(event) {
        setVal((prev) => ({
            ...prev, [event.target.name]: event.target.value
        }))
    }
    function nextInfo(event) {
        event.preventDefault();
        console.log(val);
        // <SignupUser2/>
        // navigate("/signupuser2");
    }
    function otphandler() {

    }
    return (
        <div>
            <div className="contained555">
                <div className="title555">Edit Profile</div>
                <div className="titles555">Personal Information</div>
                <div className="content555">
                    <form>
                        <div className="user-details555">
                            <div className="input-box555">
                                <span className="details555">Full Name</span>
                                <input type="text" placeholder="Enter your name" required name="firstname" value={val.firstname} onChange={changeHandler} />
                            </div>
                            <div className="input-box555">
                                <span className="details555">Last Name</span>
                                <input type="text" placeholder="Enter your username" required name="lastname" value={val.lastname} onChange={changeHandler} />
                            </div>
                            <div className="input-box555">
                                <span className="details555">Email</span>
                                <input type="text" placeholder="Enter your email" required name="email" value={val.email} onChange={changeHandler} />
                                <span onClick={otphandler} className='otp555'>Get OTP</span>
                            </div>
                            <div className="input-box555">
                                <span className="details555">Phone Number</span>
                                <input type="text" placeholder="Enter your number" required name="number" value={val.number} onChange={changeHandler} />
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
                                <span className="details555">Date of Birth</span>
                                <input type="date" placeholder="Enter your number" required name="uid" value={val.uid} onChange={changeHandler} />
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
                                <select classNameName="each2555" name="solutions" id="solutions" onChange={changeHandler} value={val.solutions}>
                                    <option value="WheelChair">WheelChair</option>
                                    <option value="ScreenReader">ScreenReader</option>
                                </select>
                            </div>
                            <div className="input-box555">
                                <span className="details555">Skills :</span>
                                <select classNameName="each2555" name="skills" id="skills" value={val.skills} onChange={changeHandler}>
                                    <option value="Multilingual">Multilingual</option>
                                    <option value="Typist">Typist</option>
                                    <option value="Hardware">Hardware</option>
                                    <option value="Data Entry">Data Entry</option>
                                    <option value="Tech Support">Tech Support</option>
                                    <option value="Counselling">Counselling</option>
                                    <option value="Back Office">Back Office</option>
                                    <option value="IT">IT</option>
                                </select>
                            </div>
                        </div>

                        <div className='delete555'>
                            <div>
                                <BsFillTrash3Fill className='dim555' />
                            </div>
                            <div>
                                <h3 style={{ fontWeight: "bold" }}>Delete Account</h3>
                                <h6 style={{ marginTop: "10px" }}>Would you like to delete account?</h6>
                                <h6 style={{ marginBottom: "10px" }}>This account contains Paid courses.Deleting your account will rove all content.</h6>
                                <i>I want to delete my account</i>
                            </div>
                        </div>

                        <div className='huru555'>
                            <div className="button555">
                                <input type="submit" value="Save" onClick={nextInfo} />
                            </div>
                            <div className="button555">
                                <input type="submit" value="Cancel" onClick={nextInfo} />
                            </div>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    )
}


{/* <div className="containers">
                <h3 style={{fontWeight:"bold",fontSize:"25px",marginBottom:"20px"}}>Profile Information</h3>
                <div className="signup_inputs_personalinfo">
                    <div className='name_filed'>
                        <label htmlFor="your_name">Your Name:</label>
                        <input className='each1' type="text" required onChange={changeHandler} placeholder="Fist Name" name="firstname" value={val.firstname} />
                        <input className='each2' type="text" required onChange={changeHandler} placeholder="Last Name" name="lastname" value={val.lastname} />
                    </div>
                    <br />


                    <div className='names'>
                        <label htmlFor="phone">Mobile Number : </label>
                        <input className='each2' type="tel" onChange={changeHandler} placeholder="Mobile Number" name="number" value={val.number} />
                    </div>
                    <br />

                    <div className='names'>
                        <label htmlFor="password">Set Password : </label>
                        <input className='each2' type="password" onChange={changeHandler} placeholder="Your Password" name="pass" value={val.pass} />
                    </div>
                    <br />
                    <div className='names'>
                        <label htmlFor="password">Confirm Password : </label>
                        <input className='each2' type="password" onChange={changeHandler} placeholder="Confirm Password" name="pass2" value={val.pass2} />
                    </div>
                    <br />
                    <div className='names'>
                        <label htmlFor="email">Email : </label>
                        <input className='each2' type="email" onChange={changeHandler} placeholder="Email" name="email" value={val.email} />
                        {/* <button className="button" style={{marginRight:"600px"}} onClick={otphandler}> Get OTP</button> */}
//                 </div>
//                 <br />
//                 <div style={{display:"flex",gap:"10px"}}>
//                     <button type="button" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={nextInfo}>Cancel</button>
//                     <button type="button" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={nextInfo}>Save</button>
//                 </div>
//             </div>
// </div> */}