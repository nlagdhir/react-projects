import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

const firstBook = {
  author: "Jordan Moore",
  title: "Interesting Facts For Curious Minds",
  img: "./../images/book1.jpg",
};

const secondBook = {
  author: "James Clear",
  title: "Atomic Habits",
  img: "https://m.media-amazon.com/images/I/51-nXsSRfZL._SX328_BO1,204,203,200_.jpg",
};

const BookList = () => {
  return (
    <section className="booklist">
      <Book
        author={firstBook.author}
        title={firstBook.title}
        img={firstBook.img}
      >
      </Book>
      <Book
        author={secondBook.author}
        title={secondBook.title}
        img={secondBook.img}
      />
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
