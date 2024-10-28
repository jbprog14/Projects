import React from "react";
import TodoList from "./TodoList";
import Weather from "./Weather";

const Dashboard = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center px-20 pt-20">
        <div className="w-full text-center text-slate-100 text-2xl font-thin border-2 border-t-teal-200 border-r-teal-200 p-10 rounded-md backdrop-blur-sm">
          <h1>Welcome to TakeNote {":)"} </h1>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center px-20 pt-2">
        <div className="w-full text-center text-slate-100 text-2xl font-thin border-2 border-t-teal-200 border-r-teal-200 p-5 rounded-md backdrop-blur-sm">
          <TodoList />
        </div>
        <Weather />
      </div>
    </>
  );
};

export default Dashboard;
