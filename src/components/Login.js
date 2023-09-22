import React from 'react'
import { useState } from 'react';
import "./Login.css";
import email_icon from './Assets/email.png';
import password_icon from './Assets/password.png';
// import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
export default function Login() {
  const [reg, setReg] = useState({ email: "", password: "" });
  const [action, setAction] = useState("User");

  const navigate = useNavigate();

  function changeHandler(event) {
    setReg((prev) => ({
      ...prev, [event.target.name]: event.target.value
    }))
  }

  function saveHandler(event) {
    event.preventDefault();
    console.log(reg);
  }

  function stateHandler() {
    // console.log("clicked");
    // {action === "User"? 
    // <li>
    //   <Link to="/signupuser">signupuser</Link>
    // </li> 
    // :
    // <li>
    //   <Link to="/signuprec">signuprec</Link>
    // </li> 
    // }
    {
      action === "User"
      ?
      navigate("/signupuser")
      :
      navigate("/signuprec")
    }
  }

  return (
    <div>
      <div className="container555">
        <div className="header555">
          <p className='text555'>Login</p>
          <div />

          {/* <div class="btn-container">
          <label class="switch btn-color-mode-switch">
            <input type="checkbox" name="color_mode" id="color_mode" value="1"/>
            <label for="color_mode" data-on="Recruiter" data-off={action} class="btn-color-mode-switch-inner"></label>
          </label>
       </div> */}
          <div className='flex bg-blue-300 p-1 gap-x-1 my-6 rounded-full max-w-max'>
            <button className={`${action === "User" ? "bg-blue-500 text-red" : "bg-transparent text-red-100"}py-2 px-5 rounded-full transition-all duration-200`} onClick={() => setAction("User")}>
              User
            </button>

            <button className={`${action === "Recuiter" ? "bg-blue-500 text-red" : "bg-transparent text-red-100"}py-2 px-5 rounded-full transition-all duration-200`} onClick={() => setAction("Recuiter")}>
              Recuiter
            </button>
          </div>

          <div className="inputs555">
            <div className="each555">
              <img src={email_icon} alt='email-icon' />
              <input type="email" onChange={changeHandler} placeholder="Email" name="email" value={reg.email} />
            </div>

            <div className="each555">
              <img src={password_icon} alt='password-icon' />
              <input type="password" onChange={changeHandler} placeholder="6 digit Password" name="password" value={reg.password} />
            </div>

            <div className='no_account555'>Dont have an Account? <span onClick={stateHandler}>Sign Up</span></div>

            {/* <button type="button" class="btn btn-primary" onClick={saveHandler}>Save</button> */}
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={saveHandler}>
              Save
            </button>

            {/* <img src="https://d31bgfoj87qaaj.cloudfront.net/blog/wp-content/uploads/2022/09/shutterstock_2101929370-300x169.jpg" alt="baccha"/> */}
          </div>
        </div>
      </div>
    </div>
  )
}
