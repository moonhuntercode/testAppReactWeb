import { useRef } from "react";
import PropTypes from "prop-types";

const Modal = ({ children }) => {
  const modalRef = useRef < HTMLDialogElement > null;
  return (
    <dialog ref={modalRef} className="modal">
      {children}
    </dialog>
  );
};
export default Modal;

// Modal.propTypes = {
//     children: PropTypes.node.isRequired;
// }
Modal.propTypes = {
  children: PropTypes.node.isRequired,
};
