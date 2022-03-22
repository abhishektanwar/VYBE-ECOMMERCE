import React, { useContext, useRef } from "react";
import { AuthDialogContext } from "../../Contexts/AuthDialogContext";
import { useAuthDialog } from "../../Contexts/AuthDialogContext/useAuthDialog";
import "./modal-wrapper.css";
const ModalWrapper = ({ children }) => {
  const modalRef = useRef();
  const { showModal, setShowModal } = useContext(AuthDialogContext);
  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };
  return showModal ? (
    <div className="modal-background" onClick={closeModal} ref={modalRef}>
      {/* <div className="modal-wrapper"> */}
        {children}
      {/* </div> */}
      <button
        className="modal-close-button"
        onClick={() => setShowModal(false)}
      >
        X
      </button>
    </div>
  ) : null;
};

export default ModalWrapper;
