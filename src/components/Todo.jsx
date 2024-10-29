import React from "react";
import { AiFillEdit } from "react-icons/ai";
import { BsFillTrashFill } from "react-icons/bs";

const Todo = ({ task, deleteTodo, editTodo }) => {
  return (
    <div className="flex justify-center mx-[243px] pb-2">
      {/* Task container with styling for layout and hover effect */}
      <div className="w-full flex justify-between items-center hover:-translate-y-px bg-indigo-800 text-white py-1 px-4 border rounded-md mb-1">
        {/* Display the task text */}
        <p className="text-white text-lg">{task.task}</p>

        {/* Container for edit and delete icons */}
        <div className="flex items-center gap-x-4">
          {/* Edit icon with an onClick handler to trigger editTodo with the task's ID */}
          <AiFillEdit
            className="text-xl cursor-pointer"
            onClick={() => {
              editTodo(task.id);
            }}
          />
          {/* Delete icon with an onClick handler to trigger deleteTodo with the task's ID */}
          <BsFillTrashFill
            className="text-xl cursor-pointer"
            onClick={() => {
              deleteTodo(task.id);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Todo;
