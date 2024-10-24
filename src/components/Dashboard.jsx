import React from "react";

const Dashboard = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <h1 className="text-slate-100 text-2xl font-thin border-2 p-10 rounded-md backdrop-blur-sm bg-blue-600/10 hover:bg-blue-600/20 cursor-pointer hover:-translate-y-0.5 ">
        Welcome to the Dashboard! {":)"}
      </h1>
    </div>
  );
};

export default Dashboard;
