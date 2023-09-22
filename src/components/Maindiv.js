import React from 'react'
import Login from './Login';

export default function Maindiv() {
  return (
    <div>
      <Login/>
    </div>
  )
}

// import './App.css';
// import { useState } from 'react';
// function App() {
//   const [reg, setReg] = useState({ firstname: "", lastname: "", email: "", city: "", country: "India", Street: "", state: "", zip: "" ,comment:false,candidates:false,offer:false});
//   // console.log(reg);
  // function changeHandler(event) {
  //   const {name,value,checked,type} = event.target;
  //   setReg( (prev) =>({
  //     ...prev,[name]:type==="checkbox"?checked:value
  //   }))
  // }

  // function saveHandler(event)
  // {
  //   event.preventDefault();
  //   console.log(reg);
  // }
//   return (
//     <div>
//       <form action="" className="form_body">
//         <div className="each">
//           <label htmlFor="username">First name</label>
//           <br />
//           <input type="text" onChange={changeHandler} placeholder="first name" name="firstname" value={reg.firstname} />
//         </div>

//         <div className="each">
//           <label htmlFor="email">Last name</label>
//           <br />
//           <input type="email" onChange={changeHandler} placeholder="last name" name="lastname" value={reg.lastname} />
//         </div>

//         <div className="each">
//           <label htmlFor="Email">Email address</label>
//           <br />
//           <input type="text" onChange={changeHandler} placeholder="your email" name="email" value={reg.email} />
//         </div>

//         <div className="each">
//           <label htmlFor="Country">Country</label>
//           <br />
//           {/* select tag for dropdown menu */}
//           <select name="country" id="country" value={reg.country} onChange={changeHandler}>
//             <option value="India">India</option>
//             <option value="UnitedStates">United States</option>
//             <option value="Mexico">Mexico</option>
//             <option value="Brazil">Brazil</option>
//           </select>
//         </div>

//         <div className="each">
//           <label htmlFor="Street">Street address</label>
//           <br />
//           <input type="text" onChange={changeHandler} placeholder="Street Address" name="Street" value={reg.Street} />
//         </div>

//         <div className="each">
//           <label htmlFor="City">City</label>
//           <br />
//           <input type="text" onChange={changeHandler} placeholder="your City" name="city" value={reg.city} />
//         </div>

//         <div className="each">
//           <label htmlFor="State">State / Province</label>
//           <br />
//           <input type="text" onChange={changeHandler} placeholder="enter state" name="state" value={reg.state} />
//         </div>

//         <div className="each">
//           <label htmlFor="zip">ZIP / Postal code</label>
//           <br />
//           <input type="text" onChange={changeHandler} placeholder="your zip" name="zip" value={reg.zip} />
//         </div>

//         <div className="each">
//           <label htmlFor="byemail">By Email</label>
//           <br />
//           <div>
//             <input type="checkbox" onChange={changeHandler} placeholder="your zip" name="comment" checked={reg.comment} id="comment"/>
//             <label htmlFor="comment">Comments</label>
//           </div>
//           <div>
            
//             <input type="checkbox" onChange={changeHandler} placeholder="your zip" name="candidates" checked={reg.candidates} id="candidates"/>
//             <label htmlFor="candidates">Candidates</label>
//           </div>
//           <div>
//             <input type="checkbox" onChange={changeHandler} placeholder="your zip" name="offer" checked={reg.offer} id="offer" />
//             <label htmlFor="offer">Offers</label>
//           </div>
//         </div>
//         <button className="button" onClick={saveHandler}>Save</button>

//       </form>
//     </div>
//   );
// }

// export default App;
