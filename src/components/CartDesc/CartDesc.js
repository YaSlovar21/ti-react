import React from "react";

import './CartDesc.css';

function CartDesc() {
    return (
        <div className="cart">
            <h2 className="cart__title cart__title_init">Здесь будет Ваша сборка</h2>
            <ul className="cart__list">
                <li className="cart__list-item">
                    <h3 className="cart__goods-title">Пластина ТИ025 0000H AISI316/0.5</h3>
                    <form>
                        <button type="button">-</button>
                        <input type="text" placeholder="1"/>
                        <button type="button">+</button>
                    </form>
                    <button>Удалить</button>
                </li>
            </ul>
        </div>
    )
}

export default CartDesc;