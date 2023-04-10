import React, { useState, useEffect } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { youssefLogo } from "../../assets";
import { navDelay } from "../../data/timeDelay";
import "./_nav_bar.scss";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [ismounted, setIsmounted] = useState(false);

  const navLinks = [
    { name: "About", link: "#" },
    { name: "Experience", link: "#" },
    { name: "Work", link: "#" },
    { name: "Contact", link: "#" },
  ];

  useEffect(() => {
    setTimeout(() => {
      setIsmounted(true);
    }, 100);
  }, []);

  const handelToggle = () => {
    setIsOpen(!isOpen);
  };

  /// toogle

  const openToggle = (
    <>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </>
  );
  const closeToggle = (
    <div id="close" className="close">
      <div className="outer">
        <div className="inner"></div>
      </div>
    </div>
  );

  const toggleComponent = (
    // make a toggle menue
    <div className="toggle-item">
      <span onClick={handelToggle} className="icons">
        {isOpen ? closeToggle : openToggle}
      </span>
    </div>
  );

  // links and overlay

  let links = null;
  let overlay = null;
  if (ismounted) {
    links = navLinks.map(({ name, link }, index) => (
      <CSSTransition key={name} classNames="fadeDown" timeout={navDelay}>
        <li
          className="nav-link"
          style={{ transitionDelay: `${(index + 1) * 100}ms` }}
        >
          <a href={link}>{name}</a>
        </li>
      </CSSTransition>
    ));
  }
  if (isOpen) {
    overlay = <div className="overlay" onClick={handelToggle}></div>;
  }

  return (
    <>
      <nav className="nav-bar">
        <div className={`logo ${ismounted && "fade-enter-active"} `}>
          <a href="#">
            <img src={youssefLogo} alt="" />
          </a>
        </div>

        {!isOpen && toggleComponent}

        <ol className={`nav-links ${isOpen ? "active" : ""}`}>
          {toggleComponent}
          {/* links */}
          <TransitionGroup component={null}>{links}</TransitionGroup>
          {/* resume button */}
          <div className={`fade ${ismounted && "fadeDown-active"} `}>
            <button className="btn btn-second">Resume</button>
          </div>
        </ol>
      </nav>
      {overlay}
    </>
  );
}

export default NavBar;
