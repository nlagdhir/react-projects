import { useState } from "react";

const ErrorExample = () => {

  let [count, setCount] = useState(0);

  const handleButtonClick = () => {
    setCount(count + 1)
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
