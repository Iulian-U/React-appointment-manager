import "../style/css/appointments.css";
import React from "react";

export default function appointments() {
  return (
    <div className="appointments_component_container">
      <div className="btn_container">
        <button>Add Appointment</button>
      </div>
      <hr />
      <div className="appointments_container"></div>
    </div>
  );
}
