import React from "react";

import './CheckboxGroup.css';

function CheckboxGroup({selectedItems, onChangeSelected, tags}) {
    
    function handleBoxClick(evt) {
        if (selectedItems.includes(evt.target.value)) {
            onChangeSelected(selectedItems.filter(v => v!==evt.target.value));
            
        } else {
            onChangeSelected(selectedItems.concat(evt.target.value))
        
        }
        
    }

    function isValueSelected(buttonvalue) {
        if (selectedItems.includes(buttonvalue)) 
            return 'radiogroup__button radiogroup__button_active'
        else
            return 'radiogroup__button';
    }

    return (
        <div className="radiogroup">
            {
                tags.map((el, i) => (
                    <button 
                        type="button"
                        id={i}
                        value={el.value}
                        className={isValueSelected(el.value)}
                        onClick={handleBoxClick}
                    >
                        {el.text}
                    </button>
                ))
            }
        </div>
    );
}

export default CheckboxGroup;