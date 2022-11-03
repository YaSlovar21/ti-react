import React from "react";
import { Link } from "react-router-dom";

import './FormSearch.css';

function FormSearch(props) {
    const [isShortChecked, setIsShortChecked] = React.useState(true);
    
    function handleClick() {
        setIsShortChecked(!isShortChecked);
      }

    return (
        <form className="form-search">
            <div className="form-search__line">
                <input
                    className="form-search__input"
                    placeholder="Введите наименование для поиска"
                    name="request"
                />
                <button className="form-search__button" type="submit">Поиск</button>
            </div>
            <span className="form-search__hint">Ничего не введено</span>
            <div className="form-search__filter">
                <input className="form-search__checkbox" id="filter" checked={isShortChecked} type="checkbox"/>
                <button className="form-search__filterbutton" type="button" onClick={handleClick}>
                    <div className="form-search__tumblr"></div>
                </button>
                <label className="form-search__label" for="filter">В наличии</label>
            </div>
        </form>
    )
}

export default FormSearch;
