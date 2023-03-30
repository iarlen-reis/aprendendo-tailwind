import React from "react";

const Borders = () => {
  return (
    <div className="space-y-2">
      <h1>Aprendendo bordas:</h1>
      <div className="bg-gray-500 p-2 w-96 border-l-4 border-red-400">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas at
        debitis dolor? Ab assumenda cumque ipsum exercitationem consequuntur
        expedita sapiente, aspernatur molestiae, fuga impedit veniam incidunt
        odit et facere eveniet.
      </div>
      <div className="bg-gray-500 p-2 mt-2 w-96 border-2 border-yellow-400 rounded">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas at
        debitis dolor? Ab assumenda cumque ipsum exercitationem consequuntur
        expedita sapiente, aspernatur molestiae, fuga impedit veniam incidunt
        odit et facere eveniet.
      </div>
      <div className="bg-gray-500 p-2 mt-2 w-96 border-2 border-green-400 rounded border-opacity-20">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas at
        debitis dolor? Ab assumenda cumque ipsum exercitationem consequuntur
        expedita sapiente, aspernatur molestiae, fuga impedit veniam incidunt
        odit et facere eveniet.
      </div>
      <button className="p-3 bg-cyan-400 text-gray-700 rounded hover:ring-2 hover:bg-cyan-300 transition-all cursor-pointer">
        Clique aqui!
      </button>
    </div>
  );
};

export default Borders;
