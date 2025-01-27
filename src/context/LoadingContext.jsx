// src/context/LoadingContext.jsx
import React, { createContext, useState, useContext } from "react";

const LoadingContext = createContext();

export const useLoadingContext = () => useContext(LoadingContext);

export const LoadingProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [totalImageCount, setTotalImageCount] = useState(0);
  const [loadedImages, setLoadedImages] = useState(new Set());

  const markImageAsLoaded = (imageId) => {
    setLoadedImages((prevLoadedImages) => {
      if (prevLoadedImages.has(imageId)) return prevLoadedImages;
      const newLoadedImages = new Set(prevLoadedImages);
      newLoadedImages.add(imageId);
      return newLoadedImages;
    });
  };

  const setTotalImageCountSafe = (count) => {
    // Asegurarnos de que no se setee el mismo número de imágenes
    if (totalImageCount !== count) {
      setTotalImageCount(count);
    }
  };

  return (
    <LoadingContext.Provider
      value={{
        loading,
        setLoading,
        progress,
        setProgress,
        error,
        setError,
        totalImageCount,
        setTotalImageCount: setTotalImageCountSafe,
        markImageAsLoaded,
        loadedImages,
      }}
    >
      {children}
    </LoadingContext.Provider>
  );
};
