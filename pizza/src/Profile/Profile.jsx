import React from "react";
import style from "./Profile.module.css";

const Profile=(props)=>{

    if(!props.profile){
        return <div><img className={style.ad} src="https://ford-eu2.nextgen-technology.net/Content/images/Icons/loading.gif" alt="alt"/></div>
    }

    let c=0;
    return(
        <div className={style.dive}>

             <div className={style.diva}><div className={style.wpapper}>
                <img className={style.image} src={props.profile.img} alt="alt"/></div><h2 className={style.name}>{props.profile.name}</h2>

                <p className={style.ingr}>{props.profile.ingr}</p>
                <select name="" id="sel1" className={style.select}><option id="op0" selected disabled>Размер</option>
                    <option id="op3" value="a">30 см</option>
                    <option id="op4" value="b">25 см</option>
                    <option id="op5" value="c">36 см</option>
                </select>
                <div><p className={style.cost}>{props.profile.cost}руб.</p></div>
                <div className={style.wrapname}>
                    {props.profile.followed?<button className={style.but}
                                        onClick={()=>{props.unfollow(props.profile.followed);props.pushKorzina(props.profile);console.log(props.korzina) ;c=props.kol_vo+1; props.pushKolVo(c); console.log(props.kol_vo)}}>В корзину</button>:
                        <button className={style.but} onClick={()=>{props.follow(props.profile.followed);}}>Добавлена</button>}
                </div>
            </div>
        </div>
    )
}
export default Profile;