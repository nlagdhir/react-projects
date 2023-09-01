import ErrorExample from "./concepts/01-useState/01-error-example";
import UseStateBasics from "./concepts/01-useState/02-useState-basics";
import UseStateArray from "./concepts/01-useState/03-useState-array";
import UseStateObject from "./concepts/01-useState/04-useState-object";
import UseStateGotcha from "./concepts/01-useState/05-useState-gotcha";
import CodeExample from "./concepts/02-useEffect/01-code-example";
import UseEffectBasics from "./concepts/02-useEffect/02-useEffect-basics";
import MultipleEffects from "./concepts/02-useEffect/03-multiple-effects";
import FetchData from "./concepts/02-useEffect/04-fetch-data";
import MultipleReturnsBasics from "./concepts/03-conditional-rendering/01-multiple-returns-basics";
import MultipleReturnsFetchData from "./concepts/03-conditional-rendering/02-multiple-returns-fetch-data";

function App() {
  return (
    <div className="container">
      <h2>Advanced React</h2>
      {/* <ErrorExample /> */}
      {/* <UseStateBasics /> */}
      {/* <UseStateArray /> */}
      {/* <UseStateObject /> */}
      {/* <UseStateGotcha />  */}

      {/* <CodeExample />  */}
      {/* <UseEffectBasics /> */}
      {/* <MultipleEffects /> */}
      {/* <FetchData /> */}
      
      {/* <MultipleReturnsBasics /> */} 
      <MultipleReturnsFetchData />
    </div>
  );
}

export default App;
