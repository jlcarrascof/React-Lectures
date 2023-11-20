import { useState } from "react";

function ListaDeElementos({ elementos, eliminarElemento }) {
  return (
    <ul>
      {elementos.map((elemento, index) => (
        <li key={index}>
          {elemento} <button onClick={() => eliminarElemento(index) }>Eliminar</button>
        </li>
      ))}
    </ul>
  );
}

function Elementos() {
  const [elementos, setElementos] = useState(["naranja", "manzana", "pera"]);

  const eliminarElemento = (index) => {
    const nuevosElementos = [...elementos];
    nuevosElementos.splice(index, 1);
    setElementos(nuevosElementos);
  };

  return (
    <div>
      <h2>Lista de Elementos</h2>
      <ListaDeElementos elementos={elementos} eliminarElemento={eliminarElemento} />
    </div>
  );
}

export default Elementos;
