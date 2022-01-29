import "./style/css/reset.css";
import "./style/css/App.css";
import React from "react";
import Header from "./components/header";
import Appointments from "./components/appointments";

function App() {
  return (
    <div className="App">
      <Header title="Appointment Manager" subtitle="Add and manage your appointments" />
      <Appointments />
    </div>
  );
}

export default App;
