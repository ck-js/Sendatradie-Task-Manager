import React from 'react';
import ToDoItem from './todoitem';

const ToDoList = ({ todos, toggleTaskCompletion,
  editingTodo, startEditingTask, updateTask
 }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <ToDoItem
          key={todo.id}
          todo={todo}
          toggleTaskCompletion={toggleTaskCompletion}
          startEditingTask={startEditingTask}
          updateTask={updateTask}
          editingTodo={editingTodo}


        />
      ))}
    </ul>
  );
};

export default ToDoList;