import React from "react";

import './CartDesc.css';

import FormPlusminus from "../FormPlusminus/FormPlusminus";

function CartDesc() {
    return (
        <div className="cart">
            <h2 className="cart__title cart__title_init">Здесь будет Ваша сборка</h2>
            <ul className="cart__list">
                <li className="cart__list-item">
                    <h3 className="cart__goods-title">Пластина ТИ025 0000H AISI316/0.5</h3>
                    <FormPlusminus />
                    <button>x</button>
                </li>
                <li className="cart__list-item">
                    <h3 className="cart__goods-title">Пластина ТИ077 0000H AISI304/0.5</h3>
                    <FormPlusminus />
                    <button>x</button>
                </li>
            </ul>
            <button className="cart__send-button">Отправить заказ</button>
        </div>
    )
}

export default CartDesc;