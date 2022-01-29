import "../style/css/appointments.css";
import React, { useState } from "react";
import Modal from "../components/Modal";

export default function Appointments() {
  const [showModal, setShowModal] = useState(false);
  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <div className="appointments_component_container">
      <div className="btn_container">
        <button onClick={() => setShowModal(true)}>Add Appointment</button>
      </div>
      <hr />
      <div className="appointments_container"></div>
      {showModal && (
        <Modal title="Add Appointment" handleClose={handleClose}>
          {" "}
        </Modal>
      )}
    </div>
  );
}
