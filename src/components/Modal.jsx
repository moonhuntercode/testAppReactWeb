import { useRef, useEffect } from "react";
import "../styles/modal.css";
import PropTypes from "prop-types";
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
    // document.querySelector(".modalContainer button").addEventListener("click", () => {
    //   console.log("autofocus!");
    // });

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
          <button
            onClick={() => onClose()}
            className="toggleModalButton"
            style={{ position: "fixed", top: "20px", right: "20px", zIndex: 10000 }}
          >
            X
          </button>
        </div>
      )}
    </>
  );
}

// correct code for prop-types
Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
};
