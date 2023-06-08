import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {musicReducer} from "./music-reducer";
import {settingsReducer} from "./settings-reducer";
import {newsReducer} from "./news-reducer";
import {usersReducer} from "./users-reducer";
import {authReducer} from "./auth-reducer";
import thunkMiddleware from "redux-thunk"
import {reducer as formReducer} from "redux-form"
import {appReducer} from "./app-reducer";

const reducers = combineReducers({
    profileReducer: profileReducer,
    dialogsReducer: dialogsReducer,
    newsReducer: newsReducer,
    musicReducer: musicReducer,
    settingsReducer: settingsReducer,
    usersReducer: usersReducer,
    authReducer: authReducer,
    form: formReducer,
    appReducer: appReducer
});
export type StoreType = ReturnType<typeof reducers>
// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

