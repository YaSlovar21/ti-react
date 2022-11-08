import React from "react";
import ChoiceGroupList from "../ChoiceGroupList/ChoiceGroupList";

import './DropdownSelect.css';

function DropdownSelect() {

    const [selectedPto, setSelectedPto] = React.useState('ti-025');

    function handleChangeSelectedPto(id) {
        setSelectedPto(id);
    }

    return (
        <div className="dropdown">
            <input className="dropdown__input" value={selectedPto} disabled/>
            <ChoiceGroupList
                 type="radio" 
                 whatwechoose="pto" 
                 onChangePto={handleChangeSelectedPto}
                 tags={[
                     {value: 'ti-025', text: 'ТИ025'}, 
                     {value: 'ti-077', text: 'ТИ077'}
                 ]} 
            />

        </div>
    )
}

export default DropdownSelect;