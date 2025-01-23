// src/components/ErrorBoundary.jsx
import { useState, useEffect } from "react";
import PropTypes from "prop-types";

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

  // Usamos el hook useEffect para manejar los cambios en el estado de error
  useEffect(() => {
    if (hasError && errorInfo) {
      // Si hay un error, logueamos el error a un servicio de logs
      logErrorToService(errorInfo.error, errorInfo.info);
      console.error("Error capturado por ErrorBoundary:", errorInfo);
    }
  }, [hasError, errorInfo]); // Se ejecuta cuando cambia el estado de `hasError` o `errorInfo`

  // Captura de errores simulada: establecemos el estado de `hasError` y `errorInfo`
  // Si tienes una función para capturar errores en los hijos, esta es donde iría.
  // En lugar de componentDidCatch, simplemente establecemos `hasError` manualmente
  const handleError = (error, errorInfo) => {
    setHasError(true); // Cambia el estado a 'true' si ocurre un error
    setErrorInfo({ error, info: errorInfo }); // Almacena la información del error
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

  // Si no hay error, renderizamos los hijos normalmente
  return children;
};

// Validamos que 'children' es una propiedad requerida usando PropTypes
// Esto asegura que 'children' siempre será un nodo válido
ErrorBoundary.propTypes = {
  children: PropTypes.node.isRequired, // Asegura que 'children' sea un nodo válido
};

// Exportamos el componente para ser usado en otras partes de la aplicación
export default ErrorBoundary;
