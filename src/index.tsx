import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {store} from "./Redux/redux-store";
import {App} from "./App";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";


export let rerenderEntireTree = (state: any) => {
    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
                <App
                    state={state}
                    dispatch={store.dispatch.bind(store)}
                    store={store}
                />
            </Provider>
        </BrowserRouter>
        ,
        document.getElementById('root')
    );
}
console.log(store)
rerenderEntireTree(store.getState())
store.subscribe(() => {
    let state = store.getState()
    rerenderEntireTree(state)
});