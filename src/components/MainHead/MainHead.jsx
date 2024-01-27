import React from "react";
import "./_mainHead.scss";

function MainHead({ num, name }) {
  return (
    <div className="mainHead">
      <span>0{num}.</span>
      <h2 className="header"> {name}</h2>
      <div className="line"> </div>
    </div>
  );
}

export default MainHead;
