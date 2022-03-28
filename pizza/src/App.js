import './App.css';
import Slider from "./Glavnaja/Slider";
import Clients from "./Glavnaja/Clients";
import Footer from "./Glavnaja/Footer";
import {Route} from "react-router";
import PizzaContainer from "./Pizza/PizzaContainer";
import KuricaContainer from "./Kurica/KuricaContainer";
import KartofanContainer from "./Kartofan/KartofanContainer";
import HlebcyContainer from "./Hlebcy/HlebcyContainer";
import SalateContainer from "./Salate/SalateContainer";
import SouceContainer from "./Souce/SouceContainer";
import DesertContainer from "./Desert/DesertContainer";
import NapitkiContainer from "./Napitki/NapitkiContainer";
import ProfileContainer from "./Profile/ProfileContainer";
import AkciiContainer from "./Akcii/AkciiContainer";
import ProfileAkciiContainer from "./ProfileAkcii/ProfileAkciiContainer";
import NavbarContainer from "./Glavnaja/NavbarContainer";
import NovostyContainer from "./Novosty/NovostyContainer";
import ProfileNovostyContainer from "./ProfileNovosty/ProfileNovostyContainer";
import LoginContainer from "./Login/LoginContainer";
import {Redirect} from "react-router-dom";
import React from "react";
import HeaderContainer from "./Glavnaja/HeaderContainer";

function App() {
    return (
        <div className='wrapp'>
            <HeaderContainer/>
            <NavbarContainer/>
            <Slider/>
            <Redirect to="/pizza"/>
            <div className='wrapper'>
                <Route path='/pizza' render={() => <PizzaContainer/>}/>
                <Route path='/kurica' render={() => <KuricaContainer/>}/>
                <Route path='/kartofan' render={() => <KartofanContainer/>}/>
                <Route path='/hlebcy' render={() => <HlebcyContainer/>}/>
                <Route path='/salate' render={() => <SalateContainer/>}/>
                <Route path='/souce' render={() => <SouceContainer/>}/>
                <Route path='/desert' render={() => <DesertContainer/>}/>
                <Route path='/napitki' render={() => <NapitkiContainer/>}/>
                <Route path='/profile/:id?' render={()=><ProfileContainer/> }/>
                <Route path='/profileakcii/:id?' render={()=><ProfileAkciiContainer/> }/>
                <Route path='/akcii' render={()=><AkciiContainer/> }/>
                <Route path='/profilenovosty/:id?' render={()=><ProfileNovostyContainer/> }/>
                <Route path='/novosty' render={()=><NovostyContainer/> }/>
                <Route path='/login' render={()=><LoginContainer/> }/>
            </div>

            <Clients/>
            <Footer/>
        </div>
    );
}

export default App;
