import React from "react";
import { youssefLogo2 } from "../../assets";
import "./_loading.css";
function Loading() {
  return (
    <div className="face">
      <div className="cont">
        <img src={youssefLogo2} />
        <span className="loading"></span>
      </div>
    </div>
  );
}

export default Loading;
