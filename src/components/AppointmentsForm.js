import "../style/css/appointments_form.css";
import React, { useState } from "react";

export default function AppointmentsForm({ addEvent }) {
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [description, setDescription] = useState("");

  //FUNCTION THAT RESET THE FORM VALUES
  const resetForm = () => {
    setTitle("");
    setLocation("");
    setDate("");
    setTime("");
    setDescription("");
  };

  //FUNCTION THAT FIRES ON FORM SUBMIT
  const handleSubmit = (e) => {
    e.preventDefault();
    //EVENT FUNCTION
    const event = {
      title: title,
      location: location,
      date: date,
      time: time,
      description: description,
      id: Math.floor(Math.random() * 10000),
    };
    console.log(event);
    addEvent(event);
    resetForm();
  };

  return (
    <div className="form_container">
      <form onSubmit={handleSubmit}>
        <div>
          <label className="title_container">
            <span>Appointment Title</span>
            <input type="text" placeholder="Enter Title" onChange={(e) => setTitle(e.target.value)} value={title} />
          </label>
        </div>
        <div>
          <label className="location_container">
            <span>Location</span>
            <input type="text" placeholder="Enter Location" onChange={(e) => setLocation(e.target.value)} value={location} />
          </label>
        </div>
        <div className="date_time_container">
          <label className="date_container">
            <span>Date</span>
            <input type="date" onChange={(e) => setDate(e.target.value)} value={date} />
          </label>
          <label className="time_container">
            <span>Time</span>
            <input type="time" onChange={(e) => setTime(e.target.value)} value={time} />
          </label>
        </div>
        <div>
          <label className="description_container">
            <span>Description</span>
            <textarea cols="60" rows="5" maxLength="150" onChange={(e) => setDescription(e.target.value)} value={description}></textarea>
          </label>
        </div>
        <div className="btn_container">
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
}
