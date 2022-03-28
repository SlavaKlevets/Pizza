import React from 'react';
import Akcii from "./Akcii.jsx";
import {connect} from "react-redux";
import {setImThunk} from "../reducers/AkciiReducer";


class AkciiContainer extends React.Component {

    img = [
        {  img: "https://backend.dominos.by/media/dominos/discount_campaign/%D0%B2_%D0%BA%D0%BE%D0%BD%D1%81%D1%82%D1%80%D1%83%D0%BA%D1%82%D0%BE%D1%80_%D0%B0%D0%BA%D1%86%D0%B8%D0%B9_cXRT6Mu.png",
            name: "СЕМЕЙНОЕ ПРЕДЛОЖЕНИЕ ЗА 26,49",
            ingr: "Пицца из категории ЛЮБИМЫЕ (36 см) + байтсы + напиток на выбор (1 л) - всего за 26,49 с ДОСТАВКОЙ! ",
            cost: "",
            masa: "",
            id:0,
            followed:true
        },
        {
            img: "https://backend.dominos.by/media/dominos/discount_campaign/%D0%BA%D0%BE%D0%BD%D1%81%D1%82%D1%80%D1%83%D0%BA%D1%82%D0%BE%D1%80_%D0%B0%D0%BA%D1%86%D0%B8%D0%B9_9Taqae3.png",
            name: "ЛЮКС комбо за 31,99!",
            ingr: "Комплекс с доставкой за 31,99: пицца категории ЛЮБИМЫЕ 36 см с сырным бортом, HOT DOG бортом + сладкие роллы + НАПИТОК 1 л на выбор!",
            cost: "",
            masa: "",
            id:1,
            followed:true
        },
        {
            img: "https://backend.dominos.by/media/dominos/discount_campaign/312%D1%85312_lLGJjot.jpg",
            name: "ПИЦЦА ИЗИ ФРИЗИ 22 СМ В ПОДАРОК!",
            ingr: "Заказывайте на самовывоз любую пиццу 36 см и получайте пиццу Изи Фризи 22 см за 1 копейку",
            cost: "",
            masa: "",
            id:2,
            followed:true
        },
        {
            img: "https://backend.dominos.by/media/dominos/discount_campaign/Eazy_%D0%BA%D0%BE%D0%BD%D1%81%D1%82%D1%80%D1%83%D0%BA%D1%82%D0%BE%D1%80.jpg",
            name: "2 ИЗИ ФРИЗИ ПО ЦЕНЕ 1!",
            ingr: "Заказывайте пиццу Изи Фризи 30/36 см и получайте вторую Изи Фризи в подарок!",
            cost: "",
            masa: "",
            id:3,
            followed:true
        }
    ];


    componentDidMount() {
        this.props.setImThunk(this.img)

    }

    render() {
        return (
            <div>
                <Akcii {...this.props} akcii={this.props.akcii}/>
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        akcii: state.akcii
    }
};
export default connect(mapStateToProps, {setImThunk})(AkciiContainer);