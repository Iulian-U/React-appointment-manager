import React from "react";
import "../style/css/appointments_list.css";

export default function AppointmentsList({ events, handleClick }) {
  return (
    <div className="appointments_card_container">
      {events.map((event, index) => (
        <div className="appointment_card">
          <div className="card_content" key={event.id}>
            <span className="card_title">{event.title}</span>

            <span className="card_location_container">
              Location: <span className="card_location">{event.location}</span>
            </span>
            <span className="card_date_container">
              Date: <span className="card_date">{event.date}</span>
            </span>
            <span className="card_time_container">
              Time: <span className="card_time">{event.time}</span>
            </span>

            <span className="card_description_container">
              {" "}
              <span className="card_description"> Description:</span> {event.description}
            </span>
            <button className="card_btn" onClick={() => handleClick(event.id)}>
              Delete Appointment
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
