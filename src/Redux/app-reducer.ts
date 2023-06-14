import {Dispatch} from "redux";
import {getAuthUserData} from "./auth-reducer";


export type setInitializedActionType = {
    type: 'SET-INITIALIZED'
}
export type ActionType = setInitializedActionType

const authPage = {
    initialized: false,
    globalError: null
}
export type authPageType = {
    initialized: boolean
}

export const appReducer = (state: authPageType = authPage, action: ActionType): authPageType => {
    switch (action.type) {
        case 'SET-INITIALIZED':
            return {...state, initialized: true}
        default :
            return state
    }
}

export const initializedSuccess = (): setInitializedActionType => {
    return {type: 'SET-INITIALIZED'} as const
}
export const initializeApp = () => (dispatch: Dispatch) => {
    // @ts-ignore
    let promise = dispatch(getAuthUserData());
    Promise.all([promise])
        .then(() => {
            dispatch(initializedSuccess())
        })

}