import React from "react";
import "../index.css";
import image2 from "../images/image2.jpg";

const Navbar = () => {
  return (
    <section>
      <img src={image2} alt="dogimage" className="w-full h-96"/>
      <div className="">
        <nav className="bg-blue-400 font-semibold">
          <ul className="flex justify-center mx-auto ">
            <li className="mr-16 text-navtext">
              <a href="#hello">Home</a>
            </li>
            <li className="mr-16 text-navtext">
              <a href="#hi">Reviews</a>
            </li>
            <li className="mr-16 text-navtext">
              <a href="#yep">Social</a>
            </li>
            <li className="mr-16 text-navtext">
              <a href="#lol">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
};

export default Navbar;
