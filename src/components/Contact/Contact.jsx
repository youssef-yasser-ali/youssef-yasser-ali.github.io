import React, { useEffect, useState } from "react";
import Social from "../Social/Social";
import Email from "../Email/Email";
import { navDelay, loaderDelay } from "../../data/timeDelay";
import "./contact.scss";
navDelay;
function Contact() {
  const [active, setActive] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setActive(true);
    }, navDelay + loaderDelay);
  }, []);

  return (
    <div className={` ${active ? "fade-active" : "fade"} `}>
      <Social />
      <Email />
    </div>
  );
}

export default Contact;
