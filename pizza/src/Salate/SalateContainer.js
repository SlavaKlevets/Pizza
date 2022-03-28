import React from 'react';
import Salate from "./Salate.jsx";
import {connect} from "react-redux";
import {setImThunk, pushKolVo, pushKorzina,followThunk, unfollowThunk,followValye, setMinZakaz, setZakaz} from "../reducers/SalateReducer";



class SalateContainer extends React.Component {

    img = [
        {  img: "https://images.dominos.by/media/dominos/osg/api/2021/02/09/Grecheskiy_small.png",
            name: "Салат Греческий",
            ingr: "Оливковое масло",
            cost: 7.49,
            masa: "180 гр",
            id:36,
            followed:true,
            valye:false,
            zakaz:1
        },
        {
            img: "https://images.dominos.by/media/dominos/osg/api/2021/02/09/Caesar_small.png",
            name: "Салат Цезарь",
            ingr: "Курица, Пармезан, Соус цезарь 25гр",
            cost: 7.99,
            masa: "200 гр",
            id:37,
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
                <Salate {...this.props} salate={this.props.salate} follow={this.props.followThunk} unfollow={this.props.unfollowThunk} followValye={this.props.followValye}
                        setZakaz={this.props.setZakaz} setMinZakaz={this.props.setMinZakaz}/>
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        salate: state.salate,
        korzina: state.salate.korzina,
        kol_vo:state.salate.kol_vo

    }
};
export default connect(mapStateToProps, {setImThunk,pushKolVo,pushKorzina,followThunk,unfollowThunk,followValye,setMinZakaz,setZakaz})(SalateContainer);