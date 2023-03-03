import React, { useState } from "react";
import "./_nav_bar.scss";

function NavBar() {
  const [toggle, setToogle] = useState(false);

  const handelToggle = () => {
    setToogle(!toggle);
  };

  return (
    <>
      <nav className="nav-bar">
        <div className="logo">logo</div>
        <div className={`toggle-menu-con ${toggle ? "active" : ""}`}>
          <span onClick={handelToggle}>toggle</span>
        </div>
        <ol className={`nav-links ${toggle ? "active" : ""}`}>
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
      {toggle ? <div className="overlay" onClick={handelToggle}></div> : null}
    </>
  );
}

export default NavBar;
