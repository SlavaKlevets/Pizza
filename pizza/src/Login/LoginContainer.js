import React from 'react';
import Login from "./Login.jsx";
import {connect} from "react-redux";
import {setIsAuthThunk, setLoginThunk, setPasswordThunk} from "../reducers/LoginReducer";


class LoginContainer extends React.Component {
 mas= {isAuth: true};

    componentDidMount() {
        this.props.setIsAuthThunk(this.mas.isAuth);
    }

    render() {
        return (
            <div>
                <Login {...this.props} login={this.props.login} setIsAuth={this.props.setIsAuthThunk} setPassword={this.props.setPasswordThunk} setLogin={this.props.setLoginThunk}/>
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        login: state.login,
    }
};
export default connect(mapStateToProps, {setLoginThunk,setIsAuthThunk,setPasswordThunk})(LoginContainer);