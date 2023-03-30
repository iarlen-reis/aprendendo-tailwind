import React from "react";

const FlexBox = () => {
  return (
    <div className="p-2 space-y-2">
      <h1>Aprendendo FlexBox</h1>
      <div className="flex gap-1">
        <div className="w-1/2 h-12 bg-gradient-to-tr from-red-800 to-yellow-500">
          1
        </div>
        <div className="w-1/2 h-12 bg-gradient-to-t from-green-800 to-gray-500">
          2
        </div>
        <div className="w-1/2 h-12 bg-gradient-to-tr from-cyan-800 to-purple-500">
          3
        </div>
      </div>
    </div>
  );
};

export default FlexBox;
