import React from 'react';
import Desert from "./Desert.jsx";
import {connect} from "react-redux";
import {
    setImThunk,
    pushKolVo,
    pushKorzina,
    followThunk,
    unfollowThunk,
    followValye,
    setMinZakaz, setZakaz
} from "../reducers/DesertReducer";

class DesertContainer extends React.Component {

    img = [
        {  img: "https://images.dominos.by/media/dominos/osg/api/2019/06/26/dzhem_rolly_small.png",
            name: "Джем-роллы с грушей",
            ingr: "",
            cost: 4.99,
            masa: "245 гр",
            id:38,
            followed:true,
            valye:false,
            zakaz:1
        },
        {
            img: "https://images.dominos.by/media/dominos/osg/api/2019/04/29/cream_rolly_small.png",
            name: "Крем-роллы",
            ingr: "",
            cost: 5.99,
            masa: "300 гр",
            id:39,
            followed:true,
            valye:false,
            zakaz:1
        },
        {
            img: "https://images.dominos.by/media/dominos/osg/api/2019/04/29/shoko_rolly_small.png",
            name: "Шоко-роллы",
            ingr: "",
            cost: 6.99,
            masa: "270 гр",
            id:40,
            followed:true,
            valye:false,
            zakaz:1
        },
        {
            img: "https://images.dominos.by/media/dominos/osg/api/2018/03/31/%D0%BB%D0%B0%D0%B2%D0%B0_%D0%BA%D0%B5%D0%B9%D0%BA.png",
            name: "Лава кейк",
            ingr: "",
            cost: 5.49,
            masa: "95 гр",
            id:41,
            followed:true,
            valye:false,
            zakaz:1
        },
        {
            img: "https://images.dominos.by/media/dominos/osg/api/2020/12/21/baytsy_s_koritsey_small.png",
            name: "Байтсы с корицей + джем (20г)",
            ingr: "",
            cost: 3.99,
            masa: "185 гр",
            id:42,
            followed:true,
            valye:false,
            zakaz:1
        },
        {
            img: "https://images.dominos.by/media/dominos/osg/api/2020/12/21/dzhem_abrikosovyy_small.png",
            name: "Джем Абрикос",
            ingr: "",
            cost: 0.8,
            masa: "20 гр",
            id:43,
            followed:true,
            valye:false,
            zakaz:1
        },
        {
            img: "https://images.dominos.by/media/dominos/osg/api/2020/12/21/dzhem_klubnichnyy__small.png",
            name: "Джем Клубника",
            ingr: "",
            cost: 0.8,
            masa: "20 гр",
            id:44,
            followed:true,
            valye:false,
            zakaz:1
        },
        {
            img: "https://images.dominos.by/media/dominos/osg/api/2020/12/21/dzhem_klyukvennyy_small.png",
            name: "Джем Клюква",
            ingr: "",
            cost: 0.8,
            masa: "20 гр",
            id:45,
            followed:true,
            valye:false,
            zakaz:1
        }
        ,
        {
            img: "https://images.dominos.by/media/dominos/osg/api/2019/04/29/baytsy_s_koritsey_small.png",
            name: "Байтсы с корицей",
            ingr: "",
            cost: 2.99,
            masa: "185 гр",
            id:46,
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
                <Desert {...this.props} desert={this.props.desert} follow={this.props.followThunk}
                        unfollow={this.props.unfollowThunk} pushKolVo={this.props.pushKolVo} pushKorzina={this.props.pushKorzina} followValye={this.props.followValye}
                        setZakaz={this.props.setZakaz} setMinZakaz={this.props.setMinZakaz}/>
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        desert: state.desert,
        korzina:state.desert.korzina,
        kol_vo:state.desert.kol_vo
    }
};
export default connect(mapStateToProps, {setImThunk,followThunk,unfollowThunk,pushKolVo,pushKorzina,followValye,setMinZakaz,setZakaz})(DesertContainer);