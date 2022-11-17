import React, { useState } from "react";

import "./RadioGroup.css";

function RadioGroup(props) {
    
  function handleRadioClick(evt) {
    props.onChangeSelected(evt.target.value);
  }

  function genClassName(buttonvalue) {
    return `radiogroup__button ${props.selected === buttonvalue ? "radiogroup__button_active" : ""}`;
  }
 
  const [selected, setSelected] = React.useState(props.selected);

 
  return (
    <div className="radiogroup">
      {props.tags.map((element, i) => (
        <button
          type="button"
          id={i}
          value={element.value}
          className={`radiogroup__button ${props.selected === element.value ? "radiogroup__button_active" : ""}`}
          onClick={handleRadioClick}
        >
          {element.text}
        </button>
      ))}
    </div>
  );
}

export default RadioGroup;
