import React, { useEffect, useState } from "react";
import { data } from "../../data/Data";
import { navDelay, loaderDelay } from "../../data/timeDelay";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./_hero.scss";

function Hero() {
  const [isloaded, setloaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setloaded(true);
    }, navDelay);
  }, []);

  const items = [
    <h1>Hi, my name is</h1>,
    <h2>{data.name}</h2>,
    <h3>{data.title}</h3>,
    <p>{data.description}</p>,
  ];

  let heroItems = null;
  if (isloaded) {
    heroItems = items.map((item, i) => (
      <CSSTransition
        key={i}
        classNames="fadeup"
        timeout={navDelay}
        appear={true}
      >
        <div style={{ transitionDelay: `${i + 1}00ms` }}>{item}</div>
      </CSSTransition>
    ));
  }

  return (
    <section id="header" className="section">
      <div className="container">
        <div className="hero">
          <TransitionGroup component={null}>{heroItems}</TransitionGroup>
        </div>
      </div>
    </section>
  );
}

export default Hero;
