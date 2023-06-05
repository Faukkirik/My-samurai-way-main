import React from 'react';
import './App.css';
import {Navbar} from "./components/Navbar/Navbar";
import {Route, withRouter} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./Redux/app-reducer";
import {StoreType} from "./Redux/redux-store";
import {Preloader} from "./components/common/preloader/Preloader";


export class App extends React.Component<any, any> {

    componentDidMount() {

        this.props.initializeApp()
    }

    render() {

        if (!this.props.initialized){
            return <Preloader/>
        }

        return (

            <div className="app-wrapper">
                <HeaderContainer/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Route render={() => <ProfileContainer

                    />} path={"/profile/:userId?"}/>
                    <Route render={() => <DialogsContainer

                    />} path={"/dialogs"}/>
                    <Route render={() => <UsersContainer
                    />} path={"/users"}/>
                    <Route render={() => <News/>} path={"/news"}/>
                    <Route render={() => <Music/>} path={"/music"}/>
                    <Route render={() => <Settings/>} path={"/settings"}/>
                    <Route render={() => <Login/>} path={"/login"}/>
                </div>
            </div>

        );
    }
}
const mapStateToProps =(store: StoreType)=>({
    initialized: store.appReducer.initialized
})

export default compose<any>(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App)
