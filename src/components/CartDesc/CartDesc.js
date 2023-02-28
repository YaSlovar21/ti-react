import React from "react";

import './CartDesc.css';

import FormPlusminus from "../FormPlusminus/FormPlusminus";



function CartDesc(props) {

    function handleDelete(evt) {
        props.onDelete(evt.target.value);
    }

    function getAliasById(elemId){
        console.log(props.aliases.filter(item => item.id === elemId))
        return props.aliases.filter(item => item.id === elemId)[0];
    }

    return (
        <div className='cart'>
            {
                props.cartList.length === 0 
                ? <h2 className="cart__title cart__title_init">Здесь будет Ваша сборка</h2>
                : (
                <>
                <h2 className="cart__title cart__title_init">Ваш заказ</h2>
                <ul className="cart__list">
                {props.cartList.map((elem, i)=> (
                    <li className="cart__list-item">
                        <h3 className="cart__goods-title">{getAliasById(elem)['alias']} ({getAliasById(elem)['price']} руб./шт)</h3>
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