import React from "react";
import ReactDom from "react-dom";

const MODAL_STYLES = {
  position: "fixed",
  top: "50%",
  left: "50%",
  zIndex: 1000,
  width: "60%",
  // padding: "20px",
  transition: "2s ease-in",
  backgroundColor: "#FFF",
  transform: "translate(-50%, -50%)",
};

const OVERLAY_STYLES = {
  transition: "2s ease-in",
  top: 0,
  right: 0,
  left: 0,
  bottom: 0,
  zIndex: 1000,
  position: "fixed",
  backgroundColor: "rgb(219, 218, 218)",
};

const close = {
  position: "absolute",
  right: "11px",
  bottom: "11px",
};

const info = {
  margin: "22px",
  fontSize: "20px",
  marginBottom: "50px",
};

const Modal = ({ open, children, onClose }) => {
  if (!open) return null;

  return ReactDom.createPortal(
    <>
      <div style={OVERLAY_STYLES} />
      <div style={MODAL_STYLES}>
        <button style={close} onClick={onClose}>
          Close
        </button>
        <div style={info} className="info">
          {children}
        </div>
      </div>
    </>,
    document.getElementById("portal")
  );
};

export default Modal;
