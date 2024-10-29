import React, { useState, useEffect } from "react";
import TodoForm from "./TodoForm";
import { v4 as uuidv4 } from "uuid";
import Todo from "./Todo";
import Edit from "./Edit";

const TodoList = () => {
  // Initialize state with tasks from localStorage, or an empty array if none are saved
  const [todoValue, setTodo] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  // Store todos in localStorage every time the `todoValue` state changes
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todoValue));
  }, [todoValue]);

  // Add a new todo with a unique ID and set its initial editing state to false
  const createTodo = (todo) => {
    setTodo([...todoValue, { id: uuidv4(), task: todo, isEditing: false }]);
  };

  // Remove a todo by filtering out the item with the matching ID
  const deleteTodo = (id) => {
    setTodo(todoValue.filter((todo) => todo.id !== id));
  };

  // Toggle the `isEditing` property of the selected todo to show the edit form
  const editTodo = (id) => {
    setTodo(
      todoValue.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  };

  // Update the task of the selected todo and toggle its `isEditing` state back to false
  const editTask = (task, id) => {
    setTodo(
      todoValue.map((todo) =>
        todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
      )
    );
  };

  return (
    <>
      {/* Render the TodoForm component and pass down the createTodo function */}
      <div className="flex justify-center items-center">
        <TodoForm createTodo={createTodo} />
      </div>

      {/* Map through each todo item to render either Todo or Edit component based on `isEditing` */}
      {todoValue.map((todo, idx) =>
        todo.isEditing ? (
          // Render Edit component if `isEditing` is true, passing editTodo function
          <Edit key={idx} editTodo={editTask} task={todo} />
        ) : (
          // Render Todo component if `isEditing` is false, passing delete and edit functions
          <Todo
            task={todo}
            key={idx}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
          />
        )
      )}
    </>
  );
};

export default TodoList;
