const JobInfo = ({ title, dates, duties, company }) => {
  return (
    <article className="job-info">
      <h3>{title}</h3>
      <span className="job-company">{company}</span>
      <p className="job-date">{dates}</p>
    </article>
  );
};

export default JobInfo;
