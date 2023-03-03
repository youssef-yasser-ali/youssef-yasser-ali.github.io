import React, { useEffect, useState } from "react";
import { data } from "../../data/PersoalData";

import "./_hero.scss";

function Hero() {
  const [isloaded, setloaded] = useState(false);

  useEffect(() => {
    setloaded(true);
  }, []);
  return (
    <section className={`section ${isloaded ? "" : "section--hidden"}`}>
      <div className="container">
        <div className="hero">
          <h1>Hi, my name is</h1>
          <h2>{data.name}</h2>
          <h3>{data.title}</h3>
          <p>{data.description}</p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
