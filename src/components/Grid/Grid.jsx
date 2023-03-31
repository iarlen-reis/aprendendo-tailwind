import React from "react";

const Grid = () => {
  return (
    <div className="space-y-2">
      <h1>Aprendendo Grid</h1>
      <div>
        <div className="grid grid-cols-3 gap-2 p-2 w-full bg-gray-400">
          <div className="col-span-3 p-4 bg-gradient-to-tr from-red-800 to-yellow-500"></div>
          <div className="p-4 bg-gradient-to-t from-green-800 to-gray-500"></div>
          <div className="p-4 bg-gradient-to-tr from-cyan-800 to-purple-500"></div>
          <div className="p-4 bg-gradient-to-tr from-red-800 to-yellow-500"></div>
          <div className="p-4 bg-gradient-to-t from-green-800 to-gray-500"></div>
          <div className="col-span-2 p-4 bg-gradient-to-tr from-cyan-800 to-purple-500"></div>
        </div>
      </div>
    </div>
  );
};

export default Grid;
