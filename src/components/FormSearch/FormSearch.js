import React from "react";
import { Link } from "react-router-dom";

import './FormSearch.css';

import RadioGroup from "../RadioGroup/RadioGroup";
import ButtonWithRadioGroup from "../ButtonWithRadioGroup/ButtonWithRadioGroup";

function FormSearch(props) {

    return (
        <form className="form-search">

            

            <input disabled style={{width: 1000, marginTop: 40, marginBottom: 20}} value={`Фильтр на ТИ${props.selectedPto}   ${props.selectedMetall} and ${props.selectedRubberMark} and ${props.selectedThinckness}mm`} />

            <RadioGroup 
                tags={[
                    {value: 'AISI316', text: 'AISI316'}, 
                    {value: 'AISI304', text: 'AISI304'}
                ]}  
                selected={props.selectedMetall}
                onChangeSelected={props.setSelectedMetall}
                title="Материал пластин"
            />

            <RadioGroup 
                tags={[
                    {value: 'EPDM', text: 'EPDM'}, 
                    {value: 'NBR', text: 'NBR'},
                ]}  
                selected={props.selectedRubberMark}
                onChangeSelected={props.setSelectedRubberMark}
                title="Материал уплотнений"
            />

            <RadioGroup 
                tags={[
                    {value: '0.4', text: '0.4'}, 
                    {value: '0.5', text: '0.5'},
                    {value: '0.6', text: '0.6'}
                ]}  
                selected={props.selectedThinckness}
                onChangeSelected={props.setSelectedThinckness}
                title="Толщина пластин"
            />
            
        </form>
    )
}

export default FormSearch;
