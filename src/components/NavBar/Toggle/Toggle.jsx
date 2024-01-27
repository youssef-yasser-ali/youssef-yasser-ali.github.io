import React from "react";

function Toggle(props) {
  const openToggle = (
    <>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </>
  );
  const closeToggle = (
    <div id="close" className="close">
      <div className="outer">
        <div className="inner"></div>
      </div>
    </div>
  );

  const toggleComponent = (
    // make a toggle menue

    // className={`fade ${isMounted && "fadeDown-active"}

    <div className={`toggle-item `}>
      <span onClick={props.toggled} className="icons">
        {props.isOpen ? closeToggle : openToggle}
      </span>
    </div>
  );

  return toggleComponent;
}

export default Toggle;
