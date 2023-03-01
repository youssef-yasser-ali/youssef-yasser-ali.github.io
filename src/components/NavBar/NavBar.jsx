import React from "react";
import "./_nav_bar.scss";

function NavBar() {
  return (
    <nav className="nav-bar">
      <div className="logo">logo</div>
      <ol className="nav-links">
        <li className="nav-link">
          <a href="#">About</a>
        </li>
        <li className="nav-link">
          <a href="#">Expirence</a>
        </li>
        <li className="nav-link">
          <a href="#">Work</a>
        </li>
        <li className="nav-link">
          <a href="#">Contact</a>
        </li>
        <button className=" btn btn-second">Resume</button>
      </ol>
    </nav>
  );
}

export default NavBar;
