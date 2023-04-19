import React from "react";

import './Ports.css'

//import { ports } from "../../utils/ports";
import { portsItems } from "../../utils/constants";

import PortsFilter from "../../utils/PortsFilter";

function Ports({selectedDu, onAddedToCart, cart}) {
    
    const portsItemsFiltered = portsItems.filter(it => `DU${it['DN'].split('DN')[1]}` === selectedDu);

    function urlImage(port) {
        if (port.type === 'vstavka-rezinovaya') {
            return 'vstavka-rezinovaya.png';
        } 
        return `ports/${port.image}`;
    }

    function handleCartAddButtonClick(evt) {
        onAddedToCart(evt.target.dataset.id);
    }

    return (
        portsItemsFiltered.map((port, i)=> (
            <div className={`card card_cti `}>
                <div className="card__header">
                    <h3 className="bem__title card__title_cti">{port.name} ({port.type})</h3>
                </div>
                <div className="card__image-container">  
                    <img className="card__image" src={`http://static.tochka-izloma.ru.website.yandexcloud.net/${urlImage(port)}`} alt={port.name}/>
                </div>
                <div className="card__footer">
                <span className="bem__title card__price">{port.price} руб</span>
                <button data-id={port.id} className={`card__action-button card__action-button_add-to-cart ${cart.includes(port.id) ? 'card__action-button_active' : ''}`} onClick={handleCartAddButtonClick}></button>
                </div>
            </div>
        ))
    );
}

export default Ports;