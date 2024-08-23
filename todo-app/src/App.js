import React from 'react';
import Header from './components/header';
import WeatherCard from './components/WeatherCard';
import useWeather from './hooks/useWeather';
import ToDoForm from './components/todoform';
import ToDoList from './components/todolist';
import useToDoList from './hooks/usetodolist';
import todoService from './services/todoservice';


const App = () => {
  const { todos, addTask, toggleTaskCompletion, deleteTask,
    startEditingTask, editingTodo, updateTask, visibleTodos,
    currentPage, totalPages, setCurrentPage,
   } = useToDoList();

   const { weatherData, isLoading, error } = useWeather();


  return (
    <div>
      <Header />
      <div>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      <WeatherCard weatherData={weatherData} />
    </div>
      <ToDoForm addTask={addTask} />
      <ToDoList 
      todos={visibleTodos} 
      toggleTaskCompletion={toggleTaskCompletion}
      editingTodo={editingTodo}
      startEditingTask={startEditingTask}
      updateTask={updateTask}
      deleteTask={deleteTask}
currentPage={currentPage}
totalPages={totalPages}
setCurrentPage={setCurrentPage}

      />
      
    </div>
  );
};

export default App;


