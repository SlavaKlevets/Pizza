import React from "react";
import style from "./Login.module.css";
import {Field,reduxForm} from "redux-form";
import {Redirect} from "react-router-dom";
import {maxLength30, requiredField} from "../utils/validators";
import {Textarea} from "../utils/validators/FormControls";

let maxLength=maxLength30(30);

const LoginForm=(props)=>{

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Login"} name={"login"} component={Textarea} validate={[requiredField,maxLength]}/>
            </div>
            <div>
                <Field placeholder={"Password"} name={"password"} type={"password"} component={Textarea} validate={[requiredField,maxLength]}/>
            </div>
            <div>
                <Field type={"checkbox"} name={"rememberMe"}  component={"input"}/>remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    );
}
const LoginReduxForm=reduxForm({form:'login'})(LoginForm)


const Login=(props)=>{
    if(props.login.login==="slava.klevets.92@mail.ru" && props.login.password==="stepan19"){
        props.setIsAuth(true);
    }

    const onSubmit=(formData)=>{
        props.setLogin(formData.login);
        props.setPassword(formData.password);
    }
    return (
        <div className={style.wrapperForm}>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    );
}

export default Login;



