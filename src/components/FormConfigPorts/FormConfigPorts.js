import React from "react";

import './FormConfigPorts.css'

import RadioGroup from "../RadioGroup/RadioGroup";

function FormConfigPorts(props) {


    return (
        <form className="form-search">
            <RadioGroup 
                tags={[
                    {value: 'EPDM', text: 'EPDM'}, 
                    {value: 'NBR', text: 'NBR'},
                ]}  
                selected={props.selectedRubberMark}
                onChangeSelected={props.setSelectedRubberMark}
                title="Материал уплотнений"
            />
        </form>
    );
}

export default FormConfigPorts;