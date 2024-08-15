import React from 'react';
import Header from './components/header';
import ToDoForm from './components/todoform';
import ToDoList from './components/todolist';
import useToDoList from './hooks/usetodolist';
import todoService from './services/todoservice';


const App = () => {
  const { todos, addTask, toggleTaskCompletion, deleteTask } = useToDoList();

  return (
    <div>
      <Header />
      <ToDoForm addTask={addTask} />
      <ToDoList todos={todos} toggleTaskCompletion={toggleTaskCompletion} />
      
    </div>
  );
};

export default App;