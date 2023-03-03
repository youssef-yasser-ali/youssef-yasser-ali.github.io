import React, { useState } from "react";
import "./_nav_bar.scss";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const handelToggle = () => {
    setIsOpen(!isOpen);
  };
  const toggleComponent = (
    // make a toggle menue

    <div className="toggle-item">
      <span onClick={handelToggle} className="icons">
        {!isOpen ? (
          <>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </>
        ) : (
          <div id="close" className="close">
            <div className="outer">
              <div className="inner"></div>
            </div>
          </div>
        )}
      </span>
    </div>
  );

  return (
    <>
      <nav className="nav-bar">
        <div className="logo">logo</div>
        {!isOpen && toggleComponent}
        <ol className={`nav-links ${isOpen ? "active" : ""}`}>
          {toggleComponent}

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
      {isOpen ? <div className="overlay" onClick={handelToggle}></div> : null}
    </>
  );
}

export default NavBar;
