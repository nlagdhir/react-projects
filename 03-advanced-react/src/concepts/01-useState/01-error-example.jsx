import { useState } from "react";

const ErrorExample = () => {

  let count = 0;

  const handleButtonClick = () => {
    count = count + 1;
    console.log(count);
  }

  return (
    <div>
      <h2>{count}</h2>
      <button type="button" className="btn" onClick={handleButtonClick}>
        Increment
      </button>
    </div>
  ) 
  
};

export default ErrorExample;
