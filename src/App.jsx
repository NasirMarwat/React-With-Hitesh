import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(14);
  const addValue = () => {
    if (counter < 20) {
      setCounter(counter + 1);
    }
  };

  const removeValue = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  return (
    <>
      <h1>Welcome to Chaye Aor Code</h1>
      <h2>The value of x: {counter} </h2>
      <button onClick={addValue}>Add value </button>
      <br />
      <br />
      <br />
      <button onClick={removeValue}>Remove</button>
    </>
  );
}
export default App;
