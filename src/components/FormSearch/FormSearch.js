import React from "react";
import { Link } from "react-router-dom";

import './FormSearch.css';

import ChoiceGroupList from "../ChoiceGroupList/ChoiceGroupList";
import DropdownSelect from "../DropdownSelect/DropdownSelect";
import RadioGroup from "../RadioGroup/RadioGroup";
import ButtonWithRadioGroup from "../ButtonWithRadioGroup/ButtonWithRadioGroup";

function FormSearch(props) {

    const [selectedMetall, setSelectedMetall] = React.useState('AISI304');
    const [selectedRubberMark, setSelectedRubberMark] = React.useState('EPDM');
    const [selectedThinckness, setSelectedThinckness] = React.useState('05');

    const [selectedPto, setSelectedPto] = React.useState('ti-025');

    return (
        <form className="form-search">

            <ButtonWithRadioGroup 
                selected={selectedPto}
                onChangeSelected={setSelectedPto}
                tags={[
                    {value: 'ti-025', text: 'ТИ025'}, 
                    {value: 'ti-077', text: 'ТИ077'},
                    {value: 'ti-13', text: 'ТИ13'},
                    {value: 'ti-18', text: 'ТИ18'},
                ]}  
            />

            <input disabled style={{width: 1000, marginTop: 100, marginBottom: 20}} value={`Фильтр на ${selectedMetall} and ${selectedRubberMark} and ${selectedThinckness}mm`} />

            <RadioGroup 
                tags={[
                    {value: 'AISI316', text: 'AISI316'}, 
                    {value: 'AISI304', text: 'AISI304'}
                ]}  
                selected={selectedMetall}
                onChangeSelected={setSelectedMetall}
                title="Материал пластин"
            />

            <RadioGroup 
                tags={[
                    {value: 'EPDM', text: 'EPDM'}, 
                    {value: 'NBR', text: 'NBR'},
                ]}  
                selected={selectedRubberMark}
                onChangeSelected={setSelectedRubberMark}
                title="Материал уплотнений"
            />

            <RadioGroup 
                tags={[
                    {value: '04', text: '0.4'}, 
                    {value: '05', text: '0.5'},
                    {value: '06', text: '0.6'}
                ]}  
                selected={selectedThinckness}
                onChangeSelected={setSelectedThinckness}
                title="Толщина пластин"
            />
            
        </form>
    )
}

export default FormSearch;
