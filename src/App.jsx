import React, { useState } from "react";
import Card from "./Components/Card";
import "./App.css";

function App() {
  const [usuario, setUsuario] = useState({
    nombre: "",
    comida: "",
  });

  const [show, setShow] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = (event) => {
    console.log("handlesubmit");
    event.preventDefault();

    if (usuario.nombre.length >= 3 && usuario.comida.length >= 6) {
      setError(false);
      setShow(true);
    } else {
      setError(true);
    }
  };

  const handleNombreChange = (e) => {
    setUsuario({ ...usuario, nombre: e.target.value.trimStart() });
  };

  const handleComidaChange = (e) => {
    setUsuario({ ...usuario, comida: e.target.value.trimStart() });
  };

  console.log(usuario.nombre);

  return (
    <div className="App">
      <h1>Escribe tu comida preferida</h1>
      <form onSubmit={handleSubmit}>
        <label>Nombre</label>
        <input
          type="text"
          value={usuario.nombre}
          placeholder="Escribe tu nombre"
          onChange={handleNombreChange}
        />
        <label>Comida Preferida</label>
        <input
          type="text"
          value={usuario.comida}
          placeholder="Escribe comida preferida"
          onChange={handleComidaChange}
        />
        <button>Enviar</button>
      </form>
      {show ? <Card nombre={usuario.nombre} comida={usuario.comida} /> : null}
      {error && <h5>Por favor, verifica que la información sea correcta</h5>}
    </div>
  );
}

export default App;
