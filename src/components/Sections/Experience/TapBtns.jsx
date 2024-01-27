function TapBtns({ activeTap, handleClickTap, jobDetails }) {
  return (
    <div className="slider-list">
      {jobDetails.jobs.map((job, index) => (
        <div
          onClick={() => handleClickTap(index)}
          key={index}
          className={`tap-btn ${activeTap === index ? "active" : ""}`}
        >
          {job.company}
        </div>
      ))}
    </div>
  );
}

export default TapBtns;
