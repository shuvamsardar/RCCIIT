import React from 'react'
import { useNavigate } from 'react-router-dom'
import { BsPersonCircle } from 'react-icons/bs';
import "./Profile.css";
export default function Profile() {

    const navigate = useNavigate();
    function handlelogout() {

    }

    function handleEdit() {
        navigate("/edit");
    }
    return (
        <div>
            <div className='my_profile555'>
                <div className='my_name555'>
                    My Profile
                </div>
                <div className='hi555'>
                    Hi Pronay
                    <BsPersonCircle className='logo555' />
                </div>
            </div>

            <div>
                <div className='outer_card555'>
                    <div className='carding555'>
                        <div className='profile_card555'>
                            <div>
                                <img src="https://www.oracle.com/a/ocom/img/rh03v3fa-emp-workspace.jpg" className='image_style555' alt="employee" />
                            </div>
                            <div>
                                <h3 className='login_name555'>Pronay Gupta</h3>
                                <p className='email_name555'> pronay32@gmail.com</p>
                                <p>System Engineer</p>
                            </div>
                        </div>
                        <div className="button555">
                            <input type="submit" value="Edit"  onClick={handleEdit}/>
                        </div>
                    </div>
                </div>
                <div className="button555">
                    <input type="submit" value="Logout" />
                </div>
            </div>


        </div>
    )
}
