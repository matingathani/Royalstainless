import React, { useState } from "react";
import "./navbar.css";
import humberger from "../../images/humberger.png";
import navbarLogo from "../../images/navbarlogo.svg";
function Navbar() {
  const [togglenav, setTogglenav] = useState(false);

  return (
    <div className="nav">
      <h2 className="nav_head">
        <img src={navbarLogo} style={{ objectFit: "cover" }}></img>
      </h2>

      <ul
        className={togglenav ? "navbar_mobile" : "navbar"}
        onClick={() => setTogglenav(false)}
      >
        <li className="navlist">
          <a className="navlink" href="#about">
            About
          </a>
          
        </li>
        <li className="navlist">
          <a className="navlink" href="#product">
            Products
          </a>
        </li>
        <li className="navlist">
          <a className="navlink" href="#contactus">
            Contact Us
          </a>
        </li>
      </ul>

      <img
        className="humburger"
        src={humberger}
        onClick={() => setTogglenav(!togglenav)}
      />
    </div>
  );
}
export default Navbar;
