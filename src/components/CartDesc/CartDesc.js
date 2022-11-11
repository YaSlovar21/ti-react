import React from "react";

import './CartDesc.css';

import FormPlusminus from "../FormPlusminus/FormPlusminus";



function CartDesc(props) {

    const [isRendering, setIsRendering] = React.useState(false);

    React.useEffect(()=>{
        setIsRendering(true)
        return () => {
            setIsRendering(false)
        };
    },[])

    function handleDelete(evt) {
        props.onDelete(evt.target.value);
    }

    return (
        <div className={`cart ${isRendering ? 'fadeIn': ''}`}>
            {
                props.cartList.length === 0 
                ? <h2 className="cart__title cart__title_init">Здесь будет Ваша сборка</h2>
                : (
                <>
                <h2 className="cart__title cart__title_init">Ваш заказ</h2>
                <ul className="cart__list">
                {props.cartList.map((elem, i)=> (
                    <li className="cart__list-item">
                        <h3 className="cart__goods-title">{elem}</h3>
                        <FormPlusminus />
                        <button type="button" value={elem} onClick={handleDelete}>x</button>
                    </li>
                ))}
                </ul>
                <button className="cart__send-button">Отправить заказ</button>
                </>
                )
            }
            
            
            
        </div>
    )
}

export default CartDesc;