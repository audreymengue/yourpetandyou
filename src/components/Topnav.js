import React from "react";
import rbgi2 from "../images/rbgi2.png";

const Topnav = () => {
  return (
    <section className="w-full bg-slate-500 ">
      <div className="md:text-center">
        
        <div className="m-24 md:inline-block">
          <h1 className="text-white text-4xl md:text-6xl font-bold">Welcome to YPAY</h1>
          <h2 className="text-white text-2xl md:text-3xl font-light">
            Some really great experience for your pet here
          </h2>
        </div>
        <img src={rbgi2} className="bg-cover md:inline-block items-center" alt="dogimage" /> 
      </div>
    </section>
  );
};

export default Topnav;
