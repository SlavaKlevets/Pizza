import React from 'react';
import Hlebcy from "./Hlebcy.jsx";
import {connect} from "react-redux";
import {
    followThunk,
    setImaThunk,
    unfollowThunk,
    pushKolVo,
    pushKorzina,
    followValye,
    setZakaz, setMinZakaz
} from "../reducers/HlebcyReducer";


class HlebcyContainer extends React.Component {

    img = [
        {   img: "https://images.dominos.by/media/dominos/osg/api/2018/03/31/%D1%85%D0%BB%D0%B5%D0%B1%D0%B5%D1%86_%D1%81_%D1%81%D1%8B%D1%80%D0%BD%D0%BE%D0%B9_%D0%BD%D0%B0%D1%87%D0%B8%D0%BD%D0%BA%D0%BE%D0%B9.png",
            name: "Хлебец с сырной начинкой",
            ingr: "Сыр моцарелла, Чеддер",
            cost: 8.49,
            masa: "375 гр",
            id:32,
            followed:true,
            valye:false,
            zakaz:1
        },
        {
            img: "https://images.dominos.by/media/dominos/osg/api/2018/03/31/%D1%85%D0%BB%D0%B5%D0%B1%D0%B5%D1%86_%D1%81%D0%BE_%D1%88%D0%BF%D0%B8%D0%BD%D0%B0%D1%82%D0%BE%D0%BC_%D0%B8_%D1%84%D0%B5%D1%82%D0%BE%D0%B9.png",
            name: "Хлебец со шпинатом и фетой",
            ingr: "Сыр моцарелла, Чеддер, Шпинат, Фета",
            cost: 8.99,
            masa: "395 гр",
            id:33,
            followed:true,
            valye:false,
            zakaz:1
        },
        {
            img: "https://images.dominos.by/media/dominos/osg/api/2018/04/01/%D1%85%D0%BB%D0%B5%D0%B1%D0%B5%D1%86_%D1%81_%D0%B1%D0%B5%D0%BA%D0%BE%D0%BD%D0%BE%D0%BC_%D0%B8_%D1%85%D0%B0%D0%BB%D0%B0%D0%BF%D0%B5%D0%BD%D1%8C%D0%BE.png",
            name: "Хлебец с беконом и халапеньо",
            ingr: "Бекон, Сыр моцарелла, Халапеньо, Чеддер",
            cost: 8.99,
            masa: "415 гр",
            id:34,
            followed:true,
            valye:false,
            zakaz:1
        },
        {
            img: "https://images.dominos.by/media/dominos/osg/api/2018/03/31/%D0%B1%D0%B0%D0%B9%D1%82%D1%81%D1%8B_%D1%81_%D0%BF%D0%B0%D1%80%D0%BC%D0%B5%D0%B7%D0%B0%D0%BD%D0%BE%D0%BC.png",
            name: "Пармезан байтс",
            ingr: "Пармезан",
            cost: 3.49,
            masa: "175 гр",
            id:35,
            followed:true,
            valye:false,
            zakaz:1
        }
    ];


    componentDidMount() {
        this.props.setImaThunk(this.img)
    }

    render() {
        return (
            <div>
                <Hlebcy {...this.props} hlebcy={this.props.hlebcy}
                        follow={this.props.followThunk} korzina={this.props.korzina} kol_vo={this.props.kol_vo}
                        unfollow={this.props.unfollowThunk} pushKolVo={this.props.pushKolVo} pushKorzina={this.props.pushKorzina}
                        followValye={this.props.followValye} setZakaz={this.props.setZakaz} setMinZakaz={this.props.setMinZakaz}/>
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        hlebcy: state.hlebcy,
        korzina:state.hlebcy.korzina,
        kol_vo:state.hlebcy.kol_vo
    }
};
export default connect(mapStateToProps, {setImaThunk,followThunk,unfollowThunk,pushKolVo,pushKorzina,followValye,setZakaz,setMinZakaz})(HlebcyContainer);