import { useState } from "react";

const UseStateGotcha = () => {
  const [value, setValue] = useState(0);

  const handleClick = () => {
    setTimeout(() => {
      console.log("button clicked!"); 
      // setValue(value + 1); won't work as it won't get latest value
      setValue((prevValue) => {
        return prevValue + 1;
      })
    },3000);
  };

  return (
    <div>
      <h2>{value}</h2>
      <button type="button" className="btn" onClick={handleClick}>
        Increase Value
      </button>
    </div>
  );
};

export default UseStateGotcha;
