// src/App.jsx
import "./App.css";
import AppRoutes from "./routes/Routes";
import { BrowserRouter as Router } from "react-router";

function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}

export default App;
