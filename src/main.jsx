// src/main.jsx

// styles
import "./index.css";

import { StrictMode, Suspense, lazy } from "react";
import { createRoot } from "react-dom/client";
// components
import { Loader } from "./components/Loader.jsx";

const App = lazy(() => import("./App.jsx"));

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Suspense fallback={<Loader />}>
      <App />
    </Suspense>
  </StrictMode>
);
