import React from 'react'

const Book = (props) => {
    // destructuring props in function parameters
    const { img, title, index, author, children } = props;
    return (
      <article className="book">
        
        <img src={img} alt={title} />
        <h2>{title}</h2>
        <h4>{author}</h4>
        <span class="numbers">#{index+1}</span>
        {children}
      </article>
    );
  };

export default Book