import {React, useRef, useState} from "react";
import style from "./Navbar.module.css";
import {NavLink} from "react-router-dom";
import Modal from "../Modal/Modal.jsx";

const Navbar = (props) => {

    const [korzina, otrkrkorz] = useState(false);
    const refOKorz = useRef();

    function func() {
        let sum = 0;
        for (let i = 0; i < props.korzina2.length; i++) {
            sum = sum + props.korzina2[i].cost;
        }
        return sum;
    }

    let df = func();

    return (
        <div className={style.wrapper}>
            <ul>
                <li> <NavLink to="/pizza" activeClassName={style.active}>Пицца</NavLink></li>
                <li><NavLink to="/kurica" activeClassName={style.active}>Курица</NavLink></li>
                <li><NavLink to="/kartofan" activeClassName={style.active}>Картофель</NavLink></li>
                <li><NavLink to="/hlebcy" activeClassName={style.active}>Хлебцы</NavLink></li>
                <li><NavLink to="/salate" activeClassName={style.active}>Салаты</NavLink></li>
                <li><NavLink to="/desert" activeClassName={style.active}>Десерты</NavLink></li>
                <li><NavLink to="/napitki" activeClassName={style.active}>Напитки</NavLink></li>
                <li><NavLink to="/souce" className={style.ddd} activeClassName={style.active}>Соусы</NavLink></li>
                <li><NavLink to="/akcii" activeClassName={style.active}>Акции</NavLink></li>
                <li><NavLink to="/novosty" activeClassName={style.active}>Новости</NavLink></li>
                {/*<li><NavLink to="/login" activeClassName={style.active}>Работа в Domino's</NavLink></li>
                <li><NavLink to="/pizza" activeClassName={style.active}>Программа лояльности</NavLink></li>*/}
                <li><div className={style.buttomKorz}>
                    <button  ref={refOKorz} className={style.customButton} onClick={() => {otrkrkorz(!korzina);func()}}
                             title="" type="button" data-test="custom-button"><span className="custom-button__content"><span
                        className="custom-button__content-children"><div className="cart-button__button-content"><svg
                        className={style.customIcon} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
                        fill="#fff"><g><path
                        d="M7.00001 18C5.90001 18 5.01001 18.9 5.01001 20C5.01001 21.1 5.90001 22 7.00001 22C8.10001 22 9.00001 21.1 9.00001 20C9.00001 18.9 8.10001 18 7.00001 18ZM1 2V4H3L6.6 11.59L5.25 14.04C5.09 14.32 5 14.65 5 15C5 16.1 5.9 17 7 17H19V15H7.42C7.28 15 7.17 14.89 7.17 14.75L7.2 14.63L8.1 13H15.55C16.3 13 16.96 12.59 17.3 11.97L20.88 5.48C20.96 5.34 21 5.17 21 5C21 4.45 20.55 4 20 4H5.21L4.27 2H1ZM17 18C15.9 18 15.01 18.9 15.01 20C15.01 21.1 15.9 22 17 22C18.1 22 19 21.1 19 20C19 18.9 18.1 18 17 18Z"></path></g></svg><span
                        className="cart-button__button-text"><span>{df}руб.</span><div className={style.kolVo}><span className={style.spanST}>{props.kol_vo}шт.</span></div>  </span></div></span></span></button>
                    {korzina &&
                    <Modal refOKorz={refOKorz} ochustytThunk={props.ochustytThunk} korzina2={props.korzina2}
                           ochustyt_kol_voThunk={props.ochustyt_kol_voThunk} korzina={korzina} otrkrkorz2={otrkrkorz} dfg={df}/>}
                </div></li>
            </ul>


        </div>
    )
}
export default Navbar;