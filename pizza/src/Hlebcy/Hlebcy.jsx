import React from "react";
import style from "./Hlebcy.module.css";
import {NavLink} from "react-router-dom";

const Hlebcy=(props)=>{

    let c=0;
    let hlebcy= props.hlebcy.img.map(i=>{return(<div key={i.name} className={style.diva}><div className={style.wpapper}>

            <NavLink to={"/profile/"+i.id}>
                <img className={style.image} src={i.img} alt="img"/>
            </NavLink>

    </div><h2 className={style.name}>{i.name}</h2>
            <p className={style.ingr}>{i.ingr}</p>
            <select name="" id="sel1" className={style.select}><option id="op0" selected disabled>Размер</option>
                <option id="op3" value="a">30 см</option>
                <option id="op4" value="b">25 см</option>
                <option id="op5" value="c">36 см</option>
            </select>
            <div><p className={style.cost}>{i.cost}руб.</p></div>

            {!i.valye ?<div>{i.followed?<button className={style.but} onClick={()=>{props.unfollow(i.id);props.followValye(i.id);c=props.kol_vo+1;props.pushKorzina(i);
                        props.pushKolVo(c);}}>В корзину</button>:
                    <button className={style.but} onClick={()=>{props.followValye(i.id); props.follow(i.id) }}>Добавлена</button>}</div>:

                <div className={style.but}><button className={style.but1} onClick={()=>{props.setMinZakaz(i.id);c=props.kol_vo-1;props.pushKolVo(c);}}>-</button>{i.zakaz}
                    <button className={style.but2} onClick={()=>{props.setZakaz(i.id);c=props.kol_vo+1;props.pushKolVo(c); props.pushKorzina(i);}}>+</button></div>}

        </div>
    )});

    return(
        <div>
            <div className={style.razdely}>
                <h1 className={style.headPizza}>Хлебцы</h1>
            </div>
        <div className={style.dive}>
            {hlebcy}
        </div>
        </div>
    )
}
export default Hlebcy;