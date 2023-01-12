import React from "react";
import "./EditarModulo.css";

const Editar = ({ peli, obtenerPeliculas, setEditar, setListadoState }) => {
  const tituloComponente = "Editar pelicula";

  const guardarEdicion = (e, id) => {
    e.preventDefault();
    //obtener el target
    let target = e.target;
    //buscar el indice del objeto de la pelicula a actualizar
    const pelisAlmacenadas = obtenerPeliculas();
    const indice = pelisAlmacenadas.findIndex((peli) => peli.id === id);
    //crear objeto con ese indice
    let peliActualizada = {
      id,
      title: target.title.value,
      description: target.description.value,
    };
    //actualizar el elemento con ese indice
    pelisAlmacenadas[indice] = peliActualizada;
    //guardar el nuevo array de objetos en el locasStorage
    localStorage.setItem("pelis", JSON.stringify(pelisAlmacenadas));
    //actualizar estados
    setListadoState(pelisAlmacenadas);
    setEditar(0);
  };

  return (
    <div className="edit_form">
      <h3 className="title">{tituloComponente}</h3>
      <form onSubmit={(e) => guardarEdicion(e, peli.id)}>
        <input type="text" name="title" defaultValue={peli.title} />
        <textarea name="description" defaultValue={peli.description} />
        <input type="submit" className="editar" value="Actualizar" />
      </form>
    </div>
  );
};

export default Editar;
