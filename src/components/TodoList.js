import React from "react";

const TodoList = () => {
  return (
    <div class="container">
      <h1> To-Do List</h1>
      <div class="wrapper">
        <div class="input-wrapper">
          <input id="input" type="text" placeholder="Add a new task here..." />
        </div>
        <div id="plus" class="plus-wrapper">
          <i id="fa-plus" class="fas fa-plus fa-lg"></i>
        </div>
      </div>
      <ol spellcheck="false"></ol>
    </div>
  );
};

export default TodoList;
