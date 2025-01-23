// src/App.jsx
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Links from "./components/Links";
import Modal from "./components/Modal";

function App() {
  const [count, setCount] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(true); // Inicializar en true para que aparezca automáticamente

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <h2>Welcome to the Modal</h2>
        <p>This is a reusable modal component!</p>
        <button onClick={closeModal}>Close Modal</button>
      </Modal>
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
      <button onClick={openModal}>Open Modal</button>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
      </div>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo eius, magni officia,
      cupiditate id corrupti esse laboriosam vero fuga?
    </>
  );
}

export default App;
