// src/components/ErrorBoundary.jsx
import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useLoadingContext } from "../context/LoadingContext"; // Asegúrate de la ruta correcta

// Simulación de un servicio externo para logs (por ejemplo, Sentry)
const logErrorToService = (error, errorInfo) => {
  // Aquí podrías enviar los detalles del error a un servicio como Sentry
  console.error("Enviando error a un servicio de logs:", error, errorInfo);
};

// El componente ErrorBoundary actúa como un contenedor para capturar errores de sus componentes hijos
const ErrorBoundary = ({ children }) => {
  // Estado que indica si hubo un error
  const [hasError, setHasError] = useState(false);
  // Estado para almacenar información sobre el error, como el stack trace
  const [errorInfo, setErrorInfo] = useState(null);
  const { setError } = useLoadingContext(); // Accedemos al contexto para reportar el error globalmente

  // Captura de errores: Cuando ocurre un error en un componente hijo, se llama esta función
  const handleError = (error, errorInfo) => {
    setHasError(true); // Cambia el estado a 'true' si ocurre un error
    setErrorInfo({ error, info: errorInfo }); // Almacena la información del error
    logErrorToService(error, errorInfo); // Enviamos el error al servicio de logs
    setError("Algo salió mal con la carga de los enlaces."); // Actualiza el contexto con el error
  };

  // Si hay un error, mostramos un mensaje amigable para el usuario
  if (hasError) {
    return (
      <div
        style={{
          padding: "20px",
          textAlign: "center",
          backgroundColor: "#f8d7da",
          color: "#721c24",
          border: "1px solid #f5c6cb",
          borderRadius: "5px",
        }}
      >
        <h2>¡Algo salió mal!</h2>
        <p>Se produjo un error inesperado. Intenta recargar la página.</p>
        {errorInfo && <pre>{errorInfo.info.componentStack}</pre>}
        <button
          onClick={() => window.location.reload()}
          style={{ marginTop: "10px", padding: "8px 15px", cursor: "pointer" }}
        >
          Recargar página
        </button>
      </div>
    );
  }

  // Intentamos renderizar los hijos, si ocurre un error, lo atrapamos
  try {
    return children;
  } catch (error) {
    handleError(error, error.info);
    return null; // Si hubo un error, no renderizamos nada
  }
};

// Validamos que 'children' es una propiedad requerida usando PropTypes
ErrorBoundary.propTypes = {
  children: PropTypes.node.isRequired, // Asegura que 'children' sea un nodo válido
};

// Exportamos el componente para ser usado en otras partes de la aplicación
export default ErrorBoundary;
