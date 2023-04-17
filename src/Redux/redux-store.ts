import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {musicReducer} from "./music-reducer";
import {settingsReducer} from "./settings-reducer";
import {newsReducer} from "./news-reducer";

const reducers = combineReducers({
    profileReducer: profileReducer,
    dialogsReducer: dialogsReducer,
    newsReducer: newsReducer,
    musicReducer: musicReducer,
    settingsReducer: settingsReducer
});

export type StoreType = ReturnType<typeof reducers>
export const store = createStore(reducers)