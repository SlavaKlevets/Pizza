import React from "react";
import style from "./ProfileNovosty.module.css";


const ProfileNovosty = (props) => {

    if (!props.profilenovosty) {
        return <div><img className={style.ad} src="https://st2.depositphotos.com/1064024/10769/i/600/depositphotos_107694484-stock-photo-little-boy.jpg" alt="aa"/>
               </div>
    }

    return (
        <div className={style.wr0}>
            <div className={style.dive}>
                <h2 className={style.name}>{props.profilenovosty.name}</h2>
                <div className={style.diva}>
                    <div className={style.wpapper}>
                        <img className={style.image} src={props.profilenovosty.img} alt="alt"/>
                        <div className={style.text}>
                            {props.profilenovosty.text}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default ProfileNovosty;