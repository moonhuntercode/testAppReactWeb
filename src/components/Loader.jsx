// src/components/Loader.jsx
import { useEffect } from "react";
import "../styles/loader.css";
import { useLoadingContext } from "../context/LoadingContext.jsx";
import { fakeDbofLinks } from "../assets/links_db";
import PropTypes from "prop-types";

const isImageLoaded = (src) => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.src = src;
    img.onload = () => resolve(true); // Resuelve correctamente si la imagen se carga
    img.onerror = (error) => reject(new Error(`Error al cargar la imagen: ${src}`)); // Rechaza con un mensaje de error explícito
  });
};

const addDelay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const Loader = ({ additionalDelay = 0 }) => {
  const { loading, setLoading, error, setError, progress, setProgress } =
    useLoadingContext();

  useEffect(() => {
    const loadResources = async () => {
      try {
        console.log("Iniciando carga de recursos...");

        // Cargar imágenes
        const imagePromises = fakeDbofLinks.map((link) =>
          isImageLoaded(link.path).catch((error) => {
            console.error(`Error al cargar la imagen ${link.path}:`, error);
            setError(`Error al cargar la imagen: ${link.path}`); // Registrar el error en el contexto
            return false; // Ahora, retornamos false para indicar que falló la carga de esa imagen
          })
        );
        const results = await Promise.all(imagePromises);

        if (results.every((res) => res === true)) {
          console.log("Todas las imágenes se cargaron correctamente.");
          setLoading(false);
        } else {
          console.error("Algunas imágenes no se pudieron cargar.");
          setError("Algunas imágenes no se pudieron cargar.");
        }

        // Simulamos una barra de progreso
        let progressInterval = setInterval(() => {
          setProgress((prev) => {
            if (prev < 100) return prev + 1;
            clearInterval(progressInterval);
            return 100;
          });
        }, 50);

        if (additionalDelay > 0) {
          await addDelay(additionalDelay);
        }
      } catch (err) {
        console.error("Error al cargar los recursos:", err);
        setError("Hubo un problema al cargar los recursos.");
      }
    };

    loadResources();
  }, [additionalDelay, setLoading, setError, setProgress]);

  // Control de errores
  if (error) {
    return <div className="loader-error">{error}</div>;
  }

  // UI de carga
  return loading ? (
    <div className="loader-container">
      <h1>Cargando...</h1>
      <div className="loader-bar">
        <div className="loader-progress" style={{ width: `${progress}%` }} />
      </div>
      <p>{progress}%</p>
    </div>
  ) : (
    <div className="loader-complete">
      <h1>¡Carga Completa!</h1>
    </div>
  );
};

Loader.propTypes = {
  additionalDelay: PropTypes.func,
};
export default Loader;
