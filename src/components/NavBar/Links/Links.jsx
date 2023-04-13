import React from "react";
import { navDelay } from "../../../data/timeDelay";
import { CSSTransition, TransitionGroup } from "react-transition-group";

function Links(props) {
  const navLinks = [
    { name: "About", link: "#AboutMe" },
    { name: "Experience", link: "#experience" },
    { name: "Work", link: "#" },
    { name: "Contact", link: "#" },
  ];
  const handelClick = () => {
    if (props.isOpen) props.toggled();
  };

  let links = null;

  if (props.isMounted) {
    links = navLinks.map(({ name, link }, index) => (
      <CSSTransition key={name} classNames="fadeDown" timeout={navDelay}>
        <li
          className="nav-link"
          onClick={handelClick}
          style={{ transitionDelay: `${(index + 1) * 100}ms` }}
        >
          <a href={link}>{name}</a>
        </li>
      </CSSTransition>
    ));
  }

  return <TransitionGroup component={null}>{links}</TransitionGroup>;
}

export default Links;
