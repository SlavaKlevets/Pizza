import React from "react";
import style from "./Footer.module.css";
import {NavLink} from "react-router-dom";

const Footer = () => {
    return (
        <div className={style.wrapper}>
            <div className={style.footer}>
                <div className={style.footer1}>
                    <ul>
                        <li className={style.head}><NavLink to="/pizza" className={style.a}>О нас</NavLink></li>
                        <li><NavLink to="/pizza" className={style.a}>Domino's Pizza Belarus</NavLink></li>
                        <li><NavLink to="/pizza" className={style.a}>Работа в Domino's</NavLink></li>
                    </ul>
                </div>
                <div className={style.footer2}>
                    <ul>
                        <li className={style.head}><NavLink to="/pizza" className={style.a}>Пиццерия</NavLink></li>
                        <li><NavLink to="/pizza" className={style.a}>Карта доставки</NavLink></li>
                        <li><NavLink to="/pizza" className={style.a}>Условия доставки</NavLink></li>
                    </ul>
                </div>
                <div className={style.footer3}>
                    <ul>
                        <li className={style.head}><NavLink to="/pizza" className={style.a}>Новости</NavLink></li>
                        <li><NavLink to="/pizza" className={style.a}>Акции</NavLink></li>
                        <li><NavLink to="/pizza" className={style.a}>Новости</NavLink></li>
                        <li><NavLink to="/pizza" className={style.a}>ECO bonus</NavLink></li>
                    </ul>
                </div>
                <div className={style.footer4}>
                    <ul>
                        <li className={style.head}><NavLink to="/pizza" className={style.a}>Обратная связь</NavLink></li>
                        <li><NavLink to="/pizza" className={style.a}>Оставить отзыв</NavLink></li>
                        <li><NavLink to="/pizza" className={style.a}>Контактные данные</NavLink></li>
                        <li><NavLink to="/pizza" className={style.a}>Арендодателям</NavLink></li>
                        <li><NavLink to="/pizza" className={style.a}>Поставщикам</NavLink></li>
                    </ul>
                </div>
                <div className={style.footer5}>
                    <ul>
                        <li className={style.head}><NavLink to="/pizza" className={style.a}>Pizza Tracker</NavLink></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default Footer;