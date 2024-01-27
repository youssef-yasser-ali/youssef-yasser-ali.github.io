import React from "react";
import MainHead from "../../MainHead/MainHead";
import "./aboutme.scss";
import Info from "./Info";
import Img from "./Img";

function AboutMe() {
  return (
    <section id="AboutMe" className="container ">
      <MainHead name="About Me" num={1} />
      <div className="content">
        <Info />
        <Img />
      </div>
    </section>
  );
}

export default AboutMe;
