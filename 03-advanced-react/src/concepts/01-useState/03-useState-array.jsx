import { useState } from "react";
import { data } from "../../data";

const UseStateArray = () => {
  const [people, setPeople] = useState(data);

  console.log(people);

  const handleRemoveItem = (id) => {
    setPeople(people.filter((people) => people.id !== id));
  };

  const handleRemoveAllItem = () => {
    setPeople([]);
  };

  return (
    <div>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div className="item" key={id}>
            <h2>{name}</h2>
            <button onClick={() => handleRemoveItem(id)}>Remove</button>
          </div>
        );
      })}
      <button
        className="btn"
        style={{ marginTop: "2rem" }}
        onClick={() => handleRemoveAllItem()}
      >
        Remove All item
      </button>
    </div>
  );
};

export default UseStateArray;
