import { useState, useEffect } from "react";
import Tours from "./Tours";
import Loading from "./assets/Loading";

const url = "https://course-api.com/react-tours-project";

function App() {
  const [tours, setTours] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchTours = async () => {
    setIsLoading(true);
    try {
      const data = await fetch(url);
      const result = await data.json();
      setTours(result);
      // setTours(result);
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    // fetch tours from the server
    fetchTours();
  }, []);

  const handleRemoveTour = (id) => {
    const filteredTour = tours.filter((tour) => tour.id !== id);
    setTours(filteredTour);
  };

  if (isLoading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  if (tours.length === 0) {
    return (
      <main>
        <div className="title">
          <h2>no tours left</h2>
          <button className="btn" onClick={() => fetchTours()}>
            refresh
          </button>
        </div>
      </main>
    );
  }

  return (
    <>
      <main>
        <Tours tours={tours} handleRemoveTour={handleRemoveTour} />
      </main>
    </>
  );
}

export default App;
