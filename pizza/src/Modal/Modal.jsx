import {React, useEffect} from "react";
import style from "./Modal.module.css";

const Modal=(props)=>{

let d=props.korzina2.map((i,index)=> <div className={style.podr} key={index}><img className={style.image} src={i.img} alt=""/>
    <h1 className={style.hh}>{i.name}</h1><h1>-</h1>
    <h1 className={style.hh}>{i.cost} руб.</h1></div>)


const handleOutsideClick = (e) => {
  if(!e.path.includes(props.refOKorz.current)){
      props.otrkrkorz2(false);
  }
}
 useEffect(()=>{
        document.body.addEventListener('click',handleOutsideClick)
    });


    return(
        <div className={!props.korzina? style.noactive : style.modal} >
            <div className={style.bt} onClick={()=>{props.otrkrkorz2(false)}}>
                <img src="https://c0.klipartz.com/pngpicture/687/951/gratis-png-pinceles-rojos-thumbnail.png" alt=""/>
            </div>
            {d}
            <h1>Сумма заказа: {props.dfg} руб.</h1>
            <div className={style.dbut}>
                <button className={style.butoon}>
                    Оформить заказ
                </button>
                <button className={style.butoon} onClick={()=> {
                    props.ochustytThunk();
                    props.ochustyt_kol_voThunk();
                }}>
                    Очитсить корзину
                </button>
            </div>

        </div>

)
}
export default Modal;