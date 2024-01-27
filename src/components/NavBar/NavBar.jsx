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
            {/* <img src={youssefLogo} alt="youssef logo" /> */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 100 100"
              width="80"
              height="80"
            >
              <title>Logo</title>
              <rect
                width="50"
                height="50"
                rx="10"
                ry="10"
                x="4"
                y="30"
                fill="none"
                stroke="#64ffda"
                strokeWidth="2.8"
              ></rect>
              <text
                x="29"
                y="54"
                textAnchor="middle"
                alignmentBaseline="middle"
                fontWeight="500"
                fontFamily="courier"
                fontSize="30"
                transform="translate(0, 5)"
                fill="#64ffda"
              >
                Y
              </text>
            </svg>
            {/* <svg
              fill="none"
              id="logo"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              viewBox="0 0 87 96"
            >
              <title>Logo</title>
              <g transform="translate(-8.000000, -2.000000)">
                <g transform="translate(11.000000, 5.000000)">
                  <polygon
                    id="Shape"
                    stroke="currentColor"
                    stroke-width="5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    points="39 0 0 22 0 67 39 90 78 68 78 23"
                  ></polygon>
                  <text
                    x="40"
                    y="50"
                    text-anchor="middle"
                    alignment-baseline="middle"
                    // make it center
                    font-weight="500"
                    font-family="courier"
                    font-size="45"
                    fill="#64ffda"
                  >
                    Y
                  </text>
                </g>
              </g>
            </svg> */}
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
