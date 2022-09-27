import React from "react";
import {Navbar, Footer} from "./components/index";
import { Route, Routes } from "react-router-dom";
import { Addmaster, Newsouvenirs, Allsouvenirs, Home } from "./pages/index";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/allsouvenirs" element={<Allsouvenirs />} />
        <Route path="/newsouvenirs" element={<Newsouvenirs />} />
        <Route path="/addmaster" element={<Addmaster />} />
      </Routes>
      {/* <Footer/> */}
    </>
  );
}

export default App;
