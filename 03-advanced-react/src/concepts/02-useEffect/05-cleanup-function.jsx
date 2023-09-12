import { useEffect, useState } from "react";

const CleanupFunction = () => {

  const [toggle, setToggle] = useState(false);

  return <>
  
    <button className="btn" onClick={() => setToggle(!toggle)}>Toggle Click</button>

    {toggle && <SomeComponent />}
  </>
};

const SomeComponent = () => {

  useEffect(() => {

    const intId = setInterval(() => {
      console.log('Hello from interval!');
    },1000)

    return () => {
      console.log('clean Interval!');
      clearInterval(intId);
    }
    
  },[])

  return <h2>Hello There</h2>
}

export default CleanupFunction;
