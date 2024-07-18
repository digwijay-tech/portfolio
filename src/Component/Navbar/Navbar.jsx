// eslint-disable-next-line no-unused-vars
import React from "react";
import "../Navbar/Navbar.css";
const Navbar = () => {
  return (
    <header >
      <nav className="nav">
        <div>
          <img src="vite.svg" alt="logo" />
        </div>
        <div>
          <ul className="list">
            <li>HOME</li>
            <li>PROJECTS</li>
            <li>RESUME</li>
            <li> ABOUT</li>
          </ul>
        </div>
        <div></div>
      </nav>
    </header>
  );
};

export default Navbar;
