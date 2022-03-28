const SET_LOGIN="SET_LOGIN";
const SET_ISAUTH="SET_ISAUTH";
const SET_PASSWORD="SET_PASSWORD";

const initialState={
        login:"",
        password:"",
        remember:"",
        isAuth:false
};
const LoginReducer=(state=initialState,action)=>{
switch (action.type){
    case SET_LOGIN:
        return{
            ...state,
            login:action.login,
        }
    case SET_PASSWORD:
        return{
            ...state,
            password:action.password,
        }
    case SET_ISAUTH:
        return{
            ...state,
            isAuth:action.isAuth,
        }
    default: return state
    }
}
    export const setLogin=(login)=>({type:SET_LOGIN,login});
    export const setPassword=(password)=>({type:SET_PASSWORD,password});
    export const setIsAuth=(isAuth)=>({type:SET_ISAUTH,isAuth});

    export const setLoginThunk=(login)=>(dispatch)=>{
        dispatch(setLogin(login));
    };
export const setPasswordThunk=(password)=>(dispatch)=>{
    dispatch(setPassword(password));
};
export const setIsAuthThunk=(isAuth)=>(dispatch)=>{
    dispatch(setIsAuth(isAuth));
};



export default LoginReducer;