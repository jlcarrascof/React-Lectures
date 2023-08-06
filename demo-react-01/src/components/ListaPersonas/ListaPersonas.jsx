import React from "react";
import PersonaItem from "../PersonaItem/PersonaItem";

const ListaPersonas = ({lista}) => {
  return (
    <div>
      {lista.map(persona => {
        return (
          <PersonaItem name={persona.name} age={persona.age} />
        );
      })}
    </div>  
  );
}

export default ListaPersonas;