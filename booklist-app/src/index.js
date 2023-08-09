import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

const books = [
  {
    author: "Jordan Moore",
    title: "Interesting Facts For Curious Minds",
    img: "./../images/book1.jpg",
    id:1
  },
  {
    author: "James Clear",
    title: "Atomic Habits",
    img: "https://m.media-amazon.com/images/I/51-nXsSRfZL._SX328_BO1,204,203,200_.jpg",
    id:2
  },
];

const BookList = () => {
  return (
    <section className="booklist">
      {books.map((book) => {
        const { id, author, img, title } = book;
        return <Book key={id} author={author} title={title} img={img} />;
      })}
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
