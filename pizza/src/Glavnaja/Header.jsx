import React, {useEffect, useRef, useState} from "react";
import style from './Header.module.css';
import {NavLink} from "react-router-dom";


const Header = (props) => {
    const [block,setBlock]=useState(false);
    const span1 = React.createRef();
    const span2 = React.createRef();
    const span3 = React.createRef();
    const span4 = React.createRef();
    const span5 = React.createRef();
    /*const refMenu = useRef();

    const handleOutsideClick2 = (e) => {
        if(!e.path.includes(refMenu.current)){
            setBlock(!block);
        }
    }
    useEffect(()=>{
        document.body.addEventListener('click',handleOutsideClick2)
    });*/
   let a= ()=>{span1.current.style.display='none';
               span2.current.style.display='none';
               span3.current.style.transition=1+'s';
               span3.current.style.transform='rotate(45deg)';
               span4.current.style.transition=1+'s';
               span4.current.style.transform='rotate(-45deg)';
               span5.current.style.display='none';
   }

    let b=()=>{
                span3.current.style.transform='rotate(0deg)';
                span4.current.style.transform='rotate(0deg)';
    }

    return (
        <div className={style.wrapper}>
            <div><NavLink to="/pizza"><img className={style.logo1} src="https://dominos.by/static/images/img-9ef03a.png" alt="img"/></NavLink></div>
            <div className={style.burger} onClick={()=>{setBlock(!block);
                {block ? a():b();}}}>
                <span ref={span1} className={style.span11}> </span>
                <span ref={span2} className={style.span12}> </span>
                <span ref={span3} className={style.span121}> </span>
                <span ref={span4} className={style.span122}> </span>
                <span ref={span5} className={style.span13}> </span>
            </div>
            <div className={block ? style.menu:style.menu2}>
                    <ul className={style.ulMenu}>
                        <li><NavLink to="/login" activeClassName={style.active}>Пицца</NavLink></li>
                        <li><NavLink to="/kurica" activeClassName={style.active}>Курица</NavLink></li>
                        <li><NavLink to="/kartofan" activeClassName={style.active}>Картофель</NavLink></li>
                        <li><NavLink to="/hlebcy" activeClassName={style.active}>Хлебцы</NavLink></li>
                        <li><NavLink to="/salate" activeClassName={style.active}>Салаты</NavLink></li>
                        <li><NavLink to="/desert" activeClassName={style.active}>Десерты</NavLink></li>
                        <li><NavLink to="/napitki" activeClassName={style.active}>Напитки</NavLink></li>
                        <li><NavLink to="/souce" className={style.ddd} activeClassName={style.active}>Соусы</NavLink></li>
                        <li><NavLink to="/akcii" activeClassName={style.active}>Акции</NavLink></li>
                        <li><NavLink to="/novosty" activeClassName={style.active}>Новости</NavLink></li>
                        <li><NavLink to="/login" activeClassName={style.active}>Работа в Domino's</NavLink></li>
                        <li><NavLink to="/pizza" activeClassName={style.active}>Программа лояльности</NavLink></li>
                    </ul>
            </div>
            <div className={style.wrapper2}>
                <div className={style.wr30}>
                    <svg className={style.icon} viewBox="0 0 24 24"
                         xmlns="http://www.w3.org/2000/svg" fill="#00537a">
                        <g>
                            <path
                                d="m14.01512,0.75l-4.27794,0c-0.58821,0 -1.06947,0.48126 -1.06947,1.06947c0,0.58821 0.48126,1.06947 1.06947,1.06947l4.27794,0c0.58821,0 1.06947,-0.48126 1.06947,-1.06947c0,-0.58821 -0.48126,-1.06947 -1.06947,-1.06947zm-2.139,13.90306c0.58821,0 1.06947,-0.48126 1.06947,-1.06947l0,-4.27786c0,-0.58821 -0.48126,-1.06947 -1.06947,-1.06947c-0.58821,0 -1.06947,0.48126 -1.06947,1.06947l0,4.27786c0,0.58821 0.48126,1.06947 1.06947,1.06947zm7.51842,-7.06917l0.8021,-0.8021c0.4064,-0.4064 0.41709,-1.08016 0,-1.49725l-0.01069,-0.01069c-0.41709,-0.41709 -1.08016,-0.4064 -1.49725,0l-0.8021,0.8021c-1.65767,-1.32614 -3.74313,-2.11754 -6.01047,-2.11754c-5.13344,0 -9.49686,4.23509 -9.62519,9.36852c-0.13903,5.43289 4.2137,9.88187 9.62519,9.88187c5.32601,0 9.62527,-4.30995 9.62527,-9.62519c0,-2.26727 -0.7914,-4.35273 -2.10685,-5.9997zm-7.51842,13.48597c-4.13883,0 -7.48626,-3.34743 -7.48626,-7.48626c0,-4.13883 3.34743,-7.48626 7.48626,-7.48626c4.1389,0 7.48633,3.34743 7.48633,7.48626c0,4.13883 -3.34743,7.48626 -7.48633,7.48626z"></path>
                        </g>
                    </svg>
                    <span className={style.span1}>30 минут доставка</span>
                </div>
                <div className={style.wr30}>
                    <svg className={style.customicon} viewBox="0 0 24 24"
                         xmlns="http://www.w3.org/2000/svg" fill="#00537a">
                        <g>
                            <path
                                d="m13.02024,4.48316c3.46937,0.4364 6.18599,3.15302 6.62239,6.62243c0.06546,0.55642 0.5346,0.96009 1.0801,0.96009c0.04364,0 0.08728,0 0.13092,-0.01091c0.60006,-0.07637 1.02555,-0.62188 0.94918,-1.22193c-0.55642,-4.46223 -4.05856,-7.96438 -8.52075,-8.52079c-0.60006,-0.06546 -1.14556,0.36003 -1.21102,0.96009c-0.07637,0.60006 0.34912,1.14556 0.94918,1.21102zm0.41458,2.30203c-0.57824,-0.15274 -1.17829,0.19638 -1.33103,0.78553c-0.15274,0.58915 0.19638,1.17829 0.78553,1.33103c1.14552,0.29457 2.04015,1.1892 2.34563,2.34567c0.13092,0.49095 0.56733,0.81826 1.05828,0.81826c0.08728,0 0.18547,-0.01091 0.27275,-0.03273c0.57824,-0.15274 0.92736,-0.7528 0.78553,-1.33103c-0.51277,-1.93109 -2.00746,-3.42577 -3.91668,-3.91673zm6.51329,8.83719l-2.77117,-0.31639c-0.66552,-0.07637 -1.32012,0.15274 -1.78926,0.62188l-2.00742,2.00746c-3.08756,-1.57106 -5.6187,-4.09129 -7.18976,-7.18976l2.01837,-2.01837c0.46913,-0.46913 0.69825,-1.12374 0.62188,-1.78926l-0.31639,-2.74935c-0.13092,-1.10192 -1.05828,-1.93109 -2.17111,-1.93109l-1.88745,0c-1.23284,0 -2.25839,1.02555 -2.18202,2.25839c0.57824,9.31723 8.02984,16.75792 17.33611,17.33616c1.23284,0.07637 2.25839,-0.94918 2.25839,-2.18202l0,-1.88745c0.01091,-1.10192 -0.81826,-2.02928 -1.92018,-2.1602z"></path>
                        </g>
                    </svg>
                    <span className={style.span1}>7717</span>
                </div>
                <div className={style.butvib}>
                    <div className={style.rus}>
                        <img className={style.rusimg} src="https://dominos.by/static/images/img-1eda6c.svg" alt="img1"/> <span
                        className={style.rusname}>Русский</span>
                        <svg className={style.customselect} focusable="false" viewBox="0 0 24 24"
                             aria-hidden="true">
                            <path d="M7 10l5 5 5-5z"></path>
                        </svg>
                    </div>
                    <div className={style.rus}>
                            <select name="" id="sel1" className={style.selectcss}>
                            <img src="https://dominos.by/static/images/img-1eda6c.svg" alt="img2"/>
                            <option id="op0" selected disabled>Минск</option>
                            <option id="op3" value="a">Брест</option>
                            <option id="op4" value="b">Витебск</option>
                            <option id="op5" value="c">Гомель</option>
                            <option id="op6" value="в">Гродно</option>
                            <option id="op7" value="у">Могилев</option>
                        </select>
                    </div>
                    <NavLink to="/login" activeClassName={style.active}><button className={style.button}>Войти</button></NavLink>
                    {props.isAuth?<span className={style.name}>Slava</span>: <span> </span>}
                </div>
            </div>
        </div>
    );
}
export default Header;