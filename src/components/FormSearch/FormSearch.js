import React from "react";
import { Link } from "react-router-dom";

import './FormSearch.css';

import RadioGroup from "../RadioGroup/RadioGroup";
import ButtonWithRadioGroup from "../ButtonWithRadioGroup/ButtonWithRadioGroup";

function FormSearch(props) {

    return (
        <form className="form-search form-search_catalog">

            
            {/*
            <input disabled style={{width: 1000, marginTop: 40, marginBottom: 20}} value={`Фильтр на ТИ${props.selectedPto}   ${props.selectedMetall} and ${props.selectedRubberMark} and ${props.selectedThinckness}mm`} />
            */}
            <span className="form-search__span form-search__span_catalog ">Материал пластины</span>
            <RadioGroup 
                tags={[
                    {value: 'AISI316', text: 'AISI316'}, 
                    {value: 'AISI304', text: 'AISI304'}
                ]}  
                selected={props.selectedMetall}
                onChangeSelected={props.setSelectedMetall}
                title="Материал пластин"
            />

            <span className="form-search__span form-search__span_catalog ">Толщина пластины</span>
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

            <span className="form-search__span form-search__span_catalog ">Материал уплонений</span>
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
    )
}

export default FormSearch;
