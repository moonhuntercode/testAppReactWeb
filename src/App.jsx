import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Links from "./components/Links";

function App() {
  const [count, setCount] = useState(0);
  const msgStart = (a, b) => {
    console.log(a);
    alert(b.type);
  };
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <Links />
      <button onClick={(e) => msgStart("hola", e)}>mensaje</button>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
      </div>
    </>
  );
}

export default App;
