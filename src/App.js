import "./style/css/reset.css";
import "./style/css/App.css";
import React from "react";
import Header from "./components/Header";
import AppointmentsDisplay from "./components/AppointmentsDisplay";

function App() {
  return (
    <div className="App">
      <Header title="Appointment Manager" subtitle="Add or view your appointments" />
      <AppointmentsDisplay />
    </div>
  );
}

export default App;
