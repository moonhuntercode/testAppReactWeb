// src/pages/Links.jsx
import { useEffect, useRef } from "react";
import { useLoadingContext } from "../context/LoadingContext";
import { fakeDbofLinks } from "../assets/links_db";
import ErrorBoundary from "../components/ErrorBoundary";
import PropTypes from "prop-types";
import "../styles/links.css";

const Link = ({ name, url, path, onRenderComplete }) => {
  useEffect(() => {
    onRenderComplete(); // Notifica al componente principal cuando este 'Link' se ha renderizado
  }, [onRenderComplete]);

  return (
    <li className="link-item">
      <a
        className="link-item__anchor"
        href={url}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img className="link-item__image" src={path} alt={name} />
        <span className="link-item__name">{name}</span>
      </a>
    </li>
  );
};

export default function Links() {
  const {
    setLoading,
    setError,
    markImageAsLoaded,
    setTotalImageCount,
    progress,
    loading,
    error,
  } = useLoadingContext();

  const renderedLinksRef = useRef(0); // Usamos un ref para mantener el contador sin causar renderizados

  const totalLinks = fakeDbofLinks.length;

  useEffect(() => {
    const loadImages = async () => {
      try {
        const imagePromises = fakeDbofLinks.map(
          (link) =>
            new Promise((resolve, reject) => {
              const img = new Image();
              img.src = link.path;

              img.onload = () => {
                markImageAsLoaded(link.id);
                resolve(true);
              };

              img.onerror = () => {
                reject(new Error(`Error al cargar la imagen: ${link.path}`));
              };
            })
        );

        setTotalImageCount(fakeDbofLinks.length); // Establecer el total solo una vez

        await Promise.all(imagePromises);

        setLoading(false);
      } catch (err) {
        setError("Hubo un problema al cargar las imágenes.");
        console.error("Error en la carga de imágenes:", err);
      }
    };

    loadImages();
  }, [setError, setLoading, setTotalImageCount, markImageAsLoaded]);

  const handleLinkRenderComplete = () => {
    // Actualizamos solo el ref, no el estado
    renderedLinksRef.current += 1;
  };

  // Verificamos si todos los enlaces se han renderizado
  useEffect(() => {
    if (renderedLinksRef.current === totalLinks) {
      console.log("¡Todos los enlaces se han renderizado!");
    }
  }, [renderedLinksRef.current, totalLinks]); // Esta comprobación solo se realiza una vez

  if (loading) {
    return (
      <ErrorBoundary>
        <div>
          <h1>Enlaces</h1>
          <div>Progreso de carga: {progress}%</div>
          {progress !== 100 ? (
            <div className="loading-container">
              Cargando imágenes...
              <div className="progress-bar">
                <div style={{ width: `${progress}%` }} />
              </div>
            </div>
          ) : null}
        </div>
      </ErrorBoundary>
    );
  }

  return (
    <div>
      <h1>¡Todas las imágenes han sido cargadas exitosamente!</h1>
      <ul className="link-list">
        {fakeDbofLinks.map((link) => (
          <Link
            key={link.id}
            name={link.name}
            url={link.url}
            path={link.path}
            onRenderComplete={handleLinkRenderComplete}
          />
        ))}
      </ul>
    </div>
  );
}
//
Link.propTypes = {
  name: PropTypes.node.isRequired,
  url: PropTypes.node.isRequired,
  path: PropTypes.node.isRequired,
  onRenderComplete: PropTypes.func.isRequired,
};
