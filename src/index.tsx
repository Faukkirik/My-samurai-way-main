import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {addPost, state, StatePropsType, updateNewPostText} from "./Redux/state";
import {App} from "./App";
import {subscribe} from "./Redux/state";


export let rerenderEntireTree = (state:StatePropsType)=>{
    ReactDOM.render(
        <App
            state={state}
            addPost={addPost}
            updateNewPostText={updateNewPostText}
        />,
        document.getElementById('root')
    );

}
rerenderEntireTree(state)
subscribe(rerenderEntireTree);