import React from "react";

const Backgrounds = () => {
  return (
    <div className="space-y-2">
      <h1>Aprendendo background:</h1>
      <div className="p-2 bg-blue-500 text-black">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt nulla
        cumque quo dolorem, nisi fugit, quaerat nam blanditiis eaque debitis, ex
        alias consectetur accusamus non eveniet tempora eligendi fuga vel.
      </div>
      <div className="p-2 bg-blue-900 bg-opacity-50">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt nulla
        cumque quo dolorem, nisi fugit, quaerat nam blanditiis eaque debitis, ex
        alias consectetur accusamus non eveniet tempora eligendi fuga vel.
      </div>
      <div className="p-2 text-red-900 bg-gradient-to-b from-yellow-300 to-teal-300">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt nulla
        cumque quo dolorem, nisi fugit, quaerat nam blanditiis eaque debitis, ex
        alias consectetur accusamus non eveniet tempora eligendi fuga vel.
      </div>
    </div>
  );
};

export default Backgrounds;
