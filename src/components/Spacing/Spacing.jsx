import React from "react";

const Spacing = () => {
  return (
    <div>
      <h1 className="text-lg">Aprendendo Espaçamentos</h1>
      <div className="p-4 m-4 bg-red-500">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae
        accusantium incidunt quas. Odit error tenetur molestiae illum ipsum,
        rerum similique ipsa dicta natus, eligendi repellendus qui officiis.
        Fuga, laudantium totam.
      </div>
      <div className="space-y-4">
        <h2>Criando espaçamento igual entre os elementos.</h2>
        <div>1</div>
        <div>2</div>
        <div>3</div>
      </div>
    </div>
  );
};

export default Spacing;
