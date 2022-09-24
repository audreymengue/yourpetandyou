import React from "react";
import { Topnav, Navbar, Reviews, Service, Contact } from "./components/index";
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <div>
      {/* <Topnav /> */}
      <Navbar />
      {/* <Reviews />
      <Service />
      <Contact /> */}
    </div>
  );
}

export default App;
