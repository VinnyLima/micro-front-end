import React from "react";

const App = ({ name }) => {
  const [count, setCount] = React.useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <div>
      <h1>{name}</h1>
      <p>Count: {count}</p>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          width: "600px"
        }}
      >
        <button
          style={{
            height: "30px",
            backgroundColor: "blue",
            padding: "5px",
            cursor: "pointer",
            border: "none",
            color: "#fff",
            borderRadius: "5px"
          }}
          onClick={increment}
        >
          Increment
        </button>
        <button
          style={{
            height: "30px",
            backgroundColor: "red",
            padding: "5px",
            cursor: "pointer",
            border: "none",
            color: "#fff",
            borderRadius: "5px"
          }}
          onClick={decrement}
        >
          Decrement
        </button>
      </div>
    </div>
  );
};

export default App;
