import { useReducer } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import reactLogo from '../../assets/react.svg';

export default function Page3() {
   const [checked2,setChecked2]=useState(false);
  const [checked,setChecked]=useReducer(
    (checked)=>!checked,false
  )
  return (
    <div>
      <h2>Welcome to Page 3</h2>
        <p>
            creating a controlled component
        </p>
        <hr />
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" 
          alt="React logo" />
        </a>
        <hr />

        <br />
        <input type="checkbox" 
        value={checked}
        name="checkbox"
         id="checkbox" 
         onChange={setChecked}
        //  onChange={
        //   setChecked((checked)=>!checked)
        //  }
         />
        <label 
        htmlFor="checkbox">
          {checked ? "checked" :"not checked"}</label>
        <br />
        
        <br />
        <Link to={"/"}>Home</Link>
        <br />
        <Link to={"/page4"}>Page #4</Link>
    </div>
  )
}
