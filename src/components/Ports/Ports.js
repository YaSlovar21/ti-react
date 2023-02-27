import React from "react";

import './Ports.css'

import { ports } from "../../utils/ports";
import PortsFilter from "../../utils/PortsFilter";

function Ports({selectedDu, onAddedToCart, cart}) {
    return (
        ports.filter(it => it.du === selectedDu).map((port, i)=> (
            <div className={`card card_cti `}>
                <div className="card__header">
                    <h3 className="bem__title card__title_cti">{port.name}</h3>
                </div>
                <div className="card__image-container">  
                    <img className="card__image" src={`http://static.tochka-izloma.ru.website.yandexcloud.net/ports/${port.imageUrl}.png`} alt={port.name}/>
                </div>
                <div className="card__footer">
                <span className="bem__title card__price">2000 руб</span>
                
                </div>
            </div>
        ))
    );
}

export default Ports;