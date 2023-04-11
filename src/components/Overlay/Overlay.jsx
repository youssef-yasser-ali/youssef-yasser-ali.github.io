import React from "react";

function Overlay(props) {
  return (
    props.isShown && <div className="overlay" onClick={props.toggled}></div>
  );
}

export default Overlay;
