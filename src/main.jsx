// src/main.jsx
import React, { StrictMode, Suspense, lazy } from "react";
import { createRoot } from "react-dom/client";
import { LoadingProvider, useLoadingContext } from "./context/LoadingContext"; // Asegúrate de la ruta correcta
import Loader from "./components/Loader.jsx";

const App = lazy(() => import("./App.jsx"));

createRoot(document.getElementById("app")).render(
  <StrictMode>
    <LoadingProvider>
      <Suspense fallback={<Loader />}>
        <App />
      </Suspense>
    </LoadingProvider>
  </StrictMode>
);
