import React from "react";
import ReactDOM from "react-dom/client";

import books from "./books.js";
import Book from "./Book.js";

import "./index.css";

const BookList = () => {
  return (
    <>
      <h1>Amazon best sellers</h1>
      <section className="booklist">
        {books.map((book, index) => {
          return <Book key={book.id} index={index} {...book} />;
        })}
      </section>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
