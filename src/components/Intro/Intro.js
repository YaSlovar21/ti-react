import React from "react";
import { Link } from "react-router-dom";
import './Intro.css';

function Intro() {
    return (
        <>
        <style>
            
        </style>
        <section className="mainpage-about">
        <h2 className="section-title section-title_ti">О компании</h2>
            <ul className="mainpage-about__grid">
                <li className="mainpage-about__grid-item">
                <p className="bem__paragraph">На сегодняшний день компания владеет полным циклом производства всей линейки комплектующих для
                    разборных пластинчатых теплообменников. Внедрение ресурсосберегающих технологий производства позволило сократить цикл
                    изготовления комплектующих, что значительно снизило стоимость готового изделия.
                    На сегодняшний день компания «Точка излома» предлагает полный ассортимент комплектующих для разборных пластинчатых
                    теплообменников. Компания располагает собственным производством, конструкторским бюро, научные разработки защищены
                    законом об интеллектуальной собственности.</p>
                </li>
                <li className="mainpage-about__grid-item">
                <ul className="bem__list bem__list_line" style={{"justify-content": "space-between"}}>
                    <li className="mini-title-intro"><span className="mini-title-intro__span mini-title-intro__span_ti">15</span> лет опыта</li>
                    <li className="mini-title-intro mini-title-intro_wider"><span className="mini-title-intro__span mini-title-intro__span_ti">2000+</span> выполненных заказов</li>
                    <li className="mini-title-intro mini-title-intro_wider"><span className="mini-title-intro__span mini-title-intro__span_ti">200+</span> довольных заказчиков</li>
                </ul>
                </li>
                <li className="mainpage-about__grid-item">
                    <h3 className="section-subtitle">Программа расчёта пластинчатых теплообменников</h3>
                    <p className="bem__paragraph mainpage-about__paragraph" style={{margin: '20px 0'}}>Разработанная нами программа предназначена для расчета и подбора пластинчатого теплообменника. Для расчета нужно внести все необходимые данные по температурам, давлению и мощности.</p>
                    <Link className="bem__link bem__link_download-right  mainpage-about__action-link" to="#">Скачать программу</Link>
                </li>
                <li className="mainpage-about__grid-item">
                    <h3 className="section-subtitle">Регистрация в личном кабинете</h3>
                    <p className="bem__paragraph mainpage-about__paragraph" style={{margin: '20px 0'}}>Партнеры компании имеют всестороннюю консультационную поддержку, обеспечиваются конструкторской и технической документацией. Производственные мощности компании «Точка излома» позволяют удовлетворить заказ любого объема, а служба логистики доставить его в максимально короткий срок на склад компании-партнера, при этом затраты на логистику компания берет на себя. Разработана эффективная и прозрачная система скидок, кроме того, надежным партнерам предлагается кредитование при заказе продукции.</p>
                    <Link className="bem__link mainpage-about__action-link" to="#">Зарегистрироваться в кабинете партнёра &#8594;</Link>
                </li>
            </ul>
        </section>
        </>
    );
}

export default Intro;