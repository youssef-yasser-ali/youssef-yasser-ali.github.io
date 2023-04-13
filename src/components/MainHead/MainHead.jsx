import React from "react";
import "./_mainHead.scss";

function MainHead(props) {
  return (
    <div className="mainHead">
      <span>0{props.num}.</span>
      <h2 className="header"> {props.name}</h2>
      <div className="line"> </div>
    </div>
  );
}

export default MainHead;
