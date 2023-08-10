import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

const books = [
  {
    author: "Jordan Moore",
    title: "Interesting Facts For Curious Minds",
    img: "./../images/book1.jpg",
    id: 1,
  },
  {
    author: "James Clear",
    title: "Atomic Habits",
    img: "https://m.media-amazon.com/images/I/51-nXsSRfZL._SX328_BO1,204,203,200_.jpg",
    id: 2,
  },
];

const BookList = () => {
  return (
    <section className="booklist">
      <EventExamples />
      {books.map((book) => {
        return <Book key={book.id} {...book} />;
      })}
    </section>
  );
};

const EventExamples = () => {
  const handleButtonClick = () => {
    alert("handle button click");
  };

  const handleInputChange = (e) => {
    console.log(e.target);
    console.log(e.target.name);
    console.log(e.target.value);
    alert("handle input change");
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert("form submitted!");
  };

  return (
    <section>
      <form onSubmit={handleFormSubmit}>
        <h2>Event</h2>
        <input
          type="text"
          name="example"
          onChange={handleInputChange}
          style={{ margin: "1erm 0" }}
        />
        <button type="submit" onClick={handleButtonClick}>
          Click me
        </button>
      </form>
    </section>
  );
};

const Book = (props) => {
  // destructuring props in function parameters
  const { img, title, author, children } = props;
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
      {children}
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
