import { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "peter",
    age: 24,
    hobby: "Play cricket",
  });

  const { name, age, hobby } = person;

  const updateDetails = () => { 
    setPerson({
      name: "Nilesh",
      age: 32,
      hobby: "Play card",
    });
  };

  return (
    <>
      <div>
        <h3>{name}</h3>
        <h3>{age}</h3>
        <h3>{hobby}</h3>
      </div>
      <div>
        <button onClick={updateDetails} type="button">
          Update Details
        </button>
      </div>
    </>
  );
};

export default UseStateObject;
