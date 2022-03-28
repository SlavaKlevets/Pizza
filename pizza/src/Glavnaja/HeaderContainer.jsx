import React from "react";
import Header from "./Header";
import {connect} from "react-redux";


class HeaderContainer extends React.Component{
    componentDidMount() {
    }

    render(){
    return(
        <Header {...this.props}  isAuth={this.props.isAuth} />
    )
}
}
let mapStateToProps = (state) => {
return {
            isAuth: state.login.isAuth
        }
};
export default connect(mapStateToProps,{})(HeaderContainer);