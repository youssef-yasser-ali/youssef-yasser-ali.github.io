import React from "react";
import { youssefLogo } from "../../assets";
import "./_loading.css";
function Loading() {
  return (
    <div className="face">
      <div className="cont">
        <img src={youssefLogo} />
        <span class="loading"></span>
      </div>
    </div>
  );
}

export default Loading;
