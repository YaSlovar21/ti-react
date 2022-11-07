import React from "react";

import './FormPlusminus.css';

function FormPlusminus() {

    const [value, setValue] = React.useState(1);

    function handleDownClick() {
        if (value > 1) {
            setValue(value - 1);
        }
    }

    function handleUpClick() {
        setValue(value + 1);
    }

    return (
        <form className="formplusminus">
            <button className="formplusminus__button" type="button" onClick={handleDownClick}>-</button>
            <input className="formplusminus__input" type="text" placeholder="1" value={value}/>
            <button className="formplusminus__button" type="button" onClick={handleUpClick}>+</button>
        </form>
    )
}

export default FormPlusminus;