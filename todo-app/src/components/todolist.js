import React from 'react';
import ToDoItem from './todoitem';

const ToDoList = ({ todos, toggleTaskCompletion,
  editingTodo, startEditingTask, updateTask, deleteTask, currentPage, setCurrentPage, visibleTodos, totalPages
 }) => {
  return (
    <div className='todo-list'>
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
    <div>
        {currentPage > 1 && (
          <button onClick={() => setCurrentPage(currentPage - 1)}>Prev</button>
        )}
        <span>
          Page {currentPage} of {totalPages}
        </span>
        {currentPage < totalPages && (
          <button onClick={() => setCurrentPage(currentPage + 1)}>Next</button>
        )}
      </div>
    </div>
  );
  
};

export default ToDoList;