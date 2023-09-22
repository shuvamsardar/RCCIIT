import './App.css';
import Maindiv from './components/Maindiv';
// import {Routes,Route} from 'react-router-dom';
import SignupUser from './components/SignupUser';
import SignupRec from './components/SignupRec';
import Profile from './components/Profile';
import Editprofile from './components/Editprofile';
// import Notifications from './components/Notifications';
import {Routes,Route} from "react-router-dom"
import Navbar from './components/Navbar';
import Home from "./container/Home";
import AllJobs from "./container/AllJobs"
import Resources from './container/Resources';

import { useState } from 'react';



function App() {
  const [isLoggedIn,setLoggedin]=useState(false);
  
  return (
     <div className="App">
     <Navbar isLoggedIn={isLoggedIn} />
     
      <Routes>
        <Route exact path="/login" element = {<Maindiv/>}/>
        <Route exact path="/signupuser" element = {<SignupUser/>}/>
        <Route exact path="/signuprec" element = {<SignupRec/>}/>
        <Route exact path="/profile" element = {<Profile/>}/>
        <Route exact path="/edit" element = {<Editprofile/>}/>
        {/* <Route exact path="/notifications" element = {<Notifications/>}/> */}
         <Route exact path="/" element={<Home />} />
         <Route exact path="/jobs" element={<AllJobs />} />
         <Route exact path="/courses" element={<Resources />} />

       </Routes>
    </div>

  );
}

export default App;
