import React from "react";
import { AiFillEdit } from "react-icons/ai";
import { BsFillTrashFill } from "react-icons/bs";

const Todo = ({ task, deleteTodo, editTodo }) => {
  return (
    <div className="flex justify-center mx-[243px] pb-2">
      <div className="w-full flex justify-between items-center hover:-translate-y-px bg-indigo-800 text-white py-1 px-4 border rounded-md mb-1 ">
        <p className="text-white text-lg">{task.task}</p>
        <div className="flex items-center gap-x-4">
          <AiFillEdit
            className="text-xl cursor-pointer"
            onClick={() => {
              editTodo(task.id);
            }}
          />
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
