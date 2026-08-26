//import React from "react";
import "./CampoTexto.css";

const CampoTexto = (props) => {

    const aoDigitado = (evento) => {
        props.aoAlterado(evento.target.value)
    }
        
    return (
        <div className="campo-texto mb-3">
            <label className="form-label">{props.label}</label>
            <input value={props.valor} onChange={aoDigitado} placeholder={props.placeholder} className="form-control" />
        </div>
    )
}

export default CampoTexto;