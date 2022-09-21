import React from "react";
import "../index.css";
// import Menu from "@mui/icons-material/Menu";
import Menu from '@material-ui/icons/Menu';

const Navbar = () => {
  return (
    <section className="w-3/5 bg-green-300 mx-auto">
      <div className=" flex mx-auto flex-wrap md:flex-row text-center justify-center items-center">
        <nav className="bg-blue-400 font-semibold p-4 mx-auto  justify-center items-center">
          <ul className="flex flex-wrap justify-center mx-auto md:flex-row ">
            <li className="ms:mr-16 text-navtext">
              <a href="/" className="text-justify p-9">
                Home
              </a>
            </li>
            <li className="ms:mr-16 text-navtext">
              <a href="/" className="text-justify p-9">
                Reviews
              </a>
            </li>
            <li className="ms:mr-16 text-navtext">
              <a href="/" className="text-justify p-9">
                Social
              </a>
            </li>
            <li className="ms:mr-16 text-navtext">
              <a href="/" className="text-justify p-9">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <Menu />
    </section>
  );
};

export default Navbar;
