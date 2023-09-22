import './App.css';
import Maindiv from './components/Maindiv';
// import {Routes,Route} from 'react-router-dom';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import SignupUser from './components/SignupUser';
import SignupRec from './components/SignupRec';
import Profile from './components/Profile';
import Editprofile from './components/Editprofile';
// import Notifications from './components/Notifications';
function App() {
  return (
    <>
      {/* <Maindiv/> */}
      <Routes>
        <Route exact path="/login" element = {<Maindiv/>}/>
        <Route exact path="/signupuser" element = {<SignupUser/>}/>
        <Route exact path="/signuprec" element = {<SignupRec/>}/>
        <Route exact path="/profile" element = {<Profile/>}/>
        <Route exact path="/edit" element = {<Editprofile/>}/>
        {/* <Route exact path="/notifications" element = {<Notifications/>}/> */}
      </Routes>
    </>
  );
}

export default App;
