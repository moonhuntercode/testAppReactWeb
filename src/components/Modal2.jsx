import React, { useRef, useState } from "react";
import PropTypes from "prop-types";

const Modal2 = ({ children }) => {
  const modalRef = useRef < HTMLDialogElement > null;

  return (
    <dialog ref={modalRef} className="modal">
      {children}
    </dialog>
  );
};
export default Modal2;

// Modal.propTypes = {
//     children: PropTypes.node.isRequired;
// }
Modal.propTypes = {
  children: PropTypes.node.isRequired,
};
