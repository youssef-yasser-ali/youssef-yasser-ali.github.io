import React, { useLayoutEffect, useState } from "react";
import MainHead from "../../MainHead/MainHead";
import "./_experience.scss";
import TapBtns from "./TapBtns";
import JobDetails from "./JobDetails";

import { jobDetails } from "../../../data/Data";

function Experience() {
  const [activeTap, setActiveTap] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  useLayoutEffect(() => {
    // Set isMounted to true after the component mounts
    setIsMounted(false);

    setTimeout(() => {
      setIsMounted(true);
    }, 10);
  }, [activeTap]);

  function handleClickTap(index) {
    setActiveTap(index);
  }

  return (
    <section id="experience">
      <div className="container">
        <MainHead name="Where I’ve Worked" num={2} />

        <div className="sliders">
          <TapBtns
            activeTap={activeTap}
            handleClickTap={handleClickTap}
            jobDetails={jobDetails}
          />

          <JobDetails
            activeTap={activeTap}
            isMounted={isMounted}
            jobDetails={jobDetails}
          />
        </div>
      </div>
    </section>
  );
}

export default Experience;
