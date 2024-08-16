import React, { useState } from 'react';

const defaultFutureDueDate = () => {
  const today = new Date();
  const futureDate = new Date(today.setDate(today.getDate() + 7));
  const yyyy = futureDate.getFullYear();
  const mm = String(futureDate.getMonth() + 1).padStart(2, '0');
  const dd = String(futureDate.getDate()).padStart(2, '0');
  return `${yyyy}-${mm}-${dd}`;
};


const ToDoForm = ({ addTask }) => {
  
  const [taskTitle, setTaskTitle] = useState('');
  const [taskDescription, setTaskDescription] = useState('');  
    const [taskDueDate, setTaskDueDate] = useState(defaultFutureDueDate)


const handleTitleChange = (event) => {
    setTaskTitle(event.target.value);
  }

  const handleDescriptionChange = (event) => {
    setTaskDescription(event.target.value);
  }

  const handleDueDateChange = (event) => {
    setTaskDueDate(event.target.value);
  } 


  const handleSubmit = (event) => {
    event.preventDefault();
    if (taskTitle.trim() !== '') {
      addTask(taskTitle, taskDescription,
        taskDueDate
      );
      setTaskTitle('');
      setTaskDescription('');
      setTaskDueDate(defaultFutureDueDate);

    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter a Title"
        value={taskTitle}
        onChange={handleTitleChange}
      />
      <br></br>
      <textarea
        placeholder="Enter a Description"
        value={taskDescription}
        onChange={handleDescriptionChange}
        />
      <br></br>
      <input
        type="date"
        value={taskDueDate}
        onChange={handleDueDateChange}
/>
      <br></br>
      <button type="submit">Add Task</button>
    </form>
  );
};

export default ToDoForm;