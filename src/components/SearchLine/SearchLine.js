import React from "react";

import './SearchLine.css';

function SearchLine() {
    return (
        <>
            <div className="form-search__line">
                <input
                    className="form-search__input"
                    placeholder="Введите наименование для поиска"
                    name="request"
                />
                <button className="form-search__button" type="submit">Поиск</button>
            </div>
            <span className="form-search__hint">Ничего не введено</span>
        </>
    )
}

export default SearchLine;