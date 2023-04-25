import {applyMiddleware, combineReducers, createStore} from "redux";
import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {musicReducer} from "./music-reducer";
import {settingsReducer} from "./settings-reducer";
import {newsReducer} from "./news-reducer";
import {usersReducer} from "./users-reducer";
import {authReducer} from "./auth-reducer";
import thunkMiddleware from "redux-thunk"

const reducers = combineReducers({
    profileReducer: profileReducer,
    dialogsReducer: dialogsReducer,
    newsReducer: newsReducer,
    musicReducer: musicReducer,
    settingsReducer: settingsReducer,
    usersReducer: usersReducer,
    authReducer: authReducer,
});
export type StoreType = ReturnType<typeof reducers>
export const store = createStore(reducers, applyMiddleware(thunkMiddleware))