import React from "react";
import { Topnav, Navbar, Reviews, Service, Contact } from "./components/index";

function App() {
  return (
    <div>
      {/* <Topnav /> */}
      <Navbar />
      <Reviews />
      <Service />
      <Contact />
    </div>
  );
}

export default App;
