import React from "react";
import { Link } from "react-router-dom";
import './Card.css';

function Card(props) {

    const [itemParameters, setItemParameters] = React.useState({
        name: `${props.pto}-${props.plastPorts}-${props.plastCanals}`
    });

    const cardImageUrl = props.type === 'plast' 
        ? `http://static.tochka-izloma.ru.website.yandexcloud.net/plast-ti${props.pto}-${props.plastPorts}-${props.plastCanals}.png` 
        : `http://static.tochka-izloma.ru.website.yandexcloud.net/uplot-ti${props.pto}-${props.uplotPosition}.png` 

    return (
      <div class="card card_cti">
        <div class="card__header">
          <h3 class="bem__title card__title_cti">{ props.type === 'plast' ? 'Пластина': 'Уплотнение'} {props.pto} {props.plastPorts}{props.plastCanals} </h3>
          <button class="card__action-button card__action-button_config"></button>
        </div>
        <div class="card__image-container">  
          <img class="card__image" src={cardImageUrl}/>
        </div>
        <div class="card__footer">
          <span class="bem__title card__price">2000 руб</span>
          <button class="card__action-button card__action-button_add-to-cart"></button>
        </div>
      </div>
    );
}

export default Card;