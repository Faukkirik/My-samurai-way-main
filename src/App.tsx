import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {StatePropsTypeApp} from "./Redux/state";

export type StatePropsTypeAppSt = {
    store: StatePropsTypeApp
}
export const App=(props: StatePropsTypeAppSt)=> {

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Route render={()=><Profile
                        dispatch={props.store.dispatch.bind(props.store)}
                        post={props.store._state.profilePage.post}
                        newText={props.store._state.profilePage.newPostText}
                    />} path={"/profile"}/>
                    <Route render={()=><Dialogs
                        dispatch={props.store.dispatch.bind(props.store)}
                        messagesPage={props.store._state.messagesPage}
                    />} path={"/dialogs"}/>
                    <Route render={()=><News/>} path={"/news"}/>
                    <Route render={()=><Music/>} path={"/music"}/>
                    <Route render={()=><Settings/>} path={"/settings"}/>
                </div>
            </div>
        </BrowserRouter>
    );
}


