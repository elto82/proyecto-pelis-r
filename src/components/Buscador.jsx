import React, { useState } from "react";

const Buscador = ({ listadoState, setListadoState }) => {
  const [busqueda, setBusqueda] = useState("");
  const [noEncontrado, setNoEncontrado] = useState(false);

  const buscarPeli = (e) => {
    //crear estado y actualizarlo
    setBusqueda(e.target.value);
    //filtrar para buscar coincidenacia
    let pelisEncontradas = listadoState.filter((peli) => {
      return peli.title.toLowerCase().includes(busqueda.toLocaleLowerCase());
    });

    if (busqueda.length <= 1 || pelisEncontradas <= 0) {
      pelisEncontradas = JSON.parse(localStorage.getItem("pelis"));
      setNoEncontrado(true);
    } else {
      setNoEncontrado(false);
    }
    //console.log(pelisEncontradas);

    //actualizar estado del listado principal con lo que se filtra
    setListadoState(pelisEncontradas);
  };

  return (
    <div className="search">
      <h3 className="title">Buscador: {busqueda}</h3>
      {noEncontrado === true && busqueda.length > 1 && (
        <span className="no-encontrado">
          No se ha encotrado ninguna coincidencia
        </span>
      )}
      <form action="">
        <input
          type="text"
          id="search_field"
          name="busqueda"
          autoComplete="off"
          //value={busqueda}
          onChange={buscarPeli}
        />
        <button>Buscar</button>
      </form>
    </div>
  );
};

export default Buscador;
