import { useState } from "react";
import { useRef } from "react";
import { Link } from "react-router-dom";
import deathprogrammer from '../../assets/halloween-programmer copia.png';
import reactLogo from '../../assets/react.svg';

export default function Page2() {
 const [title,setTitle]=useState("");
 const [color,setColor]=useState("#000");
  
  const submit=(e)=>{
    e.preventDefault();
    alert(`${title}, ${color}`);
    setTitle("");
    setColor("#000");
  }

  return (
    <div className="App">      
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" 
          alt="React logo" />
        </a>
<br />
        <img id='deathprogrammer' src={deathprogrammer} alt="deathprogrammer" />
<h2>Welcome to my React Project</h2>
<p>mood:halloween</p>

 {/* //END PORTADA---------- */}
        <br /><br /> <br />

 <form onSubmit={submit}>
 <input type="text"
 value={title}
 onChange={(event)=>{
  setTitle(event.target.value)
 }

 }
 placeholder='color title..' name="text" 
 id="text" />

 <input
 type="color"
 value={color}
 onChange={
  (event)=>setColor(event.target.value)
 }
 id="color" />
 <button>ADD COLOR</button>
 </form>
      <hr />
      <p>this is the way for create 
        a new route with new version
        of react-router dom!
      </p>
      <Link to={"/"}>Go Back!</Link>
      <br />  
      <Link to={"/page3"}>Page #3</Link>
    </div>

  )
}
