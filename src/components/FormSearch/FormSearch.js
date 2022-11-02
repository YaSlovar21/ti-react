import React from "react";
import { Link } from "react-router-dom";

import './FormSearch.css';

function FormSearch(props) {
    const [isShortChecked, setIsShortChecked] = React.useState(true);
    
    function handleClick() {
        setIsShortChecked(!isShortChecked);
      }

    return (
        <form class="form-search">
            <div class="form-search__line">
                <input
                    class="form-search__input"
                    placeholder="Введите наименование для поиска"
                    name="request"
                />
                <button class="form-search__button" type="submit">Поиск</button>
            </div>
            <span class="form-search__hint">Ничего не введено</span>
            <div class="form-search__filter">
                <input class="form-search__checkbox" id="filter" checked={isShortChecked} type="checkbox"/>
                <button class="form-search__filterbutton" type="button" onClick={handleClick}>
                    <div class="form-search__tumblr"></div>
                </button>
                <label class="form-search__label" for="filter">В наличии</label>
            </div>
        </form>
    )
}

export default FormSearch;
