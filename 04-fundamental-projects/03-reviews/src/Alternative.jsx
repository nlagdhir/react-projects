import { useState } from "react";
import reviews from "./data.js";
import { FaChevronLeft, FaChevronRight, FaQuoteLeft } from "react-icons/fa";

const App = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = reviews[index];

  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * reviews.length);

    if(randomNumber === index){
      randomNumber = index + 1;
    }

    setIndex(checkNumber(randomNumber))
  }

  const checkNumber = (number) => {
    if (number < 0) {
      return reviews.length - 1;
    }
    if (number > reviews.length - 1) {
      return 0;
    }
    return number;
  };

  const prevPerson = () => {
    setIndex((currentIndex) => {
      const newIndex = currentIndex - 1;
      return checkNumber(newIndex);
    });
  };

  const nextPerson = () => {
    setIndex((currentIndex) => {
      const newIndex = currentIndex + 1;

      return checkNumber(newIndex);
    });
  };

  return (
    <main>
      <article className="review">
        <div className="img-container">
          <img src={image} alt={name} className="person-img" />
          <span className="quote-icon">
            <FaQuoteLeft />
          </span>
        </div>
        <h4 className="author">{name}</h4>
        <p className="job">{job}</p>
        <p className="text">{text}</p>
        <div className="btn-container">
          <button className="prev-btn" onClick={prevPerson}>
            <FaChevronLeft />
          </button>
          <button className="next-btn" onClick={nextPerson}>
            <FaChevronRight />
          </button>
        </div>
        <button className='btn btn-hipster' onClick={randomPerson}>
          surprise me
        </button>
      </article>
    </main>
  );
};
export default App;
