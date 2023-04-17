import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {BrowserRouter, Route} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {ActionType, ArrayMessagePage, ArrayProfilePage} from "./Redux/store";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";

export type StatePropsTypeAppSt = {
    store: any
    state: {profileReducer: ArrayProfilePage, dialogsReducer: ArrayMessagePage, newsReducer: {}, musicReducer: {}, settingsReducer: {}}
    dispatch: (action: ActionType) => void
}
export const App=(props: StatePropsTypeAppSt)=> {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Route render={()=><Profile
                        dispatch={props.dispatch}
                        profilePage={props.state.profileReducer}
                    />} path={"/profile"}/>
                    <Route render={()=><DialogsContainer
                        dispatch={props.dispatch}
                        messagePage={props.state.dialogsReducer}
                    />} path={"/dialogs"}/>
                    <Route render={()=><News/>} path={"/news"}/>
                    <Route render={()=><Music/>} path={"/music"}/>
                    <Route render={()=><Settings/>} path={"/settings"}/>
                </div>
            </div>
        </BrowserRouter>
    );
}


