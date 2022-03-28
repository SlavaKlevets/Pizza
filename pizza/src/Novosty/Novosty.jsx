import React from "react";
import style from "./Novosty.module.css";
import {NavLink} from "react-router-dom";

const Novosty=(props)=>{

    let novosty= props.novosty.img.map(i=>{return(<div key={i.name} className={style.diva}><div className={style.wpapper}>

            <NavLink to={"/profilenovosty/"+i.id}>
                <img className={style.image} src={i.img} alt="img"/>
            </NavLink>

    </div>

        </div>
    )});

    return(
        <div>
            <div className={style.razdely}>
                <h1 className={style.headPizza}>Новости</h1>
            </div>
        <div className={style.dive}>
            {novosty}
        </div>
        </div>
    )
}
export default Novosty;