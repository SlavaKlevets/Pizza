import React from 'react';
import Kurica from "./Kurica.jsx";
import {connect} from "react-redux";
import {setImThunk, followThunk, unfollowThunk,pushKolVo, pushKorzina,followValye, setMinZakaz, setZakaz} from "../reducers/KuricaReducer";



class KuricaContainer extends React.Component {

    img = [
        {  img: "https://images.dominos.by/media/dominos/osg/api/2019/04/29/krylyshki_kurinyye_ostryye_small.png",
            name: "Крылышки острые",
            ingr: "Сальса соус, Томатный соус 25г",
            cost: 8.99,
            masa: "245 гр",
            id:25,
            followed:true,
            valye:false,
            zakaz:1
        },
        {
            img: "https://images.dominos.by/media/dominos/osg/api/2019/04/29/krylyshki_kurinyye_s_gorchichnym_sousom_small.png",
            name: "Куриные Крылышки",
            ingr: "Горчичный соус 25г",
            cost: 8.99,
            masa: "245 гр",
            id:26,
            followed:true,
            valye:false,
            zakaz:1
        },
        {
            img: "https://images.dominos.by/media/dominos/osg/api/2019/04/29/krylyshki_kurinyye_barbekyu_small.png",
            name: "Крылышки барбекю",
            ingr: "Соус барбекю",
            cost: 8.99,
            masa: "245 гр",
            id:27,
            followed:true,
            valye:false,
            zakaz:1
        },
        {
            img: "https://images.dominos.by/media/dominos/osg/api/2019/04/29/kurinoye_file_small.png",
            name: "Куриное филе",
            ingr: "Соус сырный 25гр",
            cost: 9.99,
            asa: "245 гр",
            id:28,
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
                <Kurica {...this.props} kurica={this.props.kurica}
                        follow={this.props.followThunk} korzina={this.props.korzina} unfollow={this.props.unfollowThunk}
                        pushKorzina={this.props.pushKorzina} kol_vo={this.props.kol_vo} pushKolVo={this.props.pushKolVo} followValye={this.props.followValye}
                        setZakaz={this.props.setZakaz} setMinZakaz={this.props.setMinZakaz}/>
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        kurica: state.kurica,
        korzina:state.kurica.korzina,
        kol_vo:state.kurica.kol_vo
    }
};
export default connect(mapStateToProps, {followThunk,unfollowThunk,setImThunk,pushKolVo,pushKorzina,followValye,setMinZakaz,setZakaz})(KuricaContainer);