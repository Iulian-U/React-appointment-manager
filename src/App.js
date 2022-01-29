import "./style/css/reset.css";
import "./style/css/App.css";
import React from "react";
import Header from "./components/Header";
import Appointments from "./components/Appointments";

function App() {
  return (
    <div className="App">
      <Header title="Appointment Manager" subtitle="Add and manage your appointments" />
      <Appointments />
    </div>
  );
}

export default App;
