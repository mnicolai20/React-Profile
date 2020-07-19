import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Navbar() {
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div>
          <ul className="navbar-nav">
            <li className="nav-item">
             <Link className="nav-item" to="/">
                 About
             </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-item" to="/portfolio">
                    Portfolio
                </Link>
            </li>
          </ul>
        </div>
        </nav>
    )
}
