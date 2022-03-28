import React from 'react';
import Napitki from "./Napitki.jsx";
import {connect} from "react-redux";
import {setImThunk, setImThunk2, setImThunk3, setImThunk4, setImThunk5,followThunk, pushKolVo, pushKorzina, unfollowThunk,followThunk2,unfollowThunk2,followThunk3,unfollowThunk3,followThunk4,unfollowThunk4,followThunk5,unfollowThunk5} from "../reducers/NapitkiReducer";



class NapitkiContainer extends React.Component {

    img = [
        {  img: "https://images.dominos.by/media/dominos/osg/api/2020/04/21/%D0%B2%D0%B8%D1%82%D0%B0_%D1%87%D0%B0%D0%B9_%D0%BA%D0%BB%D1%8E%D0%BA%D0%B2%D0%B0_%D1%81_%D0%B8%D0%BC%D0%B1%D0%B8%D1%80%D0%B5%D0%BC_%D1%81%D0%BC%D0%BE%D0%BB%D0%BB.png",
            name: "Джем-роллы с грушей",
            ingr: "",
            cost: 4.99,
            masa: "245 гр",
            id:47,
            followed:true
        },
        {
            img: "https://images.dominos.by/media/dominos/osg/api/2020/04/21/%D0%B2%D0%B8%D1%82%D0%B0_%D1%87%D0%B0%D0%B9_%D0%BE%D0%B1%D0%BB%D0%B5%D0%BF%D0%B8%D1%85%D0%BE%D0%B2%D1%8B%D0%B9_%D1%81_%D1%82%D0%B8%D0%BC%D1%8C%D1%8F%D0%BD%D0%BE%D0%BC_%D1%81%D0%BC%D0%BE%D0%BB%D0%BB.png",
            name: "Крем-роллы",
            ingr: "",
            cost: 5.99,
            masa: "300 гр",
            id:48,
            followed:true
        },
        {
            img: "https://images.dominos.by/media/dominos/osg/api/2020/04/21/%D0%B2%D0%B8%D1%82%D0%B0_%D1%87%D0%B0%D0%B9_%D0%B8%D0%B7_%D1%81%D0%BC%D0%BE%D1%80%D0%BE%D0%B4%D0%B8%D0%BD%D1%8B_%D1%81_%D0%B1%D0%B0%D0%B7%D0%B8%D0%BB%D0%B8%D0%BA%D0%BE%D0%BC_%D1%81%D0%BC%D0%BE%D0%BB%D0%BB.png",
            name: "Шоко-роллы",
            ingr: "",
            cost: 6.99,
            masa: "270 гр",
            id:49,
            followed:true
        }];

    img2 = [
        {
            img: "https://images.dominos.by/media/dominos/osg/api/2021/07/02/%D1%84%D1%8C%D1%8E%D0%B7%D1%82%D0%B8_%D0%BB%D0%B5%D1%81%D0%BD%D1%8B%D0%B5_%D1%8F%D0%B3%D0%BE%D0%B4%D1%8B_02.07.21.png",
            name: "Лава кейк",
            ingr: "",
            cost: 5.49,
            masa: "95 гр",
            id:50,
            followed:true
        },
        {
            img: "https://images.dominos.by/media/dominos/osg/api/2021/07/02/%D1%84%D1%8C%D1%8E%D0%B7%D1%82%D0%B8_%D0%BA%D0%BB%D1%83%D0%B1%D0%BD%D0%B8%D0%BA%D0%B0_%D0%BC%D0%B0%D0%BB%D0%B8%D0%BD%D0%B0_02.07.21.png",
            name: "Байтсы с корицей + джем (20г)",
            ingr: "",
            cost: 3.99,
            masa: "185 гр",
            id:51,
            followed:true
        }];

    img3 = [
        {
            img: "https://images.dominos.by/media/dominos/osg/api/2020/11/19/%D0%B1%D0%BE%D0%BD%D0%B0%D0%BA%D0%B2%D0%B0_%D1%81%D1%80_%D0%B3%D0%B0%D0%B705_640%D1%85441_%D0%BF%D1%80%D0%BE%D0%B7%D1%80.png",
            name: "Джем Абрикос",
            ingr: "",
            cost: 0.8,
            masa: "20 гр",
            id:52,
            followed:true
        },
        {
            img: "https://images.dominos.by/media/dominos/osg/api/2020/11/19/%D0%B1%D0%BE%D0%BD%D0%B0%D0%BA%D0%B2%D0%B0_%D0%B1%D0%B5%D0%B7_%D0%B3%D0%B0%D0%B7%D0%B005_640%D1%85441_%D0%BF%D1%80%D0%BE%D0%B7%D1%80.png",
            name: "Джем Клубника",
            ingr: "",
            cost: 0.8,
            masa: "20 гр",
            id:53,
            followed:true
        }];
    img4 = [
        {
            img: "https://images.dominos.by/media/dominos/osg/api/2021/02/17/%D0%BA%D0%BE%D0%BB%D0%B005%D0%BB_640%D1%85441_%D0%BF%D1%80%D0%BE%D0%B7%D1%80_27.05.20.png",
            name: "Джем Клюква",
            ingr: "",
            cost: 0.8,
            masa: "20 гр",
            id:54,
            followed:true
        },
        {
            img: "https://images.dominos.by/media/dominos/osg/api/2021/02/17/%D0%BA%D0%BE%D0%BB%D0%B01%D0%BB_640%D1%85441_%D0%BF%D1%80%D0%BE%D0%B7%D1%80_27.05.20.png",
            name: "Байтсы с корицей",
            ingr: "",
            cost: 2.99,
            masa: "185 гр",
            id:55,
            followed:true
        },
        {
            img: "https://images.dominos.by/media/dominos/osg/api/2021/07/02/%D0%BA%D0%BE%D0%BB%D0%B0_05%D0%BB_%D0%B1%D0%B5%D0%B7_%D1%81%D0%B0%D1%85%D0%B0%D1%80%D0%B0_640%D1%85441_02.07.21.png",
            name: "Байтсы с корицей",
            ingr: "",
            cost: 2.99,
            masa: "185 гр",
            id:56,
            followed:true
        },
        {
            img: "https://images.dominos.by/media/dominos/osg/api/2021/07/02/%D0%BA%D0%BE%D0%BB%D0%B0_%D0%B1%D0%B5%D0%B7_%D1%81%D0%B0%D1%85%D0%B0%D1%80%D0%B0_640%D1%85441_02.07.21.png",
            name: "Байтсы с корицей",
            ingr: "",
            cost: 2.99,
            masa: "185 гр",
            id:57,
            followed:true
        },
        {
            img: "https://images.dominos.by/media/dominos/osg/api/2018/03/31/%D0%BA%D0%B2%D0%B0%D1%81_%D1%85%D0%B0%D1%82%D0%BD%D0%B8_09%D0%BB.png",
            name: "Байтсы с корицей",
            ingr: "",
            cost: 2.99,
            masa: "185 гр",
            id:58,
            followed:true
        },
        {
            img: "https://images.dominos.by/media/dominos/osg/api/2021/07/22/%D0%BA%D0%BE%D0%BB%D0%B0_%D0%B2%D0%B0%D0%BD%D0%B8%D0%BB%D0%B01%D0%BB_640%D1%85441_%D0%BF%D1%80%D0%BE%D0%B7%D1%80_22.07.21.png",
            name: "Байтсы с корицей",
            ingr: "",
            cost: 2.99,
            masa: "185 гр",
            id:59,
            followed:true
        },
        {
            img: "https://images.dominos.by/media/dominos/osg/api/2018/03/31/%D0%BA%D0%B2%D0%B0%D1%81_%D1%85%D0%B0%D1%82%D0%BD%D0%B8_%D1%82%D0%B5%D0%BC%D0%BD%D1%8B%D0%B9_09%D0%BB.png",
            name: "Байтсы с корицей",
            ingr: "",
            cost: 2.99,
            masa: "185 гр",
            id:60,
            followed:true
        },
        {
            img: "https://images.dominos.by/media/dominos/osg/api/2021/07/22/%D0%BA%D0%BE%D0%BB%D0%B0_%D0%B2%D0%B0%D0%BD%D0%B8%D0%BB%D0%B0_05%D0%BB_640%D1%85441_%D0%BF%D1%80%D0%BE%D0%B7%D1%80_22.07.21.png",
            name: "Байтсы с корицей",
            ingr: "",
            cost: 2.99,
            masa: "185 гр",
            id:61,
            followed:true
        },
        {
            img: "https://images.dominos.by/media/dominos/osg/api/2018/03/31/%D1%81%D0%BE%D0%BA_%D0%A0%D1%87%D0%B8_%D0%90%D0%BF%D0%B5%D0%BB%D1%8C%D1%81%D0%B8%D0%BD%D0%BE%D0%B2%D1%8B%D0%B9_1%D0%BB.png",
            name: "Байтсы с корицей",
            ingr: "",
            cost: 2.99,
            masa: "185 гр",
            id:62,
            followed:true
        },
        {
            img: "https://images.dominos.by/media/dominos/osg/api/2018/03/31/%D0%A1%D0%BE%D0%BA_%D1%80%D0%B8%D1%87_%D1%8F%D0%B1%D0%BB%D0%BE%D1%87%D0%BD%D1%8B%D0%B9_1%D0%BB.png",
            name: "Байтсы с корицей",
            ingr: "",
            cost: 2.99,
            masa: "185 гр",
            id:63,
            followed:true
        },
        {
            img: "https://images.dominos.by/media/dominos/osg/api/2018/03/31/%D0%A1%D0%BE%D0%BA_%D0%9C%D1%83%D0%BB%D1%8C%D1%82%D0%B8%D1%84%D1%80%D1%83%D1%82_1%D0%BB.png",
            name: "Байтсы с корицей",
            ingr: "",
            cost: 2.99,
            masa: "185 гр",
            id:64,
            followed:true
        },
        {
            img: "https://images.dominos.by/media/dominos/osg/api/2018/12/12/%D1%81%D0%BE%D0%BA_%D0%B2%D0%B8%D1%88%D0%BD%D0%B5%D0%B2%D1%8B%D0%B9_1%D0%BB_11.12.18.png",
            name: "Байтсы с корицей",
            ingr: "",
            cost: 2.99,
            masa: "185 гр",
            id:65,
            followed:true
        },


    ];

    img5 = [
        {
            img: "https://images.dominos.by/media/dominos/osg/api/2019/03/01/%D1%81%D0%BE%D0%BA_%D0%B0%D0%BF%D0%B5%D0%BB%D1%8C%D1%87%D0%B8%D0%BD-%D0%BC%D0%B0%D0%BD%D0%B3%D0%BE_03_640%D1%85441_%D0%BF%D1%80%D0%BE%D0%B7%D1%80.png",
            name: "Джем Клюква",
            ingr: "",
            cost: 0.8,
            masa: "20 гр",
            id:66,
            followed:true
        },
        {
            img: "https://images.dominos.by/media/dominos/osg/api/2019/03/01/%D1%81%D0%BE%D0%BA_%D0%B2%D0%B8%D1%88%D0%BD%D1%8F_03_640%D1%85441_%D0%BF%D1%80%D0%BE%D0%B7%D1%80.png",
            name: "Байтсы с корицей",
            ingr: "",
            cost: 2.99,
            masa: "185 гр",
            id:65,
            followed:true
        },
        {
            img: "https://images.dominos.by/media/dominos/osg/api/2019/03/01/%D1%81%D0%BE%D0%BA_%D0%B0%D0%BF%D0%B5%D0%BB%D1%8C%D1%81%D0%B8%D0%BD_03_640%D1%85441_%D0%BF%D1%80%D0%BE%D0%B7%D1%80.png",
            name: "Байтсы с корицей",
            ingr: "",
            cost: 2.99,
            masa: "185 гр",
            id:68,
            followed:true
        }
    ];

    componentDidMount() {
        this.props.setImThunk(this.img)
        this.props.setImThunk2(this.img2)
        this.props.setImThunk3(this.img3)
        this.props.setImThunk4(this.img4)
        this.props.setImThunk5(this.img5)

    }

    render() {
        return (
            <div>
                <Napitki {...this.props} napitki={this.props.napitki} pushKorzina={this.props.pushKorzina}
                         kol_vo={this.props.kol_vo} pushKolVo={this.props.pushKolVo}
                         follow={this.props.followThunk} unfollow={this.props.unfollowThunk}
                         follow2={this.props.followThunk2} unfollow2={this.props.unfollowThunk2}
                         follow3={this.props.followThunk3} unfollow3={this.props.unfollowThunk3}
                         follow4={this.props.followThunk4} unfollow4={this.props.unfollowThunk4}
                         follow5={this.props.followThunk5} unfollow5={this.props.unfollowThunk5}/>
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        napitki: state.napitki,
        korzina:state.napitki.korzina,
        kol_vo:state.napitki.kol_vo
    }
};
export default connect(mapStateToProps, {setImThunk,setImThunk2,setImThunk3,setImThunk4,setImThunk5,followThunk,unfollowThunk,pushKolVo,pushKorzina,followThunk2,unfollowThunk2,followThunk3,unfollowThunk3,followThunk4,unfollowThunk4,followThunk5,unfollowThunk5})(NapitkiContainer);