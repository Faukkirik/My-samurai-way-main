import React, {Suspense} from 'react';
import './App.css';
import {Navbar} from "./components/Navbar/Navbar";
import {BrowserRouter, Route, withRouter} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./Redux/app-reducer";
import {store, StoreType} from "./Redux/redux-store";
import {Preloader} from "./components/common/preloader/Preloader";
import {withSuspense} from "./hoc/withSuspense";
//import DialogsContainer from "./components/Dialogs/DialogsContainer";
//import ProfileContainer from "./components/Profile/ProfileContainer";
const DialogsContainer = React.lazy(() => import("./components/Dialogs/DialogsContainer"))
const ProfileContainer = React.lazy(() => import("./components/Profile/ProfileContainer"))


export class App extends React.Component<any, any> {
    componentDidMount() {

        this.props.initializeApp()
    }

    render() {

        if (!this.props.initialized) {
            return <Preloader/>
        }

        return (

            <div className="app-wrapper">
                <HeaderContainer/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Route render={withSuspense(ProfileContainer)}
                           path={"/profile/:userId?"}/>
                    <Route render={() => {
                        return (
                            <Suspense fallback={<div>Loading...</div>}>
                                <DialogsContainer/>
                            </Suspense>
                        )
                    }}
                           path={"/dialogs"}/>
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

const mapStateToProps = (store: StoreType) => ({
    initialized: store.appReducer.initialized
})

const AppContainer = compose<any>(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App)
export const SamuraiJsApp = () => {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <AppContainer/>
            </Provider>
        </BrowserRouter>
    )
}