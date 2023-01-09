import React, { useEffect } from "react";

const Listado = ({ listadoState, setListadoState }) => {
  // const [listadoState, setListadoState] = useState([]);
  useEffect(() => {
    obtenerPeliculas();
  }, []);

  const obtenerPeliculas = () => {
    let peliculas = JSON.parse(localStorage.getItem("pelis"));
    setListadoState(peliculas);
  };

  return (
    <>
      {listadoState != null ? (
        listadoState?.map((peli) => {
          return (
            <article className="peli-item" key={peli.id}>
              <h3 className="title">{peli.title}</h3>
              <p className="description">{peli.description}</p>
              <button className="edit">Editar</button>
              <button className="delete">Borrar</button>
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
