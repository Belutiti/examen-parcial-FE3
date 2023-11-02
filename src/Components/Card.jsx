import React from "react";
import './Card.css'

const Card=({nombre, comida})=>{
    return(
        <div className="card">
            <h3 className="card-titulo">Gracias por completar el formulario, {nombre}</h3>
            <h4 className="card-subtitulo">Ahora sabemos que tu comida preferida es: {comida}</h4>
        </div>
    )
}

export default Card