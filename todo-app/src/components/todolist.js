import React from 'react';
import ToDoItem from './todoitem';

const ToDoList = ({ todos, toggleTaskCompletion,
  editingTodo, startEditingTask, updateTask, deleteTask
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
          deleteTask={deleteTask}



        />
      ))}
    </ul>
  );
};

export default ToDoList;