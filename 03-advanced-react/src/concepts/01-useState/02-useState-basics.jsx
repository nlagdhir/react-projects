import { useState } from "react";

const UseStateBasics = () => {

  let [count, setCount]  = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  }

  return (
    <div>
      <h2>{count}</h2>
      <button type="button" className="btn" onClick={handleClick}>Increment</button>
    </div>
  )
};

export default UseStateBasics;
