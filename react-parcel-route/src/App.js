import React from 'react';
import Parcel from "single-spa-react/parcel";

// import { Container } from './styles';

function App({name}) {
  const [task, setUpdateTask] = React.useState("");

  const handleChanche = (e) => {
    setUpdateTask(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(task);
    setUpdateTask("");
  };

  return (
    <>
      <h3>{name}</h3>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChanche} value={task} />
        <button type="submit">Add</button>
      </form>
      <Parcel
        config={() => System.import("@seven-technologies/react-parcel")}
      />
    </>
  );
}

export default App;