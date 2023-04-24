import React from "react";

import './Pconstr.css'

//import { ports } from "../../utils/ports";
import { stbItems } from "../../utils/constants";

function Pconstr({selectedDu, selectedPto, onAddedToCart, cart}) {
    
    //const portsItemsFiltered = portsItems.filter(it => `DU${it['DN'].split('DN')[1]}` === selectedDu).filter(it => it.directpto ? selectedPto === `${it.directpto}` : true);
    const stbItemsFiltered = stbItems.filter(it => it.pto.includes(selectedPto));
    

    function handleCartAddButtonClick(evt) {
        onAddedToCart(evt.target.dataset.id);
    }

    return (
        stbItemsFiltered.map((stb, i)=> (
            <div className={`card card_cti `}>
                <div className="card__header">
                    <h3 className="bem__title card__title_cti">{stb.name}</h3>
                </div>
                <div className="card__image-container">  
                    <img className="card__image" src={`http://static.tochka-izloma.ru.website.yandexcloud.net/constr/${stb.image}`} alt={stb.name}/>
                </div>
                <div className="card__footer">
                    <span className="bem__title card__price">{stb.price} руб</span>
                    <button data-id={stb.id} className={`card__action-button card__action-button_add-to-cart ${cart.includes(stb.id) ? 'card__action-button_active' : ''}`} onClick={handleCartAddButtonClick}></button>
                </div>
            </div>
        ))
    );
}

export default Pconstr;