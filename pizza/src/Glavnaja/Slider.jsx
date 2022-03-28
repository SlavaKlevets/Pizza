import React from "react";
import style from "./Slider.module.css";
/*import {useState} from "react";*/
import {useEffect} from "react";
const Slider=(props)=>{
    let zdwig=0;
    let zdvig2=0;

    let ref5 = React.createRef();
    let ref0 = React.createRef();
    let ref100 = React.createRef();
    let ref200 = React.createRef();
    let ref300 = React.createRef();
    let ref400 = React.createRef();
    let ref500 = React.createRef();
    let ref600 = React.createRef();

let f1=(even,size)=>{
    zdwig = size;
    zdvig2=zdwig+"%";
    ref5.current.style.left=zdvig2;
    even.target.style.backgroundColor = "blue";
}

    useEffect(()=>{
        setInterval((e)=>{
            zdwig = zdwig-100;
            zdvig2=zdwig+"%";
            ref5.current.style.left=zdvig2;


            if (zdwig===0){
                ref600.current.style.backgroundColor = "red";
                    ref0.current.style.backgroundColor = "blue";
                }
            if (zdwig===-100){
                ref0.current.style.backgroundColor = "red";
                ref100.current.style.backgroundColor = "blue";
            }
            if (zdwig===-200){
                ref100.current.style.backgroundColor = "red";
                ref200.current.style.backgroundColor = "blue";
            }
            if (zdwig===-300){
                ref200.current.style.backgroundColor = "red";
                ref300.current.style.backgroundColor = "blue";
            }
            if (zdwig===-400){
                ref300.current.style.backgroundColor = "red";
                ref400.current.style.backgroundColor = "blue";
            }
            if (zdwig===-500){
                ref400.current.style.backgroundColor = "red";
                ref500.current.style.backgroundColor = "blue";
            }
            if (zdwig===-600){
                ref500.current.style.backgroundColor = "red";
                ref600.current.style.backgroundColor = "blue";
            }
            if (zdwig===-700){
                ref600.current.style.backgroundColor = "red";
                ref0.current.style.backgroundColor = "blue";
            }

            if(zdwig<=-600){
                zdwig=100
            }},3000);
    })

    return(
<div>
        <div className={style.wrapper}>
            <div className={style.wrapper01}>
                <div className={style.wrapper0} ref={ref5}>
                    <div className={style.slider1}> </div>
                    <div className={style.slider2}> </div>
                    <div className={style.slider3}> </div>
                    <div className={style.slider4}> </div>
                    <div className={style.slider5}> </div>
                    <div className={style.slider6}> </div>
                    <div className={style.slider7}> </div>
                </div>
            </div>









            {/*pointers*/}
            <div className={style.pointers}>
                <div className={style.active} ref={ref0} onClick={(e)=>{f1(e,   0)}}> </div>
                <div className={style.active} ref={ref100} onClick={(e)=>{f1(e,-100)}}> </div>
                <div className={style.active} ref={ref200} onClick={(e)=>{f1(e,-200)}}> </div>
                <div className={style.active} ref={ref300} onClick={(e)=>{f1(e,-300)}}> </div>
                <div className={style.active} ref={ref400} onClick={(e)=>{f1(e,-400)}}> </div>
                <div className={style.active} ref={ref500} onClick={(e)=>{f1(e,-500)}}> </div>
                <div className={style.active} ref={ref600} onClick={(e)=>{f1(e,-600)}}> </div>
            </div>
        </div>
</div>
)}
export default Slider;