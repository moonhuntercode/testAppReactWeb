import { useState,useEffect } from 'react'
import reactLogo from './assets/react-lila.svg'
import deathprogrammer from './assets/halloween-programmer copia.png';
import './App.css'
import { useReducer } from 'react'
import { useRef } from 'react'
import Page2 from './views/page2/Page2'
import { Link } from 'react-router-dom'


function App() {
  
const txtTitle=useRef();
const hexColor=useRef();

const submit=(e)=>{
  e.preventDefault();
  const title=txtTitle.current.value;
  const color=hexColor.current.value;
  alert(`${title}, ${color}`);
  txtTitle.current.value="";
  hexColor.current.value="";
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
 ref={txtTitle}
 placeholder='color title..' name="text" 
 id="text" />

 <input
 type="color"
 ref={hexColor} name="color" 
 id="color" />
 <button>ADD COLOR</button>
 </form>
 <hr />
 <p>  i will use useRef now</p>
 <p>this is uncontrolled component</p>
 {/* this is a route to home */}
 <Link to={"/Page2"}>
  <button>page #2</button>
 </Link>
 <br /><br />
 <Link to={"/page3"}>
  <button>Page #3</button>
  </Link>

      </div>
        )
}
export default App