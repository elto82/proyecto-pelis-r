import React, { useState } from "react";
import { guardarEnStorage } from "./helpers/guardarEnStorage";

const Crear = ({ setListadoState }) => {
  const [peliState, setPeliState] = useState({
    title: "",
    description: "",
  });

  const titleComponent = "Añadir pelicula";
  const { title, description } = peliState;

  const datosFormulario = (e) => {
    e.preventDefault();

    let target = e.target;
    let title = target.title.value;
    let description = target.description.value;

    let peli = {
      id: new Date().getTime(),
      title,
      description,
    };
    setPeliState(peli);
    //actualizar el estado del listado principal
    setListadoState((Elementos) => {
      return [...Elementos, peli];
    });

    guardarEnStorage("pelis", peli);
  };

  return (
    <div className="add">
      <h3 className="title">{titleComponent}</h3>
      <strong>
        {title && description && "Has creado la pelicula: " + title}
      </strong>
      <form onSubmit={datosFormulario}>
        <input type="text" id="title" placeholder="Titulo" name="title" />
        <textarea
          name="description"
          id="description"
          cols="30"
          rows="10"
          placeholder="Descripción"
        ></textarea>
        <input type="submit" id="save" value="Guardar" />
      </form>
    </div>
  );
};

export default Crear;
