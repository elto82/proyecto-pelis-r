import { useState } from "react";
import Buscador from "./components/Buscador";
import Crear from "./components/Crear";
import Listado from "./components/listado";

function App() {
  const [listadoState, setListadoState] = useState([]);
  return (
    <div className="layout">
      <header className="header">
        <div className="logo">
          <div className="play"></div>
        </div>
        <h1>MisPelis</h1>
      </header>

      <nav className="nav">
        <ul>
          <li>
            <a href="/#">Inicio</a>
          </li>
          <li>
            <a href="/#">Peliculas</a>
          </li>
          <li>
            <a href="/#">Blog</a>
          </li>
          <li>
            <a href="/#">Contacto</a>
          </li>
        </ul>
      </nav>

      <section className="content">
        <Listado
          listadoState={listadoState}
          setListadoState={setListadoState}
        />
      </section>

      <aside className="lateral">
        <Buscador
          listadoState={listadoState}
          setListadoState={setListadoState}
        />
        <Crear setListadoState={setListadoState} />
      </aside>

      <footer className="footer">
        &copy Máster en js - <a href="/#">page</a>
      </footer>
    </div>
  );
}

export default App;
