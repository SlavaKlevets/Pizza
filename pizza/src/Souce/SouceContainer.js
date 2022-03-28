import React from 'react';
import Souce from "./Souce.jsx";
import {connect} from "react-redux";
import {setImThunk,pushKolVo,pushKorzina,followThunk, unfollowThunk,followValye, setMinZakaz, setZakaz} from "../reducers/SouceReducer";




class SouceContainer extends React.Component {

    img = [
        {  img: "https://images.dominos.by/media/dominos/osg/api/2019/01/08/dippot_BBQ.png",
            name: "Соус Барбекю",
            ingr: "",
            cost: 0.8,
            masa: "25 гр",
            id:69,
            followed:true,
            valye:false,
            zakaz:1
        },
        {
            img: "https://images.dominos.by/media/dominos/osg/api/2018/04/01/%D1%81%D0%BE%D1%83%D1%81_%D0%A2%D0%BE%D0%BC%D0%B0%D1%82%D0%BD%D1%8B%D0%B9_%D0%BF%D0%BD%D0%B3.png",
            name: "Соус Томатный",
            ingr: "",
            cost: 0.8,
            masa: "25 гр",
            id:70,
            followed:true,
            valye:false,
            zakaz:1
        },
        {
            img: "https://images.dominos.by/media/dominos/osg/api/2018/04/01/%D1%81%D0%BE%D1%83%D1%81_%D1%87%D0%B5%D1%81%D0%BD%D0%BE%D1%87%D0%BD%D1%8B%D0%B9_%D0%BF%D0%BD%D0%B3.png",
            name: "Соус Чесночный",
            ingr: "",
            cost: 0.8,
            masa: "25 гр",
            id:71,
            followed:true,
            valye:false,
            zakaz:1
        },
        {
            img: "https://images.dominos.by/media/dominos/osg/api/2019/01/08/dippot_cezar.png",
            name: "Соус Цезарь",
            ingr: "",
            cost: 0.8,
            masa: "25 гр",
            id:72,
            followed:true,
            valye:false,
            zakaz:1
        },
        {
            img: "https://images.dominos.by/media/dominos/osg/api/2018/04/01/%D1%81%D0%BE%D1%83%D1%81_%D0%9A%D0%B8%D1%81%D0%BB%D0%BE-%D1%81%D0%BB%D0%B0%D0%B4%D0%BA%D0%B8%D0%B9_%D0%BF%D0%BD%D0%B3.png",
            name: "Соус Кисло-сладкий",
            ingr: "",
            cost: 0.8,
            masa: "25 гр",
            id:73,
            followed:true,
            valye:false,
            zakaz:1
        },
        {
            img: "https://images.dominos.by/media/dominos/osg/api/2018/04/01/%D1%81%D0%BE%D1%83%D1%81_%D0%A1%D1%8B%D1%80%D0%BD%D1%8B%D0%B9_%D0%BF%D0%BD%D0%B3.png",
            name: "Соус Сырный",
            ingr: "",
            cost: 0.8,
            masa: "25 гр",
            id:74,
            followed:true,
            valye:false,
            zakaz:1
        },
        {
            img: "https://images.dominos.by/media/dominos/osg/api/2018/04/01/%D1%81%D0%BE%D1%83%D1%81_%D0%B3%D0%BE%D1%80%D1%87%D0%B8%D1%87%D0%BD%D1%8B%D0%B9_%D0%BF%D0%BD%D0%B3.png",
            name: "Соус Горчичный",
            ingr: "",
            cost: 0.8,
            masa: "25 гр",
            id:75,
            followed:true,
            valye:false,
            zakaz:1
        }
    ];


    componentDidMount() {
        this.props.setImThunk(this.img)
    }

    render() {
        return (
            <div>
                <Souce {...this.props} souce={this.props.souce} korzina={this.props.korzina} pushKorzina={this.props.pushKorzina}
                       kol_vo={this.props.kol_vo} pushKolVo={this.props.pushKolVo} follow={this.props.followThunk} unfollow={this.props.unfollowThunk}
                       followValye={this.props.followValye} setZakaz={this.props.setZakaz} setMinZakaz={this.props.setMinZakaz}/>
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        souce: state.souce,
        korzina:state.souce.korzina,
        kol_vo:state.souce.kol_vo
    }
};
export default connect(mapStateToProps, {setImThunk,followThunk,unfollowThunk,pushKolVo,pushKorzina,followValye,setMinZakaz,setZakaz})(SouceContainer);