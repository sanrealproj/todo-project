import React, { useState } from "react";
import TodoList from "./components/TodoList";
import HowToUse from "./components/HowToUse";

const Todo = () => {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");
  const addTask = () => {
    if (input.trim()) {
      setTasks([...tasks, { text: input, completed: false }]);
      setInput("");
    }
  };
  const toggleTask = (index) => {
    const newTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(newTasks);
  };

  const editItem = (index, value) => {
    const todos = [...tasks];
    // const editedTodo = prompt("Edit the todo:");
    if (input !== null && input.trim() !== "") {
      let updatedTodos = [...todos];
      updatedTodos[index].text = input;
      setTasks(updatedTodos);
    }
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };
  return (
    <div>
      <main>
        <div class="container">
          <h1> To-Do List</h1>
          <div class="wrapper">
            <div class="input-wrapper">
              <input
                id="input"
                type="text"
                placeholder="Add a new task here..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
            </div>
            <div id="plus" class="plus-wrapper" onClick={addTask}>
              <i id="fa-plus" class="fas fa-plus fa-lg"></i>
            </div>
          </div>
          <ol spellcheck="false"></ol>
        </div>
        <div class="docs_wrapper">
          <HowToUse />
          {tasks.length > 0 && <div>Task List</div>}
          <ul className="task-list">
            {tasks.map((task, index) => (
              <li
                key={index}
                className={task.completed ? "task completed" : "task"}
              >
                <div style={{ display: "flex" }}>
                  <div style={{ width: "20%" }}>
                    <span>
                      {" " + (index + 1) + " "}: {" " + task.text}
                    </span>
                  </div>
                  <div style={{ width: "35%" }}>
                    <p class="inline" onClick={() => toggleTask(index)}>
                      <i class="far fa-square fa-lg"> </i>{" "}
                    </p>
                  </div>
                  <div
                    style={{ width: "15%" }}
                    onClick={() => editItem(index, task)}
                  >
                    <i class="fas fa-pencil-alt fa-lg"> </i>
                  </div>
                  <div style={{ width: "15%" }}>
                    <i
                      class="fas fa-trash fa-lg"
                      onClick={() => deleteTask(index, task)}
                    ></i>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </main>

      <footer></footer>
    </div>
  );
};

export default Todo;
