import React from 'react';
import Header from './components/header';
import ToDoForm from './components/todoform';
import ToDoList from './components/todolist';
import useToDoList from './hooks/usetodolist';
import todoService from './services/todoservice';


const App = () => {
  const { todos, addTask, toggleTaskCompletion, deleteTask,
    startEditingTask, editingTodo, updateTask
   } = useToDoList();

  return (
    <div>
      <Header />
      <ToDoForm addTask={addTask} />
      <ToDoList 
      todos={todos} 
      toggleTaskCompletion={toggleTaskCompletion}
      editingTodo={editingTodo}
      startEditingTask={startEditingTask}
      updateTask={updateTask}

      />
      
    </div>
  );
};

export default App;


