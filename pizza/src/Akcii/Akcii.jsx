import React from "react";
import style from "../Akcii/Akcii.module.css";
import {NavLink} from "react-router-dom";

const Akcii=(props)=>{

    let souce= props.akcii.img.map(i=>{return(<div key={i.name} className={style.diva}><div className={style.wpapper}>

            <NavLink to={"/profileakcii/"+i.id}>
                <img className={style.image} src={i.img} alt="img"/>
            </NavLink>
    </div>
            <h1 className={style.name}>{i.name}</h1>
            <p className={style.ingr}>{i.ingr}</p>
        </div>
    )});

    return(
        <div>
            <div className={style.razdely}>
                <h1 className={style.headPizza}>Акции</h1>
            </div>
        <div className={style.dive}>
            {souce}
        </div>
        </div>
    )
}
export default Akcii;