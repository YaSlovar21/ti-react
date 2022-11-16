import React from "react";
import { Link } from "react-router-dom";
import './CardPlita.css';

function CardPlita(props) {
    // в пропсах спускаем в карточку "в корзине ли она"
    const [isCardInCart, setIsCardInCart] = React.useState(false);

    React.useEffect(()=> {
      setItemParameters({name: `${props.cardType  === 'stanina' ? 'Станина': 'Плита нажимная'} ТИ${props.pto} DN${props.dn} ${props.config} ${props.type==='shtu' ? 'ГОСТ' : 'DIN'}`});
    }, [props.pto])

    const [itemParameters, setItemParameters] = React.useState({
        name: `${props.cardType  === 'stanina' ? 'Станина': 'Плита нажимная'} ТИ${props.pto} DN${props.dn} ${props.config} ${props.type==='shtu' ? 'ГОСТ' : 'DIN'}`,
    });

    const cardImageUrl = props.cardType === 'stanina' 
        ? `http://static.tochka-izloma.ru.website.yandexcloud.net/stanina-ti${props.pto}-dn${props.dn}-${props.config}-${props.type}.png` 
        : `http://static.tochka-izloma.ru.website.yandexcloud.net/plita-ti${props.pto}-dn${props.dn}-${props.config}-${props.type}.png` 

    const cardId = props.cardType === 'stanina' 
      ? `stanina${props.pto}-${props.dn}-${props.config}-${props.type}`
      : `plita-${props.pto}-${props.dn}-${props.config}-${props.type}`


    function handleCartAddButtonClick() {
      props.onAddedToCart(cardId);
    }
    
    return (
      <div className={`card card_cti `}>
        <div className="card__header">
          <h3 className="bem__title card__title_cti">{itemParameters.name} </h3>
        </div>
        <div className="card__image-container">  
          <img className="card__image" src={cardImageUrl} alt={itemParameters.name}/>
        </div>
        <div className="card__footer">
          <span className="bem__title card__price">2000 руб</span>
          <button className={`card__action-button card__action-button_add-to-cart ${props.cart.includes(cardId) ? 'card__action-button_active' : ''}`} onClick={handleCartAddButtonClick}></button>
        </div>
      </div>
    );
}

export default CardPlita;