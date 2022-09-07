import React from "react";
import Parcel from "single-spa-react/parcel";

// import { Container } from './styles';

const App = ({ name }) => {
  const [task, updateTask] = React.useState<string>("");

  const handleChanche = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateTask(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(task);
    updateTask("");
  };

  return (
    <>
      <h3>{name}</h3>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChanche} value={task} />
        <button type="submit">Add</button>
      </form>
      <Parcel
        config={() => import("@seven-technologies/react-parcel")}
      />
    </>
  );
};

export default App;
