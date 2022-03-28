import React from "react";
import style from "./ProfileAkcii.module.css";
import {NavLink} from "react-router-dom";

const ProfileAkcii = (props) => {

    /*if (!props.profileakcii) {
        return <div><img className={style.ad} src="https://st2.depositphotos.com/1064024/10769/i/600/depositphotos_107694484-stock-photo-little-boy.jpg" alt="aa"/>
               </div>
    }*/

    let r= props.img1.map(i=><div className={style.dive}><div className={style.diva}>
            <div className={style.wpapper}>
                <NavLink to={"/profileakcii/"+i.id}>
                    <img className={style.image} src={i.img} alt="img"/>
                </NavLink>
            </div>
            <h2 className={style.name}>{i.name}</h2>
            <p className={style.ingr}>{i.ingr}</p>
        </div>
    </div>);

    return (
        <div className={style.wr0}>
            <div className={style.dive}>
                <h2 className={style.name}>{props.profileakcii.name}</h2>
                <div className={style.diva}>
                    <div className={style.wpapper}>
                        <img className={style.image} src={props.profileakcii.img} alt="a2"/>
                    </div>
                    <p className={style.ingr}>{props.profileakcii.ingr}</p>
                </div>

            </div>
            <div >
                {r}
            </div>
        </div>
    )
}
export default ProfileAkcii;