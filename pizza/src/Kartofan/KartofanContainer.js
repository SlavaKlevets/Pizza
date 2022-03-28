import React from 'react';
import Kartofan from "./Kartofan.jsx";
import {connect} from "react-redux";
import {setImaThunk, followThunk, pushKolVo, pushKorzina, unfollowThunk,followValye, setMinZakaz, setZakaz} from "../reducers/KartofanReducer";



class KartofanContainer extends React.Component {

    img = [
        {   img: "https://images.dominos.by/media/dominos/osg/api/2019/04/29/kartofel_po_derevenski_small.png",
            name: "Картофельные Дольки",
            ingr: "Сальса соус, Томатный соус 25г",
            cost: 4.99,
            masa: "245 гр",
            id:29,
            followed:true,
            valye:false,
            zakaz:1
        },
        {
            img: "https://images.dominos.by/media/dominos/osg/api/2020/09/18/kartofel_fri_small.png",
            name: "Картофель фри",
            ingr: "Горчичный соус 25г",
            cost: 8.99,
            masa: "245 гр",
            id:30,
            followed:true,
            valye:false,
            zakaz:1
        },
        {
            img: "https://images.dominos.by/media/dominos/osg/api/2020/09/18/draniki_small.png",
            name: "Драники",
            ingr: "Соус барбекю",
            cost: 8.99,
            masa: "245 гр",
            id:31,
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
                <Kartofan {...this.props} kartofan ={this.props.kartofan} korzina={this.props.korzina} kol_vo={this.props.kol_vo}
                          pushKolVo={this.props.pushKolVo} follow={this.props.followThunk} unfollow={this.props.unfollowThunk} followValye={this.props.followValye}
                          setZakaz={this.props.setZakaz} setMinZakaz={this.props.setMinZakaz}/>
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        kartofan: state.kartofan,
        korzina:state.kartofan.korzina,
        kol_vo:state.kartofan.kol_vo
    }
};
export default connect(mapStateToProps, {setImaThunk,followThunk,unfollowThunk,pushKolVo,pushKorzina,followValye,setMinZakaz,setZakaz})(KartofanContainer);