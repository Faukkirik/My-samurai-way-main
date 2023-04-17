import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {store} from "./Redux/redux-store";
import {App} from "./App";



export let rerenderEntireTree = (state: any) => {
    ReactDOM.render(
            <App
                state={state}
                dispatch={store.dispatch.bind(store)}
                store={store}
            />,
        document.getElementById('root')
    );
}
console.log(store)
rerenderEntireTree(store.getState())
store.subscribe(() => {
    let state = store.getState()
    rerenderEntireTree(state)
});