import "../style/css/appointments_display.css";
import React, { useState } from "react";
import Modal from "./Modal";
import AppointmentsList from "./AppointmentsList";
import AppointmentsForm from "./AppointmentsForm";

export default function Appointments() {
  //MODAL
  const [showModal, setShowModal] = useState(false);
  const handleClose = () => {
    setShowModal(false);
  };

  //APPOINTMENTS LIST
  const [events, setEvents] = useState([]);

  const addEvent = (event) => {
    setEvents((prevEvents) => {
      return [...prevEvents, event];
    });
    setShowModal(false);
  };

  const handleClick = (id) => {
    setEvents((prevEvents) => {
      return prevEvents.filter((event) => {
        return id !== event.id;
      });
    });
  };

  return (
    <div className="appointments_component_container">
      <div className="btn_container">
        <button onClick={() => setShowModal(true)}>Add Appointment</button>
      </div>
      <hr />
      <div className="appointments_container">
        <AppointmentsList events={events} handleClick={handleClick} />
      </div>
      {showModal && (
        <Modal title="Add Appointment" content={<AppointmentsForm addEvent={addEvent} />} handleClose={handleClose}>
          {" "}
        </Modal>
      )}
    </div>
  );
}
