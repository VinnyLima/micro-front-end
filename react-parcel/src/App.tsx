import React from "react";

// import { Container } from './styles';

const src = ({ name }) => {
  const [tasks, setTasks] = React.useState([]);
  return (
    <>
      <h3>{name}</h3>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>Task</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr key={task.id}>
              <td>{task.id}</td>
              <td>{task.task}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default src;
