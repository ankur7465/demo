// src/App.js
import React, { useState } from 'react';
import 'tailwindcss/tailwind.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const handleDelete = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  const handleEdit = (index) => {
    const newTask = prompt("Enter new task", tasks[index]);
    if (newTask) {
      const newTasks = tasks.map((task, i) => (i === index ? newTask : task));
      setTasks(newTasks);
    }
  };

  const handleCheckboxChange = (index) => {
    const newTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(newTasks);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim()) {
      addTask(inputValue.trim());
      setInputValue("");
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="container mx-auto p-6 bg-white shadow-md rounded-lg">
        <h1 className="text-center text-3xl font-semibold mb-4">To Do List</h1>
        <form onSubmit={handleSubmit} className="mb-4">
          <div className="flex">
            <input
              type="text"
              className="w-full px-4 py-2 mr-2 rounded-lg border-gray-300 focus:outline-none focus:border-blue-500"
              placeholder="Add new task"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              required
            />
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Add
            </button>
          </div>
        </form>
        <ul>
          {tasks.map((task, index) => (
            <li
              key={index}
              className="border-b border-gray-200 flex items-center justify-between py-4"
            >
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="mr-2"
                  onChange={() => handleCheckboxChange(index)}
                />
                <span className={task.completed ? 'line-through' : ''}>
                  {task}
                </span>
              </label>
              <div>
                <button
                  className="text-red-500 hover:text-red-700 mr-2"
                  onClick={() => handleDelete(index)}
                >
                  Delete
                </button>
                <button
                  className="text-blue-500 hover:text-blue-700"
                  onClick={() => handleEdit(index)}
                >
                  Edit
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
