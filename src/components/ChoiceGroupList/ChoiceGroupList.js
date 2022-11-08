import React from "react";

import './ChoiceGroupList.css';

function ChoiceGroupList(props) {
    
    return (
        <fieldset className="choicelist">
             <h4 className="choicelist__title">{props.title}</h4>
             {
                props.tags.map((element, i) => (
                <>
                    <label>
                        <input type={props.type} className="choicelist__input" name={props.whatwechoose} value={element.value} />
                        <span className="choicelist__span">{element.text}</span> 
                    </label>
                    {i !== props.tags.length - 1 ? '  •  ' : ''}
                </>
                ))
             }
        </fieldset>
    )
}

export default ChoiceGroupList;