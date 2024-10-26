import React from "react";
import { useState } from "react";

const Edit = ({ editTodo, task }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    editTodo(value, task.id);
    setValue("");
  };
  return (
    <form className="mx-[243px] flex mb-5" onSubmit={handleSubmit}>
      <input
        type="text"
        className="min-w-72 w-full focus:outline-none text-lg p-2 border border-t-teal-200 border-r-teal-200 rounded-l-md text-white bg-indigo-700 placeholder:italic placeholder-white placeholder-opacity-50"
        placeholder="Update Task"
        onChange={(e) => {
          setValue(e.target.value);
        }}
        value={value}
      />
      <button className="w-96 border text-lg text-white px-5 py-2 ml-1 rounded-r-md hover:-translate-y-px hover:bg-indigo-900 translate duration-300 bg-indigo-800">
        Update
      </button>
    </form>
  );
};

export default Edit;
