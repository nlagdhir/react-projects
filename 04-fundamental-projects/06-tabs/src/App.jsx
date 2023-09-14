import { useEffect, useState } from "react";
import JobInfo from "../JobInfo";

const url = "https://course-api.com/react-tabs-project";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [jobs, setJobs] = useState([]);

  const fetchTabs = async () => {
    setIsLoading(true);
    try {
      const data = await fetch(url);
      const jobData = await data.json();
      console.log(jobData);
      setJobs(jobData);
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchTabs();
  }, []);

  if (isLoading) {
    return (
      <section className="jobs-center">
        <div className="loading"></div>
      </section>
    );
  }

  return (
    <section className="job-container">
      {jobs.map((job) => {
        return <JobInfo {...job} />;
      })}
    </section>
  );
};
export default App;
