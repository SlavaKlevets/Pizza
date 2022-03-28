import {applyMiddleware,combineReducers, createStore} from "redux";
import PizzaReducer from "../reducers/PizzaReducer";
import KuricaReducer from "../reducers/KuricaReducer";
import thunkMiddleware from "redux-thunk";
import KartofanReducer from "../reducers/KartofanReducer";
import HlebcyReducer from "../reducers/HlebcyReducer";
import SalateReducer from "../reducers/SalateReducer";
import SouceReducer from "../reducers/SouceReducer";
import DesertReducer from "../reducers/DesertReducer";
import NapitkiReducer from "../reducers/NapitkiReducer";
import ProfileReducer from "../reducers/ProfileReducer";
import AkciiReducer from "../reducers/AkciiReducer";
import ProfileAkciiReducer from "../reducers/ProfileAkciiReducer";
import ProfileNovostyReducer from "../reducers/ProfileNovostyReducer";
import NovostyReducer from "../reducers/NovostyReducer";
import {reducer as formReducer} from 'redux-form'
import LoginReducer from "../reducers/LoginReducer";

let reducers=combineReducers({
    pizza:PizzaReducer,
    kurica:KuricaReducer,
    kartofan:KartofanReducer,
    hlebcy:HlebcyReducer,
    salate:SalateReducer,
    souce:SouceReducer,
    desert:DesertReducer,
    napitki:NapitkiReducer,
    profile:ProfileReducer,
    akcii:AkciiReducer,
    novosty:NovostyReducer,
    profileakcii:ProfileAkciiReducer,
    profilenovosty:ProfileNovostyReducer,
    login:LoginReducer,
    form:formReducer
})

let store=createStore(reducers,applyMiddleware(thunkMiddleware));

window.store=store;

export default store;