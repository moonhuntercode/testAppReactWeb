import { useRef, useEffect, useState } from "react";
import "../styles/modal.css";

export default function Modal({ children, onClose, isOpen }) {
  const elementRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape" && isOpen) {
        onClose();
      }
    };

    const handleClickOutside = (event) => {
      if (elementRef.current && !elementRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  return (
    <>
      {isOpen && (
        <div className="modalBackdrop" role="dialog" aria-modal="true">
          <section className="modalContainer" ref={elementRef} tabIndex="-1">
            {children}
          </section>
        </div>
      )}
      <button
        onClick={() => onClose()}
        className="toggleModalButton"
        style={{ position: "fixed", top: "20px", right: "20px", zIndex: 10000 }}
      >
        Close Modal
      </button>
    </>
  );
}
