import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from './App';
import {addPost, state, StatePropsType} from "./Redux/state";
import {BrowserRouter} from "react-router-dom";


export const rerenderEntireTree = (state:StatePropsType)=>{
    ReactDOM.render(
        <App state={state} addPost={addPost}/>,
    document.getElementById('root')
);

}