import React from "react";
import { Link } from "react-router-dom";
import "./style.css";


function Navbar() {
  return(
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div>
           <Link className="nav-item" to="/">
               About
           </Link>
           <Link className="nav-item" to="/portfolio">
               Portfolio
           </Link>

      </div>
      </nav>
  )
}

export default Navbar;