import React from "react";
import { Link } from "react-router-dom";
import './Card.css';

function Card(props) {
 
    React.useEffect(()=>{
        
    }, [props.selectedMetall])

    // в пропсах спускаем в карточку "в корзине ли она"
    const [isCardInCart, setIsCardInCart] = React.useState(false);

    const [itemParameters, setItemParameters] = React.useState({
        name: ` ${props.cardType  === 'plast' ? 'Пластина': 'Уплотнение'} ${props.pto} ${props.plastPorts ? props.plastPorts : ''} ${props.plastCanals ? props.plastCanals : ''}`,
    });

    const cardImageUrl = props.cardType === 'plast' 
        ? `http://static.tochka-izloma.ru.website.yandexcloud.net/plast-ti${props.pto}-${props.plastPorts}-${props.plastCanals}.png` 
        : `http://static.tochka-izloma.ru.website.yandexcloud.net/uplot-ti${props.pto}-${props.uplotPosition}.png` 

    const cardId = props.cardType === 'plast' 
      ? `plast-${props.pto}-${props.plastPorts}-${props.plastCanals}-${props.selectedMetall}-${props.selectedThinckness}`
      : `uplot-${props.pto}-${props.selectedRubberMark}-${props.uplotPosition}`


    function handleCartAddButtonClick() {
      //setIsCardInCart(!isCardInCart);
      //props.onAddedToCart(`${props.pto}-${props.plastPorts}-${props.plastCanals}`);
      props.onAddedToCart(cardId);
    }
    
    function getAliasById(elemId){
      //console.log(props.aliases.filter(item => item.id === elemId))
      return props.aliases.filter(item => item.id === elemId)[0];
    }



    return (
      <div className={`card card_cti `}>
        <div className="card__header">
          <h3 className={`bem__title card__title_cti`}>{ props.cardType === 'plast' ? 'Пластина': 'Уплотнение'} ТИ{props.pto} {props.plastPorts}{props.plastCanals} </h3>
          
          {
            props.cardType === 'plast'
              ? (<ul className={`card__linelist config-list`}>
              <li className="config-list__item">{props.selectedMetall}</li>
              <li className="config-list__item">{props.selectedThinckness}</li>
            </ul>)
            : (
              <ul className="card__linelist config-list">
            <li className="config-list__item">{props.selectedRubberMark}</li>
          </ul>
            )

          }
          

        </div>
        <div className="card__image-container">  
          <img className="card__image" src={cardImageUrl} alt={itemParameters.name}/>
        </div>
        <div className="card__footer">
          <span className="bem__title card__price">{getAliasById(cardId)['price']} руб./шт</span>
          <button className={`card__action-button card__action-button_add-to-cart ${props.cart.includes(cardId) ? 'card__action-button_active' : ''}`} onClick={handleCartAddButtonClick}></button>
        </div>
      </div>
    );
}

export default Card;