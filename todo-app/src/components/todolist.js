import React from 'react';
import ToDoItem from './todoitem';

const ToDoList = ({ todos, toggleTaskCompletion,
  editingTodo, startEditingTask, updateTask, deleteTask, currentPage, setCurrentPage, visibleTodos, totalPages
 }) => {
  return (
    <div className='todo-list'>
    <div className='todos-container'>
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

    </div>    
    <div className='previous-next-container'>
        {currentPage >= 1 && (
          <button onClick={() => setCurrentPage(currentPage - 1)}
          style={{ display: currentPage === 1 ? 'none' : 'inline-block' }}
          >Prev</button>
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