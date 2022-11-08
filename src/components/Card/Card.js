import React from "react";
import { Link } from "react-router-dom";
import './Card.css';

function Card(props) {

    const [itemParameters, setItemParameters] = React.useState({
        name: `${props.pto}-${props.plastPorts}-${props.plastCanals}`
    });

    const [isCardInCart, setIsCardInCart] = React.useState(false);

    const cardImageUrl = props.type === 'plast' 
        ? `http://static.tochka-izloma.ru.website.yandexcloud.net/plast-ti${props.pto}-${props.plastPorts}-${props.plastCanals}.png` 
        : `http://static.tochka-izloma.ru.website.yandexcloud.net/uplot-ti${props.pto}-${props.uplotPosition}.png` 


    function handleCartAddButtonClick() {
      setIsCardInCart(!isCardInCart);
      props.onAddedToCart(`${props.pto}-${props.plastPorts}-${props.plastCanals}`);
    }
    
    return (
      <div className="card card_cti">
        <div className="card__header">
          <h3 className="bem__title card__title_cti">{ props.type === 'plast' ? 'Пластина': 'Уплотнение'} {props.pto} {props.plastPorts}{props.plastCanals} </h3>
          <button className="card__action-button card__action-button_config"></button>
        </div>
        <div className="card__image-container">  
          <img className="card__image" src={cardImageUrl}/>
        </div>
        <div className="card__footer">
          <span className="bem__title card__price">2000 руб</span>
          <button className={`card__action-button card__action-button_add-to-cart ${isCardInCart ? 'card__action-button_active' : ''}`} onClick={handleCartAddButtonClick}></button>
        </div>
      </div>
    );
}

export default Card;