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
import {addPost, StatePropsType, StatePropsTypeApp, updateNewPostText} from "./Redux/state";

export type StatePropsTypeAppSt = {
    state: StatePropsType
    addPost: () => void
    updateNewPostText:(newText: string)=> void
}
export const App:React.FC<StatePropsTypeAppSt> =(props)=> {

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Route render={()=><Profile
                        addPost={props.addPost}
                        post={props.state.profilePage.post}
                        newText={props.state.profilePage.newPostText}
                        updateNewPostText={props.updateNewPostText}
                    />} path={"/profile"}/>
                    <Route render={()=><Dialogs
                        dialogs={props.state.messagesPage.dialogs}
                        message={props.state.messagesPage.message}
                    />} path={"/dialogs"}/>
                    <Route render={()=><News/>} path={"/news"}/>
                    <Route render={()=><Music/>} path={"/music"}/>
                    <Route render={()=><Settings/>} path={"/settings"}/>
                </div>
            </div>
        </BrowserRouter>
    );
}


