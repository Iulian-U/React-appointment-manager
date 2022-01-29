import "../style/css/appointments_form.css";
import React from "react";

export default function AppointmentsForm() {
  return (
    <div className="form_container">
      <form className="appointments_form">
        <div>
          <label className="title_container">
            <span>Appointment Title</span>
            <input type="text" placeholder="Enter Title" />
          </label>
        </div>
        <div>
          <label className="location_container">
            <span>Location</span>
            <input type="text" placeholder="Enter Location" />
          </label>
        </div>
      </form>
    </div>
  );
}
