import React from "react";
import style from "./Clients.module.css";

const Clients=()=>{

    return(
        <div className={style.wrapper}>
            <div className={style.wrapper2}>
                <div className={style.div1}><img className={style.image} src="https://dominos.by/static/images/img-ffe308.svg" alt=""/><h2>270 000</h2><p className={style.podp}>Клиентов в месяц</p></div>
                <div className={style.div2}><img className={style.image} src="https://dominos.by/static/images/img-a0aa39.svg" alt=""/><h2>31</h2><p className={style.podp}>Пиццерия в Беларуси</p></div>
                <div className={style.div3}><img className={style.image} src="https://dominos.by/static/images/img-22608c.svg" alt=""/><h2>93</h2><p className={style.podp}>Страны</p></div>
                <div className={style.div4}><img className={style.image} src="https://dominos.by/static/images/img-013a0a.svg" alt=""/><h2>24/7</h2><p className={style.podp}>Доставляем</p></div>
                <div className={style.div5}><img className={style.image} src="https://dominos.by/static/images/img-cf4647.svg" alt=""/><h2>11:00-23:00</h2><p className={style.podp}>Время работы пиццерий</p></div>
            </div>
        </div>
    )
}
export default Clients;