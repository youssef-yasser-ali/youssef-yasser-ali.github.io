import React, { useState, useEffect } from "react";
import { youssefLogo } from "../../assets";
import "./_nav_bar.scss";
import Toggle from "./Toggle/Toggle";
import Links from "./Links/Links";
import Overlay from "../Overlay/Overlay";

function NavBar() {
  const [isMounted, setIsMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [scrollState, setScrollState] = useState("home");

  // handel scrolling

  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop < 20) {
      setScrollState("home");
    } else if (scrollTop < window.previousScrollTop || 0) {
      setScrollState("up");
    } else {
      setScrollState("down");
    }
    window.previousScrollTop = scrollTop;
  };

  useEffect(() => {
    setTimeout(() => {
      setIsMounted(true);
    }, 100);

    // adding scroll event listener ..
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // handel toggle menu
  const handelToggle = () => {
    setIsOpen(!isOpen);
  };

  const classes = [];

  if (isOpen) {
    classes.push("active");
    document.body.classList.add("scroll-disabled");
  } else {
    document.body.classList.remove("scroll-disabled");
  }

  return (
    <>
      <nav className={`nav-bar ${scrollState}`}>
        <div className={`logo ${isMounted && "fade-enter-active"} `}>
          <a href="#">
            <img src={youssefLogo} alt="" />
          </a>
        </div>

        {!isOpen && <Toggle isOpen={isOpen} toggled={handelToggle}></Toggle>}

        <ol className={`nav-links ${classes.join(" ")}`}>
          <Toggle isOpen={isOpen} toggled={handelToggle} />
          <Links isOpen={isOpen} toggled={handelToggle} isMounted={isMounted} />

          <div className={`fade ${isMounted && "fadeDown-active"} `}>
            <button className="btn btn-second">Resume</button>
          </div>
        </ol>
      </nav>
      <Overlay isShown={isOpen} toggled={handelToggle} />
    </>
  );
}

export default NavBar;
