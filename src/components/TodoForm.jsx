import React from "react";
import { useState } from "react";

const TodoForm = ({ createTodo }) => {
  // Initialize state to store the value of the task input
  const [value, setValue] = useState("");

  // Handle form submission, preventing default form behavior
  const handleSubmit = (e) => {
    e.preventDefault();
    createTodo(value); // Call createTodo with the current input value
    setValue(""); // Clear the input field after submitting
  };

  return (
    <form className="flex mb-5" onSubmit={handleSubmit}>
      {/* Input field to enter task, updates value on change */}
      <input
        type="text"
        className="min-w-72 w-full focus:outline-none text-lg p-2 border border-t-teal-200 border-r-teal-200 rounded-l-md text-white bg-indigo-900 placeholder:italic placeholder-white placeholder-opacity-50"
        placeholder="What task to do today?"
        onChange={(e) => {
          setValue(e.target.value);
        }}
        value={value}
      />
      {/* Button to submit the form and add the task */}
      <button className="w-96 border text-lg text-white px-5 py-2 ml-1 rounded-r-md hover:-translate-y-px hover:bg-indigo-900 translate duration-300 bg-indigo-800">
        Add Task
      </button>
    </form>
  );
};

export default TodoForm;
