import "../style/css/modal.css";
import React from "react";

export default function Modal({ title, handleClose }) {
  return (
    <div className="modal_backdrop">
      <div className="modal">
        <div className="modal_header">
          <div className="modal_title"> {title}</div>
          <button className="close_modal_btn" onClick={handleClose}>
            X
          </button>
        </div>
        <hr />
        <div className="modal_content"></div>
      </div>
    </div>
  );
}
