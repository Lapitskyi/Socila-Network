import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Footer from './components/Footer/Footer';
import Dialogy from "./components/Dialogy/Dialogy";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import { Route } from "react-router-dom"
import Settings from "./components/Settings/Settings";



const App = (props) => {

    return (

        <div className="app-wrapper">
            <Header />
            <Navbar />
            <div className="app-wrapper-content">
                <Route path='/profile'
                    render={() => <Profile

                        profilePage={props.state.profilePage}
                        dispatch={props.dispatch} />} />

                <Route path='/dialogy'
                    render={() => <Dialogy state={props.state.dialogPage}
                                           dispatch={props.dispatch}/>} />

                <Route path='/news' render={() => <News />} />
                <Route path='/music' render={() => <Music />} />
                <Route path='/settings' render={() => <Settings />} />
            </div>
            <Footer />
        </div>

    );
}

export default App;
