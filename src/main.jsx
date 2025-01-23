// src/main.jsx

// styles
import "./styles/globals.css";

import { StrictMode, Suspense, lazy } from "react";
import { createRoot } from "react-dom/client";
// components
import { Loader } from "./components/Loader.jsx";

const App = lazy(() => import("./App.jsx"));

createRoot(document.getElementById("app")).render(
  <StrictMode>
    <Suspense fallback={<Loader />}>
      <App />
    </Suspense>
  </StrictMode>
);
