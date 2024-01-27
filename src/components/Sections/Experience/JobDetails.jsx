function JobDetails({ activeTap, isMounted, jobDetails }) {
  return (
    <div className="details">
      {jobDetails.jobs.map((job, index) => {
        return (
          activeTap == index && (
            <div key={index} className={`job ${isMounted ? "active" : ""}`}>
              <div className="job-header">
                <p>
                  <span className="job-title"> {job.jobTitle}</span>
                  <span id="at"> @ </span>
                  <a
                    href={job.companyUrl}
                    target="_blank"
                    className="company-name"
                  >
                    {job.company}
                  </a>
                </p>
              </div>
              <p className="date">
                {job.startDate} - {job.endDate}
              </p>
              <ul className="responsibilities">
                {job.responsibilities.map((res, resIndex) => (
                  <li key={resIndex} className="resp">
                    {res}
                  </li>
                ))}
              </ul>
            </div>
          )
        );
      })}
    </div>
  );
}

export default JobDetails;
