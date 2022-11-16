import React from "react";
import RadioGroup from "../RadioGroup/RadioGroup";

import './ButtonWithRadioGroup.css';

function ButtonWithRadioGroup(props) {

    const [isRadioGroupVisible, setIsRadioGroupVisible] = React.useState(false);

    function handleButtonClick() {
        setIsRadioGroupVisible(!isRadioGroupVisible);
    }

    function handleChangeSelection(value) {
        props.onChangeSelected(value);
        setIsRadioGroupVisible(false);
    }

    return (
        <div className="buttonwithradiogroup">
        { 
            isRadioGroupVisible 
                ? <RadioGroup 
                    tags={props.tags}
                    selected={props.selected}
                    onChangeSelected={handleChangeSelection}
                    /> 
                : <button className="radiogroup__button radiogroup__button_up" onClick={handleButtonClick}>ТИ{props.selected}</button>
        }
        </div>
    );
}

export default ButtonWithRadioGroup;