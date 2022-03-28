import React from 'react';
import Novosty from "./Novosty.jsx";
import {connect} from "react-redux";
import {followThunk, setImaThunk, unfollowThunk} from "../reducers/HlebcyReducer";


class NovostyContainer extends React.Component {

    img = [
        {   img: "https://backend.dominos.by/media/dominos/news/2021/11/16/16-11-21-%D0%BD%D0%BE%D0%B2%D0%BE%D1%81%D1%82%D1%8C1_2.png",
            name: "Хлебец с сырной начинкой",
            ingr: "Сыр моцарелла, Чеддер",
            cost: "8.49 руб.",
            masa: "375 гр",
            id:0,
            followed:true
        },
        {
            img: "https://backend.dominos.by/media/dominos/news/2021/11/15/1024_1024.png",
            name: "Хлебец со шпинатом и фетой",
            ingr: "Сыр моцарелла, Чеддер, Шпинат, Фета",
            cost: "8.99 руб.",
            masa: "395 гр",
            id:1,
            followed:true
        },
        {
            img: "https://backend.dominos.by/media/dominos/news/2021/11/11/kids-new.jpg",
            name: "Хлебец с беконом и халапеньо",
            ingr: "Бекон, Сыр моцарелла, Халапеньо, Чеддер",
            cost: "8.99 руб.",
            masa: "415 гр",
            id:2,
            followed:true
        },
        {
            img: "https://backend.dominos.by/media/dominos/news/2021/11/11/_1.png",
            name: "Пармезан байтс",
            ingr: "Пармезан",
            cost: "3.49 руб.",
            masa: "175 гр",
            id:3,
            followed:true
        },
        {   img: "https://backend.dominos.by/media/dominos/news/2021/11/10/%D0%BD%D0%BE%D0%B2%D0%BE%D1%81%D1%82%D1%8C_6_%D0%BB%D0%B5%D1%82_%D0%94%D0%BE%D0%BC%D0%B8%D0%BD%D0%BE%D1%81_1024%D1%851024-min.png",
            name: "Хлебец с сырной начинкой",
            ingr: "Сыр моцарелла, Чеддер",
            cost: "8.49 руб.",
            masa: "375 гр",
            id:4,
            followed:true
        },
        {
            img: "https://backend.dominos.by/media/dominos/news/2021/11/09/09-11-21-%D0%BD%D0%BE%D0%B2%D0%BE%D1%81%D1%82%D1%8C1.png",
            name: "Хлебец со шпинатом и фетой",
            ingr: "Сыр моцарелла, Чеддер, Шпинат, Фета",
            cost: "8.99 руб.",
            masa: "395 гр",
            id:5,
            followed:true
        },
        {
            img: "https://backend.dominos.by/media/dominos/news/2021/11/08/%D0%BD%D0%BE%D0%B2%D0%BE%D1%81%D1%82%D1%8C_%D0%BA%D1%80%D0%B0%D1%81%D0%BD%D0%B0%D1%8F_%D1%86%D0%B5%D0%BD%D0%B0_1024%D1%851024_08.11.21.png",
            name: "Хлебец с беконом и халапеньо",
            ingr: "Бекон, Сыр моцарелла, Халапеньо, Чеддер",
            cost: "8.99 руб.",
            masa: "415 гр",
            id:6,
            followed:true
        },
        {
            img: "https://backend.dominos.by/media/dominos/news/2021/11/05/%D0%B8%D0%B7%D0%BE%D0%B1%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5_2021-11-05_135900.png",
            name: "Пармезан байтс",
            ingr: "Пармезан",
            cost: "3.49 руб.",
            masa: "175 гр",
            id:7,
            followed:true
        },
        {   img: "https://backend.dominos.by/media/dominos/news/2021/11/02/02-11-21_Crazy%D0%92%D1%82%D0%BE%D1%80%D0%BD%D0%B8%D0%BA-%D0%BD%D0%BE%D0%B2%D0%BE%D1%81%D1%82%D1%8C1.png",
            name: "Хлебец с сырной начинкой",
            ingr: "Сыр моцарелла, Чеддер",
            cost: "8.49 руб.",
            masa: "375 гр",
            id:8,
            followed:true
        },
        {
            img: "https://backend.dominos.by/media/dominos/news/2021/11/02/7_%D0%BA%D0%B0%D1%80%D0%B0%D1%82_1024%D1%851024.jpg",
            name: "Хлебец со шпинатом и фетой",
            ingr: "Сыр моцарелла, Чеддер, Шпинат, Фета",
            cost: "8.99 руб.",
            masa: "395 гр",
            id:9,
            followed:true
        },
        {
            img: "https://backend.dominos.by/media/dominos/news/2021/11/02/caprice_%D1%80%D0%B5%D1%81%D0%B0%D0%B9%D0%B7%D1%8B_1024%D1%851024.jpg",
            name: "Хлебец с беконом и халапеньо",
            ingr: "Бекон, Сыр моцарелла, Халапеньо, Чеддер",
            cost: "8.99 руб.",
            masa: "415 гр",
            id:10,
            followed:true
        },
        {
            img: "https://backend.dominos.by/media/dominos/news/2021/11/02/%D0%91%D0%B5%D0%B7%D1%8B%D0%BC%D1%8F%D0%BD%D0%BD%D1%8B%D0%B9.png",
            name: "Пармезан байтс",
            ingr: "Пармезан",
            cost: "3.49 руб.",
            masa: "175 гр",
            id:11,
            followed:true
        },
        {   img: "https://backend.dominos.by/media/dominos/news/2021/11/02/%D0%9E%D0%BF%D0%BB%D0%B0%D1%82%D0%B8_%D0%BD%D0%BE%D0%B2%D0%BE%D1%81%D1%82%D1%8C1.png",
            name: "Хлебец с сырной начинкой",
            ingr: "Сыр моцарелла, Чеддер",
            cost: "8.49 руб.",
            masa: "375 гр",
            id:12,
            followed:true
        },
        {
            img: "https://backend.dominos.by/media/dominos/news/2021/11/01/%D0%BD%D0%BE%D0%B2%D0%BE%D1%81%D1%82%D1%8C_%D0%BA%D1%80%D0%B0%D1%81%D0%BD%D0%B0%D1%8F_%D1%86%D0%B5%D0%BD%D0%B0_1024%D1%851024_01.11-min.png",
            name: "Хлебец со шпинатом и фетой",
            ingr: "Сыр моцарелла, Чеддер, Шпинат, Фета",
            cost: "8.99 руб.",
            masa: "395 гр",
            id:13,
            followed:true
        },
        {
            img: "https://backend.dominos.by/media/dominos/news/2021/10/29/%D0%BD%D0%BE%D0%B2%D0%BE%D1%81%D1%82%D1%8C_%D0%BA%D1%80%D0%BE%D1%81%D1%81_%D0%94%D0%BE%D0%BC%D0%B8%D0%BD%D0%BE%D1%81_%D0%98%D0%BD%D0%B2%D0%B8%D1%82%D1%80%D0%BE_1024%D1%851024.png",
            name: "Хлебец с беконом и халапеньо",
            ingr: "Бекон, Сыр моцарелла, Халапеньо, Чеддер",
            cost: "8.99 руб.",
            masa: "415 гр",
            id:14,
            followed:true
        },
        {
            img: "https://backend.dominos.by/media/dominos/news/2021/10/29/%D0%B4%D0%BE%D0%BC%D0%B8%D0%BD%D0%BE%D1%81_%D0%90%D0%97%D0%A1_1024x1024.jpg",
            name: "Пармезан байтс",
            ingr: "Пармезан",
            cost: "3.49 руб.",
            masa: "175 гр",
            id:15,
            followed:true
        }
    ];


    componentDidMount() {
        this.props.setImaThunk(this.img)
    }

    render() {
        return (
            <div>
                <Novosty {...this.props} novosty={this.props.novosty} follow={this.props.followThunk} unfollow={this.props.unfollowThunk}/>
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        novosty: state.novosty
    }
};
export default connect(mapStateToProps, {setImaThunk,followThunk,unfollowThunk})(NovostyContainer);