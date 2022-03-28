import React from "react";
import style from "../Desert/Desert.module.css";
import {NavLink} from "react-router-dom";

const Napitki=(props)=>{

    let c=0;
    let napitki= props.napitki.img.map(i=>{return(<div key={i.name} className={style.diva}><div className={style.wpapper}>

            <NavLink to={"/profile/"+i.id}>
                <img className={style.image} src={i.img} alt="img"/>
            </NavLink>

    </div><h2 className={style.name}>{i.name}</h2>
            <p className={style.ingr}>{i.ingr}</p>
            <div><p className={style.cost}>{i.cost}руб.</p></div>
            <div>
                {i.followed?<button className={style.but}
                                    onClick={()=>{props.unfollow(i.id);c=props.kol_vo+1;props.pushKorzina(i); props.pushKolVo(c); console.log(props.kol_vo)}}>В корзину</button>:
                    <button className={style.but} onClick={()=>{props.follow(i.id) }}>Добавлена</button>}
            </div>

        </div>
    )});
    let napitki2= props.napitki.img2.map(i=>{return(<div key={i.name} className={style.diva}><div className={style.wpapper}>

            <NavLink to={"/profile/"+i.id}>
                <img className={style.image} src={i.img} alt="img"/>
            </NavLink>

    </div><h2 className={style.name}>{i.name}</h2>
            <p className={style.ingr}>{i.ingr}</p>
            <div><p className={style.cost}>{i.cost}руб.</p></div>
            <div>
                {i.followed?<button className={style.but}
                                    onClick={()=>{props.unfollow2(i.id);c=props.kol_vo+1;props.pushKorzina(i); props.pushKolVo(c); console.log(props.kol_vo)}}>В корзину</button>:
                    <button className={style.but} onClick={()=>{props.follow2(i.id) }}>Добавлена</button>}
            </div>

        </div>
    )});
    let napitki3= props.napitki.img3.map(i=>{return(<div key={i.name} className={style.diva}><div className={style.wpapper}>

            <NavLink to={"/profile/"+i.id}>
                <img className={style.image} src={i.img} alt="img"/>
            </NavLink>

    </div><h2 className={style.name}>{i.name}</h2>
            <p className={style.ingr}>{i.ingr}</p>
            <div><p className={style.cost}>{i.cost}руб.</p></div>
            <div>
                {i.followed?<button className={style.but}
                                    onClick={()=>{props.unfollow3(i.id);c=props.kol_vo+1;props.pushKorzina(i); props.pushKolVo(c); console.log(props.kol_vo)}}>В корзину</button>:
                    <button className={style.but} onClick={()=>{props.follow3(i.id) }}>Добавлена</button>}
            </div>

        </div>
    )});
    let napitki4= props.napitki.img4.map(i=>{return(<div key={i.name} className={style.diva}><div className={style.wpapper}>

            <NavLink to={"/profile/"+i.id}>
                <img className={style.image} src={i.img} alt="img"/>
            </NavLink>

    </div><h2 className={style.name}>{i.name}</h2>
            <p className={style.ingr}>{i.ingr}</p>
            <div><p className={style.cost}>{i.cost}руб.</p></div>
            <div>
                {i.followed?<button className={style.but}
                                    onClick={()=>{props.unfollow4(i.id);c=props.kol_vo+1;props.pushKorzina(i); props.pushKolVo(c); console.log(props.kol_vo)}}>В корзину</button>:
                    <button className={style.but} onClick={()=>{props.follow4(i.id) }}>Добавлена</button>}
            </div>

        </div>
    )});
    let napitki5= props.napitki.img5.map(i=>{return(<div key={i.name} className={style.diva}><div className={style.wpapper}>

            <NavLink to={"/profile/"+i.id}>
                <img className={style.image} src={i.img} alt="img"/>
            </NavLink>

    </div><h2 className={style.name}>{i.name}</h2>
            <p className={style.ingr}>{i.ingr}</p>
            <div><p className={style.cost}>{i.cost}руб.</p></div>
            <div>
                {i.followed?<button className={style.but}
                                    onClick={()=>{props.unfollow5(i.id);c=props.kol_vo+1;props.pushKorzina(i); props.pushKolVo(c); console.log(props.kol_vo)}}>В корзину</button>:
                    <button className={style.but} onClick={()=>{props.follow5(i.id) }}>Добавлена</button>}
            </div>

        </div>
    )});

    return(
        <div>
            <div className={style.razdely}>
                <h1 className={style.headPizza}>Напитки</h1>
            </div>
        <div className={style.dive}>
            {napitki}
        <div className={style.dive}>{napitki2}</div>
        <div className={style.dive}>{napitki3}</div>
        <div className={style.dive}>{napitki4}</div>
        <div className={style.dive}>{napitki5}</div>
        </div>
        </div>
    )
}
export default Napitki;