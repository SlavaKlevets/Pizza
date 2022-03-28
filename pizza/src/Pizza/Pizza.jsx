import React from "react";
import style from "./Pizza.module.css"
import {NavLink} from "react-router-dom";
import image from "../images/images.gif";

const Pizza = (props) => {

    if(!props.pizza.img) {
        return <div className={style.im}><img src={image} className={style.images} alt="alt"/></div>
    }

    let c=0;
    let ref1=React.createRef();

    let pizza = props.pizza.img.map(i => {
        return (<div key={i.name} className={style.diva} id={"id"+i.id} ref={ref1}>
                <div className={style.wpapper}>
                    <NavLink to={"/profile/"+i.id}>
                        <img className={style.image} src={i.img} alt="img"/>
                    </NavLink>
                </div>
                <h2 className={style.name}>{i.name}</h2>
                <p className={style.ingr}>{i.ingr}</p>
                <select name="" id="sel1" className={style.select}>
                    <option id="op0" selected disabled>Размер</option>
                    <option id="op3" value="a">30 см</option>
                    <option id="op4" value="b">25 см</option>
                    <option id="op5" value="c">36 см</option>
                </select>
                <div className={style.dop11}>
                    <div className={style.dopClick1}>
                        <div className={style.blok}>
                            <svg className="custom-icon" width="26" height="26" viewBox="0 0 24 24"
                                 xmlns="http://www.w3.org/2000/svg" fill="rgb(0,121,174)">
                                <g>
                                    <path d='m10.5,13.88l6.59,-6.59l1.41,1.42l-8,8l-5,-5l1.41,-1.41l3.59,3.58z'> </path>
                                </g>
                            </svg>
                        </div>
                    </div>
                    <div className={style.dopImage1}><img className={style.img1} src={i.dopimg1} alt="alt"/></div>
                    <div className={style.dopName1}>{i.dop1}</div>
                    <div className={style.dopPrice1}>{i.dopprice1}</div>
                </div>
                <div className={style.dop22}>
                    <div className={style.dopClick1}>
                        <div className={style.blok}>
                            <svg className="custom-icon" width="26" height="26" viewBox="0 0 24 24"
                                 xmlns="http://www.w3.org/2000/svg" fill="rgb(0,121,174)">
                                <g>
                                    <path d="M11 11V7H13V11H17V13H13V17H11V13H7V11H11Z"> </path>
                                </g>
                            </svg>
                        </div>
                    </div>
                    <div className={style.dopImage1}><img className={style.img2} src={i.dopimg2} alt=""/></div>
                    <div className={style.dopName1}>{i.dop2}</div>
                    <div className={style.dopPrice1}>{i.dopprice2}</div>
                </div>
                <div><p className={style.cost}>{i.cost}руб.</p></div>

                {!i.valye ?<div>{i.followed?<button className={style.but} onClick={()=>{props.unfollow(i.id);props.followValye(i.id);c=props.kol_vo+1;props.pushKorzina(i);
                    props.pushKolVo(c);}}>В корзину</button>:
                        <button className={style.but} onClick={()=>{props.followValye(i.id); props.follow(i.id) }}>Добавлена</button>}</div>:

                    <div className={style.but}><button className={style.but1} onClick={()=>{props.setMinZakaz(i.id);c=props.kol_vo-1;props.pushKolVo(c);}}>-</button>{i.zakaz}
                        <button className={style.but2} onClick={()=>{props.setZakaz(i.id);c=props.kol_vo+1;props.pushKolVo(c); props.pushKorzina(i);}}>+</button></div>}
            </div>
        )
    });

    return (
        <div>
            <div className={style.razdely}>
                <h1 className={style.headPizza}>Пицца</h1>
                <b className={style.classick} ><a href="#id15">Классические</a></b>
                <b className={style.classick}><a href="#id10">Любимые</a></b>
                <b className={style.classick} ><a href="#id5">Премиум</a></b>
                <b className={style.classick} ><a href="#id20">Легенды</a></b>
                <b className={style.classick} ><a href="#id1">Красная цена</a></b>
            </div>
            <div className={style.dive} >
                {pizza}
            </div>
        </div>
    )
}
export default Pizza;