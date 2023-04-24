import React from "react";

import './Plits.css'

//import { ports } from "../../utils/ports";
import { plitsItems } from "../../utils/constants";


function Plits({selectedDu, selectedPto, cart, onAddedToCart}) {
    
    const plitsItemsFiltered = plitsItems.filter(it => it.pto === selectedPto);
    function handleCartAddButtonClick(evt) {
        //setIsCardInCart(!isCardInCart);
        //props.onAddedToCart(`${props.pto}-${props.plastPorts}-${props.plastCanals}`);
        //onAddedToCart('plitelem9');
        onAddedToCart(evt.target.dataset.id);
    }

    return (
        plitsItemsFiltered.map((plita, i)=> (
            <div className={`card card_cti `}>
                <div className="card__header">
                    <h3 className="bem__title card__title_cti">{plita.name}</h3>
                </div>
                <div className="card__image-container">  
                    <img className="card__image" src={`http://static.tochka-izloma.ru.website.yandexcloud.net/${plita.image}`} alt={plita.name}/>
                </div>
                <div className="card__footer">
                <span className="bem__title card__price">{plita.price} руб</span>
                <button data-id={plita.id} className={`card__action-button card__action-button_add-to-cart ${cart.includes(plita.id) ? 'card__action-button_active' : ''}`} onClick={handleCartAddButtonClick}></button>
                </div>
            </div>
        ))
    );
}

export default Plits;