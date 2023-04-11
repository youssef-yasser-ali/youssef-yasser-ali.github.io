import React from "react";
import MainHead from "../../MainHead/MainHead";
import "./_experience.scss";

function Experience() {
  return (
    <section id="experience">
      <div className="container">
        <MainHead name="Where I’ve Worked" num={2} />
        <div className="slides"></div>
      </div>
    </section>
  );
}

export default Experience;
