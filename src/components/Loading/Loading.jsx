import React from "react";
import { youssefLogo2 } from "../../assets";
import "./_loading.css";
function Loading() {
  return (
    <div className="face">
      <div className="cont">
        {/* <img src={youssefLogo2} /> */}
        <svg
          className="svg"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          width="80"
          height="80"
        >
          <title>Logo</title>

          <text
            x="50"
            y="50"
            textAnchor="middle"
            alignmentBaseline="middle"
            fontWeight="500"
            fontFamily="courier"
            fontSize="60"
            transform="translate(0, 5)"
            fill="#64ffda"
          >
            Y
          </text>
        </svg>
        <span className="loading"></span>
      </div>
    </div>
  );
}

export default Loading;
