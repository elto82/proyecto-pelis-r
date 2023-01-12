import React, { useEffect, useState } from "react";
import Editar from "./Editar";

const Listado = ({ listadoState, setListadoState }) => {
  // const [listadoState, setListadoState] = useState([]);
  const [editar, setEditar] = useState(0);

  useEffect(() => {
    obtenerPeliculas();
  }, []);

  const obtenerPeliculas = () => {
    let peliculas = JSON.parse(localStorage.getItem("pelis"));
    if (!peliculas) {
      peliculas = [];
    }
    setListadoState(peliculas);
    return peliculas;
  };

  const borrarPeli = (id) => {
    //obtener peliculas almacenadas
    let pelisAlmacenadas = obtenerPeliculas();
    //filtrar para que elimine del array la que no quiero
    let nuevoArrayPelis = pelisAlmacenadas.filter(
      (peli) => peli.id !== parseInt(id)
    );
    //actualizar estado del listado
    setListadoState(nuevoArrayPelis);
    //actualizar los datos en el localStorage
    localStorage.setItem("pelis", JSON.stringify(nuevoArrayPelis));
  };

  return (
    <>
      {listadoState !== null ? (
        listadoState.map((peli) => {
          return (
            <article className="peli-item" key={peli.id}>
              <h3 className="title">{peli.title}</h3>
              <p className="description">{peli.description}</p>
              <button
                className="edit"
                onClick={() => {
                  setEditar(peli.id);
                }}
              >
                Editar
              </button>
              <button className="delete" onClick={() => borrarPeli(peli.id)}>
                Borrar
              </button>

              {/* aparece formulario de editar */}

              {editar === peli.id && (
                <Editar
                  peli={peli}
                  obtenerPeliculas={obtenerPeliculas}
                  setEditar={setEditar}
                  setListadoState={setListadoState}
                />
              )}
            </article>
          );
        })
      ) : (
        <h2>No hay peliculas para mostrar</h2>
      )}
    </>
  );
};

export default Listado;
