//import React from "react";
import "./RadioButton.css"

const RadioButton = (props) => {

    return (
        <div className="radioButton form-check">
            <input className="form-check-input" type="radio" value={props.valor} name={props.name} checked={props.checked} onChange={props.onChange} />
            <label className="form-check-label">{props.valor}</label>
        </div>
    )

}

export default RadioButton;