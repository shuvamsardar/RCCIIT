import './App.css';
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

            <Route exact path="/" element={<Home />} />
            
            <Route exact path="/jobs" element={<AllJobs />} />

            <Route exact path="/courses" element={<Resources />} />

       </Routes>
    </div>
  );
}

export default App;
