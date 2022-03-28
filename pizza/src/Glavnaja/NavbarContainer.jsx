import React from "react";
import Navbar from "./Navbar";
import {connect} from "react-redux";
import { ochustytThunk} from "../reducers/ProfileReducer";
import {ochustyt_kol_voThunk} from "../reducers/PizzaReducer";


class NavbarContainer extends React.Component{
    componentDidMount() {
    }

    render(){
    return(
        <Navbar {...this.props} kol_vo={this.props.kol_vo} isAuth={this.props.isAuth} zakaz={this.props.zakaz}
                ochustyt_kol_voThunk={this.props.ochustyt_kol_voThunk} ochustytThunk={this.props.ochustytThunk} korzina2={this.props.korzina}/>
    )
}
}
let mapStateToProps = (state) => {
return {
            kol_vo:state.pizza.kol_vo,
            korzina:state.profile.korzina,
            zakaz:state.profile.img,
            isAuth: state.login.isAuth
        }
        };
export default connect(mapStateToProps,{ochustytThunk,ochustyt_kol_voThunk})(NavbarContainer);