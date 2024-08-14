import React from 'react';
import ToDoItem from './todoitem';

const ToDoList = ({ todos, toggleTaskCompletion }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <ToDoItem
          key={todo.id}
          todo={todo}
          toggleTaskCompletion={toggleTaskCompletion}
        />
      ))}
    </ul>
  );
};

export default ToDoList;