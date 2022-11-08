import React from "react";

import './ChoiceTumblr.css';

function ChoiceTumblr() {
    const [isShortChecked, setIsShortChecked] = React.useState(true);
    
    function handleClick() {
        setIsShortChecked(!isShortChecked);
    }

    return (
        <div className="form-search__filter">
                <input className="form-search__checkbox" id="filter" checked={isShortChecked} type="checkbox"/>
                <button className="form-search__filterbutton" type="button" onClick={handleClick}>
                    <div className="form-search__tumblr"></div>
                </button>
                <label className="form-search__label" for="filter">В наличии</label>
        </div>
    )
}

export default ChoiceTumblr;

