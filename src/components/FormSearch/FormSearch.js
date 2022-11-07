import React from "react";
import { Link } from "react-router-dom";

import './FormSearch.css';

import ChoiceGroupList from "../ChoiceGroupList/ChoiceGroupList";

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

            
            <ChoiceGroupList 
                title="Марка стали пластин" 
                type="checkbox" 
                whatwechoose="steel" 
                tags={[
                    {value: 'aisi316', text: 'AISI316'}, 
                    {value: 'aisi304', text: 'AISI304'}
                ]} 
            />

            <ChoiceGroupList 
                title="Толщина пластины" 
                type="radio" 
                whatwechoose="thickness" 
                tags={[
                    {value: '0.4', text: '0.4'}, 
                    {value: '0.5', text: '0.5'},
                    {value: '0.6', text: '0.6'}
                ]} 
            />

            <ChoiceGroupList 
                title="Материал уплотнений" 
                type="radio" 
                whatwechoose="rubber" 
                tags={[
                    {value: 'epdm', text: 'EPDM'}, 
                    {value: 'nbr', text: 'NBR'},
                ]} 
            />
            
        </form>
    )
}

export default FormSearch;
